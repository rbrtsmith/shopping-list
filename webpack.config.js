const { join } = require('path')

module.exports = {
  mode: 'production',
  entry: './src/lambda.ts',
  target: 'node',
  output: {
    filename: '[name].js',
    path: join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.ts', '.mjs', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  externals: {
    bufferutil: 'bufferutil',
    'utf-8-validate': 'utf-8-validate',
  },
}
