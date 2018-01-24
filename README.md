Smallish test of iOS 11.2.2-11.2.5 WebAssembly failure with memory loads/stores.

Could be done synchronously by compiling from an array instead of
loading wasm from a separate file.

See emscripten bug tracker: https://github.com/kripken/emscripten/issues/6042
