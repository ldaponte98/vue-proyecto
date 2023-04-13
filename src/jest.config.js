module.exports = {

    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest',
    },
    setupFiles: ["<rootDir>/tests/index.js"],
    transformIgnorePatterns: ["node_modules/?!(<ESM module here>|<another here>|<etc...>)"],
}