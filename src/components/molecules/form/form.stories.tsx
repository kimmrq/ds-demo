import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Form, FormProps } from './form';

export default {
    title: 'Molecules/Form',
    component: Form,
} as Meta;

const FormTemplate: Story<FormProps> = (args) => {
    return <Form {...args} />;
};

// Todo make composite story of Formgroup and FormSection
export const Default = FormTemplate.bind({});
Default.args = {
    children: 'Hi there',
};
