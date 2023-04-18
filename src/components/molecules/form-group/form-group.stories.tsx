import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Checkbox } from '../../atoms/checkbox';
import {
    CheckboxListDefault,
    Default as CheckboxDefault,
} from '../../atoms/checkbox/checkbox.stories';
import { Switch } from '../../atoms/switch';
import { Default as SwitchDefault } from '../../atoms/switch/switch.stories';
import { Text } from '../../atoms/text';
import { TextInput } from '../../atoms/text-input';
import { Default as TextInputDefault } from '../../atoms/text-input/text-input.stories';
import { RadioGroup } from '../radio-group/radio-group';
import { RadioGroupExampleDefault } from '../radio-group/radio-group.stories';
import { FormGroup, FormGroupProps } from './form-group';

export default {
    title: 'Molecules/FormGroup',
    component: FormGroup,
    subcomponents: { Checkbox, TextInput, RadioGroup, Switch },
    parameters: {
        componentSubtitle:
            'FormGroup allows users to wrap input components to make them accessible and adds complementary labels and error messages.',
    },
} as Meta;

const FormGroupTemplate: Story<FormGroupProps> = (args) => {
    return <FormGroup {...args} />;
};

export const WithTextInput = FormGroupTemplate.bind({});
WithTextInput.args = {
    label: 'FormGroup with TextInput',
    children: <TextInputDefault value="" />,
};

export const WithReadOnlyTextInput = FormGroupTemplate.bind({});
WithReadOnlyTextInput.args = {
    label: 'FormGroup with TextInput',
    children: <TextInputDefault value="ReadOnly Textinput" readOnly />,
};

export const WithText = FormGroupTemplate.bind({});
WithText.args = {
    label: 'FormGroup with Text',
    insetPadding: true,
    children: (
        <Text fontSize={300} as="p" fontWeight="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien risus, sagittis
            sed blandit a, lacinia et arcu. Mauris efficitur pellentesque aliquet. Maecenas rhoncus
            quam sit amet odio tempus pellentesque. Quisque malesuada posuere orci, ut porttitor
            nibh pretium id.
        </Text>
    ),
};

export const WithRadioButton = FormGroupTemplate.bind({});
WithRadioButton.args = {
    label: 'FormGroup with RadioGroup',
    insetPadding: true,
    children: <RadioGroupExampleDefault />,
};

export const WithCheckbox = FormGroupTemplate.bind({});
WithCheckbox.args = {
    label: 'FormGroup with Checkbox',
    children: <CheckboxDefault checked={false} label="Checkbox label" />,
    insetPadding: true,
};

export const WithCheckboxList = FormGroupTemplate.bind({});
WithCheckboxList.args = {
    label: 'FormGroup with Checkbox',
    children: <CheckboxListDefault checked={false} />,
    insetPadding: true,
};

export const WithSwitch = FormGroupTemplate.bind({});
WithSwitch.args = {
    label: 'FormGroup with Switch',
    children: <SwitchDefault checked={false} leftLabel="Yes" rightLabel="No" />,
    insetPadding: true,
};
