import React from 'react';

import { IconCircle } from './';

export default {
    title: 'Atoms/IconCircle',
    component: IconCircle,
    // includeStories: [],
};

export const IconCircleExample = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <IconCircle icon="inquiry" background="#ECECE6" />
            <IconCircle icon="examination" background="#ECECE6" />
            <IconCircle icon="inquiry" accent="blue" hasBorder />
            <IconCircle icon="examination" accent="magenta" hasBorder />
            <IconCircle icon="inquiry" size="small" accent="blue" hasBorder />
            <IconCircle icon="examination" size="small" accent="magenta" hasBorder />
        </div>
    );
};

IconCircleExample.storyName = 'Default';
