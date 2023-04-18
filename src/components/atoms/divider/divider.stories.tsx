import React from 'react';

import { Divider } from './divider';

export default {
    title: 'Atoms/Divider',
    component: Divider,
};

export const DividerHorizontal = () => {
    return <Divider />;
};

DividerHorizontal.storyName = 'Horizontal (Default)';

export const DividerVertical = () => {
    return (
        <div style={{ display: 'flex' }}>
            <span>Element 1</span>
            <Divider orientation="vertical" />
            <span>Element 2</span>
        </div>
    );
};

DividerVertical.storyName = 'Vertical';
