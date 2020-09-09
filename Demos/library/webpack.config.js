const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index",
  externals: ["lodash"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "library.js",
    libraryTarget: "umd",
  },
};
