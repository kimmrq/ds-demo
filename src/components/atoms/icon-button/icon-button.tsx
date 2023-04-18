import React from 'react';
import styled, { css } from 'styled-components';

import { Icon, Icons } from '../icon';

export type IconButtonSize = 'small' | 'medium' | 'large';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The ref to the button that the styled component renders.
     */
    buttonRef?: React.Ref<HTMLButtonElement>;
    /**
     * The color of the icon
     */
    color?: string;
    /**
     * The icon of the IconButton.
     */
    icon?: Icons;
    /**
     *  Disables the button|changing the visual style and make it unable to be pressed
     */
    isDisabled?: boolean;
    /**
     * A11y: A label that describes the IconButton action
     */
    labelText: string;
    /**
     * Handler to be called when the button is clicked
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * The size of the IconButton.
     * @default small
     */
    size?: IconButtonSize;
    /**
     *  Type of button
     * @default button
     */
    type?: 'submit' | 'button' | 'reset';
    /**
     * The variant of the icon
     * @default default
     */
    variant?: 'default' | 'filled' | 'ghost' | 'inverse';
}

const iconButtonSizes = {
    small: '32px',
    medium: '40px',
    large: '48px',
};

export function getIconButtonSize(size: IconButtonSize) {
    if (typeof size === 'string') {
        if (size === 'small') {
            return 18;
        }
        if (size === 'medium') {
            return 21;
        }
        if (size === 'large') {
            return 24;
        }
        return undefined;
    }
    return undefined;
}

export function IconButton({
    size = 'small',
    buttonRef,
    icon,
    labelText,
    type = 'button',
    isDisabled,
    variant = 'default',
    color,
    onClick,
    ...props
}: IconButtonProps) {
    const iconButtonSize = getIconButtonSize(size);
    return (
        <StyledIconButton
            size={size}
            aria-label={labelText}
            type={type}
            onClick={onClick}
            variant={variant}
            color={color}
            disabled={isDisabled}
            ref={buttonRef}
            {...props}
        >
            <Icon size={iconButtonSize} icon={icon} />
        </StyledIconButton>
    );
}

const StyledIconButton = styled.button<Pick<IconButtonProps, 'size' | 'variant' | 'color'>>`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0px solid transparent;
    box-shadow: none;
    padding: 0;
    position: relative;
    cursor: pointer;
    outline: currentcolor none medium;
    transition: all 120ms ease-in 0s;
    min-height: ${(props) => props.size && iconButtonSizes[props.size]};
    height: ${(props) => props.size && iconButtonSizes[props.size]};
    min-width: ${(props) => props.size && iconButtonSizes[props.size]};
    width: ${(props) => props.size && iconButtonSizes[props.size]};
    background-color: ${(props) =>
        props.variant && props.theme.iconButton[props.variant].backgroundColor};
    color: ${(props) =>
        props.color ? props.color : props.variant && props.theme.iconButton[props.variant].color};

    &:hover {
        color: ${(props) =>
            props.color
                ? props.color
                : props.variant && props.theme.iconButton[props.variant].colorHover};
        background-color: ${(props) =>
            props.variant && props.theme.iconButton[props.variant].backgroundColorHover};
    }

    &:active {
        background-color: ${(props) =>
            props.variant && props.theme.iconButton[props.variant].backgroundColorActive};
    }

    &:focus:not(:focus-visible) {
        outline: none;
        box-shadow: none;
    }

    &:focus {
        border-color: transparent;
        outline: 0;
        box-shadow: ${(props) =>
            props.variant &&
            `rgb(255, 255, 255) 0px 0px 0px ${
                props.theme.iconButton[props.variant].boxShadowSpreadRadiusFirst
            }, ${props.theme.iconButton[props.variant].boxShadowColorFocus} 0px 0px 0px ${
                props.theme.iconButton[props.variant].boxShadowSpreadRadiusSecond
            }`};
    }

    &:disabled {
        color: ${(props) => props.variant && props.theme.iconButton[props.variant].colorDisabled};
        pointer-events: none;

        ${(props) =>
            props.variant &&
            props.variant === 'filled' &&
            css`
                background-color: transparent;
                border: 1px solid ${props.theme.iconButton[props.variant].colorDisabled};
            `}
    }
`;
