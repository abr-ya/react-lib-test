// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "js/[name].[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
  optimization: {
    splitChunks: { chunks: "all" }, // отделяем vendor
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "../public", to: "./" }],
    }),
  ],
});
