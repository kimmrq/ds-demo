import { FormLayout } from 'components/layouts/form-layout';
import { InputLayout } from 'components/layouts/input-layout';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Feedback } from '../feedback';
import { Text } from '../text';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Allow resizing of the textarea
     * @default false
     */
    autoResize?: boolean;
    /**
     * Visually and functionally disable the textarea.
     */
    disabled?: boolean;
    /**
     * Displays the error message.
     */
    error?: string;
    /**
     * Show character counting and set the max amount of characters
     */
    maxLength?: number;
    /**
     * Fires when the textarea loses focus.
     */
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    /**
     * The function that is called when the textarea value changes.
     */
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    /**
     * Text that appears within the textarea when there is no `value`.
     */
    placeholder?: string;
    /**
     * The number of visible text lines.
     * @default 2
     */
    rows?: number;
    /**
     * The current value of the textarea.
     */
    value: string;
}

export function TextArea({
    rows = 2,
    placeholder,
    disabled,
    onChange,
    onBlur,
    value,
    error,
    autoResize = false,
    maxLength,
    ...props
}: TextAreaProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [textAreaHeight, setTextAreaHeight] = useState('auto');
    const [parentHeight, setParentHeight] = useState('auto');
    const [characterCount, setCharacterCount] = useState(0);

    useEffect(() => {
        if (textAreaRef.current) {
            setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
        }
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaHeight('auto');
        if (textAreaRef.current) {
            setParentHeight(`${textAreaRef.current.scrollHeight}px`);
        }

        if (onChange) {
            onChange(event);
        }

        if (maxLength && textAreaRef.current) {
            const currentLength = textAreaRef.current.value.length;
            setCharacterCount(currentLength);

            if (currentLength >= maxLength) {
                return;
            }
        }
    };

    return (
        <div
            style={{
                minHeight: autoResize ? parentHeight : undefined,
            }}
        >
            <StyledTextArea
                rows={rows}
                placeholder={placeholder}
                disabled={disabled}
                onChange={handleChange}
                onBlur={onBlur}
                value={value}
                error={error}
                ref={textAreaRef}
                autoResize={autoResize}
                maxLength={maxLength}
                style={{
                    height: autoResize ? textAreaHeight : undefined,
                }}
                {...props}
            />
            <FormLayout justify="space-between">
                <InputLayout>
                    <Feedback key="feedback" error={error} />
                </InputLayout>
                {maxLength && (
                    <InputLayout>
                        <Text as="span" color={tokens.kdsColorNeutral400} fontSize={200}>
                            {characterCount} / {maxLength}
                        </Text>
                    </InputLayout>
                )}
            </FormLayout>
        </div>
    );
}

const StyledTextArea = styled.textarea<Pick<TextAreaProps, 'error' | 'disabled' | 'autoResize'>>`
    font-size: ${(props) => props.theme.textField.fontSize};
    font-family: ${(props) => props.theme.textField.fontFamily};
    color: ${(props) => props.theme.textField.color};
    font-weight: ${(props) => props.theme.textField.fontWeight};
    min-height: ${(props) => props.theme.textField.height};
    width: 100%;
    line-height: ${(props) => props.theme.textField.lineHeight};
    background-color: ${(props) => props.theme.textField.backgroundColor};
    box-shadow: none;
    border-radius: 0;
    appearance: none;
    resize: ${(props) => (props.autoResize ? 'none' : 'vertical')};

    ${(props) =>
        !props.autoResize &&
        css`
            border-bottom: 1px solid;
            border-top-color: ${(props) => props.theme.textField.borderColorTransparent};
            border-left-color: ${(props) => props.theme.textField.borderColorTransparent};
            border-right-color: ${(props) => props.theme.textField.borderColorTransparent};
            border-bottom-color: ${(props) => props.theme.textField.borderColor};
            padding: calc(8px - 1px) 0;

            &:hover {
                border-bottom-color: ${(props) => props.theme.textField.borderColorHover};
            }
            &:focus {
                outline: none;
                border-bottom-color: ${(props) => props.theme.textField.borderColorFocus};
            }
        `}

    ${(props) =>
        props.autoResize &&
        css`
            border: 1px solid;
            border-color: ${(props) => props.theme.textField.borderColor};
            padding: 12px;

            &:hover {
                border-color: ${(props) => props.theme.textField.borderColorHover};
            }
            &:focus {
                outline: none;
                border-color: ${(props) => props.theme.textField.borderColorFocus};
            }
        `}

    &::placeholder {
        font-weight: ${(props) => props.theme.textField.placeholder.fontWeight};
        color: ${(props) => props.theme.textField.placeholder.color};
        opacity: 1;
    }

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
        props.error &&
        props.autoResize &&
        css`
            border-color: ${props.theme.textField.error.borderColor};

            &:hover {
                border-color: ${props.theme.textField.error.borderColorHover};
            }
            &:focus {
                border-color: ${props.theme.textField.error.borderColorFocus};
            }
        `}

    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.4;
            pointer-events: none;
        `}
`;
