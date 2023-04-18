import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

export interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * InitialHeight in px
     */
    initialHeight?: string;
    /**
     When true it shows the children of the Collapse
     */
    isOpen?: boolean;
}

export function Collapse({
    children,
    isOpen = false,
    initialHeight = '0',
    ...props
}: CollapseProps) {
    const variants = {
        open: { height: 'auto' },
        closed: { height: `${initialHeight}` },
    };
    return (
        <StyledCollapse {...props}>
            <StyledMotionDiv
                key={initialHeight}
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ type: 'spring', stiffness: 300, damping: 50 }}
                variants={variants}
            >
                <StyledCollapseContent>{children}</StyledCollapseContent>
            </StyledMotionDiv>
        </StyledCollapse>
    );
}

const StyledCollapseContent = styled.div`
    padding-bottom: 16px;
`;

const StyledMotionDiv = styled(motion.div)`
    height: auto;
    overflow: hidden;
`;

const StyledCollapse = styled.div`
    margin: 0;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
`;
