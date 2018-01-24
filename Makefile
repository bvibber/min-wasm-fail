WAT2WASM=wat2wasm

min-wasm-fail.wasm : min-wasm-fail.wat
	$(WAT2WASM) min-wasm-fail.wat -o min-wasm-fail.wasm
