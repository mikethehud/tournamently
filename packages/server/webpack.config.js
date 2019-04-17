const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["./src/index.ts"],
  target: "node",
  module: {
    rules: [
      {
        test: /.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js"
  },
  stats: {
    // Ignore CriticalDependenciesWarning
    // see https://github.com/webpack/webpack/issues/1576#issuecomment-421524094
    warningsFilter: /^(?!CriticalDependenciesWarning$)/
  }
};
