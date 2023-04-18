/* eslint-disable no-case-declarations */
import { debounce } from 'lodash';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import styled from 'styled-components';

import { NavBarLink } from './nav-bar-link';
import { NavBarMenu, NavBarMenuProps } from './nav-bar-menu';

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
    children: Array<React.ReactNode | React.ReactElement>;
}

export interface PriorityNavState {
    children: Array<React.ReactElement>;
    dropdownItems: Array<React.ReactElement>;
    lastItemWidth: number[];
}

// Define the possible actions that can be dispatched to the state reducer.
type Action =
    | { payload: { lastItem: HTMLLIElement | undefined }; type: 'move' }
    | { type: 'return' }
    | { type: 'update' };

// Define a utility function for filtering out non-ReactElement children.
export function getValidChildren(children: React.ReactNode) {
    return React.Children.toArray(children).filter((child) =>
        React.isValidElement(child),
    ) as React.ReactElement[];
}

export function NavBar({ children, ...props }: NavBarProps) {
    const [openChildIndex, setOpenChildIndex] = useState<number | 'more'>();

    // Define the state reducer function.
    function reducer(state: PriorityNavState, action: Action): PriorityNavState {
        switch (action.type) {
            case 'move':
                const lastChild = state.children.reduceRight((child) => child);
                const newChildren = state.children.filter((child) => child !== lastChild);
                return {
                    ...state,
                    children: newChildren,
                    dropdownItems: [...state.dropdownItems, lastChild],
                    ...(action.payload.lastItem && {
                        lastItemWidth: [
                            ...state.lastItemWidth,
                            action.payload.lastItem.clientWidth,
                        ],
                    }),
                };
            case 'return':
                const copyDropdownItems = [...state.dropdownItems];
                const lastItemFromList = copyDropdownItems.splice(-1, 1);
                const lastItemWidth = [...state.lastItemWidth];
                lastItemWidth.splice(-1, 1);
                return {
                    children: [...state.children, ...lastItemFromList],
                    dropdownItems: copyDropdownItems,
                    lastItemWidth,
                };
            case 'update':
                const validChildren = getValidChildren(children);
                return {
                    children: validChildren,
                    dropdownItems: [],
                    lastItemWidth: [],
                };

            default:
                return state;
        }
    }

    const navBar = useRef<HTMLElement>(null);
    const navBarList = useRef<HTMLUListElement>(null);
    const items = useRef(new Map<number, HTMLLIElement>()).current;

    const validChildren = getValidChildren(children);

    const initialState: PriorityNavState = {
        children: validChildren,
        dropdownItems: [],
        lastItemWidth: [],
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    // Define a function for checking if the items fit in the NavBar or need to be moved to the dropdown.
    function doesItFit() {
        if (navBar.current && navBarList.current) {
            const dropdownWidth = 116;
            const outerWidth = navBar.current.offsetWidth;
            const totalWidth = navBarList.current.scrollWidth;

            if (state.children.length > 1 && totalWidth > outerWidth) {
                moveItemToList();
            } else if (
                state.dropdownItems.length > 1 &&
                outerWidth > totalWidth + state.lastItemWidth[state.lastItemWidth.length - 1]
            ) {
                moveItemToNav();
            } else if (
                state.dropdownItems.length === 1 &&
                outerWidth >
                    totalWidth - dropdownWidth + state.lastItemWidth[state.lastItemWidth.length - 1]
            ) {
                moveItemToNav();
            }
        }
    }

    const debouncedDoesItFit = debounce(doesItFit, 100);

    useEffect(() => {
        doesItFit();
        window.addEventListener('resize', debouncedDoesItFit);

        return () => {
            window.removeEventListener('resize', debouncedDoesItFit);
        };
    });

    const updateChildren = () => {
        dispatch({
            type: 'update',
        });
    };

    useEffect(() => {
        updateChildren();
    }, [children]);

    const moveItemToList = () => {
        dispatch({
            type: 'move',
            payload: {
                lastItem: items.get(state.children.length - 1),
            },
        });
    };

    const moveItemToNav = () => {
        dispatch({
            type: 'return',
        });
    };

    const handleClick = () => {
        if (openChildIndex === 'more') {
            setOpenChildIndex(undefined);
        } else {
            setOpenChildIndex('more');
        }
    };

    return (
        <Wrapper {...props}>
            <StyledNavBar ref={navBar}>
                <StyledNavBarList ref={navBarList}>
                    {React.Children.map(state.children, (child, index) => {
                        if (React.isValidElement(child)) {
                            if (child.type === NavBar.Menu) {
                                return (
                                    <StyledNavBarListItem
                                        key={index}
                                        ref={(element: HTMLLIElement) => {
                                            if (element) {
                                                items.set(index, element);
                                            }
                                        }}
                                    >
                                        {React.cloneElement(
                                            child as React.ReactElement<NavBarMenuProps>,
                                            {
                                                isOpen: openChildIndex === index,
                                                onOpen: () => setOpenChildIndex(index),
                                                onClose: () => setOpenChildIndex(undefined),
                                                onCloseAll: () => setOpenChildIndex(undefined),
                                            },
                                        )}
                                    </StyledNavBarListItem>
                                );
                            }

                            return (
                                <StyledNavBarListItem
                                    key={index}
                                    ref={(element: HTMLLIElement) => {
                                        if (element) {
                                            items.set(index, element);
                                        }
                                    }}
                                >
                                    {child}
                                </StyledNavBarListItem>
                            );
                        }
                        return;
                    })}

                    {state.dropdownItems.length > 0 && (
                        <NavBarMenu
                            icon="more"
                            title="Meer"
                            isOpen={openChildIndex === 'more'}
                            onOpen={handleClick}
                            onClose={handleClick}
                            onCloseAll={handleClick}
                        >
                            {state.dropdownItems.slice(0).reverse()}
                        </NavBarMenu>
                    )}
                </StyledNavBarList>
            </StyledNavBar>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    overflow: auto;
`;

const StyledNavBar = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
`;

const StyledNavBarList = styled.ul`
    display: flex;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
    scrollbar-width: none;
    overflow: auto hidden;
    width: auto;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const StyledNavBarListItem = styled.li`
    display: flex;
    flex-shrink: 0;
`;

NavBar.Link = NavBarLink;
NavBar.Menu = NavBarMenu;
