import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Steps, StepsProps } from './steps';

export default {
    title: 'Molecules/Steps',
    component: Steps,
} as Meta;

const StepsTemplate: Story<StepsProps> = (args) => {
    const [activeStep, setActiveStep] = useState(1);

    function handleStep(step: number) {
        setActiveStep(step);
    }

    const steps = ['Step 1 title', 'Step 2 title', 'Step 3 title'];

    return (
        <Steps activeStep={activeStep} {...args}>
            {steps.map((step, index) => {
                return <Steps.Step key={step} label={step} onClick={() => handleStep(index)} />;
            })}
        </Steps>
    );
};

export const Default = StepsTemplate.bind({});
Default.args = {};
