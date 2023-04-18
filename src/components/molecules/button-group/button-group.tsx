import React from 'react';
import styled, { css } from 'styled-components';
import * as tokens from 'tokens/tokens';

import { Button, ButtonProps, StyledButton } from '../../atoms/button/button';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The Button children of the ButtonGroup.
     */
    children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[];
    /**
     * The color of the button
     * @default blue
     */
    color?: 'magenta' | 'blue';
    /**
     *  The size of the Button.
     *  @default medium
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * The variant of the button style to use.
     * @default text
     */
    variant?: 'solid' | 'outline' | 'ghost';
}

export function ButtonGroup({
    size = 'medium',
    variant = 'ghost',
    color = 'blue',
    children,
    ...props
}: ButtonGroupProps) {
    return (
        <ButtonGroupContainer variant={variant} {...props}>
            {React.Children.map(children, (child: React.ReactElement<ButtonProps>) => {
                if (child.type === Button) {
                    return React.cloneElement(child, {
                        size: size,
                        variant: variant,
                        color: color,
                    });
                }
                return child;
            })}
        </ButtonGroupContainer>
    );
}

export const ButtonGroupContainer = styled.div<ButtonGroupProps>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${StyledButton} {
        &:not(:first-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-left: -1px;

            ${(props) =>
                props.variant &&
                props.variant === 'solid' &&
                props.color === 'blue' &&
                css`
                    border-left-color: ${tokens.kdsColorBlue400};
                `}

            ${(props) =>
                props.variant &&
                props.variant === 'solid' &&
                props.color === 'magenta' &&
                css`
                    border-left-color: ${tokens.kdsColorMagenta400};
                `}

                ${(props) =>
                props.variant &&
                props.variant === 'ghost' &&
                css`
                    padding-left: 16px;
                `}
        }

        &:not(:last-child) {
            border-right: 1px solid ${tokens.kdsColorNeutral300};
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;

            ${(props) =>
                props.variant &&
                props.variant === 'solid' &&
                css`
                    border-right-color: transparent;
                `}

            ${(props) =>
                props.variant &&
                props.variant === 'outline' &&
                css`
                    border-right-color: transparent;
                `}

                ${(props) =>
                props.variant &&
                props.variant === 'ghost' &&
                css`
                    padding-right: 16px;
                `}
        }
    }
`;
