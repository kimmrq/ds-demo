/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import {
    AvatarImage,
    AvatarInitials,
    AvatarLocalProps,
    backgroundOptions,
    circleSizes,
    colorOptions,
    getFontSize,
    getIconSize,
} from '../avatar/avatar';
import { AvatarIcon } from '../avatar-icon';

export interface AvatarButtonProps
    extends AvatarLocalProps,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The ref to the button that the styled component renders.
     */
    buttonRef?: React.Ref<HTMLButtonElement>;
    /**
     * The function called when the AvatarButton is clicked.
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * The bottom text that overlays the button
     * @default Edit
     */
    textOverlay?: string;
    /**
     *  The behavior of the button when used in an HTML form.
     * @default ‘button’
     */
    type?: 'submit' | 'button' | 'reset';
}

const StyledAvatarButton = styled.button<AvatarButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 9999px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    height: ${(props) =>
        typeof props.size === 'string' ? circleSizes[props.size] : `${props.size}px`};
    min-height: ${(props) =>
        typeof props.size === 'string' ? circleSizes[props.size] : `${props.size}px`};
    width: ${(props) =>
        typeof props.size === 'string' ? circleSizes[props.size] : `${props.size}px`};
    min-width: ${(props) =>
        typeof props.size === 'string' ? circleSizes[props.size] : `${props.size}px`};
    cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
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

    &:not(disabled) {
        &:focus:not(:focus-visible) {
            outline: none;
            box-shadow: none;
        }

        &:focus {
            outline: 0;
            box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
                0px 0px 0px 4px ${tokens.kdsColorBlue300};
        }
    }
`;

export function AvatarButton({
    size = 'medium',
    altText = 'Avatar',
    imageUrl,
    initials,
    type = 'button',
    icon = 'practitioner-nogender',
    color = '#322A24',
    backgroundColor = '#ECECE6',
    onClick,
    buttonRef,
    textOverlay = 'Edit',
    ...props
}: AvatarButtonProps) {
    const iconSize = getIconSize(size);
    const fontSize = getFontSize(size);
    return (
        <StyledAvatarButton
            size={size}
            imageUrl={imageUrl}
            altText={altText}
            onClick={onClick}
            disabled={!onClick}
            ref={buttonRef}
            aria-label={altText}
            initials={initials}
            type={type}
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
            {textOverlay && <TextOverlay>{textOverlay}</TextOverlay>}
        </StyledAvatarButton>
    );
}

const TextOverlay = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
    background: rgba(40, 35, 32, 0.8);
    padding-bottom: 4px;
    padding-top: 2px;
    margin: 0;
    font-size: 14px;
    line-height: 21px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
