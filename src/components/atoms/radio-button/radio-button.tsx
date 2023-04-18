import { RadioProps } from 'components/atoms/radio/radio';
import React from 'react';
import styled, { css } from 'styled-components';

import { useUniqueId } from '../../../hooks/use-unique-id';

export type RadioButtonProps = RadioProps;

export function RadioButton({
    checked = false,
    disabled = false,
    id,
    inputRef,
    label = '',
    onChange,
    value,
    name,
    ...props
}: RadioButtonProps) {
    const inputId = useUniqueId(id);
    return (
        <StyledRadioButtonContainer checked={checked} disabled={disabled}>
            <StyledRadioButtonInput
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
            <StyledRadioButtonLabel htmlFor={inputId} disabled={disabled} checked={checked}>
                {label}
            </StyledRadioButtonLabel>
        </StyledRadioButtonContainer>
    );
}

const StyledRadioButtonLabel = styled.label<Pick<RadioButtonProps, 'checked' | 'disabled'>>`
    cursor: ${(props) => (props.disabled ? undefined : 'pointer')};
    font-weight: 400;
    font-size: ${(props) => props.theme.radioButton.fontSize};
    background-color: ${(props) => props.theme.radioButton.backgroundColor};
    border-bottom: 1px solid ${(props) => props.theme.radioButton.borderColor};
    border-right: 1px solid ${(props) => props.theme.radioButton.borderColor};
    border-top: 1px solid ${(props) => props.theme.radioButton.borderColor};
    color: ${(props) => props.theme.radioButton.color};
    display: block;
    height: 34px;
    min-width: 45px;
    line-height: 31px;
    text-align: center;
    transition: all 0.2s ease-out;
    margin: 0;
    padding-left: 8px;
    padding-right: 8px;
    text-align: center;

    ${(props) =>
        props.checked &&
        css`
            background-color: ${props.theme.radioButton.accentColor};
            border-bottom-color: ${props.theme.radioButton.accentColor};
            border-right-color: ${props.theme.radioButton.accentColor};
            border-top-color: ${props.theme.radioButton.accentColor};
            color: ${props.theme.radioButton.colorChecked};
        `}

    ${(props) =>
        props.disabled &&
        css`
            border-bottom-color: ${props.theme.radioButton.borderColorDisabled};
            border-right-color: ${props.theme.radioButton.borderColorDisabled};
            border-top-color: ${props.theme.radioButton.borderColorDisabled};
            color: ${props.theme.radioButton.colorDisabled};
        `}

        ${(props) =>
        props.checked &&
        props.disabled &&
        css`
            background-color: ${props.theme.radioButton.backgroundColorDisabled};
            color: ${props.theme.radioButton.colorChecked};
        `}
`;

const StyledRadioButtonContainer = styled.div<Pick<RadioButtonProps, 'checked' | 'disabled'>>`
    display: inline-block;
    position: relative;
    min-height: 34px;

    &:first-of-type > ${StyledRadioButtonLabel} {
        border-left: 1px solid ${(props) => props.theme.radioButton.borderColor};
        border-radius: 999px 0 0 999px;

        ${(props) =>
            props.checked &&
            css`
                border-left-color: ${props.theme.radioButton.accentColor};
            `}

        ${(props) =>
            props.disabled &&
            css`
                border-left-color: ${props.theme.radioButton.borderColorDisabled};
            `}
    }
    &:last-of-type > ${StyledRadioButtonLabel} {
        border-right: 1px solid ${(props) => props.theme.radioButton.borderColor};
        border-radius: 0 999px 999px 0;

        ${(props) =>
            props.checked &&
            css`
                border-right-color: ${props.theme.radioButton.accentColor};
            `}

        ${(props) =>
            props.disabled &&
            css`
                border-right-color: ${props.theme.radioButton.borderColorDisabled};
            `}
    }

    &:not(:first-child) > ${StyledRadioButtonLabel}::before {
        position: absolute;
        top: 0;
        left: -1px;
        display: block;
        box-sizing: content-box;
        width: 1px;
        height: 100%;
        background-color: ${(props) => props.theme.radioButton.borderColor};
        opacity: 0;
        transition: all 0.2s ease-out;
        content: '';
    }
    &:not(:disabled) > ${StyledRadioButtonLabel}::before {
        ${(props) =>
            props.checked &&
            css`
                opacity: 1;
                background-color: ${props.theme.radioButton.accentColor};
            `}
    }
`;

const StyledRadioButtonInput = styled.input<Pick<RadioButtonProps, 'checked' | 'disabled'>>`
    width: 0;
    opacity: 0;
    position: fixed;
    cursor: ${(props) => (props.disabled ? undefined : 'pointer')};

    &:focus:not(:focus-visible) ~ ${StyledRadioButtonLabel} {
        outline: none;
        box-shadow: none;
    }

    &:focus ~ ${StyledRadioButtonLabel} {
        outline: none;
        box-shadow: 0px 0px 0px 2px white,
            0px 0px 0px 4px ${(props) => props.theme.radioButton.boxShadowColorFocus};
    }

    &:hover ~ ${StyledRadioButtonLabel} {
        ${(props) =>
            !props.checked &&
            !props.disabled &&
            css`
                color: ${props.theme.radioButton.colorHover};
            `}
    }
`;
