import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: 'start' | 'end' | 'center' | 'initial';
    children: React.ReactNode[] | React.ReactNode;
    direction?: 'vertical' | 'horizontal';
    directionType?: 'rtl' | 'ltr';
    /**
     * Set the children of spacer to fullwidth; Usefull for mobile layouts
     */
    isFullWidth?: boolean;
    lastChildHasNoSpacing?: boolean;
    spacing?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | number;
    /**
     *  Wrap modifier controls whether the children are forced in a single line or can be flowed into multiple lines.
     */
    wrap?: 'no-wrap' | 'wrap';
}

const spaceSize = {
    xsmall: tokens.kdsSpacing1,
    small: tokens.kdsSpacing2,
    medium: tokens.kdsSpacing4,
    large: tokens.kdsSpacing6,
    xlarge: tokens.kdsSpacing7,
    xxlarge: tokens.kdsSpacing8,
};

export function Spacer({
    children,
    directionType = 'rtl',
    direction = 'vertical',
    spacing = 'medium',
    align = 'initial',
    wrap = 'no-wrap',
    isFullWidth = false,
    lastChildHasNoSpacing = false,
    ...props
}: SpacerProps) {
    const marginDirection = directionType === 'rtl' ? 'marginRight' : 'marginLeft';
    return (
        <StyledSpacer
            align={align}
            direction={direction}
            directionType={directionType}
            wrap={wrap}
            isFullWidth={isFullWidth}
            lastChildHasNoSpacing={lastChildHasNoSpacing}
            {...props}
        >
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return (
                        <div
                            key={index}
                            style={{
                                [direction === 'vertical' ? 'marginBottom' : marginDirection]:
                                    typeof spacing === 'string'
                                        ? spaceSize[spacing]
                                        : `${spacing}px`,
                            }}
                        >
                            {child}
                        </div>
                    );
                }
                return;
            })}
        </StyledSpacer>
    );
}

const StyledSpacer = styled.div<
    Pick<
        SpacerProps,
        'align' | 'direction' | 'directionType' | 'wrap' | 'isFullWidth' | 'lastChildHasNoSpacing'
    >
>`
    display: flex;
    flex-direction: column;

    ${(props) =>
        props.direction === 'horizontal' &&
        props.directionType === 'ltr' &&
        css`
            flex-direction: row-reverse;
        `}
    ${(props) =>
        props.direction === 'horizontal' &&
        props.directionType === 'rtl' &&
        css`
            flex-direction: row;
        `}

    ${(props) =>
        props.direction === 'horizontal' &&
        props.align === 'start' &&
        css`
            justify-content: flex-start;
        `}
    ${(props) =>
        props.direction === 'horizontal' &&
        props.align === 'center' &&
        css`
            justify-content: center;
        `}
    ${(props) =>
        props.direction === 'horizontal' &&
        props.align === 'end' &&
        css`
            justify-content: flex-end;
        `}

    ${(props) =>
        props.direction === 'vertical' &&
        props.align === 'start' &&
        css`
            align-items: flex-start;
        `}
    ${(props) =>
        props.direction === 'vertical' &&
        props.align === 'center' &&
        css`
            align-items: center;
        `}
    ${(props) =>
        props.direction === 'vertical' &&
        props.align === 'end' &&
        css`
            align-items: flex-end;
        `}

    ${(props) =>
        props.direction === 'vertical' &&
        props.align === 'initial' &&
        css`
            align-items: initial;
        `}
    ${(props) =>
        props.direction === 'horizontal' &&
        props.align === 'initial' &&
        css`
            justify-content: initial;
        `}

    ${(props) =>
        props.wrap === 'wrap' &&
        css`
            flex-wrap: wrap;

            & > div {
                margin-bottom: 8px;
            }
        `}
    ${(props) =>
        props.wrap === 'no-wrap' &&
        css`
            flex-wrap: nowrap;
        `}

    ${(props) =>
        props.isFullWidth &&
        css`
            & > div {
                display: block;
                width: 100%;
            }
        `}

    ${(props) =>
        props.direction === 'vertical' &&
        props.lastChildHasNoSpacing &&
        css`
            & > div {
                &:last-child {
                    margin-bottom: 0 !important;
                }
            }
        `}

    ${(props) =>
        props.direction === 'horizontal' &&
        props.lastChildHasNoSpacing &&
        css`
            & > div {
                &:last-child {
                    margin-right: 0 !important;
                }
            }
        `}
`;
