import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';

export interface ButtonRowProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * `Button` components to render.
     */
    children?: React.ReactNode;
    /**
     * Stack items below the small breakpoint. This pairs well with `width="full-below-small"`
     * for buttons
     * @default false
     */
    isStackedBelowSmall?: boolean;
    /**
     * Controls the horizontal alignment of buttons within the container.
     * @default left
     */
    justify?: 'center' | 'left' | 'right';
}

export function ButtonRow({
    justify = 'left',
    isStackedBelowSmall = false,
    children,
    ...props
}: ButtonRowProps) {
    return (
        <StyledButtonRow justify={justify} isStackedBelowSmall={isStackedBelowSmall} {...props}>
            {children}
        </StyledButtonRow>
    );
}

const StyledButtonRow = styled.div<ButtonRowProps>`
    display: flex;
    align-items: center;

    button + button {
        margin-left: 16px;
    }

    ${(props) =>
        props.justify === 'left' &&
        css`
            justify-content: flex-start;
        `}
    ${(props) =>
        props.justify === 'center' &&
        css`
            justify-content: center;
        `}
    ${(props) =>
        props.justify === 'right' &&
        css`
            justify-content: flex-end;
        `}

    ${(props) =>
        props.isStackedBelowSmall &&
        css`
            @media (max-width: ${tokens.kdsBreakpointSmall}) {
                flex-direction: column-reverse;
                align-items: stretch;

                button + button {
                    margin-bottom: 8px;
                    margin-left: 0;
                }
            }
        `}
`;
