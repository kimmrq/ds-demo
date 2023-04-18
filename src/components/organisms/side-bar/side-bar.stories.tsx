import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AvatarBlock } from '../../molecules/avatar-block';
import { SideBarMenu } from '../side-bar-menu';
import { SideBar, SideBarProps } from './side-bar';

export default {
    title: 'Organisms/SideBar',
    component: SideBar,
} as Meta;

const items = [
    {
        itemKey: 'item1',
        label: 'Persoonlijke instellingen',
        items: [
            {
                itemKey: 'item2',
                label: 'Email notificaties',
                link: '/Emailnotificaties',
                isSelected: true,
            },
            {
                itemKey: 'item3',
                label: 'Voorkeurslijst zonder link',
                items: [
                    {
                        itemKey: 'item4',
                        label: 'Cardio',
                        link: '/Cardio',
                    },
                    {
                        itemKey: 'item5',
                        label: 'Pulmo',
                        link: '/Pulmo',
                    },
                ],
            },
            {
                itemKey: 'item6',
                label: 'Voorkeurslijst met link',
                link: '/VoorkeurslijstmetLink',
                items: [
                    {
                        itemKey: 'item7',
                        label: 'Cardio',
                        link: '/Cardio',
                    },
                    {
                        itemKey: 'item8',
                        label: 'Pulmo',
                        link: '/Pulmo',
                    },
                ],
            },
            {
                itemKey: 'item9',
                label: 'GGZ consult',
                link: '/GGZconsult',
            },
        ],
    },
];

const SideBarTemplate: Story<SideBarProps> = (args) => {
    return <SideBar {...args} />;
};

export const Default = SideBarTemplate.bind({});

Default.args = {
    header: (
        <AvatarBlock
            size="large"
            name="P. Vermeulen"
            organization="Huisartsenpraktijk Vermeulen"
            direction="vertical"
            at="bij"
        />
    ),
    navigation: <SideBarMenu items={items} onClickItem={action('onClickItem')} />,
};
