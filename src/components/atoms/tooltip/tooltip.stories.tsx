import { Meta, Story } from '@storybook/react';
import { IconButton } from 'components';
import React from 'react';

import { Icon } from '../icon';
import { Tooltip, TooltipProps } from './tooltip';

export default {
    title: 'Atoms/Tooltip',
    component: Tooltip,
    parameters: {
        componentSubtitle:
            'Tooltips show contextual help or information about specific components when a user hovers or focuses on them.',
        docs: {
            description: {
                component:
                    'The tooltip will show when you hover on the children, and will hide when you move the cursor out.',
            },
        },
    },
} as Meta;

const TooltipTemplate: Story<TooltipProps> = (args) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '200px',
            }}
        >
            <Tooltip {...args} />
        </div>
    );
};

export const Default = TooltipTemplate.bind({});

Default.args = {
    content: 'This is a default tooltip.',
    children: <Icon icon="information" />,
};

export const WithFocusableContent = TooltipTemplate.bind({});

WithFocusableContent.args = {
    content: 'Close',
    children: <IconButton size="large" labelText="close" icon="close" />,
    hasArrow: false,
};

WithFocusableContent.parameters = {
    docs: {
        description: {
            story: 'If the children of the tooltip is a focusable element, the tooltip will also show when you focus on the element, and will hide when you blur out of the element.',
        },
    },
};
