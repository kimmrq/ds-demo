import React from 'react';
import styled, { css } from 'styled-components';

import { Icon, Icons } from '../icon';

export type LinkColor = 'blue' | 'magenta' | 'grey' | 'lightGrey';

export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * The HTML element or React element used to render the link, e.g. RouterLink.
     * @default 'a'
     */
    as?: React.ElementType;
    /**
     * Contents displayed within the anchor.
     */
    children?: React.ReactNode;
    /**
     * Color of the text and icon
     */
    color?: LinkColor;
    /**
     * Fontweight
     */
    fontWeight?: 'normal' | 'medium' | 'bold';
    /**
     * Name of icon that renders left of text
     */
    iconLeft?: Icons;
    /**
     *  Name of icon that renders right of text
     */
    iconRight?: Icons;
    /**
     * Function to fire when clicking on the anchor.
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Opens the URL in a new tab when clicked.
     * @default false
     */
    openInNewTab?: boolean;
    /**
     * Page to navigate to when the anchor is clicked. The link will render as a button element if you omit the `to`.
     */
    to?: string;
}

export function Link({
    openInNewTab = false,
    onClick,
    color = 'blue',
    children,
    fontWeight = 'bold',
    iconLeft,
    iconRight,
    as,
    to,
    ...props
}: LinkProps) {
    const type = to ? 'a' : 'button';
    return (
        <StyledLink
            target={openInNewTab ? '_blank' : undefined}
            color={color}
            fontWeight={fontWeight}
            onClick={onClick}
            as={as ? as : type}
            href={to}
            to={to}
            type={type === 'button' ? 'button' : undefined}
            {...props}
        >
            {iconLeft && (
                <IconLeft>
                    <Icon icon={iconLeft} />
                </IconLeft>
            )}
            {children}
            {iconRight && (
                <IconRight>
                    <Icon icon={iconRight} />
                </IconRight>
            )}
        </StyledLink>
    );
}

const IconLeft = styled.span`
    margin-right: 0.5rem;
    display: inherit;
    align-items: center;
`;

const IconRight = styled.span`
    margin-left: 0.75rem;
    display: inherit;
    align-items: center;
`;

const StyledLink = styled.a<Pick<LinkProps, 'color' | 'fontWeight'>>`
    text-decoration: underline;
    display: inline-flex;
    align-items: center;
    font-size: inherit;
    line-height: inherit;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    cursor: pointer;

    ${(props) =>
        props.fontWeight === 'normal' &&
        css`
            font-weight: ${(props) => props.theme.typography.fontWeights.normal};
        `}
    ${(props) =>
        props.fontWeight === 'medium' &&
        css`
            font-weight: ${(props) => props.theme.typography.fontWeights.medium};
        `}
    ${(props) =>
        props.fontWeight === 'bold' &&
        css`
            font-weight: ${(props) => props.theme.typography.fontWeights.bold};
        `}

    ${(props) =>
        props.color &&
        css`
            color: ${props.theme.link[props.color].color};
        `}

    &:hover {
        text-decoration: none;
        ${(props) =>
            props.color &&
            css`
                color: ${props.theme.link[props.color].color};
            `}
    }

    &:focus:not(:focus-visible) {
        outline: none;
        box-shadow: none;
    }

    &:focus {
        outline: none;
        box-shadow: none;
        text-decoration: none;
        ${(props) =>
            props.color &&
            css`
                color: ${props.theme.link[props.color].color};
            `}
    }
`;
