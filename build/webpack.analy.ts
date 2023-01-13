/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-01-11 14:06:18
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-01-12 17:50:11
 * @FilePath: \reactWebpack\build\webpack.analy.ts
 * @Description:
 *
 */
import SpeedMeasurePlugin from "speed-measure-webpack-plugin"; // 引入webpack打包速度分析插件
import webpack from "webpack";
const smp = new SpeedMeasurePlugin(); // 实例化分析插件
import { merge } from "webpack-merge"; // 引入合并webpack配置方法
import prodConfig from "./webpack.prod"; // 引入打包配置
// 使用smp.wrap方法,把生产环境配置传进去,由于后面可能会加分析配置,所以先留出合并空位
// @ts-ignore
const analyConfig: webpack.Configuration = {};
// @ts-ignore
export default smp.wrap(prodConfig);
