import React, { useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import styled from 'styled-components';
import * as tokens from 'tokens/tokens';

import { useOutsideClick } from '../../../hooks/use-outside-click';
import { Icon, Icons } from '../../atoms/icon';
import { StyledNavBarMenuLink } from './nav-bar-link';
import { NavBarLinkContext } from './nav-bar-link-context';

export interface NavBarMenuProps extends React.HTMLAttributes<HTMLElement> {
    children: Array<React.ReactNode | React.ReactElement>;
    icon?: Icons;
    isOpen?: boolean;
    onClose?: () => void;
    onCloseAll?: () => void;
    onOpen?: () => void;
    title: string;
}

export function NavBarMenu({
    icon,
    title,
    isOpen,
    onOpen,
    onClose,
    onCloseAll,
    children,
    ...props
}: NavBarMenuProps) {
    const [openChildIndex, setOpenChildIndex] = useState<number>();
    const { isMenuItem } = useContext(NavBarLinkContext);

    // If menu is closed but there's an open child, set child to undefined
    if (!isOpen && openChildIndex) {
        setOpenChildIndex(undefined);
    }

    // Define state variables for popper, and use the usePopper hook
    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement: isMenuItem ? 'right-start' : 'bottom-start',
        strategy: 'fixed',
    });

    const navBarMenuRef = useRef<HTMLDivElement>(null);
    const navBarMenuListRef = useRef<HTMLUListElement>(null);

    // Add event listener for outside clicks using useOutsideClick hook
    useOutsideClick({
        ref: navBarMenuRef,
        handler: (event) => {
            if (
                isOpen &&
                onClose &&
                !navBarMenuListRef.current?.contains(event.target as HTMLElement)
            ) {
                setOpenChildIndex(undefined);
                onClose();
            }
        },
    });

    // useEffect hook to run update function when the children array changes
    useEffect(() => {
        if (update) {
            update();
        }
    }, [children, update]);

    // Define handleClick function to handle menu clicks
    const handleClick = () => {
        if (update) {
            update();
        }
        if (isOpen && onClose) {
            setOpenChildIndex(undefined);
            onClose();
        }
        if (!isOpen && onOpen) {
            onOpen();
        }
    };

    // Define handleCloseAll function to handle closing all menus
    const handleCloseAll = () => {
        setOpenChildIndex(undefined);
        if (onCloseAll) {
            onCloseAll();
        }
    };
    // If the menu is a menu item (i.e. not the root menu), render
    if (isMenuItem) {
        return (
            <>
                <StyledNavBarMenuLink onClick={handleClick} ref={setReferenceElement} as="div">
                    {icon && <StyledIconLeft icon={icon} size={16} />}
                    {title}
                    <StyledIconRight icon="caret-right" size={18} />
                </StyledNavBarMenuLink>

                <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                    <StyledNavBarMenuList isOpen={isOpen || false}>
                        {children.map((child, index) => {
                            if (React.isValidElement(child)) {
                                const isMenuItem = true;
                                if (child.type === NavBarMenu) {
                                    return (
                                        <React.Fragment key={index}>
                                            <NavBarLinkContext.Provider value={{ isMenuItem }}>
                                                {React.cloneElement(child, {
                                                    isOpen: openChildIndex === index,
                                                    onOpen: () => setOpenChildIndex(index),
                                                    onClose: () => setOpenChildIndex(undefined),
                                                    onCloseAll: handleCloseAll,
                                                })}
                                            </NavBarLinkContext.Provider>
                                        </React.Fragment>
                                    );
                                }
                                return (
                                    <StyledNavBarMenuListItem key={index}>
                                        <NavBarLinkContext.Provider value={{ isMenuItem }}>
                                            {React.cloneElement(child, {
                                                onClick: handleCloseAll,
                                            })}
                                        </NavBarLinkContext.Provider>
                                    </StyledNavBarMenuListItem>
                                );
                            }
                            return;
                        })}
                    </StyledNavBarMenuList>
                </div>
            </>
        );
    }

    return (
        <StyledNavBarMenu ref={navBarMenuRef} {...props}>
            <StyledNavBarMenuButton onClick={handleClick} ref={setReferenceElement}>
                {icon && <StyledIconLeft icon={icon} size={16} />}
                {title}
                <StyledIconRight icon="caret-down" size={18} />
            </StyledNavBarMenuButton>
            {ReactDOM.createPortal(
                <StyledPopperContainer
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    <StyledNavBarMenuList ref={navBarMenuListRef} isOpen={isOpen || false}>
                        {children.map((child, index) => {
                            if (React.isValidElement(child)) {
                                const isMenuItem = true;
                                if (child.type === NavBarMenu) {
                                    return (
                                        <StyledNavBarMenuListItem key={index}>
                                            <NavBarLinkContext.Provider value={{ isMenuItem }}>
                                                {React.cloneElement(child, {
                                                    isOpen: openChildIndex === index,
                                                    onOpen: () => setOpenChildIndex(index),
                                                    onClose: () => setOpenChildIndex(undefined),
                                                    onCloseAll: handleCloseAll,
                                                })}
                                            </NavBarLinkContext.Provider>
                                        </StyledNavBarMenuListItem>
                                    );
                                }
                                return (
                                    <StyledNavBarMenuListItem key={index}>
                                        <NavBarLinkContext.Provider value={{ isMenuItem }}>
                                            {React.cloneElement(child, {
                                                onClick: handleCloseAll,
                                            })}
                                        </NavBarLinkContext.Provider>
                                    </StyledNavBarMenuListItem>
                                );
                            }

                            return;
                        })}
                    </StyledNavBarMenuList>
                </StyledPopperContainer>,
                document.body,
            )}
        </StyledNavBarMenu>
    );
}

const StyledNavBarMenuListItem = styled.li`
    display: flex;
`;

const StyledNavBarMenuButton = styled.button`
    display: flex;
    align-items: center;
    padding: 16px 12px;
    color: ${tokens.kdsColorNeutral900};
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    height: 30px;
    background-color: transparent;
    border: none;
    border-radius: 3px;

    &:hover {
        background-color: ${tokens.kdsColorNeutral200};
    }

    &:focus:not(:focus-visible) {
        outline: none;
        box-shadow: none;
    }

    &:focus {
        outline: 0;
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, 0px 0px 0px 4px ${tokens.kdsColorBlue300};
    }
`;

const StyledIconLeft = styled(Icon)`
    margin-right: 8px;
    color: ${tokens.kdsColorNeutral400};
`;
const StyledIconRight = styled(Icon)`
    margin-left: auto;
    color: ${tokens.kdsColorNeutral900};
`;

const StyledNavBarMenu = styled.div`
    position: relative;
    display: inline-block;
    align-self: center;
    margin-right: 16px;
`;

const StyledNavBarMenuList = styled.ul<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    padding: 8px 0;
    background-color: ${tokens.kdsColorWhite};
    border-radius: 3px;
    list-style: none;
    box-shadow: 0px 4px 24px -4px rgba(219, 213, 208, 0.75);
    overflow: auto;
    max-height: calc(100vh - 64px);
    white-space: nowrap;
`;

const StyledPopperContainer = styled.div`
    z-index: 999;
`;
