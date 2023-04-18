import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { TextArea, TextAreaProps } from './text-area';

export default {
    title: 'Atoms/TextArea',
    component: TextArea,
} as Meta;

const TextAreaTemplate: Story<TextAreaProps> = (args) => {
    const [inputValue, setInputValue] = useState<string>('');
    return (
        <TextArea onChange={(e) => setInputValue(e.target.value)} {...args} value={inputValue} />
    );
};

export const Default = TextAreaTemplate.bind({});

Default.args = {
    placeholder: 'Type your message here',
};

export const Autoresize = TextAreaTemplate.bind({});

Autoresize.args = {
    placeholder: 'Type your message here',
    autoResize: true,
};

export const Counter = TextAreaTemplate.bind({});

Counter.args = {
    placeholder: 'Type your message here',
    maxLength: 25,
};
