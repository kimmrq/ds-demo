import React from 'react';
import styled from 'styled-components';

import { useUniqueId } from '../../../hooks/use-unique-id';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * If true, set the Radio button to the checked state.
     * @default false
     */
    checked?: boolean;
    /**
     * If true, set the Radio button to the disabled state.
     * @default false
     */
    disabled?: boolean;
    /**
     * The HTML `id` of the underlying radio input element. This is required if `label` is defined as a non-empty string.
     * @default A uniquely generated id
     */
    id?: string;
    /**
     * The ref to the underlying radio input element. Use this to imperatively check or focus the Radio button.
     */
    inputRef?: React.Ref<HTMLInputElement>;
    /**
     * The text of the Radio button label.
     * @default ''
     */
    label?: string;
    /**
     * The name of the Radio button.
     */
    name?: string;
    /**
     * The function called when the Radio button state changes.
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * The value of the Radio button.
     */
    value?: string;
}

export function Radio({
    checked = false,
    disabled = false,
    id,
    inputRef,
    label = '',
    onChange,
    value,
    name,
    ...props
}: RadioProps) {
    const inputId = useUniqueId(id);
    return (
        <StyledRadioContainer>
            <StyledRadioInputWrapper disabled={disabled}>
                <StyledRadioInput
                    id={inputId}
                    ref={inputRef}
                    onChange={onChange}
                    value={value}
                    type="radio"
                    checked={checked}
                    aria-checked={checked}
                    disabled={disabled}
                    name={name}
                    {...props}
                />
                <StyledRadioRipple />
                <StyledRadioBackground checked={checked} disabled={disabled}>
                    <StyledRadioCheck checked={checked} />
                </StyledRadioBackground>
            </StyledRadioInputWrapper>
            {label && (
                <StyledRadioLabel htmlFor={inputId} disabled={disabled}>
                    {label}
                </StyledRadioLabel>
            )}
        </StyledRadioContainer>
    );
}

export const StyledRadioContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    min-height: 24px;
`;

const StyledRadioInputWrapper = styled.div<Pick<RadioProps, 'disabled'>>`
    display: flex;
    height: 20px;
    width: 20px;
`;

const StyledRadioRipple = styled.span`
    border-radius: 999px;
    box-shadow: 0px 0px 0px 0px ${(props) => props.theme.radio.rippleColor};
    height: 20px;
    transition: box-shadow 150ms ease-out;
    width: 20px;
    position: absolute;
    pointer-events: none;
`;

const StyledRadioBackground = styled.div<Pick<RadioProps, 'checked' | 'disabled'>>`
    align-items: center;
    border-radius: 9999px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    display: flex;
    height: 20px;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    transition: all 200ms ease 0s;
    width: 20px;
    border-color: ${(props) =>
        // eslint-disable-next-line no-nested-ternary
        props.checked
            ? props.theme.radio.accentColor
            : props.disabled
            ? props.theme.radio.borderColorDisabled
            : props.theme.radio.borderColor};
    background-color: ${(props) =>
        // eslint-disable-next-line no-nested-ternary
        props.checked
            ? props.theme.radio.accentColor
            : props.disabled
            ? props.theme.radio.backgroundColorDisabled
            : props.theme.radio.backgroundColor};
`;

const StyledRadioCheck = styled.div<Pick<RadioProps, 'checked'>>`
    background-color: ${(props) => props.theme.radio.backgroundColor};
    border-radius: 999px;
    height: 8px;
    pointer-events: none;
    transition: transform 200ms ease, opacity 200ms ease;
    width: 8px;
    opacity: ${(props) => (props.checked ? '1' : '0')};
    transform: ${(props) => (props.checked ? 'scale(1)' : 'scale(0.5)')};
`;

const StyledRadioLabel = styled.label<Pick<RadioProps, 'disabled'>>`
    font-size: ${(props) => props.theme.radio.labelFontSize};
    color: ${(props) =>
        props.disabled ? props.theme.radio.labelColorDisabled : props.theme.radio.labelColor};
    letter-spacing: 0;
    max-width: 100%;
    display: inline-block;
    line-height: 20px;
    font-weight: 400;
    padding-left: 12px;
    cursor: ${(props) => (props.disabled ? undefined : 'pointer')};
    margin: 0;
`;

const StyledRadioInput = styled.input<Pick<RadioProps, 'checked' | 'disabled'>>`
    border-radius: 9px;
    width: 24px;
    height: 24px;
    margin: -2px 0px 0px -2px;
    position: absolute;
    opacity: 0;
    cursor: ${(props) => (props.disabled ? undefined : 'pointer')};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus:not(:focus-visible) ~ ${StyledRadioBackground} {
        border-color: ${(props) => props.theme.radio.borderColor};
        border-width: 1px;
    }

    &:focus,
    &:active,
    &:focus:hover,
    &:active:hover {
        ~ ${StyledRadioBackground} {
            border-color: ${(props) =>
                props.disabled ? props.theme.radio.borderColor : props.theme.radio.accentColor};
            border-width: 2px;
        }
    }

    &:checked:focus:not(:focus-visible) ~ ${StyledRadioBackground} {
        box-shadow: none;
        border-color: ${(props) => props.theme.radio.accentColor};
    }

    &:checked:focus ~ ${StyledRadioBackground} {
        animation: 100ms ease 0s 1 normal none running;
        box-shadow: 0px 0px 0px 2px rgb(255, 255, 255),
            0px 0px 0px 4px ${(props) => props.theme.radio.boxShadowColorFocus};
    }

    &:hover ~ ${StyledRadioRipple} {
        box-shadow: ${(props) =>
            props.disabled ? undefined : `0px 0px 0px 7px ${props.theme.radio.rippleColor}`};
    }

    &:hover ~ ${StyledRadioBackground} {
        background-color: ${(props) =>
            // eslint-disable-next-line no-nested-ternary
            props.checked
                ? props.theme.radio.accentColor
                : props.disabled
                ? props.theme.radio.backgroundColorDisabled
                : 'white'};
        border-color: ${(props) =>
            // eslint-disable-next-line no-nested-ternary
            props.checked
                ? props.theme.radio.accentColor
                : props.disabled
                ? props.theme.radio.borderColorDisabled
                : props.theme.radio.borderColorHover};
        border-width: 1px;
    }
`;
