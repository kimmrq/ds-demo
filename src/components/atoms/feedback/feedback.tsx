import React from 'react';
import styled from 'styled-components';

export interface FeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Error text shown in the feedback component
     */
    error?: string;
    /**
     * Set the width manually for the feedback component
     */
    size?: string | number;
}

export function Feedback({ error, size, ...props }: FeedbackProps) {
    if (error) {
        return (
            <Message {...props} size={size} className="has-danger">
                <MessageText>{error}</MessageText>
            </Message>
        );
    }
    return null;
}

const Message = styled.div<FeedbackProps>`
    width: ${(props) => (props.size ? `${props.size}px` : 'auto')};
    background-color: ${(props) => props.theme.feedback.backgroundColor};
    border-radius: ${(props) => props.theme.feedback.borderRadius};
    margin: ${(props) => props.theme.feedback.space} 0;
    display: inline-block;
    text-overflow: ellipsis;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: calc(-${(props) => props.theme.feedback.space} * 2);
        left: ${(props) => props.theme.feedback.space};
        display: inline-block;
        border-bottom: ${(props) => props.theme.feedback.space} solid
            ${(props) => props.theme.feedback.backgroundColor};
        border-left: ${(props) => props.theme.feedback.space} solid transparent;
        border-top: ${(props) => props.theme.feedback.space} solid transparent;
        border-right: ${(props) => props.theme.feedback.space} solid transparent;
        z-index: 9999;
    }
`;

const MessageText = styled.span<FeedbackProps>`
    font-family: ${(props) => props.theme.feedback.fontFamily};
    font-size: ${(props) => props.theme.feedback.fontSize};
    font-weight: ${(props) => props.theme.feedback.fontWeight};
    color: ${(props) => props.theme.feedback.color};
    line-height: ${(props) => props.theme.feedback.lineHeight};
    padding: ${(props) => props.theme.feedback.space};
    display: block;
`;
