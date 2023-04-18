import React from 'react';
import styled, { css } from 'styled-components';

import { Avatar } from '../../atoms/avatar';
import { AvatarLocalProps } from '../../atoms/avatar/avatar';
import { Badge, BadgeColor } from '../../atoms/badge';
import { Link } from '../../atoms/link';
import { P1, Text } from '../../atoms/text/text';

export interface AvatarBlockProps extends AvatarLocalProps, React.HTMLAttributes<HTMLDivElement> {
    /**
     * Optional span element to connect name and organization
     */
    at?: string;
    /**
     * Sets both color and background-color of the Badge
     */
    badgeColor?: BadgeColor;
    /**
     * Adds Badge component with custom text
     */
    badgeText?: string;
    /**
     * Direction layout: 'vertical' | 'horizontal'
     */
    direction?: 'vertical' | 'horizontal';
    /**
     * Profile name
     */
    name?: string;
    /**
     * onClick handler for the name
     */
    onClickName?: (e: React.SyntheticEvent) => void;
    /**
     * onClick handler for the organization
     */
    onClickOrganization?: (e: React.SyntheticEvent) => void;
    /**
     * Organization name
     */
    organization?: string;
}

export function AvatarBlock({
    direction = 'vertical',
    name,
    at,
    organization,
    badgeText,
    badgeColor,
    onClickOrganization,
    onClickName,
    size = 'large',
    altText,
    imageUrl,
    initials,
    icon,
    color,
    backgroundColor,
    ...props
}: AvatarBlockProps) {
    const StyledName: React.ElementType = onClickName ? Link : 'span';
    const StyledOrganization: React.ElementType = onClickOrganization ? Link : 'span';

    return (
        <StyledAvatarBlock direction={direction} {...props}>
            <StyledAvatar
                size={size}
                altText={altText}
                imageUrl={imageUrl}
                initials={initials}
                icon={icon}
                color={color}
                backgroundColor={backgroundColor}
            />
            <StyledP1>
                {name && (
                    <StyledName onClick={onClickName} color={onClickName ? 'grey' : undefined}>
                        {name}
                    </StyledName>
                )}
                {at && organization && name && <StyledSpan as="span">{at}</StyledSpan>}
                {organization && (
                    <StyledOrganization
                        onClick={onClickOrganization}
                        color={onClickOrganization ? 'grey' : undefined}
                    >
                        {organization}
                    </StyledOrganization>
                )}
            </StyledP1>
            {badgeText && <StyledBadge text={badgeText} color={badgeColor} />}
        </StyledAvatarBlock>
    );
}

const StyledAvatar = styled(Avatar)``;
const StyledP1 = styled(P1)`
    width: 100%;
`;

const StyledAvatarBlock = styled.div<Pick<AvatarBlockProps, 'direction'>>`
    display: flex;

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    ${StyledP1} {
        font-weight: ${(props) => props.theme.typography.fontWeights.medium};
        word-break: break-all;
        word-break: break-word;
        hyphens: auto;
        text-align: left;
    }

    ${(props) =>
        props.direction === 'horizontal' &&
        css`
            flex-direction: row;
            align-items: center;

            ${StyledAvatar} {
                /* TBD: Update margin according to avatar size CS-8146 */
                margin-right: 12px;
            }

            ${StyledBadge} {
                margin-top: 0px;
                margin-left: 8px;
            }
        `}
    ${(props) =>
        props.direction === 'vertical' &&
        css`
            flex-direction: column;
            align-items: center;

            ${StyledP1} {
                text-align: center;
            }

            ${StyledAvatar} {
                margin-bottom: 24px;
            }
        `}
`;

const StyledSpan = styled(Text)`
    font-weight: ${(props) => props.theme.typography.fontWeights.normal};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
`;

const StyledBadge = styled(Badge)`
    margin-top: 16px;
`;
