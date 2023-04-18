import { Meta, Story } from '@storybook/react';
import { Spacer } from 'components/layouts/spacer';
import React from 'react';

import { Badge, BadgeProps } from './badge';

export default {
    title: 'Atoms/Badge',
    component: Badge,
} as Meta;

const BadgeTemplate: Story<BadgeProps> = (args) => {
    return <Badge {...args} />;
};

export const Default = BadgeTemplate.bind({});

Default.args = {
    text: 'Badge',
};

export const Sizes = () => {
    return (
        <Spacer>
            <Badge text="Large" size="large" />
            <Badge text="Medium" size="medium" />
            <Badge text="Small" size="small" />
        </Spacer>
    );
};

export const Colors = () => {
    return (
        <Spacer>
            <Badge text="blue" color="blue" />
            <Badge text="magenta" color="magenta" />
            <Badge text="orange" color="orange" />
            <Badge text="turquoise" color="turquoise" />
            <Badge text="lime" color="lime" />
            <Badge text="yellow" color="yellow" />
            <Badge text="neutral" color="neutral" />
        </Spacer>
    );
};

export const WithIcon = () => {
    return (
        <Spacer>
            <Badge text="Badge" size="large" color="blue" icon="practitioner" />
            <Badge text="Badge" size="medium" color="blue" icon="practitioner" />
            <Badge text="Badge" size="small" color="blue" icon="practitioner" />
        </Spacer>
    );
};

export const WithCarepathicon = () => {
    return (
        <Spacer>
            <Badge text="Pulmonology" size="large" color="blue" carePathIcon="pulmonology" />
            <Badge text="Pulmonology" size="medium" color="blue" carePathIcon="pulmonology" />
            <Badge text="Pulmonology" size="small" color="blue" carePathIcon="pulmonology" />
        </Spacer>
    );
};
