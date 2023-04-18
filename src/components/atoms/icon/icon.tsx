import React from 'react';
import styled from 'styled-components';

import { iconPaths } from './icon-paths';

export type Icons = keyof typeof iconPaths;

export interface IconProps extends React.SVGAttributes<SVGElement> {
    /**
     * Icon foreground color
     * @default currentColor
     * */
    color?: string;
    /**
     * Icon name
     * @default question
     * */
    icon?: Icons;
    /**
     * HTML ID of the component
     * */
    id?: string;
    /**
     * Icon size
     * @default 18
     * */
    size?: number | string;
}

const StyledIcon = styled.svg<IconProps>`
    display: block;
    color: ${(props) => props.color};
`;

const Path = styled.path`
    fill: currentColor;
`;
export function Icon({
    id,
    icon = 'question',
    size = '18',
    color = 'currentColor',
    ...props
}: IconProps) {
    return (
        <StyledIcon
            id={id}
            icon={icon}
            color={color}
            viewBox="0 0 18 18"
            width={size}
            height={size}
            {...props}
        >
            <Path d={iconPaths[icon]} />
        </StyledIcon>
    );
}
