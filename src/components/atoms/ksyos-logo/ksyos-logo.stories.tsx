import { Meta, Story } from '@storybook/react';
import React from 'react';

import { KsyosLogo, KsyosLogoProps } from './ksyos-logo';

export default {
    title: 'Atoms/KsyosLogo',
    component: KsyosLogo,
} as Meta;

const KsyosLogoTemplate: Story<KsyosLogoProps> = (args) => {
    return <KsyosLogo {...args} />;
};

export const Default = KsyosLogoTemplate.bind({});
