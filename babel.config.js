const presets = ['@babel/preset-react', ['@babel/preset-env', { modules: false }]];

const plugins = ['@babel/plugin-transform-runtime'];

module.exports = {
    presets,
    plugins,
};
