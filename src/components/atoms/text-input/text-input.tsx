import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import * as tokens from 'tokens/tokens';

import { Feedback } from '../feedback';
import { IconButton } from '../icon-button';
import { IconButtonProps } from '../icon-button/icon-button';

export type IconButtonSelectionProps = Pick<IconButtonProps, 'icon' | 'labelText'>;
export type TextInputSuffix = Required<IconButtonSelectionProps> & {
    /**
     * Add a suffix IconButton inside input with a optional clickhandler,
     * Suffix inherits props from IconButton 'icon' and 'labelText'
     */
    onSuffixClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Visually and functionally disable the input.
     */
    disabled?: boolean;
    /**
     * Displays the error message.
     */
    error?: string;
    /**
     * Set the width manually for the feedback component.
     */
    feedbackSize?: string | number;
    /**
     * Fires when the input loses focus, regardless of whether the value has changed.
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    /**
     * The function that is called when the input value changes.
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * Fires when the enter key is pressed.
     */
    onEnterKeyPress?: () => void;
    /**
     * Adds a suffix icon inside input with a input clearhandler
     */
    onReset?: () => void;
    /**
     * Text that appears within the input when there is no `value`.
     */
    placeholder?: string;
    /**
     * Adds `readonly` HTML attribute, allowing users to select (but not modify) the input.
     */
    readOnly?: boolean;
    /**
     * Display an suffix IconButton in the input (accepts: icon, labelText, onSuffixClick)
     */
    suffix?: TextInputSuffix;
    /**
     * Sets the `type` attribute on the input element.
     * @default text
     */
    type?: string;
    /**
     * The current value of the input.
     */
    value: string;
}

export function TextInput({
    onChange,
    onEnterKeyPress,
    onBlur,
    value,
    placeholder,
    disabled,
    error,
    readOnly,
    name,
    type = 'text',
    feedbackSize,
    suffix,
    onReset,
    ...props
}: TextInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const renderSuffix = (suffix: TextInputSuffix) => {
        return (
            <IconButton
                icon={suffix.icon}
                labelText={suffix.labelText}
                onClick={suffix.onSuffixClick}
                variant="ghost"
                size="small"
                tabIndex={-1}
                disabled={disabled}
            />
        );
    };

    const renderClearIcon = () => {
        if (disabled || readOnly) {
            return;
        }

        return renderSuffix({
            icon: 'close',
            labelText: 'clear-icon',
            onSuffixClick: onReset,
        });
    };

    return (
        <StyledInputContainer
            error={error}
            disabled={disabled}
            onReset={onReset}
            readOnly={readOnly}
            suffix={suffix}
        >
            <StyledTextInput
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                readOnly={readOnly}
                onKeyPress={(event) => {
                    if (event.key === 'Enter' && onEnterKeyPress) {
                        event.preventDefault();
                        onEnterKeyPress();
                    }
                }}
                error={error}
                ref={inputRef}
                tabIndex={readOnly ? -1 : 0}
                {...props}
            />
            <StyledIconButtonWrapper>
                {onReset && value && renderClearIcon()}
                {onReset && value && suffix && <StyledButtonDivider />}
                {suffix && renderSuffix(suffix)}
            </StyledIconButtonWrapper>
            {error && (
                <StyledFeedbackContainer error={error}>
                    <Feedback key="feedback" error={error} size={feedbackSize} />
                </StyledFeedbackContainer>
            )}
        </StyledInputContainer>
    );
}

