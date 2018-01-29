const fs = require('fs');

fs.readFile('min-wasm-fail.wasm', (err, data) => {
  const arr = new Uint8Array(data);
  const list = '[' + arr.join(',') + ']';
  console.log(list);
  process.exit(0);
});
