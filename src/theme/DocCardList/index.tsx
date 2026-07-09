import React from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarSiblings,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';
import DocCard from '@theme/DocCard';
import type { Props } from '@theme/DocCardList';
import styles from './styles.module.css';

// Single-column ruled list instead of the two-column card grid.

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const items = useCurrentSidebarSiblings();
  return <DocCardList items={items} className={className} />;
}

export default function DocCardList(props: Props): React.JSX.Element {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <div className={clsx(styles.list, className)}>
      {filteredItems.map((item, index) => (
        <DocCard key={index} item={item} />
      ))}
    </div>
  );
}
