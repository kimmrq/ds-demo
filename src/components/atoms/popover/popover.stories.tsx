import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from '../button';
import { Popover, PopoverProps } from './popover';

export default {
    title: 'Atoms/Popover',
    component: Popover,
} as Meta;

const specialisms = ['Verslavingshulp', 'Jeugd en gezin', 'Depressies', 'Echtscheidingen'];

const renderList = (specialisms: string[]) => {
    const values = [...specialisms];
    if (values.length > 1) {
        const lastValue = values.pop();
        return `${values.join(', ')} en ${lastValue}`;
    }
    return values[0];
};

const PopoverTemplate: Story<PopoverProps> = (args) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Popover {...args}>
                <Button tabIndex={0} variant="ghost">
                    Pop!
                </Button>
            </Popover>
        </div>
    );
};

export const Default = PopoverTemplate.bind({});
Default.args = {
    content: renderList(specialisms),
};
