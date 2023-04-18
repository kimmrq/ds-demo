import React from 'react';
import styled, { css } from 'styled-components';

import { FormLabel } from '../../atoms/form-label';
import type { Placement } from '../../atoms/popover/popover';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /**
     * Makes the formlabel color orange.
     */
    haserrors?: boolean;
    /**
     * Use this to set the correct spacing; Use with Radiobuttons, Checkboxes, Switches and Text (for read forms)
     */
    insetPadding?: boolean;
    /**
     * Displays an asterisk
     */
    isRequired?: boolean;
    /**
     * FormLabel text
     */
    label: string;
    /**
     * Various layouts for FormGroups: 'vertical' | 'horizontal';
     */
    layout?: 'vertical' | 'horizontal';
    /**
     * Placement of the tooltip relative to icon
     */
    tooltipPlacement?: Placement;
    /**
     * Text to show in the Tooltip
     */
    tooltipText?: string;
}

export function FormGroup({
    label,
    children,
    haserrors,
    isRequired,
    layout = 'horizontal',
    tooltipText,
    tooltipPlacement = 'bottom-start',
    insetPadding = false,
    ...props
}: FormGroupProps) {
    return (
        <StyledFormGroup layout={layout} insetPadding={insetPadding} {...props}>
            <StyledLabelContainer layout={layout}>
                <StyledFormLabel
                    isRequired={isRequired}
                    error={haserrors}
                    tooltipText={tooltipText}
                    tooltipPlacement={tooltipPlacement}
                >
                    {label}
                </StyledFormLabel>
            </StyledLabelContainer>
            <StyledInputContainer>{children}</StyledInputContainer>
        </StyledFormGroup>
    );
}

const StyledFormLabel = styled(FormLabel)``;

const StyledLabelContainer = styled.div<Pick<FormGroupProps, 'layout'>>`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    ${(props) =>
        props.layout === 'horizontal' &&
        css`
            @media (min-width: ${props.theme.formGroup.breakpoints.small.breakpoint}) {
                flex: 0 0 25%;
                max-width: 25%;
            }
        `}
`;

const StyledInputContainer = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
`;

const StyledFormGroup = styled.div<Pick<FormGroupProps, 'layout' | 'insetPadding'>>`
    margin-right: -15px;
    margin-left: -15px;

    ${(props) =>
        props.layout === 'horizontal' &&
        css`
            display: flex;
            flex-wrap: wrap;

            &:not(:last-child) {
                margin-bottom: ${(props) => props.theme.formGroup.margin};
            }

            @media (min-width: ${(props) => props.theme.formGroup.breakpoints.small.breakpoint}) {
                &:not(:last-child) {
                    margin-bottom: ${(props) => props.theme.formGroup.margin};
                }
            }

            ${StyledFormLabel} {
                display: inline-block;
                padding: 0 0 0 0;
                margin-bottom: ${(props) => props.theme.formGroup.read.padding};

                @media (min-width: ${(props) =>
                        props.theme.formGroup.breakpoints.small.breakpoint}) {
                    margin-bottom: 0;
                    padding-top: calc(
                        (
                                ${(props) => props.theme.formGroup.formgroupHeight} -
                                    (
                                        ${(props) => props.theme.formGroup.labelLineheight} *
                                            ${(props) => props.theme.formGroup.labelFontSize}
                                    )
                            ) / 2
                    );
                }
            }
        `}

    ${(props) =>
        props.insetPadding &&
        props.layout === 'horizontal' &&
        css`
            margin-bottom: ${(props) => props.theme.formGroup.read.margin};
            padding: 8px 0;

            ${StyledFormLabel} {
                display: inline-block;
                padding: 0 0 0 0;
                margin-bottom: ${(props) => props.theme.formGroup.read.padding};

                @media (min-width: ${(props) =>
                        props.theme.formGroup.breakpoints.small.breakpoint}) {
                    margin-bottom: 0;
                }
            }
        `}

    ${(props) =>
        props.layout === 'vertical' &&
        css`
            display: block;

            &:not(:last-child) {
                margin-bottom: ${(props) => props.theme.formGroup.small.margin};
            }

            @media (min-width: ${(props) => props.theme.formGroup.breakpoints.small.breakpoint}) {
                &:not(:last-child) {
                    margin-bottom: ${(props) => props.theme.formGroup.stacked.margin};
                }
            }

            ${StyledFormLabel} {
                display: block;
                padding: 0 0 0 0;
                margin-bottom: ${(props) => props.theme.formGroup.read.padding};

                @media (min-width: ${(props) =>
                        props.theme.formGroup.breakpoints.small.breakpoint}) {
                    margin-bottom: 4px;
                }
            }
        `}
`;
