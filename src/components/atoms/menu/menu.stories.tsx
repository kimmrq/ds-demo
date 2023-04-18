import { action } from '@storybook/addon-actions';
import React from 'react';

import { Menu } from './menu';
import { MenuItem } from './menu-item';

export default {
    title: 'Atoms/Menu',
    component: Menu,
};

export const MenuExample = () => {
    return (
        <div style={{ height: '250px' }}>
            <Menu>
                <MenuItem onClick={action(`onClick callback 1`)}>Menu item 1</MenuItem>
                <MenuItem onClick={action(`onClick callback 2`)}>Menu item 2</MenuItem>
                <MenuItem onClick={action(`onClick callback 3`)}>Menu item 3</MenuItem>
                <MenuItem onClick={action(`onClick callback 4`)} isDisabled>
                    Menu item 4 (disabled)
                </MenuItem>
                <MenuItem onClick={action(`onClick callback 5`)}>Menu item 5</MenuItem>
                <MenuItem onClick={action(`onClick callback 6`)}>Menu item 6</MenuItem>
            </Menu>
        </div>
    );
};

MenuExample.storyName = 'Default';
