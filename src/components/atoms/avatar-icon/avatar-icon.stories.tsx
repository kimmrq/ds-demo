import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { AvatarIcon, AvatarIconProps } from './avatar-icon';

export default {
    title: 'Atoms/AvatarIcon',
    component: AvatarIcon,
} as Meta;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    list-style: none;
    padding: 0;
`;

const Item = styled.li`
    text-align: center;
    margin-bottom: 2rem;
    width: 8rem;
`;

const Metadata = styled.div`
    color: #666;
    font-size: 12px;
    padding-top: 0.5rem;
`;

const AvatarIconTemplate: Story<AvatarIconProps> = (args) => {
    return <AvatarIcon {...args} />;
};

export const Default = AvatarIconTemplate.bind({});

export const AvatarIconExamples = () => {
    return (
        <div>
            <h3>Patient</h3>
            <List>
                <Item>
                    <AvatarIcon icon="patient-man" />
                    <Metadata>patient-man</Metadata>
                </Item>
                <Item>
                    <AvatarIcon icon="patient-nogender" />
                    <Metadata>patient-nogender</Metadata>
                </Item>
                <Item>
                    <AvatarIcon icon="patient-woman" />
                    <Metadata>patient-woman</Metadata>
                </Item>
            </List>
            <h3>Practitioner</h3>
            <List>
                <Item>
                    <AvatarIcon icon="practitioner-man" />
                    <Metadata>practitioner-man</Metadata>
                </Item>
                <Item>
                    <AvatarIcon icon="practitioner-nogender" />
                    <Metadata>practitioner-nogender</Metadata>
                </Item>
                <Item>
                    <AvatarIcon icon="practitioner-woman" />
                    <Metadata>practitioner-woman</Metadata>
                </Item>
            </List>
            <h3>Organisation</h3>
            <List>
                <Item>
                    <AvatarIcon icon="organisation" />
                    <Metadata>organisation</Metadata>
                </Item>
            </List>
        </div>
    );
};

AvatarIconExamples.storyName = 'Icons';
