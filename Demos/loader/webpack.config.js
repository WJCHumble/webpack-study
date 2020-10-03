const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index",
  },
  resolveLoader: {
    modules: ["node_modules", "./loaders"],
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: path.resolve(__dirname, "./loaders/replaceLoader.js"),
            options: {
              name: "lj",
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
}
