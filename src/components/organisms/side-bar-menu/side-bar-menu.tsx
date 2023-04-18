import { usePrevious } from 'hooks/use-previous';
import { isEqual } from 'lodash';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { SideBarMenuLogic } from './side-bar-menu-logic';

export interface SideBarMenuItems {
    /**
     * Highlights selected node
     */
    isSelected?: boolean;
    /**
     * Key of the node
     */
    itemKey: string;
    /**
     * Nested items array of SideBarMenuItems
     */
    items?: SideBarMenuItems[];
    /**
     * The rendered text of a Node
     */
    label: string;
    /**
     * Link to navigate to
     */
    link?: string;
}

export interface SideBarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
    /**
     * Items is an array of SideBarMenuItems
     */
    items: SideBarMenuItems[];
    /**
     * Onclick handler that is run when the node is clicked. Accepts the itemKey of a node and optional a link
     */
    onClickItem?: (itemKey: string, link?: string) => void;
}

export function SideBarMenu({ items, onClickItem }: SideBarMenuProps) {
    const [menuItems, setMenuItems] = useState<SideBarMenuItems[]>(items);

    // Custom hook that returns the previous value of the items array.
    const prevMenuItems = usePrevious(items);

    // Update the menu items whenever the items array changes
    useEffect(() => {
        // Check if the previous items array is different from the current items array and update ..
        if (!isEqual(prevMenuItems, items)) {
            setMenuItems(items);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    function handleClickItem(itemKey: string, link?: string): void {
        if (link && onClickItem) {
            // Update the menu items with the clicked item as selected.
            const newMenuItems = updateMenuItems(menuItems, itemKey);
            setMenuItems(newMenuItems);
            // Call onClickItem with the clicked item's key and link.
            onClickItem(itemKey, link);
        }
        // If onClickItem exists, call it with the clicked item's key.
        return onClickItem && onClickItem(itemKey);
    }

    // updates the menu items array to select the clicked item.
    function updateMenuItems(nodes: SideBarMenuItems[], itemKey: string) {
        const newNodes: SideBarMenuItems[] = [];

        for (const node of nodes) {
            // Create a new node with the same properties as the current node but with isSelected set to true if it matches the clicked item key.
            const newNode: SideBarMenuItems = {
                ...node,
                isSelected: node.itemKey === itemKey,
            };
            // If the current node has subitems, update them recursively.
            if (node.items) {
                newNode.items = updateMenuItems(node.items, itemKey);
            }

            newNodes.push(newNode);
        }
        return newNodes;
    }

    return (
        <StyledSideBarMenu role="navigation" aria-label="sidebar">
            {menuItems.map((item, index) => (
                <SideBarMenuLogic
                    {...item}
                    key={index}
                    onClickItem={(itemKey, link) => handleClickItem(itemKey, link)}
                />
            ))}
        </StyledSideBarMenu>
    );
}

const StyledSideBarMenu = styled.ul`
    position: relative;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;
