import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';

import { useViewportWidth } from '../../../hooks/use-viewport-width';
import { Spacer } from '../../layouts/spacer';
import { InputCheckmark } from './input-checkmark';

export default {
    title: 'Atoms/InputCheckmark',
    component: InputCheckmark,
};

export const InputCheckmarkExample = () => {
    const { width } = useViewportWidth();
    const [state, setState] = useState({
        checked1: false,
        checked2: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <Spacer direction={width < 576 ? 'vertical' : 'horizontal'} spacing="medium" wrap="wrap">
            <InputCheckmark
                id="checkboxlabel1"
                name="checked1"
                checked={state.checked1}
                onChange={handleChange}
                label="Multi select"
                isFullWidth={width < 576}
            />
            <InputCheckmark
                id="checkboxlabel2"
                name="checked2"
                checked={state.checked2}
                onChange={handleChange}
                label="Multi select 2"
                isFullWidth={width < 576}
            />
        </Spacer>
    );
};

InputCheckmarkExample.storyName = 'Default';

export const InputCheckmarkDisabled = () => {
    return (
        <InputCheckmark
            id="checkboxlabel"
            checked={false}
            onChange={action('onChange')}
            label="Disabled state"
            disabled
        />
    );
};

InputCheckmarkDisabled.storyName = 'Disabled state';

export const InputCheckmarkMultiLine = () => {
    const { width } = useViewportWidth();
    const [state, setState] = useState({
        checked1: false,
        checked2: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <Spacer direction={width < 576 ? 'vertical' : 'horizontal'} spacing="medium" wrap="wrap">
            <InputCheckmark
                variant="multi-line"
                id="1"
                name="checked1"
                checked={state.checked1}
                onChange={handleChange}
                label="Verificatieapp"
                bodyText="Gebruik een app op je smartphone om verificatiecodes te genereren"
            />
            <InputCheckmark
                variant="multi-line"
                id="2"
                name="checked2"
                checked={state.checked2}
                onChange={handleChange}
                label="Verificatieapp"
                bodyText="Gebruik een app op je smartphone om verificatiecodes te genereren"
            />
        </Spacer>
    );
};

InputCheckmarkMultiLine.storyName = 'Multi lined button';
