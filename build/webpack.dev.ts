/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-01-10 17:06:33
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-01-12 13:44:08
 * @FilePath: \reactWebpack\build\webpack.dev.ts
 * @Description:
 *
 */

import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";

const devConfig: webpack.Configuration = {
  mode: "development",
  // devtool: "eval-cheap-module-source-map",
  devServer: {
    // 解决history route时, 404的问题
    // historyApiFallback: true,
    historyApiFallback: true,
    // 静态文件目录
    static: path.join(process.cwd(), "public"),
    // 开发环境关闭gzip可以提升热更新速度
    compress: false,
    // 开启热更新
    hot: true,
    port: 4200,
    open: true,
  },
};
export default merge(baseConfig, devConfig);
