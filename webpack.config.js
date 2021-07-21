"use strict";

module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  mode: "development",
  context: __dirname,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
