/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-01-09 10:13:47
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-01-12 17:44:12
 * @FilePath: \reactWebpack\build\webpack.base.ts
 * @Description:
 * webpack配置文件
 *
 */

import * as path from "path";
import * as webpack from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const currentDir = process.cwd();
const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
console.log("NODE_ENV", process.env.NODE_ENV);
console.log("BASE_ENV", process.env.BASE_ENV);
const config: webpack.Configuration = {
  cache: {
    type: "filesystem", // 使用文件缓存
  },
  resolve: {
    // aliasFields: ["browser"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@src": path.resolve(currentDir, "src/"),
      "@public": path.resolve(currentDir, "public/"),
    },
    modules:[
      path.resolve(__dirname,'../node_modules') // 查找第三方模块只在本项目的node_modules中查找
    ]
  },
  entry: path.resolve(currentDir, "./src/main.tsx"),
  output: {
    filename: "bundle.js",
    path: path.join(process.cwd(), "dist"),
    // 自定义输出的别名
    // assetModuleFilename: "images/[hash][ext][query]",
    // 输出前清空
    clean: true,
    publicPath: "/", // 打包后文件的公共前缀路径 应该用绝对路径 否则会导致刷新时请求资源地址出错
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(currentDir, "src")],
        exclude: [path.resolve(currentDir, "node_moduels")],
        use: ["thread-loader", "babel-loader"],
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "assets/fonts/[name][ext]", // 文件输出目录和命名
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "assets/media/[name][ext]", // 文件输出目录和命名
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        // 注意 webpack5内置的资源处理用type
        // type 设为asset表示通用资源类型, 可以统一设置dataUrlCondition
        type: "asset",
        parser: {
          // 当符合这个条件(不超过4kb)的时候使用data url
          dataUrlCondition: {
            maxSize: 8 * 1024, // 4kb
          },
        },
        generator: {
          filename: "assets/images/[name][ext]", // 文件输出目录和命名
        },
      },
      {
        // 以css结尾的文件,文件名忽略大小写
        test: /\.(sa|sc|c)ss$/i,
        // include: [path.resolve(currentDir, "src")],
        // exclude: [path.resolve(currentDir, "node_moduels")],
        /**
         * 注意: MiniCssExtractPlugin.loader和style-loader冲突
         */
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 生成一个html文件并把资源插入进去 bundle.js css等文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), // !!!!!!!!!!! 注意 地址不能写错
      // 自动注入静态资源
      inject: true,
    }),
    new webpack.DefinePlugin({
      // "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
      "process.env.VERSION": JSON.stringify("v1.1.1"),
    }),
  ],
};

export default config;
