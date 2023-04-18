import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Icon, Icons } from '../icon';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * The HTML element or React element used to render the button, e.g. 'div', 'a', or RouterLink.
     * @default 'button'
     */
    as?: React.ElementType;
    /**
     * The ref to the button that the styled component renders.
     */
    buttonRef?: React.Ref<HTMLButtonElement>;
    /**
     * Content of the button
     */
    children?: React.ReactNode;
    /**
     * The color of the button
     * @default blue
     */
    color?: 'blue' | 'magenta';
    /**
     * Name of icon that renders left of text
     */
    iconLeft?: Icons;
    /**
     *  Name of icon that renders right of text
     */
    iconRight?: Icons;
    /**
     *  Disables the button|changing the visual style and make it unable to be pressed
     */
    isDisabled?: boolean;
    /**
     *  Selected state for when a button functions as a toggle/tab
     */
    isSelected?: boolean;
    /**
     * Handler to be called when the button is clicked
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     *  The size of the Button.
     *  @default large
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * React Router to prop
     */
    to?: string | (() => string) | { pathname: string; state: { previousLocation: string } };
    /**
     *  The behavior of the button when used in an HTML form.
     * @default button
     */
    type?: 'submit' | 'button' | 'reset';
    /**
     * The variant of the button style to use.
     * @default solid
     */
    variant?: 'solid' | 'outline' | 'ghost';
    /**
     * `Button` components are as wide as the content that is passed in. The `full` option will
     * expand the width to `100%` on all screens. `full-below-small` will expand the width to 100%
     * on devices smaller than our `small` breakpoint.
     * @default auto
     */
    width?: 'auto' | 'full' | 'full-below-small';
}

function getIconSize(buttonSize: string | undefined) {
    if (buttonSize === 'small') {
        return 14;
    }
    if (buttonSize === 'medium') {
        return 16;
    }
    if (buttonSize === 'large') {
        return 18;
    }
    return undefined;
}

export function Button({
    size = 'large',
    variant = 'solid',
    color = 'blue',
    isDisabled,
    isSelected = false,
    type = 'button',
    iconLeft,
    iconRight,
    buttonRef,
    width = 'auto',
    as = 'button',
    to,
    children,
    ...props
}: ButtonProps) {
    const iconSize = getIconSize(size);
    return (
        <StyledButton
            variant={variant}
            size={size}
            color={color}
            disabled={isDisabled}
            isSelected={isSelected}
            type={as === 'button' ? type : undefined}
            ref={buttonRef}
            width={width}
            as={as}
            to={to}
            tabIndex={0}
            {...props}
        >
            {iconLeft && (
                <IconLeft>
                    <Icon size={iconSize} icon={iconLeft} />
                </IconLeft>
            )}
            {children}
            {iconRight && (
                <IconRight>
                    <Icon size={iconSize} icon={iconRight} />
                </IconRight>
            )}
        </StyledButton>
    );
}

const IconLeft = styled.span`
    margin-right: 0.5rem;
    display: inherit;
    align-items: center;
`;

const IconRight = styled.span`
    margin-left: 0.75rem;
    display: inherit;
    align-items: center;
`;

