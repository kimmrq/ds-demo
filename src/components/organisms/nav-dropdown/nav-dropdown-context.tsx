import React from 'react';

export interface InitialState {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavDropdownContext = React.createContext({} as InitialState);
