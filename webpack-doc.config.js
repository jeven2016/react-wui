var webpack = require("webpack");
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    progress: true,

    entry: {
        lib: [
            //使用代码热替换在开发的时候无需刷新页面即可看到更新，而且，它将构建的内容放入内在中，能够获得更快的构建编译性能，因此是官方非常推荐的一种构建方式。
            'webpack/hot/dev-server',
            'webpack/hot/only-dev-server',

            path.join(__dirname, 'documents/src/entry.js')
        ],

        //react related libraries
        rl: [
            "react",
            "react-dom",
            "react-motion",
            "react-redux",
            "react-router",
            "react-router-redux",
            "redux",
            "redux-logger",
            "redux-thunk",
            'react-intl'
        ],

        "react-wui": ["react-wui"]
    },

    output: {
        path: path.join(__dirname, 'docuements/build'),
        filename: "[name].js",
        chunkFilename: "[name].[id].js"
    },

    plugins: [
        //第三方公共包依赖
        new webpack.optimize.CommonsChunkPlugin({
            names: ['react-wui', 'rl'],
            filename: '[name].js',
            minChunks: Infinity
        }),

        // Enables Hot Modules Replacement热部署
        new webpack.HotModuleReplacementPlugin(),

        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),

        //生成html文件，并自动插入js依赖库
        new HtmlwebpackPlugin({
            title: 'Wheel-UI Documentation',
            template: path.join(__dirname, 'documents/template.html'), //index.html及模板，编译完成后讲自动更新这个文件
            filename: 'index.html',//在root目录下生成一个html文件，用于production模式下启动dev server可以直接加载的首页
            chunks: ['rl', 'react-wui', 'lib'],
            chunksSortMode: 'dependency',
            inject: 'body',
            hash: true,
            cache: true
        }),

        //js中import的css文件都将统一打包至次文件中
        new ExtractTextPlugin("style.css", {allChunks: true}),

        //enable devTools in development environment
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse('true'))
        }),

        //https://github.com/webpack/webpack/issues/2145
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ],

    module: {
        //配置编译预处理器
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/} //代码检查组件
        ],

        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel",
                exclude: [nodeModulesPath],

                query: {
                    compact: true,
                    presets: ['es2015', 'react', 'stage-3'], //enable stage-1 to support es7 syntax
                    plugins: [
                        'add-module-exports',
                        'transform-class-properties',
                        'transform-decorators-legacy',
                        'transform-object-assign',
                        'transform-function-bind',
                        'transform-runtime'
                    ]//the IE doesn't support Object.assign method and a error would encounter if no plugin transform the method.
                }
            },
            // {test: /\.css$/, loader: "style!css"}, //会将CSS文件红的样式定义动态插入到页面的head部分
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=10000&name=build/images/[name].[ext]'

            },
            {test: /\.scss$/, loader: "style!css!resolve-url!sass"},
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
            }
        ]
    },

    resolve: {
        // Allow to omit extensions when loading these files
        extensions: ['', '.js', '.jsx', '.scss'],

        alias: {
            'react-wui': path.join(__dirname, 'src/'),
            'images': path.join(__dirname, 'src/images/')
        }
    },

    eslint: {
        failOnWarning: false
    },

    //在浏览器中直接调试我们的源码，在控制台的sources下，点开可以看到webpack://目录
    //https://github.com/webpack/webpack/issues/2145
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'source-map',
    devtool: 'inline-source-map',

    devServer: {
        host: "192.168.31.108",
        port: 8080,
        historyApiFallback: true, // 当刷新当前页面会出现404错误，所以需要在web server上设置该参数。（History API）
        hot: true,
        inline: true,
        progress: true,
        compact: true,
        stats: {colors: true}
    }
};