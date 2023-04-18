import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Icon } from '../icon';
import { Text } from '../text';

type resultType = 'success' | 'default' | 'warning';
export interface Message {
    text: string;
    type: resultType;
}
export interface ValidateFeedbackProps {
    messages: Message[];
}

export function ValidateFeedback({ messages }: ValidateFeedbackProps) {
    const colorOptions = {
        success: tokens.kdsColorLime500,
        warning: tokens.kdsColorOrange500,
        default: tokens.kdsColorNeutral400,
    };
    const getColor = (type: resultType) => {
        return colorOptions[type];
    };
    return (
        <StyledValidationFeedbackList>
            {messages.map((message, i) => {
                const color = getColor(message.type);
                return (
                    <StyledListItem key={i}>
                        <Icon icon="checked" color={color} />
                        <StyledSpan fontSize={200} fontWeight="normal" color={color}>
                            {message.text}
                        </StyledSpan>
                    </StyledListItem>
                );
            })}
        </StyledValidationFeedbackList>
    );
}

const StyledValidationFeedbackList = styled.ul`
    margin: 12px 0 0;
    padding: 0;
    list-style: none;
`;
const StyledListItem = styled.li`
    margin-bottom: 8px;
    line-height: ${(props) => props.theme.list.listItem.lineHeight};
    display: flex;
    align-items: center;
`;

const StyledSpan = styled(Text)`
    display: inline-block;
    padding-left: 8px;
`;
