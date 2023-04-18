import React from 'react';
import styled, { css } from 'styled-components';

import { useUniqueId } from '../../../hooks/use-unique-id';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Specify the aria label for the underlying input control
     * @default checkbox
     */
    ariaLabel?: string;
    /**
     * If true, set the Switch to the on state.
     * @default false
     */
    checked: boolean;
    /**
     * If true, set the Switch to the disabled state.
     * @default false
     */
    disabled?: boolean;
    /**
     * The HTML `id` of the underlying checkbox input element.
     */
    id?: string;
    /**
     * The ref to the underlying checkbox input element. Use this to imperatively switch or focus the Switch.
     */
    inputRef?: React.Ref<HTMLInputElement>;
    /**
     * Left label text; Use component with short labels only; Supports up to 3 characters
     */
    leftLabel?: string;
    /**
     * The function called when the Switch state changes.
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * Right label text; Use component with short labels only; Supports up to 3 characters
     */
    rightLabel?: string;
    /**
     * The value of the Switch.
     */
    value?: string;
}

export function Switch({
    checked = false,
    disabled = false,
    id,
    ariaLabel = 'checkbox',
    inputRef,
    onChange,
    value,
    leftLabel,
    rightLabel,
    ...props
}: SwitchProps) {
    const inputId = useUniqueId(id);
    return (
        <StyledSwitchContainer>
            <StyledSwitchInput
                checked={checked}
                disabled={disabled}
                id={inputId}
                aria-label={ariaLabel}
                ref={inputRef}
                onChange={onChange}
                tabIndex={0}
                role="checkbox"
                type="checkbox"
                value={value}
                {...props}
            />
            <StyledSwitchBackground>
                <StyledSwitchCircle checked={checked} disabled={disabled} />
                {leftLabel && rightLabel && (
                    <StyledSwitchText checked={checked} disabled={disabled}>
                        {/* TODO: Make component flexible for longer text labels CS-9937s */}
                        {checked ? `${leftLabel}` : `${rightLabel}`}
                    </StyledSwitchText>
                )}
            </StyledSwitchBackground>
        </StyledSwitchContainer>
    );
}

const StyledSwitchContainer = styled.div`
    position: relative;
    width: 70px;
    height: 34px;
`;

const StyledSwitchBackground = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    align-items: center;
    pointer-events: none;
    background-color: ${(props) => props.theme.switch.backgroundColor};
    border-radius: 9999px;
    border: 1px solid ${(props) => props.theme.switch.borderColor};
    width: 70px;
    height: 34px;
    padding: 0 8px;
`;

const StyledSwitchCircle = styled.div<Pick<SwitchProps, 'checked' | 'disabled'>>`
    position: absolute;
    top: 6px;
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    pointer-events: none;
    transition: transform 200ms ease-in-out, background-color 200ms ease 0s;
    background-color: ${(props) => props.theme.switch.backgroundColorCircle};
    transform: ${(props) => (props.checked ? 'translateX(32px)' : 'translateX(0)')};

    ${(props) =>
        props.disabled &&
        css`
            background-color: ${props.theme.switch.backgroundColorCircleDisabled};
        `}

    ${(props) =>
        props.checked &&
        css`
            background-color: ${props.theme.switch.backgroundColorCircleChecked};
        `}
`;

const StyledSwitchText = styled.span<Pick<SwitchProps, 'checked' | 'disabled'>>`
    display: block;
    font-size: ${(props) => props.theme.switch.fontSize};
    color: ${(props) => props.theme.switch.color};
    transition: margin 0.2s;
    margin-left: 25px;

    ${(props) =>
        props.checked &&
        css`
            margin-left: 4px;
            color: ${props.theme.switch.colorChecked};
        `}

    ${(props) =>
        props.disabled &&
        css`
            color: ${props.theme.switch.colorDisabled};
        `}
`;

const StyledSwitchInput = styled.input<Pick<SwitchProps, 'disabled'>>`
    position: absolute;
    border-radius: 9999px;
    width: 70px;
    height: 34px;
    margin: 0px 0px 0px 0px;
    opacity: 0;
    display: block;
    cursor: ${(props) => (props.disabled ? undefined : 'pointer')};

    ${(props) =>
        props.disabled &&
        css`
            pointer-events: none;
        `};

    &:focus,
    &:active {
        outline: none;
    }

    &:disabled ~ ${StyledSwitchBackground} {
        border: 1px solid ${(props) => props.theme.switch.borderColorDisabled};
    }

    &:focus:not(:focus-visible) ~ ${StyledSwitchBackground} {
        outline: none;
        box-shadow: none;
    }

    &:focus ~ ${StyledSwitchBackground} {
        border-width: 1px;
        box-shadow: 0px 0px 0px 2px rgb(255, 255, 255),
            0px 0px 0px 4px ${(props) => props.theme.switch.boxShadowColorFocus};
    }
`;