export const baseInputStyles = css`
    font-size: ${(props) => props.theme.textField.fontSize};
    font-family: ${(props) => props.theme.textField.fontFamily};
    color: ${(props) => props.theme.textField.color};
    font-weight: ${(props) => props.theme.textField.fontWeight};
    height: ${(props) => props.theme.textField.height};
    width: 100%;
    line-height: ${(props) => props.theme.textField.lineHeight};
    background-color: ${(props) => props.theme.textField.backgroundColor};
    border-bottom: 1px solid;
    border-top-color: ${(props) => props.theme.textField.borderColorTransparent};
    border-left-color: ${(props) => props.theme.textField.borderColorTransparent};
    border-right-color: ${(props) => props.theme.textField.borderColorTransparent};
    border-bottom-color: ${(props) => props.theme.textField.borderColor};
    border-radius: 0;
    box-shadow: none;
    padding: calc(8px - 1px) 0;
    appearance: none;
    align-items: center;
    display: flex;
    flex: 1 1 0%;
    flex-wrap: wrap;

    &:hover {
        border-bottom-color: ${(props) => props.theme.textField.borderColorHover};
    }

    &:focus {
        outline: none;
        border-bottom-color: ${(props) => props.theme.textField.borderColorFocus};
    }

    &::placeholder {
        font-weight: ${(props) => props.theme.textField.placeholder.fontWeight};
        color: ${(props) => props.theme.textField.placeholder.color};
        opacity: 1;
    }

    /* Remove clear icon Egde */
    ::-ms-clear {
        display: none;
    }
`;

const StyledFeedbackContainer = styled.div<Pick<TextInputProps, 'error'>>`
    ${(props) =>
        props.error &&
        css`
            position: absolute;
            top: calc(${(props) => props.theme.textField.height} + 4px);
            left: 0;
        `}
`;

const StyledIconButtonWrapper = styled.div`
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-shrink: 0;
`;

const StyledButtonDivider = styled.span`
    align-self: stretch;
    background-color: ${tokens.kdsColorNeutral300};
    margin-bottom: 8px;
    margin-top: 8px;
    width: 1px;
    box-sizing: border-box;
    margin-left: 2px;
    margin-right: 2px;
`;

const StyledInputContainer = styled.div<
    Pick<TextInputProps, 'error' | 'onReset' | 'suffix' | 'disabled' | 'readOnly'>
>`
    ${(props) =>
        props.error &&
        css`
            position: relative;
            margin-bottom: ${(props) => props.theme.textField.height};
        `}

    ${(props) =>
        (props.suffix || props.onReset) &&
        css`
            display: flex;
            justify-content: space-between;
            align-items: center;

            box-shadow: inset 0 -1px 0 0 ${(props) => props.theme.textField.borderColor};

            &:hover {
                box-shadow: inset 0 -1px 0 0 ${(props) => props.theme.textField.borderColorHover};
            }

            &:focus-within {
                outline: none;
                box-shadow: inset 0 -1px 0 0 ${(props) => props.theme.textField.borderColorFocus};
            }

            ${StyledTextInput} {
                border-bottom-color: transparent;

                &:hover,
                &:focus {
                    border-bottom-color: transparent;
                }
            }
        `}

    ${(props) =>
        (props.suffix || props.onReset) &&
        (props.disabled || props.readOnly) &&
        css`
            pointer-events: none;
            cursor: not-allowed;

            &:hover {
                box-shadow: inset 0 -1px 0 0 ${(props) => props.theme.textField.borderColor};
            }

            &:focus-within {
                outline: none;
                box-shadow: inset 0 -1px 0 0 ${(props) => props.theme.textField.borderColor};
            }
        `}
`;

const StyledTextInput = styled.input<Pick<TextInputProps, 'error' | 'disabled' | 'readOnly'>>`
    ${baseInputStyles}
    ${(props) =>
        props.error &&
        css`
            border-bottom-color: ${props.theme.textField.error.borderColor};

            &:hover {
                border-bottom-color: ${props.theme.textField.error.borderColorHover};
            }
            &:focus {
                border-bottom-color: ${props.theme.textField.error.borderColorFocus};
            }
        `}

    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.4;
            pointer-events: none;
            cursor: not-allowed;
        `}

    ${(props) =>
        props.readOnly &&
        css`
            border-bottom-color: ${props.theme.textField.readOnly.borderColor};

            &:hover {
                border-bottom-color: ${props.theme.textField.readOnly.borderColor};
            }

            &:focus {
                outline: none;
                border-bottom-color: ${props.theme.textField.readOnly.borderColor};
            }
        `}
`;
