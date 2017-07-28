 module.exports = {
     debug: true,
     devtool: 'cheap-module-eval-source-map',
     entry: './src/index.js',
     output: {
         path: './dist',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015','react','stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties','transform-decorators-legacy']
             }
         }]
     }
 }
