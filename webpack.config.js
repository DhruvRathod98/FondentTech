const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: [
          {
            loader: '@badeball/cypress-cucumber-preprocessor/webpack',
            options: {
              stepDefinitions: 'cypress/e2e/step_definitions/**/*.js',
            },
          },
        ],
      },
    ],
  },
};
