module.exports = {
  '*.+(js|jsx|ts|tsx)': ['eslint --fix', 'npm run test:precommit'],
  '*.+(json|yml|yaml|css|less|scss)': ['prettier --write'],
}