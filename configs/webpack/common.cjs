// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./index.tsx",
  resolve: {
    alias: {
      api: resolve(__dirname, "../../src/api"),
      components: resolve(__dirname, "../../src/components"),
      lib: resolve(__dirname, "../../src/lib"),
      pages: resolve(__dirname, "../../src/pages"),
      src: resolve(__dirname, "../../src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [resolve(__dirname, "../../src"), "node_modules"],
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "static/images/[hash][ext][query]",
        },
      },
      // {
      //   test: /\.svg$/i,
      //   issuer: /\.[jt]sx?$/,
      //   use: ["@svgr/webpack", "url-loader"],
      // },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        options: {
            removeTags: true,
            removingTags: ['title', 'desc'],
            removeSVGTagAttrs: false
        }
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html.ejs" }), new Dotenv()],
};
