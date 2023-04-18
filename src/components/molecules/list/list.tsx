import { Icon } from 'components/atoms/icon/icon';
import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Icons } from '../../atoms/icon';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    /**
     * List items to render. Should be instances of `ListItem`.
     */
    children?: React.ReactNode;
    counterColor?: string;
    /**
     * Controls the list-style-type applied to each list item.
     * @default none
     */
    styleType?: 'bullet' | 'number' | 'none' | 'counter';
}

export function List({
    styleType = 'none',
    children,
    counterColor = 'inherit',
    ...props
}: ListProps) {
    const elementName = ['number', 'counter'].includes(styleType) ? 'ol' : 'ul';

    return (
        <StyledList styleType={styleType} as={elementName} counterColor={counterColor} {...props}>
            {children}
        </StyledList>
    );
}

const StyledList = styled.ul<Pick<ListProps, 'styleType' | 'counterColor'>>`
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    list-style-position: inside;

    &:not(:last-child) {
        margin-bottom: ${(props) => props.theme.list.margin};
    }
    ${(props) =>
        props.styleType === 'bullet' &&
        css`
            list-style-type: disc;
        `}
    ${(props) =>
        props.styleType === 'number' &&
        css`
            list-style-type: decimal;
        `}
    ${(props) =>
        props.styleType === 'none' &&
        css`
            list-style-type: none;
        `}
    ${(props) =>
        props.styleType === 'counter' &&
        props.counterColor &&
        css`
            list-style-type: none;
            counter-reset: counter;

            > li {
                counter-increment: counter;
                display: flex;
                margin-bottom: 24px;
            }
            > li::before {
                content: counter(counter) '. ';
                color: ${props.counterColor};
                font-weight: 500;
                margin-right: 12px;
                font-size: 14px;
                line-height: 1.5;
            }
        `}
`;

function getColorValue(iconColor: string | undefined) {
    if (iconColor === 'blue') {
        return tokens.kdsColorBlue500;
    }
    if (iconColor === 'magenta') {
        return tokens.kdsColorMagenta500;
    }
    return 'currentColor';
}

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
    icon?: Icons;
    iconColor?: 'blue' | 'magenta' | 'currentColor';
    spacing?: 'condensed' | 'normal' | 'wide';
}

export function ListItem({
    icon,
    iconColor,
    children,
    spacing = 'normal',
    ...props
}: ListItemProps) {
    const colorValue = getColorValue(iconColor);
    return (
        <StyledListItem spacing={spacing} {...props}>
            {icon && (
                <StyledIcon>
                    <Icon icon={icon} color={colorValue} />
                </StyledIcon>
            )}
            {children}
        </StyledListItem>
    );
}

const StyledIcon = styled.div<ListItemProps>`
    padding: 0 16px 0 0;
    display: inline-block;
`;

const StyledListItem = styled.li<Pick<ListItemProps, 'spacing'>>`
    font-family: ${(props) => props.theme.list.listItem.fontFamily};
    font-weight: ${(props) => props.theme.list.listItem.fontWeight};
    font-size: ${(props) => props.theme.list.listItem.fontSize};
    line-height: ${(props) => props.theme.list.listItem.lineHeight};
    color: ${(props) => props.theme.list.listItem.color};

    ${(props) =>
        props.spacing === 'condensed' &&
        css`
            margin: ${(props) => props.theme.list.listItem.marginCondensed};
        `}
    ${(props) =>
        props.spacing === 'normal' &&
        css`
            margin: ${(props) => props.theme.list.listItem.margin};
        `}
    ${(props) =>
        props.spacing === 'wide' &&
        css`
            margin: ${(props) => props.theme.list.listItem.marginWide};
        `}
`;
