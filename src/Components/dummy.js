import React from 'react';
import { NestedMenuItem, NestedMenuList } from 'mui-nested-menu';

const MegaHeaderMenu = () => {
  return (
    <NestedMenuList>
      <NestedMenuItem label="Parent Item 1">
        <NestedMenuItem label="Child Item 1.1" />
        <NestedMenuItem label="Child Item 1.2" />
      </NestedMenuItem>
      <NestedMenuItem label="Parent Item 2">
        <NestedMenuItem label="Child Item 2.1" />
        <NestedMenuItem label="Child Item 2.2" />
      </NestedMenuItem>
    </NestedMenuList>
  );
};

export default MegaHeaderMenu;
