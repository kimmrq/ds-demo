import { action } from '@storybook/addon-actions';
import React from 'react';

import { RadioButton } from '../../atoms/radio-button';
import { RadioGroup } from '../../molecules/radio-group';

export default {
    title: 'Atoms/RadioButton',
    component: RadioButton,
};

export const RadioButtonExample = () => {
    return (
        <RadioGroup name="example2" layout="row" onChange={action('onChange')}>
            <RadioButton value="One" label="One" />
            <RadioButton value="Two" label="Two" />
            <RadioButton value="Three" label="Three" />
        </RadioGroup>
    );
};

RadioButtonExample.storyName = 'Default';

export const RadioButtonExample2 = () => {
    return (
        <RadioGroup name="example" layout="row" onChange={action('onChange')}>
            <RadioButton value="Ja" label="Ja" />
            <RadioButton value="Nee" label="Nee" />
        </RadioGroup>
    );
};

RadioButtonExample2.storyName = 'Yes / No';
