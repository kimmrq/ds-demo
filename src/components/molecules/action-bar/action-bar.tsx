import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { useViewportWidth } from '../../../hooks/use-viewport-width';
import * as tokens from '../../../tokens/tokens';
import { IconButton } from '../../atoms/icon-button';

export const actionBarSize = {
    small: '30%',
    medium: '40%',
    large: '50%',
    auto: 'auto',
};

export interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Content of the component
     */
    children: React.ReactNode;
    /**
     * Function to call for closing the component
     */
    close?: () => void;
    /**
     * Aria label of close icon button
     * @default ''
     */
    iconLabel?: string;
    /**
     * Show / hide the component
     *  @default false
     */
    isOpen?: boolean;
    /**
     * Various widths for the component
     *  @default 'auto'
     */
    size?: 'small' | 'medium' | 'large' | 'auto';
}

const variants = {
    open: {
        opacity: 1,
        scale: 1,
        display: 'flex',
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
        },
    },
    closed: {
        opacity: 0,
        scale: 0.9,
        transitionEnd: {
            display: 'none',
        },
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export function ActionBar({
    children,
    isOpen = false,
    close,
    iconLabel = '',
    size = 'auto',
    ...props
}: ActionBarProps) {
    const { width } = useViewportWidth();
    const breakpoint = 576;

    const bar = (
        <StyledActionBarContainer>
            <AnimatePresence>
                <motion.div
                    initial={'closed'}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={variants}
                    key="child"
                    exit={'closed'}
                >
                    <StyledActionBar size={size} {...props}>
                        <StyledBarContent>{children}</StyledBarContent>

                        <StyledIconButtonWrap>
                            <IconButton
                                icon="close"
                                onClick={close}
                                labelText={iconLabel}
                                variant={width < breakpoint ? 'filled' : 'inverse'}
                            />
                        </StyledIconButtonWrap>
                    </StyledActionBar>
                </motion.div>
            </AnimatePresence>
        </StyledActionBarContainer>
    );

    return ReactDOM.createPortal(bar, document.body);
}

const StyledActionBarContainer = styled.div`
    position: fixed;
    align-items: center;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
`;

const StyledActionBar = styled.div<Pick<ActionBarProps, 'size'>>`
    display: flex;
    align-items: center;
    height: 64px;
    padding: 16px;
    background: rgb(0, 24, 88);
    border-radius: 4px;
    box-shadow: 0px 14px 26px -4px rgba(40, 35, 32, 0.49);

    @media (max-width: 575px) {
        padding: 16px 24px 16px 16px;
    }

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        min-width: 450px;
        margin: 0 0 0 0;
        width: ${(props) => props.size && actionBarSize[props.size]};
    }

    @media (min-width: ${tokens.kdsBreakpointMedium}) {
        width: ${(props) => props.size && actionBarSize[props.size]};
    }

    @media (min-width: ${tokens.kdsBreakpointMedium}) {
        padding: 16px 32px;
    }
`;

const StyledBarContent = styled.div`
    flex: 1;
`;

const StyledIconButtonWrap = styled.div`
    @media (max-width: 575px) {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
    }

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        flex: 0 0 auto;
        margin-left: 16px;
    }

    @media (min-width: ${tokens.kdsBreakpointMedium}) {
        margin-left: 32px;
    }
`;
