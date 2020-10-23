module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/utils/fileTransformer.js',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  globals: {
    __PATH_PREFIX__: ``,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`, `cypress`],
}
