import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { FormHeader } from '../form-header/form-header';
import { FormToggle, FormToggleProps } from './form-toggle';

export default {
    title: 'Molecules/FormToggle',
    component: FormToggle,
} as Meta;

const FormToggleTemplate: Story<FormToggleProps> = (args) => {
    const { type } = args;
    const [formType, setFormType] = useState<'edit' | 'read'>(type || 'read');

    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (formType === 'read') {
            setFormType('edit');
        } else {
            setFormType('read');
        }
    };

    return (
        <FormToggle {...args} type={formType}>
            <FormHeader
                title={formType === 'read' ? 'Read form' : 'Edit form'}
                icon={formType === 'read' ? 'edit-light' : 'close'}
                onClick={(e) => handleClick(e)}
            />
            ...
        </FormToggle>
    );
};

export const Default = FormToggleTemplate.bind({});
Default.args = {};
