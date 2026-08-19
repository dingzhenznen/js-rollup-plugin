import typescript from '@rollup/plugin-typescript';
import myExample from './my-plugin.js';
export default ({
  input: 'src/index.ts',
  plugins: [typescript(), myExample()],
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
