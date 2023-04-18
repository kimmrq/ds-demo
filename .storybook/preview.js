import React from 'react';
import { StorybookStyles } from './styles';
import { ThemeProvider } from '../src/themes/theme-provider';
import { defaultTheme } from '../src/themes/themes';

export const decorators = [
    (Story) => (
        <ThemeProvider theme={defaultTheme}>
            <StorybookStyles />
            <Story />
        </ThemeProvider>
    ),
];
