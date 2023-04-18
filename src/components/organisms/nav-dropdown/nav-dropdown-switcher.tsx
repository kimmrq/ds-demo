import React from 'react';
import styled, { css } from 'styled-components';

import { Icon } from '../../atoms/icon';

export interface NavDropdownSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Children
     */
    children: React.ReactNode;
    /**
     * Shows pink border and when `true` displays children
     */
    isSelected: boolean;
    /**
     * onClick handler, is disabled when `isSelected === false`
     */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function NavDropdownSwitcher({
    isSelected = false,
    children,
    onClick,
    ...props
}: NavDropdownSwitcherProps) {
    return (
        <StyledNavDropdownSwitcherWrapper>
            <StyledNavDropdownSwitcher
                onClick={isSelected ? undefined : onClick}
                isSelected={isSelected}
                {...props}
            >
                {children}
                {isSelected && (
                    <span
                        style={{
                            backgroundColor: '#ff37f0',
                            borderRadius: '50%',
                            height: '24px',
                            width: '24px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: '-11px',
                            top: '-8px',
                        }}
                    >
                        <Icon size={20} color="white" icon="check" />
                    </span>
                )}
            </StyledNavDropdownSwitcher>
        </StyledNavDropdownSwitcherWrapper>
    );
}

const StyledNavDropdownSwitcherWrapper = styled.div`
    margin: 8px 0;

    &:first-of-type {
        margin-top: 0;
    }
`;

const StyledNavDropdownSwitcher = styled.div<Pick<NavDropdownSwitcherProps, 'isSelected'>>`
    padding: 16px 8px;
    transition: all 0.2s ease-out;
    position: relative;
    border-radius: 2px;

    ${(props) =>
        props.isSelected === true &&
        css`
            box-shadow: inset 0 0 0 1px #ff37f0;
        `}

    ${(props) =>
        props.isSelected === false &&
        css`
            cursor: pointer;
            box-shadow: inset 0 0 0 1px #dbd5d0;

            &:hover {
                box-shadow: inset 0 0 0 1px #50463f;
            }
        `}
`;
