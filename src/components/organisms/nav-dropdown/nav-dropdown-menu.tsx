import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

export interface NavDropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Children
     */
    children: React.ReactNode;
    /**
     * Animates the menu when toggled
     */
    isOpen: boolean;
    /**
     * Reference to the DOM Node
     */
    menuRef?: React.Ref<HTMLDivElement>;
}

const NavDropdownMenuVariants = {
    expanded: {
        opacity: 1,
        display: 'flex',
        y: 0,
    },
    collapsed: {
        opacity: 0,
        y: -10,
        transitionEnd: {
            display: 'none',
        },
    },
};

export function NavDropdownMenu({ isOpen, menuRef, children, ...props }: NavDropdownMenuProps) {
    return (
        <motion.div
            initial={isOpen ? 'expanded' : 'collapsed'}
            animate={isOpen ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.15 }}
            variants={NavDropdownMenuVariants}
        >
            <StyledNavDropdownMenu ref={menuRef} isOpen={isOpen} {...props}>
                <Wrapper>{children}</Wrapper>
            </StyledNavDropdownMenu>
        </motion.div>
    );
}

const StyledNavDropdownMenu = styled.div<NavDropdownMenuProps>`
    position: absolute;
    right: 0;
    margin-top: 24px;
    z-index: 999;
`;
const Wrapper = styled.div`
    padding: 16px;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
    display: flex;
    flex-direction: column;
    background-color: white;
    min-width: 300px;
`;
