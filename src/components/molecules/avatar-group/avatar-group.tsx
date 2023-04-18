import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Avatar, AvatarProps, circleSizes, getFontSize } from '../../atoms/avatar/avatar';
import { AvatarGroupContainer } from './avatar-group-container';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The Avatar children of the AvatarGroup.
     */
    children: React.ReactElement<AvatarProps>[];
    /**
     *    Limit the number of visible avatars.
     */
    limit?: number;
    /**
     * The size of the Avatar.
     * @default medium
     */
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | number;
}

export function AvatarGroup({ children, size = 'small', limit, ...props }: AvatarGroupProps) {
    const numOfChildren = children.length;
    const childrenShow = children.slice(0, limit);
    if (limit && limit < numOfChildren) {
        const fontSize = getFontSize(size);
        const hiddenCount = numOfChildren - limit;
        return (
            <AvatarGroupContainer {...props}>
                {childrenShow.map((child: React.ReactElement<AvatarProps>, index: number) => {
                    if (child.type === Avatar) {
                        const zIndex = numOfChildren - index;
                        return (
                            <React.Fragment key={index}>
                                {React.cloneElement(child, {
                                    size: size,
                                    style: { zIndex: zIndex },
                                })}
                            </React.Fragment>
                        );
                    }
                    return child;
                })}
                <AvatarHiddenCount
                    size={size}
                    fontSize={fontSize}
                >{`+${hiddenCount}`}</AvatarHiddenCount>
            </AvatarGroupContainer>
        );
    }
    return (
        <AvatarGroupContainer {...props}>
            {React.Children.map(
                children,
                (child: React.ReactElement<AvatarProps>, index: number) => {
                    if (child.type === Avatar) {
                        const zIndex = numOfChildren - index;
                        return (
                            <React.Fragment key={index}>
                                {React.cloneElement(child, {
                                    size: size,
                                    style: { zIndex: zIndex },
                                })}
                            </React.Fragment>
                        );
                    }
                    return child;
                },
            )}
        </AvatarGroupContainer>
    );
}

export interface AvatarHiddenCountProps extends AvatarGroupProps {
    fontSize: number | undefined;
}

const AvatarHiddenCount = styled.span<Pick<AvatarHiddenCountProps, 'size' | 'fontSize'>>`
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
    background-color: #ecece6;
    color: ${tokens.kdsColorNeutral600};
    background-color: ${tokens.kdsColorNeutral300};
    font-size: ${(props) => `${props.fontSize}px`};
    font-weight: 400;
    margin-left: -12px;
    border: 2px solid rgb(255, 255, 255);
`;
