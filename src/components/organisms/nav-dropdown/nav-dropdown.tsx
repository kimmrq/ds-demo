import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { NavDropdownContext } from './nav-dropdown-context';
import { NavDropdownItem } from './nav-dropdown-item';
import { NavDropdownMenu } from './nav-dropdown-menu';
import { NavDropdownSwitcher } from './nav-dropdown-switcher';
import { NavDropdownToggle } from './nav-dropdown-toggle';

export interface NavDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Children of the NavDropdownMenu
     */
    children: React.ReactNode;
    /**
     * Username
     */
    fullName?: string;
    /**
     * Url of the uploaded user profile image
     */
    imageUrl?: string;
    /**
     * Fallback initials when image is not available (max 2 characters)
     */
    initials?: string;
    /**
     * Name of the selected organization
     */
    organization?: string;
}

export function NavDropdown({
    fullName,
    organization,
    imageUrl,
    initials,
    children,
}: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickAway(event: Event) {
            if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener('click', handleClickAway);
        }
        return () => {
            document.removeEventListener('click', handleClickAway);
        };
    }, [isOpen]);

    const handleClick = (event: React.SyntheticEvent): void => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <NavDropdownContext.Provider value={{ isOpen, setIsOpen }}>
            <StyledNavDropdown>
                <NavDropdownToggle
                    onClick={handleClick}
                    fullName={fullName}
                    organization={organization}
                    imageUrl={imageUrl}
                    isOpen={isOpen}
                    initials={initials}
                />
                <NavDropdownMenu menuRef={nodeRef} isOpen={isOpen}>
                    {children}
                </NavDropdownMenu>
            </StyledNavDropdown>
        </NavDropdownContext.Provider>
    );
}

const StyledNavDropdown = styled.div`
    position: relative;
`;

export const StyledNavDropdownListDivider = styled.div`
    margin-bottom: 8px;
    margin-top: 8px;
    border-bottom: 1px solid #ecece6;
`;

export const StyledTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: ${(props) => props.theme.navDropdown.color};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 275px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 8px;
    padding-right: 8px;
`;

NavDropdown.Switcher = NavDropdownSwitcher;
NavDropdown.Divider = StyledNavDropdownListDivider;
NavDropdown.Item = NavDropdownItem;
NavDropdown.Title = StyledTitle;
