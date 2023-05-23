export default {
  // collectCoverage: true,
  collectCoverageFrom: [
    './stories/**'
  ],
  coveragePathIgnorePatterns: ['^.*\\.stories\\.[jt]sx?$'],
  coverageThreshold: {
    'global': {
      'branches': 30,
      'functions': 30,
      'lines': 30
    }
  },
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts'
  ],
  testEnvironment: 'jsdom'
}
