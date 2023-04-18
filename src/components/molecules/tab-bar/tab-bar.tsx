import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { IconButton } from '../../atoms/icon-button';
import { TabBarButton } from './tab-bar-button';

export interface TabBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * `Tab` components to render.
     */
    children?: React.ReactNode;
}

export function TabBar({ children, ...props }: TabBarProps) {
    const tabBar = useRef<HTMLDivElement>(null);

    const [hasLeftOverflow, setHasLeftOverflow] = useState(false);
    const [hasRightOverflow, setHasRightOverflow] = useState(false);

    const OVERFLOW_BUTTON_OFFSET = 30;
    const handleWindowResize = handleScroll;

    const debouncedHandleWindowResize = debounce(handleWindowResize, 200);

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', debouncedHandleWindowResize);

        return () => window.removeEventListener('resize', debouncedHandleWindowResize);
    });

    function handleScroll() {
        if (!tabBar.current) {
            return;
        }
        setHasLeftOverflow(
            tabBar.current.scrollWidth > tabBar.current.clientWidth &&
                tabBar.current.scrollLeft !== 0,
        );
        setHasRightOverflow(
            tabBar.current.scrollWidth > tabBar.current.clientWidth &&
                tabBar.current.clientWidth + tabBar.current.scrollLeft !==
                    tabBar.current.scrollWidth,
        );
    }

    interface handleOverflowNavClickProps {
        direction: 1 | -1;
    }

    function handleOverflowNavClick({ direction }: handleOverflowNavClickProps) {
        if (!tabBar.current) {
            return;
        }
        if (direction === 1 && !tabBar.current.scrollLeft) {
            tabBar.current.scrollLeft += OVERFLOW_BUTTON_OFFSET;
        }

        tabBar.current.scrollLeft += direction * tabBar.current.clientWidth * 0.75;
    }

    return (
        <TabBarContainer>
            {hasLeftOverflow && (
                <>
                    <IconButton
                        style={{ marginRight: '0px' }}
                        variant="filled"
                        icon="caret-left"
                        labelText="scroll left"
                        tab-index="-1"
                        aria-hidden="true"
                        onClick={() => handleOverflowNavClick({ direction: -1 })}
                    />
                </>
            )}
            <StyledTabBar ref={tabBar} onScroll={handleScroll} {...props}>
                {children}
            </StyledTabBar>
            {hasRightOverflow && (
                <>
                    <IconButton
                        style={{ marginLeft: '0px' }}
                        variant="filled"
                        icon="caret-right"
                        labelText="scroll right"
                        tab-index="-1"
                        aria-hidden="true"
                        onClick={() => handleOverflowNavClick({ direction: 1 })}
                    />
                </>
            )}
        </TabBarContainer>
    );
}

const TabBarContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: 2.5rem;
    height: auto;
    width: 100%;
`;

const StyledTabBar = styled.div<TabBarProps>`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    scrollbar-width: none;
    align-items: center;
    border-bottom: 1px solid ${tokens.kdsColorNeutral300};
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`;

TabBar.Button = TabBarButton;
