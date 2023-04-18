import { Meta, Story } from '@storybook/react';
import { Spacer } from 'components/layouts/spacer';
import React from 'react';

import { P1, Text } from '../text';
import { Link, LinkProps } from './link';

export default {
    title: 'Atoms/Link',
    component: Link,
} as Meta;

const LinkExample: Story<LinkProps> = (args) => {
    return <Link {...args}>Link</Link>;
};

export const Default = LinkExample.bind({});

export const Colors = () => {
    return (
        <Spacer direction="vertical">
            <Link to="#" color="blue" onClick={(e) => e.preventDefault()}>
                Link with color blue
            </Link>
            <Link to="#" color="magenta" onClick={(e) => e.preventDefault()}>
                Link with color magenta
            </Link>
            <Link to="#" color="grey" onClick={(e) => e.preventDefault()}>
                Link with color grey
            </Link>
            <Link to="#" color="lightGrey" onClick={(e) => e.preventDefault()}>
                Link with color lightGrey
            </Link>
        </Spacer>
    );
};

export const WithIcon = () => {
    return (
        <Spacer direction="vertical">
            <Link to="#" onClick={(e) => e.preventDefault()} iconLeft="arrow-right">
                Link with iconLeft
            </Link>
            <Link to="#" onClick={(e) => e.preventDefault()} iconRight="external">
                Link with iconRight
            </Link>
        </Spacer>
    );
};

export const InheritsSize = () => {
    return (
        <Spacer direction="vertical">
            <P1>
                P1 text{' '}
                <Link to="#" onClick={(e) => e.preventDefault()}>
                    Link
                </Link>
            </P1>
            <Text fontSize={200}>
                Small text{' '}
                <Link to="#" onClick={(e) => e.preventDefault()}>
                    Link
                </Link>
            </Text>
        </Spacer>
    );
};
