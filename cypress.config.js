const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const webpack = require('@cypress/webpack-preprocessor');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  const options = {
    webpackOptions: require('./webpack.config.js'),
    watchOptions: {},
  };

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    experimentalMemoryManagement: false,
    numTestsKeptInMemory: 0,
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/index.js',
    setupNodeEvents,
  },
});
