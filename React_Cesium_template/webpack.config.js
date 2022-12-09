const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";
var content = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
  </head>
  <body>
    <div id="app" />
  </body>
</html>
    `


module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: { hot: true, open: true },
  resolve: {
    fallback: { https: false, zlib: false, http: false, url: false },
    extensions: ['.ts', '.js','.tsx','.jsx'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jsx|js)$/,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-react",
            {
              "runtime": "automatic"
            }
          ]],

        }
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1024
          }

        }
      },
      {//对标file-loader
        test: /\.(png|jpg)$/,
        type: "asset/resource"
      },
    ],
  },
  plugins: [new DefinePlugin({
    CESIUM_BASE_URL: JSON.stringify(""),
}),
new CopyWebpackPlugin({
    patterns: [
        { from: path.join(cesiumSource, "Assets"), to: "Assets" },
        { from: path.join(cesiumSource, "ThirdParty"), to: "ThirdParty" },
        { from: path.join(cesiumSource, "Widgets"), to: "Widgets" },
        { from: path.join(cesiumSource, cesiumWorkers), to: "Workers" }]
}),new HtmlWebpackPlugin({
    templateContent: content
  })]
};