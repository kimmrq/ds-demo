import React, { useContext } from 'react';
import styled from 'styled-components';
import * as tokens from 'tokens/tokens';

import { Icon, Icons } from '../../atoms/icon';
import { NavDropdownContext } from './nav-dropdown-context';

export interface NavDropdownItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * When used with React Router `as={Link}`
     */
    as?: React.ElementType;
    /**
     * Text to display
     */
    children: React.ReactNode;
    /**
     * Name of the icon
     */
    icon?: Icons;
    /**
     * onClick handler
     */
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    /**
     * React Router to prop
     */
    to?: string;
    /**
     * If true, closes the menu when clicked
     * @default true
     */
    toggle?: boolean;
}

export function NavDropdownItem({
    icon,
    to,
    as,
    toggle = true,
    children,
    onClick,
    ...props
}: NavDropdownItemProps) {
    const { isOpen, setIsOpen } = useContext(NavDropdownContext);

    function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
        if (onClick) {
            onClick(event);
        }
        if (toggle) {
            setIsOpen(!isOpen);
        }
    }
    return (
        <StyledNavDropdownItem
            as={as}
            to={to}
            {...props}
            onClick={handleClick}
            activeClassName="active"
        >
            {icon && <StyledIcon icon={icon} size={16} />}
            {children}
        </StyledNavDropdownItem>
    );
}

export const StyledIcon = styled(Icon)<Pick<NavDropdownItemProps, 'icon'>>`
    margin-right: 8px;
    color: ${(props) => props.theme.navDropdown.iconColor};
    min-width: 18px;
`;

export const StyledNavDropdownItem = styled.a<NavDropdownItemProps>`
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.navDropdown.color};
    line-height: 21px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
    cursor: pointer;

    &:hover {
        text-decoration: none;
        background-color: ${tokens.kdsColorNeutral50};
        border-radius: 2px;
        color: ${(props) => props.theme.navDropdown.color};
    }

    &.active {
        color: ${(props) => props.theme.navDropdown.accentColor};
        font-weight: 500;

        &:hover {
            color: ${(props) => props.theme.navDropdown.accentColor};
        }

        ${StyledIcon} {
            color: #ff54f2;
        }
    }
`;
