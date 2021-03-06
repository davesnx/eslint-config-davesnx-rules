module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-jsx',
    'plugin:react/recommended',
    'prettier/react',
    'prettier-standard'
  ],
  plugins: ['filenames', 'react', 'prettier', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true
    }
  },
  globals: { fixture: true, FS: true },
  rules: {
    complexity: ['warn', { max: 7 }],
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    "react/no-unsafe": 'warn',
    'react/display-name': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-no-bind': 0,
    'react/jsx-handler-names': 'warn',
    "react/jsx-fragments": 0,
    'curly': 'error',
    'no-shadow': 'warn',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ]
  }
}
