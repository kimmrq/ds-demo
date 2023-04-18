import React from 'react';
import styled, { css } from 'styled-components';

import * as tokens from '../../../tokens/tokens';
import { Icon } from '../icon';
import { Tooltip } from '../tooltip';
import type { Placement } from '../tooltip/tooltip';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    error?: boolean;
    isRequired?: boolean;
    tooltipPlacement?: Placement;
    tooltipText?: string;
}

export function FormLabel({
    isRequired,
    error,
    tooltipText,
    tooltipPlacement,
    children,
    ...props
}: FormLabelProps) {
    return (
        <StyledFormLabel {...props} error={error}>
            {children}
            {isRequired && <Asterisk>*</Asterisk>}
            {tooltipText && (
                <StyledTooltip content={tooltipText} placement={tooltipPlacement}>
                    <Icon icon="information" color={tokens.kdsColorBlue500} />
                </StyledTooltip>
            )}
        </StyledFormLabel>
    );
}

const StyledTooltip = styled(Tooltip)`
    margin-left: 8px;
    transform: translate(0px, 4px);
`;

const StyledFormLabel = styled.label<FormLabelProps>`
    color: ${(props) => props.theme.formLabel.color};
    font-weight: ${(props) => props.theme.formLabel.fontWeight};
    font-family: ${(props) => props.theme.formLabel.fontFamily};
    font-size: ${(props) => props.theme.formLabel.fontSize};
    line-height: ${(props) => props.theme.formLabel.lineHeight};
    margin: 0;

    ${(props) =>
        props.error &&
        css`
            color: ${props.theme.formLabel.error.color};
        `}
`;

const Asterisk = styled.span<FormLabelProps>`
    color: ${(props) => props.theme.formLabel.asterisk.color};
    font-size: ${(props) => props.theme.formLabel.asterisk.fontSize};
    font-weight: ${(props) => props.theme.formLabel.asterisk.fontWeight};
    line-height: 21px;
    display: inline-block;
    padding-left: 2px;
`;
