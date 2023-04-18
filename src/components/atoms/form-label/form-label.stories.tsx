import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FormLabel, FormLabelProps } from './form-label';

export default {
    title: 'Atoms/FormLabel',
    component: FormLabel,
} as Meta;

const FormLabelTemplate: Story<FormLabelProps> = (args) => {
    return <FormLabel {...args} />;
};

export const Default = FormLabelTemplate.bind({});
Default.args = {
    children: 'Formlabel',
};

export const Error = FormLabelTemplate.bind({});
Error.args = {
    children: 'Formlabel',
    error: true,
};

export const Required = FormLabelTemplate.bind({});
Required.args = {
    children: 'Formlabel',
    isRequired: true,
};
Required.storyName = 'isRequired';

export const Tooltip = FormLabelTemplate.bind({});
Tooltip.args = {
    children: 'Formlabel',
    tooltipText: 'Tooltip text',
};
