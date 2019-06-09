module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:vue/essential'
    ],
    rules: {
      "no-undef": "off",
      "no-console": "off"
    },
    parserOptions: {
        parser: "babel-eslint",
        sourceType: 'module',
        allowImportExportEverywhere: true
    }
  }