import { Meta, Story } from '@storybook/react';
import { Spacer } from 'components/layouts/spacer';
import React from 'react';

import { Button, ButtonProps } from './button';

export default {
    title: 'Atoms/Button',
    component: Button,
} as Meta;

const ButtonExample: Story<ButtonProps> = (args) => {
    return <Button {...args}>Button</Button>;
};
export const Default = ButtonExample.bind({});

export const Sizes = () => {
    return (
        <Spacer direction="horizontal">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </Spacer>
    );
};

export const Variants = () => {
    return (
        <Spacer direction="horizontal">
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
        </Spacer>
    );
};

export const Disabled = () => {
    return (
        <Spacer direction="horizontal">
            <Button variant="solid" isDisabled>
                Solid
            </Button>
            <Button variant="outline" isDisabled>
                Outline
            </Button>
            <Button variant="ghost" isDisabled>
                Ghost
            </Button>
        </Spacer>
    );
};

export const Colors = () => {
    return (
        <Spacer direction="horizontal">
            <Button color="magenta">Magenta</Button>
            <Button color="blue">Blue</Button>
        </Spacer>
    );
};

export const WithIcon = () => {
    return (
        <Spacer direction="horizontal">
            <Button iconLeft="examination">Button with iconLeft</Button>
            <Button iconRight="caret-down">Button with iconRight</Button>
        </Spacer>
    );
};

export const Widths = () => {
    return (
        <Spacer>
            <Button width="auto" size="large">
                Auto
            </Button>
            <Button width="full" size="large">
                Full
            </Button>
            <Button width="full-below-small" size="large">
                Full-below-small
            </Button>
        </Spacer>
    );
};

export const AsAnchor = () => {
    return (
        <Spacer direction="vertical">
            <Spacer direction="horizontal">
                <Button as="a" iconLeft="add">
                    Button rendered as anchor
                </Button>
                <Button as="a" iconLeft="add" variant="outline">
                    Button rendered as anchor
                </Button>
                <Button as="a" iconLeft="add" variant="ghost">
                    Button rendered as anchor
                </Button>
            </Spacer>
            <Spacer direction="horizontal">
                <Button as="a" iconLeft="add" isDisabled>
                    Button rendered as anchor
                </Button>
                <Button as="a" iconLeft="add" variant="outline" isDisabled>
                    Button rendered as anchor
                </Button>
                <Button as="a" iconLeft="add" variant="ghost" isDisabled>
                    Button rendered as anchor
                </Button>
            </Spacer>
        </Spacer>
    );
};
