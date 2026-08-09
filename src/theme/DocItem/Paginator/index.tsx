import React, {type ReactNode} from 'react';
import Paginator from '@theme-original/DocItem/Paginator';
import type PaginatorType from '@theme/DocItem/Paginator';
import type {WrapperProps} from '@docusaurus/types';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useColorMode} from '@docusaurus/theme-common';
import Giscus from '@giscus/react';
import giscusTheme from './giscusTheme';

type Props = WrapperProps<typeof PaginatorType>;

function Comments(): ReactNode {
  const {colorMode} = useColorMode();
  return (
    <div className="docs-comments">
      <Giscus
        id="comments"
        repo="dipakparmar/docs-diary"
        repoId="MDEwOlJlcG9zaXRvcnkyNzM4NTUzOTk="
        category="Comments"
        categoryId="DIC_kwDOEFKzp84CPOcp"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={giscusTheme(colorMode)}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

export default function PaginatorWrapper(props: Props): ReactNode {
  return (
    <>
      <Paginator {...props} />
      {/* ponytail: BrowserOnly keeps the iframe out of the SSR html — it can
          only ever render client-side anyway. No per-page opt-out; add a
          frontMatter check here if one page ever needs comments off. */}
      <BrowserOnly>{() => <Comments />}</BrowserOnly>
    </>
  );
}
