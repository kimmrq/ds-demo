import { Meta, Story } from '@storybook/react';
import { FormLayout } from 'components/layouts/form-layout';
import React, { useState } from 'react';

import { Checkbox, CheckboxProps } from './checkbox';

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
} as Meta;

const CheckboxTemplate: Story<CheckboxProps> = (args) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Checkbox
            {...args}
            checked={isChecked}
            onChange={() => {
                setIsChecked(!isChecked);
            }}
        />
    );
};

export const Default = CheckboxTemplate.bind({});
Default.args = {
    label: 'Checkbox option',
};

export const Disabled = CheckboxTemplate.bind({});
Disabled.args = {
    disabled: true,
    label: 'Checkbox option',
};

export const Indeterminate = CheckboxTemplate.bind({});
Indeterminate.args = {
    indeterminate: true,
    label: 'Checkbox option',
};

const CheckboxListTemplate: Story<CheckboxProps> = (args) => {
    const [state, setState] = useState({
        checkbox1: false,
        checkbox2: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <FormLayout
            layout="stacked"
            items={[
                <Checkbox
                    {...args}
                    key={1}
                    name="checkbox1"
                    checked={state.checkbox1}
                    onChange={handleChange}
                    label="Checkbox label"
                />,
                <Checkbox
                    {...args}
                    key={2}
                    name="checkbox2"
                    checked={state.checkbox2}
                    onChange={handleChange}
                    label="Checkbox label"
                />,
            ]}
        />
    );
};

export const CheckboxListDefault = CheckboxListTemplate.bind({});
CheckboxListDefault.args = {};
CheckboxListDefault.storyName = 'List';
