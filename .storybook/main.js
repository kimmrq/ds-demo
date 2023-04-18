module.exports = {
    stories: ['../src/**/*.stories.@(tsx|mdx)', './stories/*.stories.@(tsx|mdx)'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/preset-ie11',
    ],
};