export const StyledButton = styled.button<ButtonProps>`
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    position: relative;
    border: 1px solid transparent;
    text-decoration: none;
    z-index: 0;
    font-size: ${(props) => props.size && props.theme.button[props.size].fontSize};
    font-weight: ${(props) => props.size && props.theme.button[props.size].fontWeight};
    line-height: ${(props) => props.size && props.theme.button[props.size].lineHeight};
    letter-spacing: ${(props) => props.size && props.theme.button[props.size].letterSpacing};
    border-radius: ${(props) => props.size && props.theme.button[props.size].borderRadius};
    height: ${(props) => props.size && props.theme.button[props.size].height};

    ${(props) =>
        props.width &&
        props.width === 'auto' &&
        css`
            width: auto;
        `}

    ${(props) =>
        props.width &&
        props.width === 'full' &&
        css`
            width: 100%;
        `}

    ${(props) =>
        props.width &&
        props.width === 'full-below-small' &&
        css`
            width: 100%;

            @media (min-width: ${tokens.kdsBreakpointSmall}) {
                width: auto;
            }
        `}

        ${(props) =>
        props.variant === 'solid' &&
        props.color &&
        css`
            background: ${props.theme.button[props.color].background};
            border: 1px solid ${props.theme.button[props.color].border};
            color: ${props.theme.button[props.color].color};
            background-size: 200% auto;
            padding-left: ${props.size && props.theme.button[props.size].paddingLeft};
            padding-right: ${props.size && props.theme.button[props.size].paddingRight};

            &:focus:not(:focus-visible) {
                outline: none;
                box-shadow: none;
            }

            &:focus {
                outline: 0;
                color: ${props.theme.button[props.color].color};
                box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
                    0px 0px 0px 4px ${props.theme.button[props.color].boxShadowColor};
            }

            &:hover {
                background-position: center center;
                color: ${props.theme.button[props.color].color};
            }

            &:active {
                animation-name: push;
                animation-duration: 0.2s;
                animation-timing-function: linear;
                animation-iteration-count: 1;
            }
        `}

        ${(props) =>
        props.variant === 'outline' &&
        props.color &&
        css`
            color: ${props.theme.button[props.color].colorOutline};
            border: 1px solid ${props.theme.button[props.color].border};
            background: transparent;
            padding-left: ${props.size && props.theme.button[props.size].paddingLeft};
            padding-right: ${props.size && props.theme.button[props.size].paddingRight};

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

            &:focus:not(:focus-visible) {
                outline: none;
                box-shadow: none;
            }

            &:focus {
                outline: 0;
                color: ${props.theme.button[props.color].colorOutline};
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
        props.variant === 'outline' &&
        props.color &&
        props.isSelected &&
        css`
            color: ${props.theme.button[props.color].colorOutlineHover};

            &:focus {
                color: ${props.theme.button[props.color].colorOutlineHover};
            }

            &:before {
                width: calc(100% + 1px);
            }
        `}

    ${(props) =>
        props.variant === 'outline' &&
        props.color === 'blue' &&
        props.isSelected &&
        css`
            :after {
                content: '';
                display: block;
                position: absolute;
                left: calc(50% - 8px);
                top: 100%;
                width: 0;
                height: 0;
                border-bottom: 8px solid transparent;
                border-top: 8px solid ${props.theme.button[props.color].colorOutline};
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
            }

            &:active:after {
                border-top: 8px solid ${props.theme.button[props.color].backgroundActive};
            }
        `}

    ${(props) =>
        props.variant === 'ghost' &&
        props.color &&
        css`
            background: transparent;
            border: 1px solid transparent;
            color: ${props.theme.button.ghost[props.color].color};
            transition: background-color 0.12s ease-in-out;
            padding-left: 0;
            padding-right: 0;

            &:focus:not(:focus-visible) {
                outline: none;
                box-shadow: none;
            }

            &:focus {
                outline: 0;
                color: ${props.theme.button.ghost[props.color].color};
                box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
                    0px 0px 0px 4px ${props.theme.button.ghost[props.color].boxShadowColor};
            }

            &:hover:not(:disabled) {
                text-decoration: underline;
                color: ${props.theme.button.ghost[props.color].color};
            }

            &:active {
                color: ${props.theme.button.ghost[props.color].colorActive};
            }
        `}

    ${(props) =>
        props.disabled &&
        props.variant &&
        css`
            background: ${props.theme.button[props.variant].backgroundDisabled};
            border-color: ${props.theme.button[props.variant].borderDisabled};
            box-shadow: none;
            color: ${props.theme.button[props.variant].colorDisabled};
            opacity: 0.8;
            pointer-events: none;
            border-radius: 2px;
            &:before {
                width: 0;
            }
        `};

    @keyframes push {
        50% {
            transform: scale(0.98);
        }
        100% {
            transform: scale(1);
        }
    }
`;
