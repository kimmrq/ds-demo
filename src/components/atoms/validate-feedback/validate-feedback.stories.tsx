import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ValidateFeedback, ValidateFeedbackProps } from './validate-feedback';

export default {
    title: 'Atoms/ValidateFeedback',
    component: ValidateFeedback,
} as Meta;

const ValidateFeedbackTemplate: Story<ValidateFeedbackProps> = (args) => {
    return <ValidateFeedback {...args} />;
};

export const Default = ValidateFeedbackTemplate.bind({});
Default.args = {
    messages: [
        {
            text: 'Minimaal 10 karakters',
            type: 'default',
        },
    ],
};
export const Warning = ValidateFeedbackTemplate.bind({});
Warning.args = {
    messages: [
        {
            text: 'Minimaal 10 karakters',
            type: 'warning',
        },
    ],
};
export const Success = ValidateFeedbackTemplate.bind({});
Success.args = {
    messages: [
        {
            text: 'Minimaal 10 karakters',
            type: 'success',
        },
    ],
};
