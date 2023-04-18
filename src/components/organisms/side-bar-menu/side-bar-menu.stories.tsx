import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';

import { SideBarMenu, SideBarMenuProps } from './side-bar-menu';

export default {
    title: 'Organisms/SideBarMenu',
    component: SideBarMenu,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
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

const SideBarMenuTemplate: Story<SideBarMenuProps> = (args) => {
    const history = useHistory();
    function handleClick(_itemKey: string, link?: string) {
        if (link) {
            history.push(link);
        }
    }
    return (
        <div style={{ width: '300px', marginLeft: '3rem' }}>
            <SideBarMenu
                {...args}
                items={items}
                onClickItem={(itemKey, link) => handleClick(itemKey, link)}
            />
        </div>
    );
};

export const Default = SideBarMenuTemplate.bind({});
