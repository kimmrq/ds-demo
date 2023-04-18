import { IconButton } from 'components/atoms/icon-button';
import React from 'react';
import styled, { css } from 'styled-components';

import { Icons } from '../../atoms/icon';

export interface ListRowProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /**
     * Display an icon inside the container
     */
    icon?: Icons;
    iconLabel?: string;
    /**
     * Use this variant if the container shouldn't have a border
     */
    isBorderless?: boolean;
    onClick?: () => void;
    /**
     * Controls spacing in the container
     * spacing?: 'small' | 'medium' | 'large';
     */
    spacing?: 'small' | 'medium' | 'large';
}

export function ListRow({
    children,
    onClick,
    isBorderless,
    icon,
    iconLabel = '',
    spacing = 'medium',
    ...props
}: ListRowProps) {
    return (
        <StyledRow {...props} isBorderless={isBorderless} spacing={spacing}>
            <StyledRowContainer>
                <StyledRowContent>{children}</StyledRowContent>

                {icon && (
                    <StyledRowAction>
                        <StyledIconButton icon={icon} onClick={onClick} labelText={iconLabel} />
                    </StyledRowAction>
                )}
            </StyledRowContainer>
        </StyledRow>
    );
}

const StyledRowAction = styled.div`
    flex: 0 0 auto;
`;

const StyledIconButton = styled(IconButton)``;

const StyledRow = styled.div<ListRowProps>`
    display: block;
    margin: 0 0 0 0;
    box-shadow: 0 2px 0px -1px rgba(236, 236, 230, 1);

    ${StyledIconButton} {
        margin: 0 ${(props) => props.theme.listRow.margin};
    }

    ${(props) =>
        props.isBorderless &&
        css`
            box-shadow: none;
        `}

    ${(props) =>
        props.spacing === 'small' &&
        css`
            padding: ${(props) => props.theme.listRow.padding.small} 0
                ${(props) => props.theme.listRow.padding.small} 0;
        `}
    ${(props) =>
        props.spacing === 'medium' &&
        css`
            padding: ${(props) => props.theme.listRow.padding.medium} 0
                ${(props) => props.theme.listRow.padding.medium} 0;
        `}
    ${(props) =>
        props.spacing === 'large' &&
        css`
            padding: ${(props) => props.theme.listRow.padding.large} 0
                ${(props) => props.theme.listRow.padding.large} 0;
        `}
`;

const StyledRowContainer = styled.div<ListRowProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledRowContent = styled.div`
    flex: 1 1 auto;
`;
