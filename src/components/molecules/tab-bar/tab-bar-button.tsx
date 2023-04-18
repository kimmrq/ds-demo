import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';

export interface TabBarButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Content of the button
     */
    children?: React.ReactNode;
    /**
     *  Selected state
     */
    isSelected?: boolean;
}

export function TabBarButton({ isSelected, children, ...props }: TabBarButtonProps) {
    return (
        <StyledTab isSelected={isSelected} type="button" {...props}>
            {children}
        </StyledTab>
    );
}

const StyledTab = styled.button<TabBarButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    padding: 16px 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    color: ${tokens.kdsColorNeutral700};
    transition: border-color 125ms ease-in-out;

    &:not(:last-child) {
        margin-right: 24px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
        box-shadow: none;
    }

    &:focus {
        outline: 2px solid #7090e5;
        outline-offset: -2px;
    }

    &:hover {
        ${(props) =>
            !props.isSelected &&
            css`
                border-color: ${tokens.kdsColorNeutral300};
            `}
    }

    ${(props) =>
        props.isSelected &&
        css`
            border-color: ${tokens.kdsColorMagenta500};
            cursor: default;
            color: ${tokens.kdsColorMagenta500};
        `};
`;
