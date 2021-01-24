module.exports = {
  '*.+(js|jsx|ts|tsx)': ['eslint', 'npm run test:precommit'],
  // '*.+(js|jsx|ts|tsx)': ['eslint', 'npm run test:precommit', 'npm run test:e2e'],
  // '*.+(js|jsx|ts|tsx)': ['eslint'],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
}
