import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';

import { useViewportWidth } from '../../../hooks/use-viewport-width';
import { InputCheckmark } from '../../atoms/input-checkmark/input-checkmark';
import { Radio } from '../../atoms/radio';
import { RadioButton } from '../../atoms/radio-button';
import { FormGroup } from '../form-group/form-group';
import { RadioGroup } from './radio-group';

export default {
    title: 'Molecules/RadioGroup',
    component: RadioGroup,
};

export const RadioGroupExampleDefault = () => {
    return (
        <RadioGroup name="example" layout="column" onChange={action('onChange')}>
            <Radio value="radio1" label="RadioLabel1" />
            <Radio value="radio2" label="RadioLabel2 (disabled)" disabled />
            <Radio value="radio3" label="RadioLabel3" />
        </RadioGroup>
    );
};

RadioGroupExampleDefault.storyName = 'Default';

export const RadioGroupExampleWithFormGroup = () => {
    return (
        <FormGroup label="Formlabel">
            <RadioGroup name="example" layout="column" onChange={action('onChange')}>
                <Radio value="radio1" label="RadioLabel1" />
                <Radio value="radio2" label="RadioLabel2 (disabled)" disabled />
                <Radio value="radio3" label="RadioLabel3" />
            </RadioGroup>
        </FormGroup>
    );
};

RadioGroupExampleWithFormGroup.storyName = 'With FormGroup';

export const RadioGroupExampleRow = () => {
    return (
        <FormGroup label="Formlabel">
            <RadioGroup name="example" layout="row" onChange={action('onChange')}>
                <Radio value="radio1" label="RadioLabel1" />
                <Radio value="radio2" label="RadioLabel2 (disabled)" disabled />
                <Radio value="radio3" label="RadioLabel3" />
            </RadioGroup>
        </FormGroup>
    );
};

RadioGroupExampleRow.storyName = 'Row layout';

export const RadioGroupExampleError = () => {
    return (
        <FormGroup label="Formlabel">
            <RadioGroup name="example" onChange={action('onChange')} error="Error message">
                <Radio value="radio1" label="RadioLabel1" />
                <Radio value="radio2" label="RadioLabel2 (disabled)" disabled />
                <Radio value="radio3" label="RadioLabel3" />
            </RadioGroup>
        </FormGroup>
    );
};

RadioGroupExampleError.storyName = 'Error';

export const UnControlledRadioGroup = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    return (
        <FormGroup label="Formlabel">
            <RadioGroup>
                <Radio
                    id="radio1"
                    checked={selectedValue === 'radio1'}
                    onChange={onHandleChange}
                    value="radio1"
                    label="RadioLabel1"
                />
                <Radio
                    id="radio2"
                    checked={selectedValue === 'radio2'}
                    onChange={onHandleChange}
                    value="radio2"
                    label="RadioLabel2"
                />
                <Radio
                    id="radio3"
                    checked={selectedValue === 'radio3'}
                    onChange={onHandleChange}
                    value="radio3"
                    label="RadioLabel3"
                />
            </RadioGroup>
        </FormGroup>
    );
};

UnControlledRadioGroup.storyName = 'Uncontrolled';

export const InputCheckmarkGroupControlled = () => {
    return (
        <RadioGroup name="example" onChange={action('onChange')} layout="row" error="Error message">
            <InputCheckmark value="InputCheckmark1" label="InputCheckmark1" />
            <InputCheckmark value="InputCheckmark2" label="Disabled state" disabled />
            <InputCheckmark value="InputCheckmark3" label="InputCheckmark3" />
        </RadioGroup>
    );
};

InputCheckmarkGroupControlled.storyName = 'InputCheckmark';

export const UncontrolledInputCheckMarkGroup = () => {
    const { width } = useViewportWidth();
    const [selectedValue, setSelectedValue] = useState('');

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    return (
        <RadioGroup layout={width < 576 ? 'column' : 'row'}>
            <InputCheckmark
                id="InputCheckmark1"
                checked={selectedValue === 'InputCheckmark1'}
                onChange={onHandleChange}
                value="InputCheckmark1"
                label="InputCheckmark1"
                isFullWidth={width < 576}
            />
            <InputCheckmark
                id="InputCheckmark2"
                checked={selectedValue === 'InputCheckmark2'}
                onChange={onHandleChange}
                value="InputCheckmark2"
                label="InputCheckmark2"
                isFullWidth={width < 576}
            />
            <InputCheckmark
                id="InputCheckmark3"
                checked={selectedValue === 'InputCheckmark3'}
                onChange={onHandleChange}
                value="InputCheckmark3"
                label="InputCheckmark3"
                isFullWidth={width < 576}
            />
        </RadioGroup>
    );
};

UncontrolledInputCheckMarkGroup.storyName = 'InputCheckmark uncontrolled';

export const RadioButtonExample = () => {
    return (
        <FormGroup label="Formlabel">
            <RadioGroup name="example2" layout="row" onChange={action('onChange')}>
                <RadioButton value="One" label="One" />
                <RadioButton value="Two" label="Two" />
                <RadioButton value="Three" label="Three" />
            </RadioGroup>
        </FormGroup>
    );
};

RadioButtonExample.storyName = 'RadioButton';

export const UnControlledRadioButtonExample = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    return (
        <FormGroup label="Formlabel">
            <RadioGroup layout="row">
                <RadioButton
                    id="radiobutton1"
                    checked={selectedValue === 'One'}
                    onChange={onHandleChange}
                    value="One"
                    label="One"
                />
                <RadioButton
                    id="radiobutton2"
                    checked={selectedValue === 'Two'}
                    onChange={onHandleChange}
                    value="Two"
                    label="Two"
                />
                <RadioButton
                    id="radiobutton3"
                    checked={selectedValue === 'Three'}
                    onChange={onHandleChange}
                    value="Three"
                    label="Three"
                />
            </RadioGroup>
        </FormGroup>
    );
};

UnControlledRadioButtonExample.storyName = 'RadioButton uncontrolled';
