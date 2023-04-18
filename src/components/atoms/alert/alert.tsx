import React from 'react';
import styled, { css } from 'styled-components';

import { Icon, Icons } from '../icon';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Styles the color and background-color
     *  @default info
     */
    appearance?: 'info' | 'success' | 'danger';
    /**
     * The text of the alert message
     */
    children: React.ReactNode;
    /**
     * Displays an icon corresponding to the appearance
     *  @default false
     */
    withIcon?: boolean;
}

function getIcon(appearance: 'info' | 'success' | 'danger') {
    if (appearance === 'info') {
        return 'waiting';
    }
    if (appearance === 'success') {
        return 'closed';
    }
    if (appearance === 'danger') {
        return 'warning';
    }
    return 'question';
}

export function Alert({ appearance = 'info', withIcon = false, children, ...props }: AlertProps) {
    const icon: Icons = getIcon(appearance);
    return (
        <StyledAlertWrapper appearance={appearance} role="alert" {...props}>
            {withIcon && <StyledIcon icon={icon} />}
            <StyledAlert appearance={appearance}>{children}</StyledAlert>
        </StyledAlertWrapper>
    );
}

const StyledIcon = styled(Icon)`
    margin-right: 16px;
    min-width: 18px;
`;

const StyledAlertWrapper = styled.div<AlertProps>`
    position: relative;
    padding: 16px;
    min-height: 35px;
    border: 0px;
    border-radius: 0;
    margin: 16px 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    ${(props) =>
        props.appearance &&
        css`
            background-color: ${props.theme.alert[props.appearance].backgroundColor};
            color: ${props.theme.alert[props.appearance].color};
        `}
`;

const StyledAlert = styled.p<AlertProps>`
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;

    & a {
        text-decoration: underline;
        transition: all 0.2s ease;

        ${(props) =>
            props.appearance &&
            css`
                color: ${props.theme.alert[props.appearance].color};

                &:hover {
                    color: ${props.theme.alert[props.appearance].colorHover};
                }
            `}
    }
`;
