import React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled, { css } from 'styled-components';

export interface CountdownButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Content of the button
     */
    children: React.ReactNode;
    /**
     * Button color: 'magenta' | 'blue';
     * @default magenta
     */
    color?: 'magenta' | 'blue';
    /**
     * Transition duration in milliseconds
     */
    duration?: number;
    /**
     * Starts the countdown transition and sets the button to disabled when true
     * @default false
     */
    isLoading?: boolean;
    /**
     * Handler to be called when the button is clicked
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * Button type
     * @default button
     */
    type?: 'button' | 'submit';
}

interface AnimationProps {
    duration?: number;
    in?: boolean;
    isLoading?: boolean;
    transitionState?: TransitionStatus;
}

export function CountdownButton({
    duration,
    type = 'button',
    color = 'magenta',
    onClick,
    children,
    isLoading = false,
    ...props
}: CountdownButtonProps) {
    return (
        <StyledCountdownButton
            duration={duration}
            color={color}
            type={type}
            onClick={onClick}
            isLoading={isLoading}
            {...props}
        >
            <StyledButtonText>{children}</StyledButtonText>

            <StyledProgressWrap>
                <Transition in={isLoading} timeout={150}>
                    {(state) => <StyledProgress transitionState={state} duration={duration} />}
                </Transition>
            </StyledProgressWrap>
        </StyledCountdownButton>
    );
}

const StyledCountdownButton = styled.button<CountdownButtonProps>`
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    position: relative;
    border: 1px solid transparent;
    text-decoration: none;
    z-index: 1;
    border-radius: ${(props) => props.theme.button.medium.borderRadius};
    padding-left: ${(props) => props.theme.button.medium.paddingLeft};
    padding-right: ${(props) => props.theme.button.medium.paddingRight};
    height: ${(props) => props.theme.button.medium.height};
    overflow: hidden;

    ${(props) =>
        props.color &&
        css`
            color: ${props.theme.button[props.color].colorOutline};
            border: 1px solid ${props.theme.button[props.color].border};
            background: transparent;

            &:before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: ${props.theme.button[props.color].background};
                z-index: -1;
                width: 0;
                transition: all 0.2s ease-out;
                transform-origin: left top;
            }
            &:focus {
                outline: 0;
                box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
                    0px 0px 0px 4px ${props.theme.button[props.color].boxShadowColor};
            }

            &:hover {
                color: ${props.theme.button[props.color].colorOutlineHover};
                &:before {
                    width: calc(100% + 1px);
                }
            }

            &:active {
                animation-name: push;
                animation-duration: 0.2s;
                animation-timing-function: linear;
                animation-iteration-count: 1;
            }
        `}

    ${(props) =>
        props.isLoading &&
        css`
            background: transparent;
            border-color: #ecece6;
            color: #a69a91;
            pointer-events: none;
            box-shadow: none;
            opacity: 0.8;
            border-radius: 0px;
            &:before {
                width: 0;
            }
        `};
`;

const StyledProgressWrap = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: -1;
`;

const StyledProgress = styled.div<AnimationProps>`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #ecece6;
    transition: width
        ${(props) =>
            props.transitionState === 'entering' || props.transitionState === 'entered'
                ? props.duration
                : 0}ms
        ease;
    width: ${(props) =>
        props.transitionState === 'entering' || props.transitionState === 'entered' ? 100 : 0}%;
`;

const StyledButtonText = styled.span`
    color: inherit;
    font-size: ${(props) => props.theme.button.medium.fontSize};
    font-weight: ${(props) => props.theme.button.medium.fontWeight};
    line-height: ${(props) => props.theme.button.medium.lineHeight};
    letter-spacing: ${(props) => props.theme.button.medium.letterSpacing};
`;
