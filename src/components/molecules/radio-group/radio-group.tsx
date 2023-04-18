/* eslint-disable no-nested-ternary */
/* eslint-disable no-case-declarations */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import * as tokens from 'tokens/tokens';

import { Feedback } from '../../atoms/feedback';
import {
    InputCheckmark,
    InputCheckmarkProps,
    StyledInputContainer,
} from '../../atoms/input-checkmark/input-checkmark';
import { Radio, RadioProps, StyledRadioContainer } from '../../atoms/radio/radio';
import { RadioButton, RadioButtonProps } from '../../atoms/radio-button/radio-button';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The children of the RadioGroup, can accept Radio, RadioButton or InputCheckmark (must be at least two).
     */
    children: React.ReactElement<RadioProps | InputCheckmarkProps | RadioButtonProps>[];
    /**
     * The default selected value of the RadioGroup.
     */
    defaultValue?: string;
    /**
     * The type of error associated with the RadioGroup (if applicable).
     */
    error?: string;
    /**
     * Set the layout direction either horizontal or vertical
     * @default 'column'
     */
    layout?: 'row' | 'column';
    /**
     * The common `name` passed to all Radio button children of the RadioGroup. This enables you to avoid specifying the `name` for each child.
     */
    name?: string;
    /**
     * The function called when the RadioGroup state changes. To get the value of the selected Radio button use `event.target.value`.
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function RadioGroup({
    children,
    defaultValue,
    name,
    layout = 'column',
    error,
    ...props
}: RadioGroupProps) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        radioProps: RadioProps,
    ): void => {
        setValue(event.target.value);
        radioProps.onChange?.(event);
    };

    return (
        <>
            <StyledRadioGroup layout={layout} {...props}>
                {React.Children.map(
                    children,
                    (
                        child: React.ReactElement<
                            RadioProps | InputCheckmarkProps | RadioButtonProps
                        >,
                        index: number,
                    ) => {
                        if (
                            child.type === Radio ||
                            child.type === InputCheckmark ||
                            child.type === RadioButton
                        ) {
                            const checked = child.props.value === value;
                            const childName = name ? name : child.props.name;
                            const isFirstChild = index === 0;

                            const getTabIndex = () => {
                                // If a RadioGroup has no radio selected the first enabled radio should be focusable
                                if (!value) {
                                    return isFirstChild ? 0 : -1;
                                }
                                return checked ? 0 : -1;
                            };
                            return React.cloneElement(child, {
                                onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                                    handleChange(event, child.props),
                                checked,
                                name: childName,
                                tabIndex: getTabIndex(),
                                type: 'radio',
                            });
                        }
                        return child;
                    },
                )}
            </StyledRadioGroup>
            <StyledFeedbackWrapper>
                <Feedback key="feedback" error={error} />
            </StyledFeedbackWrapper>
        </>
    );
}

const StyledFeedbackWrapper = styled.div``;

export const StyledRadioGroup = styled.div<Pick<RadioGroupProps, 'layout'>>`
    display: flex;
    flex-direction: ${(props) => (props.layout === 'row' ? 'row' : 'column')};
    flex-wrap: ${(props) => (props.layout === 'row' ? 'wrap' : 'nowrap')};

    ${StyledRadioContainer} {
        margin: 4px 0;
        ${(props) =>
            props.layout === 'row' &&
            css`
                &:not(:last-child) {
                    margin-right: 12px;
                }
            `}
    }

    ${StyledInputContainer} {
        ${(props) =>
            props.layout === 'row' &&
            css`
                margin: 0 16px 16px 0;

                @media (min-width: ${tokens.kdsBreakpointSmall}) {
                    flex: 0 0 auto;
                    margin: 0 16px 8px 0;
                }
            `}

        ${(props) =>
            props.layout === 'column' &&
            css`
                margin: 8px 0;
            `}
    }
`;
