import { Meta, Story } from '@storybook/react';
import { Spacer } from 'components/layouts/spacer';
import React from 'react';

import { H1, H2, H3, H4, P1, P2, Text, TextProps } from './text';

export default {
    title: 'Atoms/Text',
    component: Text,
} as Meta;

const TextExample: Story<TextProps> = (args) => {
    return <Text {...args} />;
};

export const Default = TextExample.bind({});

Default.args = {
    as: 'span',
    children: 'Text',
};

export const FontSizes = () => {
    return (
        <Spacer>
            <Text fontSize={900}>Font size 900</Text>
            <Text fontSize={800}>Font size 800</Text>
            <Text fontSize={700}>Font size 700</Text>
            <Text fontSize={600}>Font size 600</Text>
            <Text fontSize={500}>Font size 500</Text>
            <Text fontSize={400}>Font size 400</Text>
            <Text fontSize={300}>Font size 300</Text>
            <Text fontSize={200}>Font size 200</Text>
            <Text fontSize={100}>Font size 100</Text>
        </Spacer>
    );
};

export const H1Example = () => {
    return <H1>H1</H1>;
};

H1Example.storyName = 'H1';

export const H2Example = () => {
    return <H2>H2</H2>;
};

H2Example.storyName = 'H2';

export const H3Example = () => {
    return <H3>H3</H3>;
};

H3Example.storyName = 'H3';

export const H4Example = () => {
    return <H4>H4</H4>;
};

H4Example.storyName = 'H4';

export const P1Example = () => {
    return <P1>P1</P1>;
};

P1Example.storyName = 'P1';

export const P2Example = () => {
    return <P2>P2</P2>;
};

P2Example.storyName = 'P2';
