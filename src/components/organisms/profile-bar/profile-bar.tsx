import React from 'react';
import styled from 'styled-components';

import { Icons } from '../../atoms/icon';
import { IconButton } from '../../atoms/icon-button';
import { AvatarBlock } from '../../molecules/avatar-block';

export interface ProfileBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Span optional to connect name and organization
     */
    at?: string;
    /**
     * Icon to be placed in the bar IconButton
     * @default caretdown
     */
    icon?: Icons;
    /**
     * A11y: A label that describes the IconButton action
     * @default ''
     */
    iconLabel?: string;
    /**
     * Practitioners name
     */
    name: string;
    /**
     * The function called when the IconButton is clicked.
     */
    onClick?: (e: React.SyntheticEvent) => void;
    /**
     * Organizations name
     */
    organization: string;
}

export function ProfileBar({
    icon = 'caret-down',
    iconLabel = '',
    onClick,
    name,
    organization,
    at,
    ...props
}: ProfileBarProps) {
    return (
        <StyledProfileBar {...props}>
            <StyledTopBarContainer>
                <AvatarBlock
                    direction="horizontal"
                    size="small"
                    name={name}
                    organization={organization}
                    at={at}
                />
                {icon && (
                    <StyledIconButton
                        icon={icon}
                        labelText={iconLabel}
                        onClick={onClick}
                        color="magenta"
                        size="small"
                    />
                )}
            </StyledTopBarContainer>
        </StyledProfileBar>
    );
}

const StyledProfileBar = styled.div`
    display: block;
    width: 100%;
    padding: 12px;
    background: linear-gradient(
        -180deg,
        rgb(244, 242, 240) 0%,
        rgb(250, 249, 248) 100%,
        rgba(255, 255, 255, 0.1) 100%
    );
`;

const StyledTopBarContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledIconButton = styled(IconButton)`
    /* Transition onclick transform, todo in CS-8042 */
    margin-left: 12px;

    /* TODO CS-8117 */
    &:hover {
        color: #ff64f4;
        background-color: transparent;
    }
    &:active {
        box-shadow: none;
    }
`;
