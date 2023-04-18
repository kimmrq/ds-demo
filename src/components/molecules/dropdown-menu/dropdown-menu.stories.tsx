import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Button, IconButton, MenuItem } from 'components';
import React from 'react';

import { DropdownMenu, DropdownMenuProps } from './dropdown-menu';

export default {
    title: 'Molecules/DropdownMenu',
    component: DropdownMenu,
} as Meta;

const DropdownMenuTemplate: Story<DropdownMenuProps> = (args) => {
    return (
        <DropdownMenu {...args}>
            <MenuItem onClick={action(`onClick callback 1`)}>Menu item 1</MenuItem>
            <MenuItem onClick={action(`onClick callback 2`)}>Menu item 2</MenuItem>
            <MenuItem onClick={action(`onClick callback 3`)}>Menu item 3</MenuItem>
            <MenuItem onClick={action(`onClick callback 4`)} isDisabled>
                Menu item 4
            </MenuItem>
            <MenuItem onClick={action(`onClick callback 5`)}>Menu item 5</MenuItem>
            <MenuItem onClick={action(`onClick callback 6`)}>Menu item 6</MenuItem>
        </DropdownMenu>
    );
};

export const DropdownMenuIconButtonExample = DropdownMenuTemplate.bind({});

DropdownMenuIconButtonExample.storyName = 'With IconButton';
DropdownMenuIconButtonExample.args = {
    trigger: <IconButton icon="more" variant="filled" size="medium" labelText="more" />,
};

export const DropdownMenuButtonExample = DropdownMenuTemplate.bind({});

DropdownMenuButtonExample.storyName = 'With Button';
DropdownMenuButtonExample.args = {
    trigger: (
        <Button iconRight="caret-down" size="medium">
            Trigger dropdown
        </Button>
    ),
    placement: 'bottom-start',
};
