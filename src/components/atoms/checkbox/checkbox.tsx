import React from 'react';
import styled from 'styled-components';

import { useUniqueId } from '../../../hooks/use-unique-id';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * If true, set the Checkbox to the checked state.
     * @default false
     */
    checked: boolean;
    /**
     * If true, set the Checkbox to the disabled state.
     * @default false
     */
    disabled?: boolean;
    /**
     * The HTML `id` of the underlying checkbox input element. This is required if `label` is defined as a non-empty string.
     */
    id?: string;
    /**
     * If true, set the Checkbox to an indeterminate state. Use this on a Checkbox with nested child Checkboxes to denote that some (but not all) child Checkboxes are checked.
     * @default false
     */
    indeterminate?: boolean;
    /**
     * The ref to the underlying checkbox input element. Use this to imperatively check or focus the Checkbox.
     */
    inputRef?: React.Ref<HTMLInputElement>;
    /**
     * The text of the Checkbox label.
     * @default ''
     */
    label?: string;
    /**
     * The fontSize of the Checkbox label.
     * @default 'medium'
     */
    labelSize?: 'medium' | 'large';
    /**
     * The function called when the Checkbox state changes.
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * The value of the Checkbox.
     */
    value?: string;
}

export function Checkbox({
    checked = false,
    disabled = false,
    id,
    inputRef,
    label = '',
    onChange,
    value,
    indeterminate = false,
    labelSize = 'medium',
    ...props
}: CheckboxProps) {
    const inputId = useUniqueId(id);
    return (
        <StyledCheckboxContainer>
            <StyledCheckboxInputWrapper disabled={disabled}>
                <StyledCheckboxInput
                    checked={checked}
                    disabled={disabled}
                    id={inputId}
                    ref={inputRef}
                    onChange={onChange}
                    type="checkbox"
                    value={value}
                    {...props}
                />
                <StyledCheckboxRipple />
                <StyledCheckboxBackground checked={checked} disabled={disabled}>
                    <StyledCheckboxCheck checked={checked}>
                        {indeterminate ? <IndeterminateBox /> : <CheckedIcon />}
                    </StyledCheckboxCheck>
                </StyledCheckboxBackground>
            </StyledCheckboxInputWrapper>
            {label && (
                <StyledCheckboxLabel htmlFor={inputId} disabled={disabled} labelSize={labelSize}>
                    {label}
                </StyledCheckboxLabel>
            )}
        </StyledCheckboxContainer>
    );
}

const StyledCheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    min-height: 24px;
`;

const StyledCheckboxInputWrapper = styled.div<Pick<CheckboxProps, 'disabled'>>`
    display: flex;
    height: 20px;
    width: 20px;
`;

const StyledCheckboxRipple = styled.span`
    border-radius: 999px;
    box-shadow: 0px 0px 0px 0px ${(props) => props.theme.checkbox.rippleColor};
    height: 20px;
    transition: box-shadow 150ms ease-out;
    width: 20px;
    position: absolute;
    pointer-events: none;
`;

const StyledCheckboxBackground = styled.div<CheckboxProps>`
    align-items: center;
    background-color: ${(props) => props.theme.radio.backgroundColor};
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme.radio.borderColor};
    box-sizing: border-box;
    display: flex;
    height: 20px;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    transition: border 200ms ease, background 200ms;
    width: 20px;
`;

const StyledCheckboxCheck = styled.div<Pick<CheckboxProps, 'checked'>>`
    pointer-events: none;
    transition: transform 200ms ease, opacity 200ms ease;
    opacity: ${(props) => (props.checked ? '1' : '0')};
    transform: ${(props) => (props.checked ? 'scale(1)' : 'scale(0.5)')};
`;

const IndeterminateBox = styled.div`
    width: 14px;
    height: 2px;
    border-radius: 2px;
    background-color: ${(props) => props.theme.radio.backgroundColor};
`;

function CheckedIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="20px"
            height="20px"
            style={{ display: 'block' }}
        >
            <path
                d="M15.399 5.274a.951.951 0 011.32-.015c.369.35.376.926.015 1.285L8.668 14.59c-.576.55-1.463.539-2.003 0l-3.4-3.39a.892.892 0 01.016-1.286.951.951 0 011.32.015l3.066 3.058 7.732-7.712z"
                fill="#FFF"
                fillRule="nonzero"
            />
        </svg>
    );
}

const StyledCheckboxLabel = styled.label<Pick<CheckboxProps, 'disabled' | 'labelSize'>>`
    font-size: ${(props) => props.labelSize && props.theme.checkbox.labelFontSize[props.labelSize]};
    color: ${(props) =>
        props.disabled
            ? `${props.theme.checkbox.labelColorDisabled}`
            : `${props.theme.checkbox.labelColor}`};
    line-height: ${(props) =>
        props.labelSize && props.theme.checkbox.labelLineHeight[props.labelSize]};
    font-weight: 400;
    padding-left: 12px;
    cursor: ${(props) => (props.disabled ? '' : 'pointer')};
    margin: 0;
`;

const StyledCheckboxInput = styled.input<Pick<CheckboxProps, 'disabled'>>`
    border-radius: 3px;
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

    &:not(:checked):not(:disabled):not(:focus):hover,
    &:not(:checked):not(:disabled):active {
        ~ ${StyledCheckboxBackground} {
            border-color: ${(props) => props.theme.checkbox.borderColorHover};
        }
    }

    &:checked ~ ${StyledCheckboxBackground} {
        border-color: ${(props) => props.theme.checkbox.accentColor};
        background-color: ${(props) => props.theme.checkbox.accentColor};
    }

    &:disabled ~ ${StyledCheckboxBackground} {
        border-color: ${(props) => props.theme.checkbox.borderColorDisabled};
        background-color: ${(props) => props.theme.checkbox.backgroundColorDisabled};
    }

    &:disabled:checked ~ ${StyledCheckboxBackground} {
        border-color: ${(props) => props.theme.checkbox.accentColorDisabled};
        background-color: ${(props) => props.theme.checkbox.accentColorDisabled};
    }

    &:focus:not(:focus-visible) ~ ${StyledCheckboxBackground} {
        border: 1px solid ${(props) => props.theme.radio.borderColor};
        box-shadow: none;
    }

    &:focus ~ ${StyledCheckboxBackground} {
        border-color: ${(props) => props.theme.checkbox.accentColor};
        border-width: 2px;
        box-shadow: none;
    }

    &:checked:focus:not(:focus-visible) ~ ${StyledCheckboxBackground} {
        border-color: ${(props) => props.theme.checkbox.accentColor};
        box-shadow: none;
    }

    &:checked:focus ~ ${StyledCheckboxBackground} {
        border-width: 1px;
        box-shadow: 0px 0px 0px 2px rgb(255, 255, 255),
            0px 0px 0px 4px ${(props) => props.theme.checkbox.boxShadowColorFocus};
    }

    &:hover ~ ${StyledCheckboxRipple} {
        box-shadow: ${(props) =>
            props.disabled ? undefined : `0px 0px 0px 7px ${props.theme.checkbox.rippleColor}`};
    }
`;
