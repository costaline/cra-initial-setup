module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  globals: {
    window: true,
    define: true,
    require: true,
    module: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      es6: true,
    },
    sourceType: 'module',
  },

  settings: { react: { version: 'detect' } },

  extends: [
    'react-app', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'
  ],

  plugins: [
    'babel', 'react', 'simple-import-sort', 'prettier'
  ],

  rules: {
    'padding-line-between-statements': ['warn', { blankLine: 'never', prev: 'import', next: 'import' }],

    'linebreak-style': ['warn', 'unix'],
    'lines-between-class-members': ['warn', 'always'],
    'react/destructuring-assignment': ['warn', 'always'],
    'react/prop-types': ['warn'],
    'no-console': ['warn'],
    'no-fallthrough': ['warn'],
    'no-unused-vars': ['warn'],
    'no-debugger': ['warn'],
    'prettier/prettier': ['warn', { endOfLine: 'lf' }],

    'simple-import-sort/sort': ['warn', { groups: [[
      /* React */
      '^(react)$',
      /* Node.js builtins */
      `^(${require('module').builtinModules.join('|')})(/|$)`,
      /* Packages */
      '^@?\\w',
      /* Side effect */
      '^\\u0000',
      /* Alias components */
      '^(@@|@@(\\w+-?)*)(/.*(?<!\\.(jpg|jpeg|png|svg|css|scss))$)',
      /* Parent */
      '^\\.\\.(?!/?$)',
      '^\\.\\./?$',
      /* Other relative */
      '^\\./(?=.*/)(?!/?$)',
      '^\\.(?!/?$)',
      '^\\./?$',
      /* Images */
      '^.+\\.(jpg|jpeg|png|svg)$',
      /* Styles */
      '\\.module\\.s?css$',
      '\\.s?css$',
    ]]}],

    'react/self-closing-comp': ['warn', { component: true, html: true }],
  },
}
