import React from 'react';
import styled, { css } from 'styled-components';

export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    /**
     * MenuItem text
     */
    children?: React.ReactNode;
    /**
     * If true, set the MenuItem to the disabled state so it is not clickable.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * If true, set the MenuItem to be the currently selected item.
     * @default false
     */
    isFocused?: boolean;
    /**
     * The function called when the MenuItem is clicked. This callback will not fire if the item is disabled.
     */
    onClick?: (event: React.SyntheticEvent) => void;
    onMouseOver?: (event: React.SyntheticEvent) => void;
}

export function MenuItem({
    onClick,
    onMouseOver,
    isDisabled = false,
    isFocused = false,
    children,
    ...props
}: MenuItemProps) {
    const handleClick = (event: React.SyntheticEvent): void => {
        if (isDisabled) {
            return;
        }
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <StyledMenuItem
            onClick={handleClick}
            isDisabled={isDisabled}
            aria-disabled={isDisabled}
            isFocused={isFocused}
            onMouseOver={onMouseOver}
            tabIndex={-1}
            role="menuitem"
            {...props}
        >
            {children}
        </StyledMenuItem>
    );
}

const StyledMenuItem = styled.li<Pick<MenuItemProps, 'isDisabled' | 'isFocused'>>`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    padding: 8px 16px;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    color: ${(props) => props.theme.menu.color};
    white-space: nowrap;
    background-color: inherit;
    border: 0;

    &:focus {
        outline: none;
    }

    ${(props) =>
        !props.isDisabled &&
        props.isFocused &&
        css`
            background-color: ${(props) => props.theme.menu.backgroundColorFocus};
            color: ${(props) => props.theme.menu.color};
        `}

    ${(props) =>
        props.isDisabled &&
        !props.isFocused &&
        css`
            color: ${(props) => props.theme.menu.colorDisabled};
            cursor: default;
        `}

     ${(props) =>
        props.isDisabled &&
        props.isFocused &&
        css`
            background-color: ${(props) => props.theme.menu.backgroundColorFocusDisabled};
            color: white;
            cursor: default;
        `}
`;
