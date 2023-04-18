import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { TextInput, TextInputProps } from './text-input';

export default {
    title: 'Atoms/TextInput',
    component: TextInput,
} as Meta;

const TextInputTemplate: Story<TextInputProps> = (args) => {
    const { value } = args;
    const [inputValue, setInputValue] = useState<string>(value || '');
    return (
        <TextInput {...args} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    );
};

export const Default = TextInputTemplate.bind({});
Default.args = {};

export const Placeholder = TextInputTemplate.bind({});
Placeholder.args = {
    type: 'text',
    placeholder: 'Placeholder text',
};

export const Disabled = TextInputTemplate.bind({});
Disabled.args = {
    ...Default,
    placeholder: 'Disabled state',
    disabled: true,
};

export const Error = TextInputTemplate.bind({});
Error.args = {
    ...Default,
    placeholder: 'Error state',
    error: 'Error message',
};

export const ReadOnly = TextInputTemplate.bind({});
ReadOnly.args = {
    ...Default,
    readOnly: true,
    value: 'readOnly state',
};

ReadOnly.storyName = 'readOnly';

export const Suffix = TextInputTemplate.bind({});
Suffix.args = {
    placeholder: 'With suffix',
    suffix: {
        labelText: 'aria labelled text',
        icon: 'search',
        onSuffixClick: action('clicked'),
    },
};

Suffix.storyName = 'suffix';

const OnResetTemplate: Story<TextInputProps> = (args) => {
    const { value } = args;
    const [inputValue, setInputValue] = useState<string>(value || '');
    return (
        <TextInput
            {...args}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onReset={() => setInputValue('')}
        />
    );
};

export const OnReset = OnResetTemplate.bind({});
OnReset.args = {
    type: 'text',
    placeholder: 'With onReset',
    value: 'With onReset',
};

OnReset.storyName = 'onReset';

export const OnResetAndSuffix = OnResetTemplate.bind({});
OnResetAndSuffix.args = {
    type: 'text',
    placeholder: 'With onReset and suffix',
    value: 'With onReset and suffix',
    suffix: {
        labelText: 'aria labelled text',
        icon: 'search',
        onSuffixClick: action('clicked'),
    },
};

OnResetAndSuffix.storyName = 'onReset and suffix';
