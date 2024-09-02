


import { fileURLToPath } from 'url';
import { dirname } from 'path';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './block.js',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          keep_fnames: true,
          ecma: 6,
        },
      }),
    ],
  },
  output: {
    path: __dirname,
    filename: 'block.build.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  }
};

