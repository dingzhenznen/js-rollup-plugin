import myExample from './my-plugin.js';
export default ({
  input: 'src/main.js', // 由我们的插件解析
  plugins: [myExample()],
  output: [{
    file: 'bundle.js',
    format: 'es'
  }]
});