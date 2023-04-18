import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Spacer } from '../../layouts/spacer';
import { AvatarButton, AvatarButtonProps } from './avatar-button';

export default {
    title: 'Atoms/AvatarButton',
    component: AvatarButton,
    // includeStories: [],
} as Meta;

const AvatarButtonTemplate: Story<AvatarButtonProps> = (args) => {
    return <AvatarButton onClick={action('onClick')} {...args} />;
};

export const Default = AvatarButtonTemplate.bind({});

const unsplashImage =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80&w=400';

export const AvatarButtonImageExample = () => {
    return (
        <AvatarButton onClick={action('onClick')} imageUrl={unsplashImage} textOverlay="Wijzigen" />
    );
};

AvatarButtonImageExample.storyName = 'With Image';

export const AvatarButtonInitialsExample = () => {
    return (
        <Spacer direction="horizontal">
            <AvatarButton
                initials="AB"
                size="medium"
                onClick={action('onClick')}
                textOverlay="Wijzigen"
            />
            <AvatarButton
                initials="BA"
                size="medium"
                onClick={action('onClick')}
                textOverlay="Wijzigen"
            />
            <AvatarButton
                initials="CA"
                size="medium"
                onClick={action('onClick')}
                textOverlay="Wijzigen"
            />
            <AvatarButton
                initials="DA"
                size="medium"
                onClick={action('onClick')}
                textOverlay="Wijzigen"
            />
            <AvatarButton
                initials="EA"
                size="medium"
                onClick={action('onClick')}
                textOverlay="Wijzigen"
            />
            <AvatarButton
                initials="FA"
                size="medium"
                onClick={action('onClick')}
                textOverlay="Wijzigen"
            />
        </Spacer>
    );
};

AvatarButtonInitialsExample.storyName = 'With initials';

export const AvatarButtonSizesExample = () => {
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
                <AvatarButton size="xsmall" onClick={action('onClick')} />
                <AvatarButton size="small" onClick={action('onClick')} />
                <AvatarButton size="medium" onClick={action('onClick')} />
                <AvatarButton size="large" onClick={action('onClick')} />
                <AvatarButton size="xlarge" onClick={action('onClick')} />
                <AvatarButton size="xxlarge" onClick={action('onClick')} />
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
                <AvatarButton size="xsmall" onClick={action('onClick')} imageUrl={unsplashImage} />
                <AvatarButton size="small" onClick={action('onClick')} imageUrl={unsplashImage} />
                <AvatarButton size="medium" onClick={action('onClick')} imageUrl={unsplashImage} />
                <AvatarButton size="large" onClick={action('onClick')} imageUrl={unsplashImage} />
                <AvatarButton size="xlarge" onClick={action('onClick')} imageUrl={unsplashImage} />
                <AvatarButton size="xxlarge" onClick={action('onClick')} imageUrl={unsplashImage} />
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
                <AvatarButton size="xsmall" initials="AB" onClick={action('onClick')} />
                <AvatarButton size="small" initials="BA" onClick={action('onClick')} />
                <AvatarButton size="medium" initials="CA" onClick={action('onClick')} />
                <AvatarButton size="large" initials="DA" onClick={action('onClick')} />
                <AvatarButton size="xlarge" initials="EA" onClick={action('onClick')} />
                <AvatarButton size="xxlarge" initials="FA" onClick={action('onClick')} />
            </div>
        </>
    );
};

AvatarButtonSizesExample.storyName = 'Sizes';
