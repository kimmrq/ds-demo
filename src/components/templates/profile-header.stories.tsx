import { action } from '@storybook/addon-actions';
import React from 'react';

import { AvatarButton } from '../atoms/avatar-button';
import { Card } from '../atoms/card';
import { H1, P1 } from '../atoms/text';

export default {
    title: 'Templates/ProfileHeader',
    // includeStories: [], // or don't load this file at all
};

export const ProfileHeader = () => {
    return (
        <div style={{ backgroundColor: '#faf9f8', padding: '50px' }}>
            <Card style={{ justifyContent: 'center', marginTop: '84px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <AvatarButton
                        style={{ marginTop: '-116px' }}
                        size="xxlarge"
                        onClick={action('onClick')}
                        altText="Roos Wolthuizen"
                        imageUrl="https://www.dermaclinic.nl/wp-content/uploads/2019/03/dm-4-feb-2019-23-vierkant.jpg"
                    />
                    <H1 style={{ marginTop: '18px' }}>P. Vermeulen</H1>
                    <P1>Huisarts</P1>
                </div>
            </Card>
        </div>
    );
};

ProfileHeader.storyName = 'Profile Header';
