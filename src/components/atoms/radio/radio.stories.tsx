import React, { useState } from 'react';

import { Radio } from './radio';

export default {
    title: 'Atoms/Radio',
    component: Radio,
};

export const RadioField = () => {
    const [checked, setChecked] = useState(false);

    return (
        <Radio
            value="whatever"
            id="1"
            label="E-mail"
            checked={checked}
            onChange={() => {
                setChecked(true);
            }}
        />
    );
};

RadioField.storyName = 'Default';

export const RadioFieldDisabled = () => {
    const [checked, setChecked] = useState(false);

    return (
        <Radio
            value="whatever"
            id="1"
            label="E-mail (disabled)"
            checked={checked}
            onChange={() => {
                setChecked(true);
            }}
            disabled
        />
    );
};

RadioFieldDisabled.storyName = 'Disabled';
