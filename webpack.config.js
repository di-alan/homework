// 是node提供的核心模块，作用是用于字符串的拼接
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
// "C:'path/" "/src/main.js"

module.exports = {
    // 在这里写的就是我们webpack的配置
    // __dirname代表我们的当前路径
    // entry: path.join(__dirname, "src/main.js"),
    entry: {
        main: path.join(__dirname, "src/main.js"),

    },
    output: {
        path: path.join(__dirname, "dist"),
        // 代表取入口文件的名字
        filename: "[name].js"
    },
    // ..., // 省略了前面的内容
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 3002,
        hot: true
    },
    plugins: [ // 配置插件的节点
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
            // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的页面的名称
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        rules: [ // 所有第三方模块的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
            { test: /\.(jpg|png|gif|bmp|svg)$/, use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf)$/, use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]' },
            { test: /\.vue$/,loader: 'vue-loader' }
        ]
    },


}