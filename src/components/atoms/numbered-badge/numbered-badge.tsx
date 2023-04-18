import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';

export interface NumberedBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Badge color
     *  @default '#5e6d90'
     */
    badgeColor?: string;
    /**
     * Textlabel
     */
    label?: string;
    /**
     * Color of textlabel
     *  @default '#ffffff'
     */
    labelColor?: string;
    /**
     * Value to display in badge: string | number;
     */
    value: string | number;
}

export function NumberedBadge({
    label,
    value,
    badgeColor = '#5e6d90',
    labelColor = '#ffffff',
    ...props
}: NumberedBadgeProps) {
    return (
        <StyledNumberedBadge {...props}>
            <StyledBadge badgeColor={badgeColor}>
                <StyledBadgeNumber>{value}</StyledBadgeNumber>
            </StyledBadge>
            {label && <StyledLabel labelColor={labelColor}>{label}</StyledLabel>}
        </StyledNumberedBadge>
    );
}

const StyledNumberedBadge = styled.div`
    display: inline-flex;
    align-items: center;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;

const StyledBadge = styled.div<Pick<NumberedBadgeProps, 'badgeColor'>>`
    min-width: 30px;
    width: auto;
    height: 30px;
    border-radius: 9999px;
    background-color: ${(props) => props.badgeColor};
    text-align: center;
    margin-right: 8px;

    @media screen and (min-width: ${tokens.kdsBreakpointSmall}) {
        margin-right: 16px;
    }
`;

const StyledBadgeNumber = styled.span`
    line-height: 30px;
    font-family: ${(props) => props.theme.typography.fontFamilyBase};
    color: #fff;
    font-weight: 400;
    margin: 0 0 0 0;
    padding: 4px 8px;
`;

const StyledLabel = styled.p<Pick<NumberedBadgeProps, 'labelColor'>>`
    font-family: ${(props) => props.theme.typography.fontFamilyBase};
    font-weight: ${(props) => props.theme.typography.fontWeights.normal};
    font-size: ${(props) => props.theme.typography.fontSize[300]};
    line-height: ${(props) => props.theme.typography.lineHeight[300]};
    letter-spacing: ${tokens.kdsLetterSpacingNormal};
    color: ${(props) => props.labelColor};
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;
