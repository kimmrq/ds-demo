/* eslint-disable no-nested-ternary */
/* eslint-disable no-case-declarations */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as tokens from 'tokens/tokens';

import { useUniqueId } from '../../../hooks/use-unique-id';
import { MenuItemProps } from './menu-item';

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
    /**
     * The MenuItem children of the Menu (must be at least one). Also accepts other components which share the same interface as `MenuItem`.
     */
    children: React.ReactElement<MenuItemProps> | React.ReactElement<MenuItemProps>[];
    /**
     * The unique id of the Menu used for ARIA and HTML `id` attributes.
     * @default A uniquely generated id
     */
    id?: string;
    /**
     * The zero-based index of the menu item which should initially receive focus.
     * @default -1
     */
    initialSelectedItem?: number;
    /**
     * If true, set the Menu to the open state.
     * @default true
     */
    isOpen?: boolean;
    /**
     * The HTML `id` of the element that labels the Menu. Often used with menu buttons.
     */
    labeledBy?: string;
    /**
     * The function called when the Menu should close. This is called after a menu item is selected or if the escape shortcut key is used.
     */
    onClose?: () => void;
}

export function Menu({
    isOpen = true,
    initialSelectedItem = -1,
    onClose,
    labeledBy,
    id,
    children,
    ...props
}: MenuProps) {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(initialSelectedItem);
    const menuRef = useRef<HTMLUListElement>(null);
    const inputId = useUniqueId(id);

    useEffect(() => {
        if (isOpen && menuRef.current) {
            menuRef.current.focus();
        }
    }, [isOpen, menuRef]);

    const handleClick = (event: React.SyntheticEvent, menuItemProps: MenuItemProps): void => {
        if (menuItemProps.isDisabled) {
            return;
        }
        if (menuItemProps.onClick) {
            menuItemProps.onClick(event);
        }
        if (onClose) {
            onClose();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent): void => {
        if (event.ctrlKey || event.altKey || event.metaKey) {
            return;
        }
        const childrenArray = React.Children.toArray(children);
        let nextSelectedIndex = 0;
        let isShortcut = false;
        const itemCount = childrenArray.length;
        const firstItem = 0;
        const lastItem = itemCount - 1;

        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'Down': // IE/Edge specific value
            case 'Up': // IE/Edge specific value
                const direction = event.key === 'ArrowUp' ? -1 : 1;
                isShortcut = true;
                const nextIndex = selectedItemIndex + direction;
                nextSelectedIndex =
                    nextIndex < 0 ? lastItem : nextIndex >= itemCount ? firstItem : nextIndex;
                break;

            case 'Home':
            case 'End':
                const skipTo = event.key === 'Home' ? firstItem : lastItem;
                isShortcut = true;
                nextSelectedIndex = skipTo;
                break;

            case 'Tab':
                if (onClose) {
                    onClose();
                }
                break;

            case 'Escape':
            case 'Esc': // IE/Edge specific value
                isShortcut = true;
                if (onClose) {
                    onClose();
                }
                break;

            case 'Spacebar':
            case ' ':
            case 'Enter':
                nextSelectedIndex = selectedItemIndex;
                const child = children[selectedItemIndex] as React.ReactElement<MenuItemProps>;
                handleClick(event, child.props);
                isShortcut = true;
                break;

            default:
        }
        if (isShortcut) {
            event.stopPropagation();
            event.preventDefault();
            setSelectedItemIndex(nextSelectedIndex);
        }
    };

    return (
        <StyledMenu
            role="menu"
            tabIndex={0}
            id={inputId}
            isOpen={isOpen}
            aria-activedescendant={`${inputId}-${selectedItemIndex}`}
            aria-labelledby={labeledBy}
            onKeyDown={handleKeyDown}
            onKeyUp={(e) => {
                e.preventDefault();
            }}
            ref={menuRef}
            {...props}
        >
            {React.Children.map(children, (menuItem: React.ReactElement<MenuItemProps>, index) => {
                if (!React.isValidElement(menuItem)) {
                    return;
                }
                const itemId = `${inputId}-${index}`;
                return (
                    <React.Fragment key={itemId}>
                        {React.cloneElement(menuItem, {
                            onClick: (event: React.SyntheticEvent) =>
                                handleClick(event, menuItem.props),
                            id: itemId,
                            isFocused: selectedItemIndex === index,
                            onMouseOver: () => setSelectedItemIndex(index),
                        })}
                    </React.Fragment>
                );
            })}
        </StyledMenu>
    );
}

const StyledMenu = styled.ul<MenuProps>`
    display: inline-block;
    padding: 8px 0;
    margin: 8px 0px;
    box-shadow: ${tokens.kdsBoxShadowLevel3};
    border-radius: 3px;
    background-color: white;

    &:focus {
        outline: none;
    }
`;
