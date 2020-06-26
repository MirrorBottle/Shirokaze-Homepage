const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withPlugins([
    [optimizedImages],
    [withCSS, {
        webpack: function (config) {
            config.module.rules.push({
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]'
                    }
                }
            })
            return config
        }
    }], [withFonts], [withSass],
], {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.pdf$/,
            use: 'url-loader'
        })

        // if (!isServer) {
        //     config.node = {
        //         fs: 'empty'
        //     }
        // }

        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        return config
    }
});