module.exports = {
  env: {
    browser: true,
    es2021: true,
    // 以下追加項目
    "jest/globals": true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    // 以下追加項目
    'plugin:prettier/recommended',
    // 以下追加項目
    "prettier"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    // 以下追加項目
    'jest',
    // 以下追加項目
    'prettier'
  ],
  rules: {
    // 以下追加項目
    'prettier/prettier': 'error',
    "no-console": ["error"]
  },
  // 以下追加項目
  root: true,
}
