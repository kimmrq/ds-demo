import React, { useContext } from 'react';
import styled from 'styled-components';
import * as tokens from 'tokens/tokens';

import { Icon, Icons } from '../../atoms/icon';
import { NavBarLinkContext } from './nav-bar-link-context';

export interface NavBarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    /**
     * React Router to prop
     */
    to?: string;
}

export function NavBarLink({ icon, as, to, onClick, children, ...props }: NavBarLinkProps) {
    const { isMenuItem } = useContext(NavBarLinkContext);
    const Component = isMenuItem ? StyledNavBarMenuLink : StyledNavBarLink;

    return (
        <Component as={as} activeClassName="active" to={to} onClick={onClick} {...props}>
            {icon && <StyledIcon icon={icon} size={16} />}
            <StyledSpan data-content={children}>{children}</StyledSpan>
        </Component>
    );
}

const StyledNavBarLink = styled.a`
    display: flex;
    align-items: center;
    padding: 16px 12px;
    color: ${tokens.kdsColorNeutral900};
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    text-decoration: none;
    text-align: center;
    white-space: no-wrap;
    transition: border-bottom-color 0.2s ease-in;
    border-bottom: 2px solid rgba(209, 213, 218, 0);
    margin-right: 16px;
    flex-shrink: 0;
    cursor: pointer;

    &:hover,
    &:focus {
        color: ${tokens.kdsColorNeutral900};
        border-bottom-color: ${tokens.kdsColorNeutral300};
        text-decoration: none;
    }

    &.active {
        color: ${tokens.kdsColorMagenta500};
        font-weight: 500;
        border-bottom-color: ${tokens.kdsColorMagenta500};

        & svg {
            color: #ff54f2;
        }
    }
`;

const StyledSpan = styled.span`
    &:before {
        content: attr(data-content);
        display: block;
        font-weight: 500;
        height: 0;
        visibility: hidden;
    }
`;

export const StyledNavBarMenuLink = styled.a`
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
    color: ${tokens.kdsColorNeutral900};
    white-space: nowrap;
    background-color: inherit;
    border: 0;
    text-decoration: none;
    width: 100%;

    &:hover,
    &:focus {
        color: ${tokens.kdsColorNeutral900};
        text-decoration: none;
        background-color: ${tokens.kdsColorNeutral100};
    }

    &.active {
        color: ${tokens.kdsColorMagenta500};
        font-weight: 500;

        & svg {
            color: #ff54f2;
        }
    }
`;

const StyledIcon = styled(Icon)`
    margin-right: 8px;
    color: ${tokens.kdsColorNeutral400};
`;
