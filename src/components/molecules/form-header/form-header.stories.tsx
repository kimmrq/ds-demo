import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FormHeader, FormHeaderProps } from './form-header';

export default {
    title: 'Molecules/FormHeader',
    component: FormHeader,
} as Meta;

const FormHeaderTemplate: Story<FormHeaderProps> = (args) => {
    return <FormHeader {...args} />;
};

export const DefaultFormHeader = FormHeaderTemplate.bind({});
DefaultFormHeader.args = {
    title: 'FormHeader',
    onClick: action('clicked formheader'),
    icon: 'edit-light',
};
