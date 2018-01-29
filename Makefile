WAT2WASM=wat2wasm
NODE=node

.FAKE : all
all : min-wasm-fail.js

min-wasm-fail.wasm : min-wasm-fail.wat
	$(WAT2WASM) min-wasm-fail.wat -o min-wasm-fail.wasm

min-wasm-fail.json : gen.js min-wasm-fail.wasm
	$(NODE) gen.js > min-wasm-fail.json

min-wasm-fail.js : min-wasm-fail.in.js min-wasm-fail.json
	sed s/INSERT_BYTES_HERE/`<min-wasm-fail.json`/ < min-wasm-fail.in.js > min-wasm-fail.js
