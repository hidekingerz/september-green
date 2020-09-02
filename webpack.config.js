module.exports = {
  watchOptions: {
    ignored: /node_modules/
  },
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js'
  },
  module: {
    rules: [
      // JSファイルにEslintを適用
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: false,
          failOnError: true,
        }
      },
      // .jsxも対象に含む
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react' //ReactのPresetを追加
            ],
            plugins: ['@babel/plugin-syntax-jsx'] //JSXパース用
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']  // .jsxも省略可能対象にする
  }
};