import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Avatar, AvatarProps } from './avatar';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
} as Meta;

const AvatarTemplate: Story<AvatarProps> = (args) => {
    return <Avatar {...args} />;
};

export const Default = AvatarTemplate.bind({});

const unsplashImage =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80&w=400';

export const AvatarImageExample = () => {
    return <Avatar imageUrl={unsplashImage} />;
};

AvatarImageExample.storyName = 'With image';

export const AvatarInitialsExample = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <Avatar initials="AB" size="medium" />
            <Avatar initials="BA" size="medium" />
            <Avatar initials="CA" size="medium" />
            <Avatar initials="DA" size="medium" />
            <Avatar initials="EA" size="medium" />
            <Avatar initials="FA" size="medium" />
        </div>
    );
};

AvatarInitialsExample.storyName = 'With initials';

export const AvatarSizesExample = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '12px',
                    marginBottom: '16px',
                }}
            >
                <Avatar size="xsmall" />
                <Avatar size="small" />
                <Avatar size="medium" />
                <Avatar size="large" />
                <Avatar size="xlarge" />
                <Avatar size="xxlarge" />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '12px',
                    marginBottom: '16px',
                }}
            >
                <Avatar icon="organisation" size="xsmall" />
                <Avatar icon="organisation" size="small" />
                <Avatar icon="organisation" size="medium" />
                <Avatar icon="organisation" size="large" />
                <Avatar icon="organisation" size="xlarge" />
                <Avatar icon="organisation" size="xxlarge" />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '12px',
                    marginBottom: '16px',
                }}
            >
                <Avatar size="xsmall" imageUrl={unsplashImage} />
                <Avatar size="small" imageUrl={unsplashImage} />
                <Avatar size="medium" imageUrl={unsplashImage} />
                <Avatar size="large" imageUrl={unsplashImage} />
                <Avatar size="xlarge" imageUrl={unsplashImage} />
                <Avatar size="xxlarge" imageUrl={unsplashImage} />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '12px',
                    marginBottom: '16px',
                }}
            >
                <Avatar size="xsmall" initials="AB" />
                <Avatar size="small" initials="BA" />
                <Avatar size="medium" initials="CA" />
                <Avatar size="large" initials="DA" />
                <Avatar size="xlarge" initials="EA" />
                <Avatar size="xxlarge" initials="FA" />
            </div>
        </>
    );
};

AvatarSizesExample.storyName = 'Sizes';
