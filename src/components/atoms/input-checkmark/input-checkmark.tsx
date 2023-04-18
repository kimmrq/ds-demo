import React from 'react';
import styled, { css } from 'styled-components';

import { useUniqueId } from '../../../hooks/use-unique-id';
import * as tokens from '../../../tokens/tokens';
import { Icon } from '../icon/icon';
import { RadioProps } from '../radio/radio';

export interface InputCheckmarkProps extends RadioProps {
    accentColor?: 'magenta' | 'blue';
    bodyText?: string;
    /**
     * Display the button to fullwidth; Usefull for mobile layouts or in column layouts - see RadioGroup
     */
    isFullWidth?: boolean;
    variant?: 'single-line' | 'multi-line';
}

export function InputCheckmark({
    checked = false,
    disabled = false,
    id,
    inputRef,
    label = '',
    onChange,
    value,
    name,
    isFullWidth = false,
    variant = 'single-line',
    accentColor = 'blue',
    bodyText,
    ...props
}: InputCheckmarkProps) {
    const inputId = useUniqueId(id);
    return (
        <StyledInputContainer isFullWidth={isFullWidth} variant={variant}>
            <StyledInputCheckmark
                id={inputId}
                ref={inputRef}
                onChange={onChange}
                checked={checked}
                aria-checked={checked}
                disabled={disabled}
                value={value}
                name={name}
                type="checkbox"
                {...props}
            />
            {variant === 'single-line' ? (
                <StyledInputLabel htmlFor={inputId}>{label}</StyledInputLabel>
            ) : (
                <StyledMultiLineLabel htmlFor={inputId}>
                    <StyledMultiLineHeader>{label}</StyledMultiLineHeader>
                    <StyledMultiLineText>{bodyText}</StyledMultiLineText>
                </StyledMultiLineLabel>
            )}
            {checked && (
                <StyledCheckmark accentColor={accentColor}>
                    <Icon icon="check" color="#fff" />
                </StyledCheckmark>
            )}
        </StyledInputContainer>
    );
}

export const StyledInputContainer = styled.div<
    Pick<InputCheckmarkProps, 'isFullWidth' | 'variant'>
>`
    ${(props) =>
        props.variant === 'multi-line' &&
        css`
            position: relative;
            display: inline-flex;
            flex-direction: column;
            max-width: 210px;
        `}
    ${(props) =>
        props.variant === 'single-line' &&
        css`
            position: relative;
            display: inline-block;
        `}

    ${(props) =>
        props.isFullWidth &&
        props.variant === 'single-line' &&
        css`
            display: block;
            & > label {
                display: block;
                width: 100%;
            }
        `}

    ${(props) =>
        props.isFullWidth &&
        props.variant === 'multi-line' &&
        css`
            width: 100%;
            max-width: 100%;
        `}
`;

const StyledInputCheckmark = styled.input<InputCheckmarkProps>`
    opacity: 0;
    position: fixed;
    width: 0;

    &:focus,
    &:active {
        outline: none;
    }
    &:hover + label {
        border: 1px solid ${(props) => props.theme.inputCheckmark.borderColorHover};
    }
    &:focus + label {
        border: 1px solid ${(props) => props.theme.inputCheckmark.borderColor};
        box-shadow: inset 0 0 0 2px ${(props) => props.theme.inputCheckmark.borderColor};
    }
    &:focus:not(:focus-visible) + label {
        border: 1px solid ${(props) => props.theme.inputCheckmark.borderColor};
        box-shadow: none;
    }
    &:focus:hover + label {
        box-shadow: inset 0 0 0 2px ${(props) => props.theme.inputCheckmark.borderColorHover},
            ${(props) => props.theme.inputCheckmark.boxShadow};
    }
    &:checked:focus:not(:focus-visible) + label {
        border: 1px solid ${(props) => props.theme.inputCheckmark.borderColor};
        box-shadow: ${(props) => props.theme.inputCheckmark.boxShadow};
    }
    &:checked + label {
        border: 1px solid ${(props) => props.theme.inputCheckmark.borderColor};
        box-shadow: ${(props) => props.theme.inputCheckmark.boxShadow};
    }
    &:checked:focus + label {
        border: 1px solid ${(props) => props.theme.inputCheckmark.borderColor};
        box-shadow: ${(props) => props.theme.inputCheckmark.boxShadow};
    }
    ${(props) =>
        props.disabled &&
        css`
            + label {
                border: 1px solid ${(props) => props.theme.inputCheckmark.borderColor};
                user-select: none;
                cursor: not-allowed;
                color: ${(props) => props.theme.inputCheckmark.colorDisabled};
            }
        `};
`;

const StyledInputLabel = styled.label`
    display: block;
    font-family: ${(props) => props.theme.inputCheckmark.fontFamily};
    font-size: ${(props) => props.theme.inputCheckmark.fontSize};
    line-height: ${(props) => props.theme.inputCheckmark.lineHeight};
    font-weight: ${(props) => props.theme.inputCheckmark.fontWeight};
    border: 1px solid ${(props) => props.theme.inputCheckmark.borderColor};
    border-radius: 10px;
    color: ${(props) => props.theme.inputCheckmark.color};
    border: 1px solid ${(props) => props.theme.inputCheckmark.borderColor};
    padding: 11px 24px;
    transition: all 0.2s ease-out;
    cursor: pointer;
    margin: 0 0;

    ::selection {
        background: transparent;
    }

    @media (max-width: calc(${tokens.kdsBreakpointSmall} - 1px)) {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (min-width: ${tokens.kdsBreakpointSmall}) {
        display: inline-block;
    }
`;

const StyledCheckmark = styled.div<Pick<InputCheckmarkProps, 'accentColor'>>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%) scale(1);
    opacity: 1;
    animation: scaleUp 0.2s cubic-bezier(0.75, -0.5, 0, 1.75);
    border-radius: 9999px;

    ${(props) =>
        props.accentColor &&
        css`
            background-color: ${props.theme.inputCheckmark[props.accentColor].backgroundColor};
        `}

    @keyframes scaleUp {
        0% {
            transform: translate(50%, -50%) scale(0);
            opacity: 0;
        }

        100% {
            transform: translate(50%, -50%) scale(1);
            opacity: 1;
        }
    }
`;

const StyledMultiLineLabel = styled.label<InputCheckmarkProps>`
    display: block;
    font-family: ${(props) => props.theme.inputCheckmark.fontFamily};
    font-size: ${(props) => props.theme.inputCheckmark.fontSize};
    line-height: ${(props) => props.theme.inputCheckmark.lineHeight};
    font-weight: ${(props) => props.theme.inputCheckmark.fontWeight};
    border: 1px solid ${(props) => props.theme.inputCheckmark.borderColor};
    padding: 20px;
    transition: all 0.2s ease-out;
    cursor: pointer;
    margin: 0 0;
`;

const StyledMultiLineText = styled.span`
    margin: 0 0;
    color: ${(props) => props.theme.inputCheckmark.multiLine.bodyTextColor};
`;

const StyledMultiLineHeader = styled.span`
    display: block;
    word-break: break-word;
    hyphens: auto;
    margin: 0 0 8px 0;
    font-weight: ${(props) => props.theme.inputCheckmark.multiLine.labelFontWeight};
    color: ${(props) => props.theme.inputCheckmark.multiLine.color};
`;
