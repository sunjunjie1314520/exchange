const webpack = require('webpack')

// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');

const putDir = true

module.exports = {
    runtimeCompiler: true,
    publicPath: './',
    outputDir: putDir ? 'jiaoyi' : 'trade',
    devServer: {
        proxy: {
            '/dev': {
                target: 'http://hzasdbf.cn/public/index.php',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/dev': ''
                }
            },
        }
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '好逗短视频',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },
    css: {
        // loaderOptions: {
        //     postcss: {
        //         plugins: [
        //             autoprefixer(),
        //             pxtorem({
        //                 rootValue: 50,
        //                 propList: ['*']
        //             })
        //         ]
        //     }
        // }
    }
}
