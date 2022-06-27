module.exports = {
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx|js|jsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: { "\\.(css|less)$": "<rootDir>/tests/mocks/styleMock.js", "\\.(png|jpg)$": "<rootDir>/tests/mocks/fileMock.js" },
  moduleDirectories: ['node_modules', '<rootDir>']
}