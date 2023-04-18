import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { CardProps } from '../card/card';
import { Link, LinkColor } from '../link';
import { H2 } from '../text';

export interface CardCollapseProps extends CardProps, React.HTMLAttributes<HTMLDivElement> {
    buttonText: string;
    buttonVariant?: LinkColor;
    initialHeight?: string;
    isOpen?: boolean;
    onClick: (event: React.SyntheticEvent) => void;
    spacing?: 'none' | 'medium';
}

export function CardCollapse({
    heading,
    spacing = 'medium',
    boxShadow = 'level2',
    children,
    isOpen = false,
    initialHeight = '0',
    onClick,
    buttonText,
    buttonVariant = 'blue',
    ...props
}: CardCollapseProps) {
    const variants = {
        open: { height: 'auto' },
        closed: { height: `${initialHeight}` },
    };
    return (
        <StyledCard boxShadow={boxShadow} {...props}>
            {heading && <StyledCardHeader>{heading}</StyledCardHeader>}
            <StyledMotionDiv
                key={initialHeight}
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ type: 'spring', stiffness: 300, damping: 50 }}
                variants={variants}
            >
                <StyledCardBody spacing={spacing}>{children}</StyledCardBody>
            </StyledMotionDiv>
            <StyledCardFooter>
                <Link
                    color={buttonVariant}
                    iconLeft={isOpen ? 'caret-up' : 'caret-down'}
                    onClick={onClick}
                    style={{ fontSize: '14px', fontWeight: buttonVariant === 'blue' ? 500 : 400 }}
                >
                    {buttonText}
                </Link>
            </StyledCardFooter>
        </StyledCard>
    );
}

const StyledCardBody = styled.div<Pick<CardCollapseProps, 'spacing'>>`
    ${(props) =>
        props.spacing === 'none' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing0};
        `}
    ${(props) =>
        props.spacing === 'medium' &&
        css`
            padding: 0 16px 16px 16px;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                padding: 0px ${(props) => props.theme.card.paddingSpacing1}
                    ${(props) => props.theme.card.paddingSpacing1};
            }
        `}
`;

const StyledMotionDiv = styled(motion.div)`
    height: auto;
    overflow: hidden;
`;

const StyledCardFooter = styled.div`
    border-top: 1px solid ${tokens.kdsColorNeutral200};
    padding: 16px;

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        padding: 16px ${(props) => props.theme.card.paddingSpacing1};
    }
`;

const StyledCard = styled.div<Pick<CardCollapseProps, 'boxShadow'>>`
    margin: 0;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;

    ${(props) =>
        props.boxShadow === 'none' &&
        css`
            box-shadow: ${(props) => props.theme.card.boxShadowNone};
        `}
    ${(props) =>
        props.boxShadow === 'level1' &&
        css`
            box-shadow: ${(props) => props.theme.card.boxShadowLevel1};
        `}
    ${(props) =>
        props.boxShadow === 'level2' &&
        css`
            box-shadow: ${(props) => props.theme.card.boxShadowLevel2};
        `}
    ${(props) =>
        props.boxShadow === 'level3' &&
        css`
            box-shadow: ${(props) => props.theme.card.boxShadowLevel3};
        `}
`;

const StyledCardHeader = styled(H2)`
    margin-top: 0px;
    padding: ${(props) => props.theme.card.paddingSpacing1} 16px;

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        padding: ${(props) => props.theme.card.paddingSpacing1};
    }
`;
