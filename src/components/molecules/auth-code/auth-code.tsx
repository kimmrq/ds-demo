import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';

export interface AuthCodeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Styles the color of the text
     *  @default default
     */
    appearance?: 'default' | 'success' | 'danger';
    /**
     * The number of input fields.
     */
    length: number;
    /**
     * The callback function called when the AuthCode state changes.
     */
    onChange: (value: string) => void;
}

export function AuthCode({
    length = 6,
    onChange,
    appearance = 'default',
    ...props
}: AuthCodeProps) {
    const inputsRef = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        if (inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }
    }, []);

    useEffect(() => {
        if (appearance === 'danger') {
            setTimeout(() => {
                handleClearInputs();
            }, 2000);
        }
    }, [appearance]);

    const sendResult = () => {
        const result = inputsRef.current.map((input) => input?.value).join('');
        if (onChange) {
            onChange(result);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextElement = e.target.nextElementSibling as HTMLInputElement;
        if (e.target.value.match('^[0-9]*$')) {
            if (nextElement) {
                nextElement.focus();
            } else {
                e.target.blur();
            }
        } else {
            e.target.value = '';
        }
        sendResult();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const currentElement = e.target as HTMLInputElement;
        const previousElement = currentElement.previousElementSibling as HTMLInputElement;
        const { key } = e;
        if (key === 'Backspace') {
            if (currentElement.value === '' && previousElement !== null) {
                previousElement.focus();
                previousElement.value = '';
            } else {
                currentElement.value = '';
            }
            sendResult();
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        const value = e.clipboardData.getData('Text');
        if (value.match('^[0-9]*$')) {
            for (let i = 0; i < length && i < value.length; i++) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const nextElement = inputsRef.current[i]!.nextElementSibling as HTMLInputElement;
                inputsRef.current[i].value = value.charAt(i);
                if (nextElement) {
                    nextElement.focus();
                } else {
                    inputsRef.current[i].blur();
                }
            }
            sendResult();
        }
    };

    const handleClearInputs = () => {
        inputsRef.current.map((input) => (input.value = ''));
        inputsRef.current[0].focus();
    };

    const inputs = [];
    for (let i = 0; i < length; i++) {
        inputs.push(
            <StyledInput
                key={i}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onPaste={handlePaste}
                type="text"
                ref={(ref) => (inputsRef.current[i] = ref as HTMLInputElement)}
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="one-time-code"
                aria-label={`Enter Verification Code Digit ${i + 1}`}
                appearance={appearance}
            />,
        );
    }

    return <AuthCodeContainer {...props}>{inputs}</AuthCodeContainer>;
}

const AuthCodeContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const StyledInput = styled.input<Pick<AuthCodeProps, 'appearance'>>`
    border: 1px solid #dbd5d0;
    border-radius: 3px;
    height: 52px;
    width: 40px;
    text-align: center;
    font-size: 21px;
    font-weight: 400;
    caret-color: #ff37f0;
    box-shadow: none;
    appearance: none;

    ${(props) =>
        props.appearance &&
        css`
            color: ${props.theme.authCode[props.appearance].color};
        `}

    ${(props) =>
        props.appearance === 'danger' &&
        css`
            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
        `}

    @media (min-width: ${tokens.kdsBreakpointMedium}) {
        height: 78px;
        width: 62px;
        font-size: 32px;
    }

    &:focus {
        border-color: #ff37f0;
        outline: none;
    }

    ${AuthCodeContainer} &:not(:first-of-type) {
        margin-left: 4px;

        @media (min-width: ${tokens.kdsBreakpointMedium}) {
            margin-left: 8px;
        }
    }

    ${AuthCodeContainer} &:nth-child(3n+4) {
        margin-left: 16px;

        @media (min-width: ${tokens.kdsBreakpointMedium}) {
            margin-left: 32px;
        }
    }

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }
`;
