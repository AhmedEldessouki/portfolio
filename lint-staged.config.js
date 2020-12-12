module.exports = {
  // '*.js': ['eslint', 'npm run test:lint --findRelatedTests'],
  '*.js': ['eslint'],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
}
