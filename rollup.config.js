import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
    input: pkg.source,
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'esm',
        },
    ],
    plugins: [
        del({ targets: 'dist/*' }),
        autoExternal(),
        resolve(),
        typescript({
            clean: true,
            tsconfigOverride: {
                exclude: ['*.stories.tsx', '**/*.stories.tsx'],
            },
        }),
        commonjs(),
    ],
};
