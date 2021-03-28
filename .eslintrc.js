module.exports = {
  extends: [
    '@keenv/eslint-config-general',
  ],
  rules: {
    'no-use-before-define': [
      'error', {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'vars-on-top': 'off',
  },
}
