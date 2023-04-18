import { Icon } from 'components/atoms/icon';
import React from 'react';
import styled, { css } from 'styled-components';
import * as tokens from 'tokens/tokens';

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The title of the step
     */
    label?: string;
    /**
     * onClick handler
     */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /**
     * Set the status to visualize the completed, acitve and disabled steps.
     */
    status?: 'completed' | 'active' | 'disabled';
}

export function Step({ status, label, onClick, ...props }: StepProps) {
    const isOnClickEnabled = status === 'completed';

    return (
        <StyledStep status={status} onClick={isOnClickEnabled ? onClick : undefined} {...props}>
            <IconBackground status={status}>
                {status === 'completed' && <Icon icon="check" color="white" />}
            </IconBackground>
            <StyledLabel status={status}>{label}</StyledLabel>
        </StyledStep>
    );
}

const StyledStep = styled.div<Pick<StepProps, 'status' | 'onClick'>>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    z-index: 0;
    cursor: ${(props) => (props.onClick && props.status === 'completed' ? 'pointer' : 'default')};

    &::before {
        position: absolute;
        top: 10px;
        left: 0;
        display: block;
        width: 50%;
        height: 1px;
        z-index: -1;
        content: '';

        ${(props) =>
            props.status &&
            props.status === 'completed' &&
            css`
                background-color: ${(props) => props.theme.steps.accentColor};
            `}
        ${(props) =>
            props.status &&
            props.status === 'active' &&
            css`
                background-color: ${(props) => props.theme.steps.accentColor};
            `}
        ${(props) =>
            props.status &&
            props.status === 'disabled' &&
            css`
                background-color: ${tokens.kdsColorNeutral300};
            `}
    }

    &::after {
        position: absolute;
        top: 10px;
        right: 0;
        display: block;
        width: 50%;
        height: 1px;
        z-index: -1;
        content: '';

        ${(props) =>
            props.status &&
            props.status === 'completed' &&
            css`
                background-color: ${(props) => props.theme.steps.accentColor};
            `}
        ${(props) =>
            props.status &&
            props.status === 'active' &&
            css`
                background-color: ${tokens.kdsColorNeutral300};
            `}
        ${(props) =>
            props.status &&
            props.status === 'disabled' &&
            css`
                background-color: ${tokens.kdsColorNeutral300};
            `}
    }
`;

const StyledLabel = styled.div<Pick<StepProps, 'status'>>`
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 12px;

    ${(props) =>
        props.status &&
        props.status === 'completed' &&
        css`
            color: ${tokens.kdsColorNeutral400};
        `}
    ${(props) =>
        props.status &&
        props.status === 'active' &&
        css`
            color: ${(props) => props.theme.steps.accentColor};
        `}
    ${(props) =>
        props.status &&
        props.status === 'disabled' &&
        css`
            color: #afa49b;
        `}

    ${(props) =>
        props.status &&
        props.status !== 'active' &&
        css`
            @media (max-width: ${tokens.kdsBreakpointSmall}) {
                display: none;
            }
        `}
`;

const IconBackground = styled.div<Pick<StepProps, 'status'>>`
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;

    ${(props) =>
        props.status &&
        props.status === 'completed' &&
        css`
            background-color: ${(props) => props.theme.steps.accentColor};
        `}
    ${(props) =>
        props.status &&
        props.status === 'active' &&
        css`
            background-color: white;
            border: 1px solid ${(props) => props.theme.steps.accentColor};

            &::after {
                content: '';
                width: 10px;
                height: 10px;
                background-color: ${(props) => props.theme.steps.accentColor};
                border-radius: 9999px;
            }
        `}
    ${(props) =>
        props.status &&
        props.status === 'disabled' &&
        css`
            background-color: ${tokens.kdsColorNeutral300};
        `}
`;
