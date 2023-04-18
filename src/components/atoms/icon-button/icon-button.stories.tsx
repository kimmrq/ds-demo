import { Meta, Story } from '@storybook/react';
import { Spacer } from 'components';
import React from 'react';

import { IconButton, IconButtonProps } from './icon-button';

export default {
    title: 'Atoms/IconButton',
    component: IconButton,
} as Meta;

const IconButtonTemplate: Story<IconButtonProps> = (args) => {
    return <IconButton {...args} />;
};

export const Default = IconButtonTemplate.bind({});
Default.args = {
    icon: 'edit-light',
    labelText: 'edit',
};

export const Sizes = () => {
    return (
        <Spacer direction="horizontal" style={{ height: 60, alignItems: 'center' }}>
            <IconButton size="small" icon="caret-down" labelText="edit" />
            <IconButton size="medium" icon="caret-down" labelText="edit" />
            <IconButton size="large" icon="caret-down" labelText="edit" />
        </Spacer>
    );
};

export const IconButtonFilled = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                height: '50px',
                alignItems: 'center',
                paddingLeft: '8px',
            }}
        >
            <IconButton icon="caret-down" variant="filled" labelText="close" />
            <IconButton icon="caret-down" variant="filled" labelText="close" disabled />
        </div>
    );
};

IconButtonFilled.storyName = 'Filled';

export const IconButtonGhost = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                height: '50px',
                alignItems: 'center',
                paddingLeft: '8px',
            }}
        >
            <IconButton icon="caret-down" variant="ghost" labelText="close" />
            <IconButton icon="caret-down" variant="ghost" labelText="close" disabled />
        </div>
    );
};

IconButtonGhost.storyName = 'Ghost';

export const IconButtonInverse = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                backgroundColor: 'hsla(226, 100%, 18%, 1.0)',
                height: '50px',
                alignItems: 'center',
                paddingLeft: '8px',
            }}
        >
            <IconButton icon="caret-down" variant="inverse" labelText="close" />
            <IconButton icon="caret-down" variant="inverse" labelText="close" disabled />
        </div>
    );
};

IconButtonInverse.storyName = 'Inverse';
