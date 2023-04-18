import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
export interface SideBarMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
    hasBorder?: boolean;
    hasCaret?: boolean;
    isLink?: boolean;
    isSelected?: boolean;
    onClick?: React.MouseEventHandler<HTMLLIElement>;
}

export function SideBarMenuItem({
    isSelected = false,
    children,
    hasBorder,
    onClick,
    isLink,
    hasCaret,
    ...props
}: SideBarMenuItemProps) {
    return (
        <StyledSideBarMenuItem
            isSelected={isSelected}
            hasBorder={hasBorder}
            onClick={onClick}
            isLink={isLink}
            hasCaret={hasCaret}
            {...props}
        >
            {children}
        </StyledSideBarMenuItem>
    );
}

const StyledSideBarMenuItem = styled.li<SideBarMenuItemProps>`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0 0;
    padding-right: 4px;
    font-family: ${(props) => props.theme.list.listItem.fontFamily};
    font-weight: ${(props) => props.theme.list.listItem.fontWeight};
    font-size: ${(props) => props.theme.list.listItem.fontSize};
    line-height: ${(props) => props.theme.list.listItem.lineHeight};
    color: ${(props) => props.theme.list.listItem.color};

    &:focus,
    &:active {
        outline: none;
    }

    /* &:focus {
        box-shadow: inset 0 0 0 2px ${tokens.kdsColorBlue300};
    } */

    &:hover {
        cursor: ${(props) => (props.hasCaret || props.isLink ? 'pointer' : 'default')};
        ${(props) =>
            props.isLink &&
            css`
                background: rgba(219, 213, 208, 0.32);
            `}
    }

    ${(props) =>
        props.isSelected &&
        css`
            color: ${(props) => props.theme.list.listItem.selectedColor} !important;
        `}

    ${(props) =>
        props.hasBorder &&
        css`
            border-left: 2px solid rgba(219, 213, 208, 0.32);
        `}
`;
