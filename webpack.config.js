const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "styled-components":
        "styled-components/dist/styled-components.browser.esm.js",
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@constants": path.resolve(__dirname, "src/constants"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3030,
    hot: true,
    open: true,
  },
  mode: "development",
};
