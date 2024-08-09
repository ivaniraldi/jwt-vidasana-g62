export default {
    testEnvironment: "jest-environment-node",
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    transformIgnorePatterns: ["/node_modules/"]
  };
  