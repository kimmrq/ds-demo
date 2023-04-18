import React from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

import { defaultTheme } from './themes';

interface ThemeProviderProps {
    children: React.ReactNode;
    theme: DefaultTheme;
}

export const ThemeContext = React.createContext(defaultTheme);

export const useThemeContext = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ theme, children, ...props }: ThemeProviderProps) => {
    if (defaultTheme === undefined) {
        throw new Error('theme value must be provided within a ThemeProvider');
    }
    return (
        <StyledThemeProvider theme={theme} {...props}>
            {children}
        </StyledThemeProvider>
    );
};
