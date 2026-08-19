import myExample from './my-plugin.js';
export default ({
  input: 'src/main.js', // 由我们的插件解析
  plugins: [myExample()],
  output: [{
    file: 'dist/index.esm.js',
    format: 'es',
    sourcemap: true
  }, {
    file: 'dist/index.cjs',
    format: 'cjs',
    exports: 'named',
    sourcemap: true
  }]
});
