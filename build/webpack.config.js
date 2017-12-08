// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var PluginsPath = path.resolve(__dirname, '../app/global/plugins')
var PagesPath = path.resolve(__dirname, '../app/global/pages')
module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        index: [
            './build/dev-client',
            path.resolve(__dirname, '../app/index/index.js')
        ],
        login: path.resolve(__dirname, '../app/login/index.js')
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'mod/jquery': path.resolve(PluginsPath, 'jquery-vendor.js'),
            'mod/pace': path.resolve(PluginsPath, 'pace/pace.min.js'),
            'mod/iosList': path.resolve(PluginsPath, 'jquery-ios-list/jquery.ioslist.min.js'),
            'mod/jqueryActual': path.resolve(PluginsPath, 'jquery-actual/jquery.actual.min.js'),
            'mod/modernizr': path.resolve(PluginsPath, 'modernizr-custom.js'),
            'mod/bootstrap': path.resolve(PluginsPath, 'bootstrap/js/bootstrap.js'),
            'mod/utils': path.resolve(PagesPath, 'js/utils.js'),
            'mod/validate': path.resolve(PluginsPath, 'jquery-validation/js/jquery.validate'),
            'mod/validateZh': path.resolve(PluginsPath, 'jquery-validation/js/localization/messages_zh.js'),
            'mod/pagination': path.resolve(PluginsPath, 'jquery.pagination/jquery.pagination.js'),
            'mod/sh_js': path.resolve(PluginsPath, 'snippet/sh_javascript.min.js'),
            'mod/snippet': path.resolve(PluginsPath, 'snippet/jquery.snippet.js'),
            'style/snippet': path.resolve(PluginsPath, 'snippet/jquery.snippet.css'),
            'style/pagination': path.resolve(PluginsPath, 'jquery.pagination/pagination.css'),
            'style/bootstrap': path.resolve(PluginsPath, 'bootstrap/css/bootstrap.css'),
            'style/pace': path.resolve(PluginsPath, 'pace/pace-theme-flash.css'),
            'pages/pages-icons': path.resolve(PagesPath, 'css/pages-icons.css'),
            'pages/light': path.resolve(PagesPath, 'css/light.css'),
            'pages/pageJs': path.resolve(PagesPath, 'js/pages.js'),
            'pages/scriptsJs': path.resolve(PagesPath, 'js/scripts_alt.js'),
        }
    },
    module: {

        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.json/,
                loader: 'json'
            }
        ]
    },
    babel: {
        presets: ['es2015']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app/index/index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
}