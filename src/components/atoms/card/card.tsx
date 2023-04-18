import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { H3 } from '../text';

export type CardSpacing = 'none' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor?: string;
    borderColor?: string;
    /**
     * Boxshadow of the Card.
     * @default level2
     * */
    boxShadow?: 'none' | 'level1' | 'level2' | 'level3';
    /**
     * Content of the Card.
     * */
    children?: React.ReactNode;
    /**
     * The text of the heading.
     */
    heading?: React.ReactNode;
    /**
     * Inset spacing of the Card.
     * @default medium
     * */
    spacing?: CardSpacing;
}

const StyledCard = styled.div<
    Pick<CardProps, 'spacing' | 'boxShadow' | 'backgroundColor' | 'borderColor'>
>`
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;

    ${(props) =>
        props.spacing === 'none' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing0};
        `}
    ${(props) =>
        props.spacing === 'medium' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing1} 16px;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                padding: ${(props) => props.theme.card.paddingSpacing1};
            }
        `}
    ${(props) =>
        props.spacing === 'large' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing2} 16px;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                padding: ${(props) => props.theme.card.paddingSpacing2};
            }
        `}
    ${(props) =>
        props.spacing === 'xlarge' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing3} 16px;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                padding: ${(props) => props.theme.card.paddingSpacing3};
            }
        `}
    ${(props) =>
        props.spacing === 'xxlarge' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing4} 16px;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                padding: ${(props) => props.theme.card.paddingSpacing4};
            }
        `}
    ${(props) =>
        props.boxShadow === 'none' &&
        css`
            box-shadow: ${(props) => props.theme.card.boxShadowNone};
        `}
    ${(props) =>
        props.boxShadow === 'level1' &&
        css`
            box-shadow: ${(props) => props.theme.card.boxShadowLevel1};
        `}
    ${(props) =>
        props.boxShadow === 'level2' &&
        css`
            box-shadow: ${(props) => props.theme.card.boxShadowLevel2};
        `}
    ${(props) =>
        props.boxShadow === 'level3' &&
        css`
            box-shadow: ${(props) => props.theme.card.boxShadowLevel3};
        `}
    ${(props) =>
        props.backgroundColor &&
        css`
            background-color: ${props.backgroundColor};
        `}
    ${(props) =>
        props.borderColor &&
        css`
            border: 1px solid ${props.borderColor};
        `}
`;

const StyledCardHeader = styled(H3)`
    margin-top: 0px;
    margin-bottom: 24px;
`;

export function Card({
    heading,
    spacing = 'medium',
    boxShadow = 'level2',
    backgroundColor = '#fff',
    children,
    borderColor,
    ...props
}: CardProps) {
    return (
        <StyledCard
            spacing={spacing}
            boxShadow={boxShadow}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            {...props}
        >
            {heading && <StyledCardHeader>{heading}</StyledCardHeader>}
            {children}
        </StyledCard>
    );
}
