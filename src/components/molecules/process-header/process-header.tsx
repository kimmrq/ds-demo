import { IconButton } from 'components/atoms/icon-button';
import { H2, Text } from 'components/atoms/text';
import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';

export interface ProcessHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    date?: string;
    isOpen?: boolean;
    onClick?: (e: React.SyntheticEvent) => void;
    practitionerName?: string;
    processId?: string;
    title: string;
}

export function ProcessHeader({
    title,
    date,
    practitionerName,
    processId,
    isOpen,
    onClick,
    ...props
}: ProcessHeaderProps) {
    const handleClick = (event: React.SyntheticEvent): void => {
        event.stopPropagation();
        if (onClick) {
            onClick(event);
        }
    };
    return (
        <StyledProcessHeader onClick={handleClick} {...props}>
            <div>
                <H2>{title}</H2>
                <StyledSubtitle>
                    {date && (
                        <StyledSubtitleText fontSize={200} color="#a69a91">
                            {date}
                        </StyledSubtitleText>
                    )}
                    {practitionerName && (
                        <StyledSubtitleText fontSize={200} color="#a69a91">
                            {practitionerName}
                        </StyledSubtitleText>
                    )}
                    {processId && (
                        <StyledSubtitleText fontSize={200} color="#a69a91">
                            PID {processId}
                        </StyledSubtitleText>
                    )}
                </StyledSubtitle>
            </div>
            <StyledIconButton
                variant="filled"
                icon={isOpen ? 'caret-down' : 'caret-up'}
                labelText="Show more"
                onClick={handleClick}
            />
        </StyledProcessHeader>
    );
}

const StyledIconButton = styled(IconButton)``;

const StyledProcessHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${tokens.kdsSpacingStack7};
    cursor: pointer;
`;

const StyledSubtitle = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledSubtitleText = styled(Text)`
    margin-right: 8px;

    &:not(:last-child) {
        &::after {
            margin-left: 8px;
            content: '\\2022';
        }
    }
`;
