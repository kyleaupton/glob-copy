module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": "standard-with-typescript",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/prefer-ts-expect-error": 0
  }
}
