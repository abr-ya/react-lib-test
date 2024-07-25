// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common.cjs");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router
    port: 3000,
    proxy: {
      "/api": {
        target: "http://tklds-cas000004.delta.sbrf.ru:8082/tsars/api/v3/cars-destruction-bh",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "" },
      },
      "/auth": {
        target: "http://tklds-cas000004.delta.sbrf.ru:8082/tsars/api/v2/authorize",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/auth": "" },
      },
    },
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new ReactRefreshPlugin(),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remote2: "remote2@https://hello-rsb.netlify.app/remoteentry.js",
      },
      // shared: ["react", "react-dom"],
    }),
  ],
});
