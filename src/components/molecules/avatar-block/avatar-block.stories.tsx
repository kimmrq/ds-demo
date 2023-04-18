import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AvatarBlock, AvatarBlockProps } from './avatar-block';

export default {
    title: 'Molecules/AvatarBlock',
    component: AvatarBlock,
    decorators: [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (Story: any) => (
            <div style={{ background: '#fbfaf9', padding: '1rem' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

const AvatarBlockTemplate: Story<AvatarBlockProps> = (args) => {
    return <AvatarBlock {...args} />;
};

export const Default = AvatarBlockTemplate.bind({});

Default.storyName = 'Vertical (Default)';

Default.args = {
    name: 'P. Vermeulen',
    organization: 'Huisartsenpraktijk Vermeulen',
    at: 'bij',
};

export const AvatarBlockHorizontal = () => {
    return (
        <AvatarBlock
            name="P. Vermeulen"
            organization="Huisartsenpraktijk Vermeulen"
            at="bij"
            direction="horizontal"
        />
    );
};

AvatarBlockHorizontal.storyName = 'Horizontal';

export const AvatarBlockWithOnClick = () => {
    const clickAction = action('click');

    return (
        <AvatarBlock
            name="P. Vermeulen"
            organization="Huisartsenpraktijk Vermeulen"
            at="bij"
            direction="vertical"
            onClickName={(e) => {
                e.preventDefault();
                clickAction(e);
            }}
            onClickOrganization={(e) => {
                e.preventDefault();
                clickAction(e);
            }}
        />
    );
};

AvatarBlockWithOnClick.storyName = 'With onClick';

export const AvatarBlockWithBadge = () => {
    return (
        <AvatarBlock
            name="P. Vermeulen"
            organization="Huisartsenpraktijk Vermeulen"
            direction="vertical"
            at="bij"
            badgeText="Inactief"
        />
    );
};

AvatarBlockWithBadge.storyName = 'With Badge';
