import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Icon, Icons } from '../icon';

export interface IconCircleProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The accent color of the CircleIcon.
     */
    accent?: 'blue' | 'magenta';
    /**
     * The background color of the CircleIcon.
     * @default transparent
     */
    background?: string;
    /**
     * When set to true, displays a round border.
     * @default false
     */
    hasBorder?: boolean;
    /**
     * The icon to display
     * @default question
     */
    icon?: Icons;
    /**
     * The size of the IconCircle.
     * @default medium
     */
    size?: 'small' | 'medium' | number;
}

const iconCircleSizes = {
    small: '32px',
    medium: '35px',
};

export function getIconCircleSize(size: string | number | undefined) {
    if (typeof size === 'string') {
        if (size === 'small') {
            return 16;
        }
        if (size === 'medium') {
            return 18;
        }
        return undefined;
    }
    if (typeof size === 'number') {
        return size * 0.5625;
    }
    return undefined;
}

export function IconCircle({
    icon = 'question',
    size = 'medium',
    accent,
    background = 'transparent',
    hasBorder = false,
    ...props
}: IconCircleProps) {
    const iconCircleSize = getIconCircleSize(size);
    return (
        <StyledIconCircle
            size={size}
            accent={accent}
            background={background}
            hasBorder={hasBorder}
            {...props}
        >
            <Icon size={iconCircleSize} icon={icon} />
        </StyledIconCircle>
    );
}

const StyledIconCircle = styled.div<IconCircleProps>`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: none;
    padding: 0;
    position: relative;
    background-color: ${(props) => props.background || props.theme.iconCircle.backgroundColor};
    height: ${(props) =>
        typeof props.size === 'string' ? iconCircleSizes[props.size] : `${props.size}px`};
    width: ${(props) =>
        typeof props.size === 'string' ? iconCircleSizes[props.size] : `${props.size}px`};
    color: ${(props) =>
        props.accent ? props.theme.iconCircle.accent[props.accent] : tokens.kdsColorNeutral800};
    ${(props) =>
        props.hasBorder &&
        css`
            border: 1px solid ${(props) => props.theme.iconCircle.borderColor};
        `};
`;
