import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import builtins from "rollup-plugin-node-builtins";

export default {
  input: "public/support.js",
  output: {
    file: "public/support.js",
    format: "es"
  },
  interop: false,
  noStrict: true,
  plugins: [
    resolve({ browser: true, preferBuiltins: true }),
    builtins(),
    commonjs()
  ]
};
