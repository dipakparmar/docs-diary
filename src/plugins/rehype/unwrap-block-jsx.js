// ponytail: hand-rolled tree walk instead of pulling in unist-util-visit —
// hast nodes are plain objects with a `children` array, a manual recursive
// walk is a dozen lines and adds no dependency.
//
// Why this exists: writing `text\n<CodeBlock>` (no blank line), or an
// indented `:::info` inside a list item, makes MDX fold the block element
// into the same paragraph as the surrounding text. Docusaurus still renders
// it (e.g. a <pre> or <div> ends up inside a <p>), but that's invalid HTML —
// the browser's parser silently splits the <p> when it hydrates the static
// build, so the client tree no longer matches the server tree and React
// throws error #418. Forgetting the blank line is easy and doesn't fail the
// build, so fix it structurally instead of relying on remembering: promote
// any block-level element found inside a <p> up to a flow sibling, splitting
// the paragraph around it.
//
// This runs as a *rehype* plugin (beforeDefaultRehypePlugins), not remark:
// Docusaurus's own remark pipeline is what turns `:::info` into <Admonition>,
// and that happens among its *default* remark plugins — a
// beforeDefaultRemarkPlugins pass runs too early to see it. By the rehype
// stage (after remark-to-hast) both `:::info` admonitions and hand-written
// JSX (<CodeBlock>, <div>, <pre>, ...) are uniform: hast `element` nodes for
// plain tags, `mdxJsxFlowElement`/`mdxJsxTextElement` nodes (with a `.name`)
// for custom components.

const BLOCK_TAGS = new Set([
  'pre',
  'div',
  'table',
  'ol',
  'ul',
  'blockquote',
  'CodeBlock',
  'Callout',
  'Admonition',
]);

function isBlockNode(node) {
  if (node.type === 'element') return BLOCK_TAGS.has(node.tagName);
  if (node.type === 'mdxJsxTextElement' || node.type === 'mdxJsxFlowElement') {
    return BLOCK_TAGS.has(node.name);
  }
  return false;
}

function isParagraph(node) {
  return node.type === 'element' && node.tagName === 'p';
}

function isBlank(nodes) {
  return nodes.every((n) => n.type === 'text' && !n.value.trim());
}

function splitParagraph(node) {
  const out = [];
  let buffer = [];
  for (const child of node.children) {
    if (!isBlockNode(child)) {
      buffer.push(child);
      continue;
    }
    if (!isBlank(buffer)) out.push({ ...node, children: buffer });
    buffer = [];
    out.push(child.type === 'mdxJsxTextElement' ? { ...child, type: 'mdxJsxFlowElement' } : child);
  }
  if (!isBlank(buffer)) out.push({ ...node, children: buffer });
  return out;
}

function walk(children) {
  const out = [];
  for (const node of children) {
    if (Array.isArray(node.children)) node.children = walk(node.children);
    if (isParagraph(node) && node.children.some(isBlockNode)) {
      out.push(...splitParagraph(node));
    } else {
      out.push(node);
    }
  }
  return out;
}

module.exports = function rehypeUnwrapBlockJsx() {
  return (tree) => {
    tree.children = walk(tree.children);
  };
};
