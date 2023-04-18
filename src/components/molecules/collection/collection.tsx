import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Icon, Icons } from '../../atoms/icon';
import { H4, P1 } from '../../atoms/text/text';

export interface CollectionProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    /**
     * Set html tag for Collection
     * @default ul
     */
    type?: 'nav' | 'ul';
}

export type MediaItem = {
    insetPadding?: boolean;
    /**
     * Media element
     */
    mediaItem: JSX.Element;
};

export interface CollectionItemProps extends MediaItem, React.HTMLAttributes<HTMLLIElement> {
    children?: React.ReactNode;
    /**
     * Media element Item
     */
    item?: MediaItem;
}

export interface CollectionTextProps {
    /**
     * Align content vertically inside the container
     */
    align?: 'center' | 'start' | 'end';
    /**
     * Primary text to be displayed
     */
    primaryText?: string;
    /**
     * Secondary text to be displayed
     */
    secondaryText?: string;
}

export interface CollectionLinkProps
    extends MediaItem,
        React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Use `as={Link}` when used as Reacter router Link
     */
    as?: React.ElementType;
    /**
     * Icon to be displayed inside the container
     * @default bigCaret
     */
    icon?: Icons;
    /**
     * Media element Item
     */
    item?: MediaItem;
    /**
     * onClick handler
     */
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    /**
     * Use to prop when used as React router link
     * @default #
     */
    to?: string;
}

export function Collection({ children, type = 'ul', ...props }: CollectionProps) {
    return (
        <StyledCollection as={type} {...props}>
            {children}
        </StyledCollection>
    );
}

export function CollectionItem({
    children,
    mediaItem,
    insetPadding = true,
    ...props
}: CollectionItemProps) {
    return (
        <StyledCollectionItem insetPadding={insetPadding} {...props}>
            {mediaItem && (
                <StyledFigure>
                    <StyledMediaItem>{mediaItem}</StyledMediaItem>
                </StyledFigure>
            )}
            {children}
        </StyledCollectionItem>
    );
}

export function CollectionLink({
    icon = 'caret-right-big',
    to = '#',
    children,
    onClick,
    mediaItem,
    insetPadding = true,
    as,
    ...props
}: CollectionLinkProps) {
    return (
        <StyledCollectionLink
            as={as}
            to={to}
            onClick={onClick}
            insetPadding={insetPadding}
            {...props}
        >
            {mediaItem && (
                <StyledFigure>
                    <StyledMediaItem>{mediaItem}</StyledMediaItem>
                </StyledFigure>
            )}
            {children}
            {icon && <StyledIcon icon={icon} aria-hidden="true" />}
        </StyledCollectionLink>
    );
}

export function CollectionText({
    primaryText,
    secondaryText,
    align,
    ...props
}: CollectionTextProps) {
    return (
        <StyledCollectionText {...props} align={align}>
            {primaryText && <StyledH4>{primaryText}</StyledH4>}
            {secondaryText && <StyledP1>{secondaryText}</StyledP1>}
        </StyledCollectionText>
    );
}

const StyledCollection = styled.ul`
    width: 100%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;

const StyledCollectionItem = styled.li<Pick<CollectionItemProps, 'insetPadding'>>`
    display: flex;
    position: relative;
    margin: 0 0 0 0;
    padding: 16px 0;
    line-height: 1;
    box-shadow: none;
    list-style: none;

    ${(props) =>
        props.insetPadding &&
        css`
            padding: 16px;

            @media (min-width: ${tokens.kdsBreakpointMedium}) {
                padding: 16px 32px;
            }
        `}

    &:not(:last-child) {
        box-shadow: 0 2px 0px -1px rgba(236, 236, 230, 1);
    }
`;

const StyledFigure = styled.figure`
    flex: 0 0 auto;
    margin: 0 16px 0 0;

    @media (min-width: ${tokens.kdsBreakpointMedium}) {
        margin: 0 24px 0 0;
    }
`;

const StyledMediaItem = styled.div`
    display: flex;
`;

const StyledCollectionText = styled.div<Pick<CollectionTextProps, 'align'>>`
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-family: ${(props) => props.theme.typography.fontFamilyBase};
    font-weight: ${(props) => props.theme.typography.fontWeights.normal};
    font-size: ${(props) => props.theme.typography.fontSize[300]};
    line-height: ${(props) => props.theme.typography.lineHeight[300]};
    letter-spacing: ${tokens.kdsLetterSpacingNormal};
    color: ${tokens.kdsColorNeutral800};
    display: inline-block;
    word-break: break-all;
    word-break: break-word;
    hyphens: auto;

    ${(props) =>
        props.align === 'start' &&
        css`
            align-self: flex-start;
        `}
    ${(props) =>
        props.align === 'center' &&
        css`
            align-self: center;
        `}
    ${(props) =>
        props.align === 'end' &&
        css`
            align-self: flex-end;
        `}
`;

const StyledH4 = styled(H4)`
    color: ${tokens.kdsColorNeutral800};
`;

const StyledP1 = styled(P1)`
    margin-top: 4px;
    margin-bottom: 0;
    font-size: ${(props) => props.theme.mediaObject.paragraphFontSize};
`;

const StyledIcon = styled(Icon)``;

const StyledCollectionLink = styled.a<Pick<CollectionLinkProps, 'insetPadding'>>`
    position: relative;
    margin: 0 0 0 0;
    display: flex;
    padding: 16px 0;
    box-shadow: none;
    transition: all cubic-bezier(${(props) => props.theme.collection.link.easing}) 0.2s;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:not(:last-child) {
        box-shadow: 0 2px 0px -1px rgba(236, 236, 230, 1);
    }

    &:hover {
        background: ${(props) => props.theme.collection.link.hoverColor};
        text-decoration: none;

        ${StyledIcon} {
            transform: translateX(3px);
            color: ${(props) => props.theme.collection.icon.hoverColor};
        }
    }
    &:focus {
        outline: none;
        box-shadow: 0px 0px 10px 1px rgba(236, 236, 230, 1);
    }

    ${(props) =>
        props.insetPadding &&
        css`
            padding: 16px;

            @media (min-width: ${tokens.kdsBreakpointMedium}) {
                padding: 16px 32px;
            }
        `}

    ${StyledIcon} {
        min-width: 18px;
        min-height: 18px;
        align-self: center;
        margin-left: auto;
        color: ${(props) => props.theme.collection.icon.color};
        transition: all cubic-bezier(${(props) => props.theme.collection.icon.easing}) 0.2s;
    }
`;
