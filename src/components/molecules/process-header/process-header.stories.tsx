import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProcessHeader, ProcessHeaderProps } from './process-header';

export default {
    title: 'Molecules/ProcessHeader',
    component: ProcessHeader,
} as Meta;

const ProcessHeaderTemplate: Story<ProcessHeaderProps> = (args) => {
    return <ProcessHeader {...args} />;
};

export const DefaultProcessHeader = ProcessHeaderTemplate.bind({});
DefaultProcessHeader.args = {
    title: 'Aanvraag 4DKL+',
    date: "22 jul '20",
    practitionerName: 'M. van der Assen',
    processId: '4368',
    onClick: action('clicked ProcessHeader'),
};
