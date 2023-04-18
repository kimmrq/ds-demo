import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from '../../atoms/button';
import { ButtonGroup, ButtonGroupProps } from './button-group';

export default {
    title: 'Molecules/ButtonGroup',
    component: ButtonGroup,
} as Meta;

const ButtonGroupExample: Story<ButtonGroupProps> = (args) => {
    return (
        <ButtonGroup {...args}>
            <Button iconLeft="add">Zorgverleners toevoegen</Button>
            <Button iconLeft="settings">Geavanceerd</Button>
        </ButtonGroup>
    );
};

export const Default = ButtonGroupExample.bind({});
