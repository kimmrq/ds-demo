import { create } from '@storybook/theming/create';
import * as tokens from '../src/tokens/tokens';

export default create({
    base: 'light',
    textColor: tokens.kdsColorNeutral800,
    appBg: tokens.kdsColorNeutral50,
    appBorderRadius: 0,
    colorPrimary: tokens.kdsColorBlue500,
    colorSecondary: tokens.kdsColorMagenta500,
});
