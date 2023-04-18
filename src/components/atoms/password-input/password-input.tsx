import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Feedback } from '../feedback';
import { IconButton } from '../icon-button';
import { baseInputStyles, TextInputProps } from '../text-input/text-input';
import { Message, ValidateFeedback } from '../validate-feedback/validate-feedback';

export interface PasswordProps extends TextInputProps {
    capslockText?: string;
    messages?: Message[];
}

export function PasswordInput({
    onChange,
    onEnterKeyPress,
    onBlur,
    value,
    placeholder,
    disabled,
    error,
    name,
    readOnly,
    feedbackSize,
    messages,
    capslockText,
    ...props
}: PasswordProps) {
    const [passwordReveal, setPasswordReveal] = useState(false);
    const [capslock, setcapslock] = useState(false);

    const keypressListener = (event: KeyboardEvent) => {
        const capslockState = event.getModifierState && event.getModifierState('CapsLock');
        setcapslock(capslockState);
    };

    useEffect(() => {
        document.addEventListener('keyup', keypressListener);
        document.addEventListener('keydown', keypressListener);
        return () => {
            document.removeEventListener('keyup', keypressListener);
            document.removeEventListener('keydown', keypressListener);
        };
    });

    return (
        <StyledInputContainer error={error} {...props}>
            <StyledPasswordInput
                type={passwordReveal ? 'text' : 'password'}
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
                {...props}
            />

            <StyledIconButton
                icon={passwordReveal ? 'visible' : 'invisible'}
                variant="ghost"
                labelText="Show password"
                disabled={disabled}
                onClick={() => {
                    setPasswordReveal(!passwordReveal);
                }}
                size="small"
                tabIndex={-1}
            />
            {messages && <ValidateFeedback messages={messages} />}

            {error && (
                <StyledFeedbackContainer>
                    <Feedback key="feedback" error={error} size={feedbackSize} />
                </StyledFeedbackContainer>
            )}
            {capslock && capslockText && (
                <StyledFeedbackContainer>
                    <Feedback key="feedback" error={capslockText} />
                </StyledFeedbackContainer>
            )}
        </StyledInputContainer>
    );
}

const StyledInputContainer = styled.div<Pick<PasswordProps, 'error'>>`
    position: relative;
    ${(props) =>
        props.error &&
        css`
            margin-bottom: ${(props) => props.theme.textField.height};
        `}
`;

const StyledFeedbackContainer = styled.div<Pick<PasswordProps, 'error'>>`
    ${(props) =>
        props.error &&
        css`
            margin-top: 4px;
        `}
`;

const StyledPasswordInput = styled.input<Pick<PasswordProps, 'error' | 'disabled'>>`
    ${baseInputStyles}
    padding-right: 40px;

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
        `}
`;

const StyledIconButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-4px, 4px);
`;
