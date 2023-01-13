/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-01-10 17:06:40
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-01-12 17:50:54
 * @FilePath: \reactWebpack\build\webpack.prod.ts
 * @Description:
 *
 */
import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const currentDir = process.cwd();

const prodConfig: webpack.Configuration = {
  mode: "production", // 会开启webpack自带的tree-shaking,压缩等其他优化
  plugins: [
    // 用于将项目中没有引用的文件复制到dist目录
    // 可能会出现报错: ERROR in Conflict: Multiple assets emit different content to the same filename index.html
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(currentDir, "public"),
          to: path.resolve(currentDir, "dist"),
          filter: (source) => {
            return !source.includes("index.html"); // 排除index.html文件, 因为HtmlWebpackPlugin插件会根据模板生成一个html文件到dist目录
          },
        },
      ],
    }),
    new MiniCssExtractPlugin()
  ],
};
export default merge<webpack.Configuration>(baseConfig, prodConfig);
