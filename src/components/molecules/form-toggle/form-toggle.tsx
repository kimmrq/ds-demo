import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { CardSpacing } from '../../atoms/card';
import { baseFormStyles } from '../form/form';

export interface FormToggleProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode;
    id?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    spacing?: CardSpacing;
    /**
     * Provides the toggle animation on the Form
     * 'edit' | 'read';
     */
    type: 'edit' | 'read';
}

interface AnimationProps {
    in?: boolean;
    transitionState?: TransitionStatus;
}

export function FormToggle({
    children,
    onSubmit,
    id,
    type,
    spacing = 'medium',
    ...props
}: FormToggleProps) {
    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <StyledForm onSubmit={onSubmit} id={id} spacing={spacing} {...props}>
            <div>
                <Transition nodeRef={targetRef} in={type === 'edit'} timeout={150}>
                    {(state) => <StyledAnimation ref={targetRef} transitionState={state} />}
                </Transition>
                {children}
            </div>
        </StyledForm>
    );
}

const StyledForm = styled.form<Pick<FormToggleProps, 'spacing'>>`
    ${baseFormStyles}

    ${(props) =>
        props.spacing === 'none' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing0};
        `}
    ${(props) =>
        props.spacing === 'medium' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing1} 16px;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                padding: ${(props) => props.theme.card.paddingSpacing1};
            }
        `}
    ${(props) =>
        props.spacing === 'large' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing2} 16px;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                padding: ${(props) => props.theme.card.paddingSpacing2};
            }
        `}
    ${(props) =>
        props.spacing === 'xlarge' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing3} 16px;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                padding: ${(props) => props.theme.card.paddingSpacing3};
            }
        `}
    ${(props) =>
        props.spacing === 'xxlarge' &&
        css`
            padding: ${(props) => props.theme.card.paddingSpacing4} 16px;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                padding: ${(props) => props.theme.card.paddingSpacing4};
            }
        `}
`;

const StyledAnimation = styled.div<AnimationProps>`
    transition: 0.2s;
    transition-timing-function: ease-out;
    width: 3px;
    background: ${tokens.kdsColorBlue500};
    position: absolute;
    left: 0;
    top: 0;

    height: ${(props) =>
        props.transitionState === 'entering' || props.transitionState === 'entered' ? 100 : 0}%;
`;
