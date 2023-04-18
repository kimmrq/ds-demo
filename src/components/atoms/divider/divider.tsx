import React from 'react';
import styled, { css } from 'styled-components';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    /**
     * The axis the Divider should align with.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
}

export function Divider({ orientation = 'horizontal', ...props }: DividerProps) {
    return (
        <StyledDivider
            role="separator"
            aria-orientation={orientation}
            orientation={orientation}
            {...props}
        />
    );
}

const StyledDivider = styled.hr<DividerProps>`
    /* Show the overflow for hr in Edge and IE. */
    overflow: visible;
    border: none;
    border-width: 1px;
    margin: 0;
    align-self: stretch;
    background-color: #dbd5d0;

    ${(props) =>
        props.orientation === 'horizontal' &&
        css`
            height: 1px;
            width: 100%;
            margin-top: 16px;
            margin-bottom: 16px;
        `}
    ${(props) =>
        props.orientation === 'vertical' &&
        css`
            height: auto;
            width: 1px;
            margin-left: 16px;
            margin-right: 16px;
        `};
`;
