import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Switch, SwitchProps } from './switch';

export default {
    title: 'Atoms/Switch',
    component: Switch,
} as Meta;

const SwitchTemplate: Story<SwitchProps> = (args) => {
    const [checked, setChecked] = useState(false);

    return (
        <Switch
            {...args}
            checked={checked}
            onChange={() => {
                setChecked(!checked);
            }}
        />
    );
};

export const Default = SwitchTemplate.bind({});
Default.args = {};

export const WithLabel = SwitchTemplate.bind({});
WithLabel.args = {
    leftLabel: 'Ja',
    rightLabel: 'Nee',
};

export const Disabled = SwitchTemplate.bind({});
Disabled.args = {
    disabled: true,
    leftLabel: 'Ja',
    rightLabel: 'Nee',
};
