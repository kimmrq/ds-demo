import { Meta, Story } from '@storybook/react';
import React from 'react';

import { UserSelect, UserSelectProps } from './user-select';

export default {
    title: 'Atoms/UserSelect',
    component: UserSelect,
} as Meta;

const UserSelectTemplate: Story<UserSelectProps> = (args) => {
    return <UserSelect {...args} />;
};

const users = [
    { id: 1, name: 'F. Boelsma', initials: 'FB', username: 'f.boelsma@ksyos.nl' },
    { id: 2, name: 'A.S. van der Assen', initials: 'AA', username: 'a.vanderassen@ksyos.nl' },
    { id: 3, name: 'J.H. van de Velden', initials: 'JV', username: 'j.vandevelden@ksyos.nl' },
];

export const Default = UserSelectTemplate.bind({});

Default.args = {
    users: users,
};

export const OnDismiss = UserSelectTemplate.bind({});

OnDismiss.args = {
    users: users,
    defaultValue: users[0],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onDismiss: () => {},
};

OnDismiss.storyName = 'onDismiss';
