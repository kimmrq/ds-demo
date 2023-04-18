import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { CardSpacing } from '../../atoms/card';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode;
    id?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    spacing?: CardSpacing;
}

export function Form({ children, onSubmit, id, spacing = 'medium', ...props }: FormProps) {
    return (
        <StyledForm onSubmit={onSubmit} id={id} spacing={spacing} {...props}>
            {children}
        </StyledForm>
    );
}

export const baseFormStyles = css`
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    box-shadow: ${(props) => props.theme.form.boxShadow};
    background: #fff;
    position: relative;

    &:not(:last-child) {
        margin: ${(props) => props.theme.form.margin};
    }
`;

const StyledForm = styled.form<FormProps>`
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
