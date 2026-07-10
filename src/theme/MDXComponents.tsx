import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Callout from '@site/src/components/Callout';

// Make <Callout> usable directly in any .md/.mdx file (in addition to the
// :::note/:::tip admonitions, which are mapped to it via the Admonition swizzle).
export default {
  ...MDXComponents,
  Callout,
};
