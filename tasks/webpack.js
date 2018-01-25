import path from 'path'
import webpack from 'webpack'

export let config = {
    entry: {
        main: [
          './main.js',
          'webpack/hot/dev-server',
          'webpack-hot-middleware/client'
        ]
    },
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, '../site')
    },
    context: path.resolve(__dirname, '../site')
}