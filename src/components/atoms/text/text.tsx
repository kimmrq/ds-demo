import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Semantic element name. By default, the Text component renders text in a `span` tag.
     * @default span
     */
    as?: React.ElementType;
    /**
     * Text to render.
     */
    children?: React.ReactNode;
    /**
     * Text color
     */
    color?: string;
    /**
     * Sets font size and line height using kdsFontSize and kdsLineHeight token values
     */
    fontSize?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    /**
     * Fontweight
     */
    fontWeight?: 'normal' | 'medium' | 'bold';
}

export function Text({
    fontSize = 300,
    as = 'span',
    fontWeight = 'normal',
    color = tokens.kdsColorNeutral800,
    children,
    ...props
}: TextProps) {
    return (
        <StyledText fontSize={fontSize} as={as} fontWeight={fontWeight} color={color} {...props}>
            {children}
        </StyledText>
    );
}

const StyledText = styled.span<TextProps>`
    font-family: ${(props) => props.theme.typography.fontFamilyBase};
    font-size: ${(props) => props.fontSize && props.theme.typography.fontSize[props.fontSize]};
    line-height: ${(props) => props.fontSize && props.theme.typography.lineHeight[props.fontSize]};
    font-weight: ${(props) =>
        props.fontWeight && props.theme.typography.fontWeights[props.fontWeight]};
    margin: 0;
    color: ${(props) => props.color && props.color};

    ${(props) =>
        props.fontSize === 700 &&
        css`
            @media screen and (max-width: ${props.theme.breakpoints.small}) {
                font-size: ${props.theme.typography.fontSize[600]};
                line-height: ${props.theme.typography.lineHeight[600]};
            }
        `}
`;

export const H1 = ({
    fontSize = 700,
    as = 'h1',
    fontWeight = 'bold',
    color = tokens.kdsColorNeutral700,
    children,
    ...props
}: TextProps) => {
    return (
        <Text fontSize={fontSize} as={as} fontWeight={fontWeight} color={color} {...props}>
            {children}
        </Text>
    );
};

export const H2 = ({
    fontSize = 500,
    as = 'h2',
    fontWeight = 'normal',
    color,
    children,
    ...props
}: TextProps) => {
    return (
        <Text fontSize={fontSize} as={as} fontWeight={fontWeight} color={color} {...props}>
            {children}
        </Text>
    );
};

export const H3 = ({
    fontSize = 400,
    as = 'h3',
    fontWeight = 'medium',
    color,
    children,
    ...props
}: TextProps) => {
    return (
        <Text fontSize={fontSize} as={as} fontWeight={fontWeight} color={color} {...props}>
            {children}
        </Text>
    );
};

export const H4 = ({
    fontSize = 300,
    as = 'h4',
    fontWeight = 'medium',
    color = tokens.kdsColorNeutral400,
    children,
    ...props
}: TextProps) => {
    return (
        <Text fontSize={fontSize} as={as} fontWeight={fontWeight} color={color} {...props}>
            {children}
        </Text>
    );
};

export const P1 = ({
    fontSize = 300,
    as = 'p',
    fontWeight = 'normal',
    color,
    children,
    ...props
}: TextProps) => {
    return (
        <Text fontSize={fontSize} as={as} fontWeight={fontWeight} color={color} {...props}>
            {children}
        </Text>
    );
};

export const P2 = ({
    fontSize = 200,
    as = 'p',
    fontWeight,
    color,
    children,
    ...props
}: TextProps) => {
    return (
        <Text fontSize={fontSize} as={as} fontWeight={fontWeight} color={color} {...props}>
            {children}
        </Text>
    );
};
