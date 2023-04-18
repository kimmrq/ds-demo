import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import * as tokens from 'tokens/tokens';

import { IconButton } from '../../atoms/icon-button';
import { Text, TextProps } from '../../atoms/text/text';
import { SideBarMenuItem } from './side-bar-menu-item';

export interface SideBarMenuLogicProps {
    depth?: number;
    isSelected?: boolean;
    itemKey: string;
    items?: SideBarMenuLogicProps[];
    label: string;
    link?: string;
    onClickItem?: (itemKey: string, link?: string) => void;
}

const SideBarMenuVariants = {
    expanded: {
        opacity: 1,
        display: 'block',
        height: 'auto',
    },
    collapsed: {
        opacity: 0,
        height: 0,
        transitionEnd: {
            display: 'none',
        },
    },
};

export function SideBarMenuLogic({
    label,
    items = [],
    depth = 0,
    onClickItem,
    link,
    itemKey,
    isSelected,
    ...props
}: SideBarMenuLogicProps) {
    // Check if there are child items
    const hasChildren = items && items.length > 0;
    // Show caret only if there are child items and it's not top item
    const showCaret = hasChildren && depth !== 0;

    // Check if this item or children is selected
    const selected = isSelected || isChildSelected(items);
    const [isOpen, setIsOpen] = useState(!showCaret);

    // Default padding based on depth
    const depthStep = 24;
    const onClickHandler = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    // Check the variant of the menu item based on its depth
    const listItemVariant = (depth: number) => {
        if (depth === 0) {
            return 'header';
        }
        if (depth === 1) {
            return 'subItem';
        }

        return 'subItemSmall';
    };
    const MenuItem = (
        <SideBarMenuItem
            isSelected={selected}
            style={{ paddingLeft: depth * depthStep }}
            isLink={!!link}
            hasCaret={hasChildren && depth !== 0}
            hasBorder={depth !== 0}
            onClick={() => {
                if (showCaret && !link) {
                    setIsOpen(!isOpen);
                }
                if (showCaret && link && !isOpen) {
                    setIsOpen(!isOpen);
                }
                if (onClickItem) {
                    onClickItem(itemKey, link);
                }
            }}
            {...props}
        >
            <SideBarMenuItemText aria-label={label} type={listItemVariant(depth)}>
                {label}
            </SideBarMenuItemText>
            {showCaret && (
                <StyledIconButton
                    onClick={onClickHandler}
                    icon={isOpen ? 'caret-up' : 'caret-down'}
                    size="medium"
                    labelText={isOpen ? 'open' : 'close'}
                />
            )}
        </SideBarMenuItem>
    );

    // Create menu and child items
    const MenuItemChildren = hasChildren ? (
        <StyledSideBarNestedList
            initial={'collapsed'}
            animate={isOpen ? 'expanded' : 'collapsed'}
            transition={{
                duration: 0.15,
            }}
            variants={SideBarMenuVariants}
        >
            {items.map((item, index) => {
                return (
                    <SideBarMenuLogic
                        {...item}
                        depth={depth + 1}
                        key={`${index}-${depth}`}
                        onClickItem={onClickItem}
                    />
                );
            })}
        </StyledSideBarNestedList>
    ) : null;

    return (
        <>
            {MenuItem}
            {MenuItemChildren}
        </>
    );

    // Check if any child items are selected
    function isChildSelected(items: SideBarMenuLogicProps[]): boolean {
        for (const item of items) {
            if (item.isSelected) {
                return true;
            } else if (item.items) {
                const aChildIsSelected = isChildSelected(item.items);
                if (aChildIsSelected) {
                    return true;
                }
            }
        }
        return false;
    }
}

const StyledIconButton = styled(IconButton)`
    color: inherit;

    &:hover {
        color: inherit;
    }
`;

const StyledSideBarNestedList = styled(motion.ul)`
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;

export interface SideBarMenuItemTextProps extends TextProps {
    children: React.ReactNode;
    type: 'header' | 'subItem' | 'subItemSmall';
}

export function SideBarMenuItemText({ children, type }: SideBarMenuItemTextProps) {
    return (
        <StyledSideBarMenuItemText as="span" type={type}>
            {children}
        </StyledSideBarMenuItemText>
    );
}

const StyledSideBarMenuItemText = styled(Text)<Pick<SideBarMenuItemTextProps, 'type'>>`
    font-family: ${(props) => props.theme.typography.fontFamilyBase};
    font-weight: ${(props) => props.theme.typography.fontWeights.normal};
    font-size: ${(props) => props.theme.typography.fontSize[300]};
    line-height: ${(props) => props.theme.typography.lineHeight[300]};
    letter-spacing: ${tokens.kdsLetterSpacingNormal};
    color: inherit;
    display: inline-block;

    ${(props) =>
        props.type === 'header' &&
        css`
            font-weight: 500;
            font-size: 16px;
            padding: 20px 0;
        `}
    ${(props) =>
        props.type === 'subItem' &&
        css`
            font-size: 14px;
            font-weight: 500;
            padding: 14px 0;
        `}
    ${(props) =>
        props.type === 'subItemSmall' &&
        css`
            font-size: 14px;
            font-weight: 400;
            line-height: 26px;
            padding: 7px 0;
        `}
`;
