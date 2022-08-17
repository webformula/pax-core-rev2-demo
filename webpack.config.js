import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
  entry: './app3/app.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app3/index.html'
    })
  ],
  devServer: {
    static: {
      directory: './'
    },
    historyApiFallback: true,
    historyApiFallback: {
      rewrites: [
        { from: /bundle\.js/, to: '/bundle.js' },
      ],
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader',
          {
            loader: 'posthtml-loader'
          }
        ]
      }
    ]
  },
};
