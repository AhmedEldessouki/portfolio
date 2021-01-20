module.exports = {
  '*.js': ['eslint', 'npm run test:precommit'],
  // '*.js': ['eslint', 'npm run test:precommit', 'npm run test:e2e'],
  // '*.js': ['eslint'],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
}
