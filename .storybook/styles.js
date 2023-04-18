import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import * as tokens from '../src/tokens/tokens';

export const StorybookStyles = createGlobalStyle`
    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-family: ${tokens.kdsFontFamilyBase};
        color: #322a24;
        margin: 0;
    }
`;
