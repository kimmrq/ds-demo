import React from 'react';

import { Avatar } from '../../atoms/avatar';
import { AvatarGroup } from './avatar-group';

export default {
    title: 'Molecules/AvatarGroup',
    component: AvatarGroup,
};

export const AvatarGroupExample = () => {
    return (
        <AvatarGroup size={52}>
            <Avatar initials="AB" />
            <Avatar initials="BA" />
            <Avatar initials="CA" />
            <Avatar initials="DA" />
            <Avatar initials="EA" />
            <Avatar initials="FA" />
        </AvatarGroup>
    );
};

AvatarGroupExample.storyName = 'Default';

export const AvatarGroupExampleWithLimit = () => {
    return (
        <AvatarGroup size={52} limit={3}>
            <Avatar size="xsmall" initials="AB" />
            <Avatar size="small" initials="BA" />
            <Avatar size="medium" initials="CA" />
            <Avatar size="large" initials="DA" />
            <Avatar size="xlarge" initials="EA" />
            <Avatar size="xxlarge" initials="FA" />
        </AvatarGroup>
    );
};

AvatarGroupExampleWithLimit.storyName = 'With limit';
