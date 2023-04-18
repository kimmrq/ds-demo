import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Avatar } from '../../atoms/avatar';
import { Icon } from '../../atoms/icon';

export interface NavDropdownToggleProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Username
     * @default fullName
     */
    fullName?: string;
    /**
     * Url of the uploaded user profile image
     */
    imageUrl?: string;
    /**
     * Fallback initials when image is not available (max 2 characters)
     */
    initials?: string;
    /**
     * Menu is visible or not
     */
    isOpen?: boolean;
    /**
     * onClick handler
     */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /**
     * Name of the selected organization
     * @default organization
     */
    organization?: string;
}

export function NavDropdownToggle({
    fullName = 'fullName',
    organization = 'organization',
    imageUrl,
    initials,
    onClick,
    isOpen,
    ...props
}: NavDropdownToggleProps) {
    return (
        <StyledNavDropdownToggle onClick={onClick} {...props}>
            <StyledAvatar size={34} altText={fullName} imageUrl={imageUrl} initials={initials} />
            <StyledInnerText>
                <StyledTitle>{fullName}</StyledTitle>
                <StyledSubtitle>{organization}</StyledSubtitle>
            </StyledInnerText>
            <IconBackground>
                <StyledIcon size={18} isOpen={isOpen} icon="caret-down" />
            </IconBackground>
        </StyledNavDropdownToggle>
    );
}

const StyledNavDropdownToggle = styled.div`
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    margin: 0;
    margin-left: 25px;
    cursor: pointer;
`;

const StyledAvatar = styled(Avatar)`
    margin-right: 0px;
    @media screen and (min-width: ${tokens.kdsBreakpointLarge}) {
        margin-right: 12px;
    }
`;

const StyledInnerText = styled.div`
    display: none;

    @media screen and (min-width: ${tokens.kdsBreakpointLarge}) {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`;

const StyledTitle = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: ${(props) => props.theme.navDropdown.toggleTitleColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 172px;
`;

const StyledSubtitle = styled(StyledTitle)`
    color: ${(props) => props.theme.navDropdown.toggleSubtitleColor};
`;

const StyledIcon = styled(Icon)<Pick<NavDropdownToggleProps, 'isOpen'>>`
    transform: ${(props) => props.isOpen && `rotate(180deg)`};
    transition: transform 0.15s ease;
`;

const IconBackground = styled.span`
    background-color: transparent;
    border-radius: 50%;
    height: 30px;
    min-width: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;

    @media screen and (min-width: ${tokens.kdsBreakpointLarge}) {
        margin-left: 16px;
        background-color: ${(props) => props.theme.navDropdown.iconBackgroundColor};
    }
`;
