module.exports = {
  '*.js': ['eslint', 'npm run test:precommit'],
  // '*.js': ['eslint'],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
}
