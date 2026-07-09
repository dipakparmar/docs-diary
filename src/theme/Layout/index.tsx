import React from 'react';
import type { ReactNode } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type { WrapperProps } from '@docusaurus/types';
import Dock from '@site/src/components/Dock';
import SidebarMotion from '@site/src/components/SidebarMotion';
import SmoothScroll from '@site/src/components/SmoothScroll';

type Props = WrapperProps<typeof LayoutType> & { children?: ReactNode };

// Wrap the classic Layout to render the floating dock inside its providers
// (the dock's theme toggle needs the ColorMode context, which lives in
// LayoutProvider). Passed as a child so it sits within that context.
export default function LayoutWrapper(props: Props): React.JSX.Element {
  return (
    <Layout {...props}>
      {props.children}
      <Dock />
      <SidebarMotion />
      <SmoothScroll />
    </Layout>
  );
}
