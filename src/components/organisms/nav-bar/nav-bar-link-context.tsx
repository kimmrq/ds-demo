import React from 'react';

export interface InitialState {
    isMenuItem: boolean;
}

export const NavBarLinkContext = React.createContext({ isMenuItem: false } as InitialState);
