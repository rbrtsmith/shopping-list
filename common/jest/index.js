const path = require("path");

const createConfig = (overrides = {}) => ({
  clearMocks: true,
  timers: "fake",
  collectCoverageFrom: ["src/**/*.{js,ts,tsx}", "!src/**/__tests__/**"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "dist"],
  testRegex: "(/__tests__/.*|(\\.|/))test\\.[jt]sx?$",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.(jpg|png|svg|webp)$": path.join(
      __dirname,
      "./media-file-transformer.js"
    ),
  },
  ...overrides,
});

module.exports = { createConfig };
