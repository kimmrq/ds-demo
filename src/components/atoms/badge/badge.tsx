import { CarePathIcon, CarePathIcons } from 'components/atoms/care-path-icon';
import { Icon, Icons } from 'components/atoms/icon/icon';
import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';

export type BadgeColor =
    | 'blue'
    | 'magenta'
    | 'orange'
    | 'turquoise'
    | 'lime'
    | 'yellow'
    | 'neutral';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Icon name from the CarePathIcon component. Use only the small version.
     */
    carePathIcon?: CarePathIcons;
    /**
     * The color of the Badge.
     * @default neutral
     */
    color?: BadgeColor;
    /**
     * Icon name from the icon component.
     */
    icon?: Icons;
    /**
     * The size of the Badge.
     * @default medium
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * The text of the Badge.
     */
    text: string;
}

function getColorValue(badgeColor: string | undefined) {
    if (badgeColor === 'blue') {
        return tokens.kdsColorBlue500;
    }
    if (badgeColor === 'magenta') {
        return tokens.kdsColorMagenta500;
    }
    if (badgeColor === 'orange') {
        return tokens.kdsColorOrange400;
    }
    if (badgeColor === 'turquoise') {
        return tokens.kdsColorTurquoise600;
    }
    if (badgeColor === 'lime') {
        return tokens.kdsColorLime500;
    }
    if (badgeColor === 'yellow') {
        return tokens.kdsColorYellow800;
    }
    if (badgeColor === 'neutral') {
        return tokens.kdsColorNeutral900;
    }
    return tokens.kdsColorNeutral900;
}

function getIconSize(size: string | undefined) {
    if (size === 'small') {
        return 12 * 1.125;
    }
    if (size === 'medium') {
        return 14 * 1.125;
    }
    if (size === 'large') {
        return 16 * 1.125;
    }
    return 18;
}

export function Badge({
    icon,
    carePathIcon,
    color = 'neutral',
    text,
    size = 'medium',
    ...props
}: BadgeProps) {
    const colorValue = getColorValue(color);
    const iconSize = getIconSize(size);
    return (
        <StyledBadge color={color} {...props}>
            {icon && <Icon icon={icon} color={colorValue} size={iconSize} />}
            {carePathIcon && (
                <CarePathIcon
                    variant="small"
                    icon={carePathIcon}
                    color={colorValue}
                    size={iconSize}
                />
            )}
            <StyledText size={size}>{text}</StyledText>
        </StyledBadge>
    );
}

const StyledBadge = styled.div<Pick<BadgeProps, 'color'>>`
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    margin: 0;
    padding: 7px 8px;
    color: ${(props) => props.color && props.theme.badge.color[props.color]};
    background-color: ${(props) => props.color && props.theme.badge.badgeColor[props.color]};
    & svg {
        margin-right: 8px;
    }
`;

const StyledText = styled.span<Pick<BadgeProps, 'size'>>`
    display: inline-block;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.size && props.theme.badge.fontSize[props.size]};
    line-height: ${(props) => props.theme.badge.lineHeight};
    font-family: ${(props) => props.theme.badge.fontFamily};
    font-weight: ${(props) => props.theme.badge.fontWeight};
`;
