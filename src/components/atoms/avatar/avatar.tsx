/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { AvatarGroupContainer } from '../../molecules/avatar-group/avatar-group-container';
import { AvatarIcon, AvatarIcons } from '../avatar-icon';

export const circleSizes = {
    xsmall: '32px',
    small: '40px',
    medium: '64px',
    large: '80px',
    xlarge: '120px',
    xxlarge: '160px',
};

export const colorOptions = {
    0: tokens.kdsColorOrange100,
    1: tokens.kdsColorPurple100,
    2: tokens.kdsColorLightblue100,
    3: tokens.kdsColorTurquoise100,
    4: tokens.kdsColorLime100,
    5: tokens.kdsColorGreen100,
};

export const backgroundOptions = {
    0: tokens.kdsColorOrange500,
    1: tokens.kdsColorPurple500,
    2: tokens.kdsColorLightblue500,
    3: tokens.kdsColorTurquoise500,
    4: tokens.kdsColorLime500,
    5: tokens.kdsColorGreen500,
};

export interface AvatarLocalProps {
    /**
     * The alt text of the Avatar image
     * @default Avatar
     */
    altText?: string;
    /**
     * The color of the avatar background
     */
    backgroundColor?: string;
    /**
     * The color of the avatar icon
     */
    color?: string;
    /**
     * Fallback icon when image AND initials are not available
     * @default practitioner-nogender
     */
    icon?: AvatarIcons;
    /**
     * The url of the Avatar image
     */
    imageUrl?: string;
    /**
     * Fallback initials when image is not available (max 2 characters)
     */
    initials?: string;
    /**
     * The size of the Avatar
     * @default medium
     */
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | number;
}

export interface AvatarProps extends AvatarLocalProps, React.HTMLAttributes<HTMLDivElement> {}

export function getIconSize(size: string | number | undefined) {
    if (typeof size === 'string') {
        if (size === 'xsmall') {
            return 32 * 0.625;
        }
        if (size === 'small') {
            return 38.4 * 0.625;
        }
        if (size === 'medium') {
            return 51.2 * 0.625;
        }
        if (size === 'large') {
            return 64 * 0.625;
        }
        if (size === 'xlarge') {
            return 102.4 * 0.625;
        }
        if (size === 'xxlarge') {
            return 128 * 0.625;
        }
        return undefined;
    }

    if (typeof size === 'number') {
        return size * 0.625;
    }
    return undefined;
}

export function getFontSize(size: string | number | undefined) {
    if (typeof size === 'string') {
        if (size === 'xsmall') {
            return 13;
        }
        if (size === 'small') {
            return 15;
        }
        if (size === 'medium') {
            return 21;
        }
        if (size === 'large') {
            return 25;
        }
        if (size === 'xlarge') {
            return 35;
        }
        if (size === 'xxlarge') {
            return 45;
        }
        return undefined;
    }

    if (typeof size === 'number') {
        return size / 3;
    }
    return undefined;
}

export function Avatar({
    size = 'medium',
    altText = 'Avatar',
    imageUrl,
    initials,
    icon = 'practitioner-nogender',
    color = '#322A24',
    backgroundColor = '#ECECE6',
    ...props
}: AvatarProps) {
    const iconSize = getIconSize(size);
    const fontSize = getFontSize(size);
    return (
        <StyledAvatar
            initials={initials}
            size={size}
            aria-label={altText}
            color={color}
            backgroundColor={backgroundColor}
            {...props}
        >
            {imageUrl ? (
                <AvatarImage src={imageUrl} alt={altText} />
            ) : initials ? (
                <AvatarInitials fontSize={fontSize}>{initials}</AvatarInitials>
            ) : (
                <AvatarIcon icon={icon} size={iconSize} />
            )}
        </StyledAvatar>
    );
}

const StyledAvatar = styled.div<AvatarProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 9999px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    min-height: ${(props) =>
        typeof props.size === 'string' ? circleSizes[props.size] : `${props.size}px`};
    height: ${(props) =>
        typeof props.size === 'string' ? circleSizes[props.size] : `${props.size}px`};
    min-width: ${(props) =>
        typeof props.size === 'string' ? circleSizes[props.size] : `${props.size}px`};
    width: ${(props) =>
        typeof props.size === 'string' ? circleSizes[props.size] : `${props.size}px`};
    color: ${(props) =>
        props.initials
            ? colorOptions[props.initials.charCodeAt(0) % Object.keys(colorOptions).length]
            : props.color};
    background-color: ${(props) =>
        props.initials
            ? backgroundOptions[
                  props.initials.charCodeAt(0) % Object.keys(backgroundOptions).length
              ]
            : props.backgroundColor};

    ${AvatarGroupContainer} & {
        border: 2px solid rgb(255, 255, 255);
    }

    ${AvatarGroupContainer} &:not(:first-child) {
        margin-left: -12px;
    }
`;

export const AvatarImage = styled.img<Pick<AvatarProps, 'imageUrl' | 'altText'>>`
    height: 100%;
    width: auto;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`;

export interface AvatarInitialsProps {
    fontSize: number | undefined;
}

export const AvatarInitials = styled.span<AvatarInitialsProps>`
    font-size: ${(props) => `${props.fontSize}px`};
    font-weight: 500;
`;
