import React from 'react';
import type { Props } from '@theme/Admonition';
import Callout from '@site/src/components/Callout';
import type { CalloutType } from '@site/src/components/Callout';

// Render Docusaurus admonitions (:::note, :::tip, :::info, :::warning, :::danger)
// as hand-drawn rough-notation callouts, so existing docs get the look for free.

const TYPE_MAP: Record<string, CalloutType> = {
  note: 'note',
  info: 'info',
  tip: 'tip',
  important: 'important',
  success: 'tip',
  secondary: 'note',
  warning: 'warning',
  caution: 'caution',
  danger: 'danger',
};

export default function Admonition(props: Props): React.JSX.Element {
  const type = TYPE_MAP[props.type ?? 'note'] ?? 'note';
  // Pass `title` straight through — it may be a ReactNode (e.g. `:::tip[**Bold**]`);
  // Callout falls back to its default label when it's undefined.
  return (
    <Callout type={type} title={props.title}>
      {props.children}
    </Callout>
  );
}
