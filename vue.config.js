const webpack = require('webpack')

// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');

module.exports = {
    runtimeCompiler: true,
    publicPath: './',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '好逗逗',
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
