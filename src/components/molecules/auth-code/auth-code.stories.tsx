import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { AuthCode, AuthCodeProps } from './auth-code';

export default {
    title: 'Molecules/AuthCode',
    component: AuthCode,
} as Meta;

const AuthCodeTemplate: Story<AuthCodeProps> = (args) => {
    const [, setValue] = useState('');

    return <AuthCode {...args} onChange={(value) => setValue(value)} />;
};

export const Default = AuthCodeTemplate.bind({});
Default.args = {};

const AuthCodeSuccessTemplate: Story<AuthCodeProps> = (args) => {
    const [value, setValue] = useState('');

    const demoAppearance = () => {
        return value.length === 6 ? 'success' : 'default';
    };

    return (
        <AuthCode {...args} appearance={demoAppearance()} onChange={(value) => setValue(value)} />
    );
};

export const Success = AuthCodeSuccessTemplate.bind({});
Success.args = {};

const AuthCodeDangerTemplate: Story<AuthCodeProps> = (args) => {
    const [value, setValue] = useState('');

    const demoAppearance = () => {
        return value.length === 6 ? 'danger' : 'default';
    };

    return (
        <AuthCode {...args} appearance={demoAppearance()} onChange={(value) => setValue(value)} />
    );
};

export const Danger = AuthCodeDangerTemplate.bind({});
Danger.args = {};
