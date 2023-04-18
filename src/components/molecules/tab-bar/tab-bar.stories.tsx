import React, { useState } from 'react';

import { TabBar } from './tab-bar';

export default {
    title: 'Molecules/TabBar',
    component: TabBar,
};

export const TabBarExample = () => {
    const buttons = [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
        'Twenty',
    ];

    const [active, setActive] = useState(buttons[0]);

    return (
        <TabBar>
            {buttons.map((type) => (
                <TabBar.Button
                    key={type}
                    isSelected={active === type}
                    onClick={() => setActive(type)}
                >
                    {type}
                </TabBar.Button>
            ))}
        </TabBar>
    );
};

TabBarExample.storyName = 'Default';
