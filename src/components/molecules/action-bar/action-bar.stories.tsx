import React, { useState } from 'react';

import { useViewportWidth } from '../../../hooks/use-viewport-width';
import { Button } from '../../atoms/button';
import { IconButton } from '../../atoms/icon-button';
import { NumberedBadge } from '../../atoms/numbered-badge';
import { FormLayout } from '../../layouts/form-layout';
import { InputLayout } from '../../layouts/input-layout';
import { ActionBar } from './';

export default {
    title: 'Molecules/ActionBar',
    component: ActionBar,
};

export const ActionBarExample = () => {
    const [bar, setBar] = useState<boolean>(false);

    const { width } = useViewportWidth();
    const renderButton = () => {
        if (width < 360) {
            return (
                <IconButton
                    icon="delete"
                    variant="inverse"
                    labelText="delete"
                    onClick={() => setBar(!bar)}
                />
            );
        }
        return (
            <Button variant="solid" onClick={() => setBar(!bar)}>
                Verwijder
            </Button>
        );
    };
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div>
                <Button variant="solid" onClick={() => setBar(!bar)}>
                    Toggle Bar
                </Button>
            </div>

            <ActionBar isOpen={bar} close={() => setBar(!bar)} iconLabel="Button close bar">
                <FormLayout align="center" justify="space-between">
                    <InputLayout>
                        <NumberedBadge key={1} label="Geselecteerd" value={1} />
                    </InputLayout>
                    <InputLayout>{renderButton()}</InputLayout>
                </FormLayout>
            </ActionBar>
        </div>
    );
};

ActionBarExample.storyName = 'Default';
