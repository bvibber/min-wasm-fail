function log(msg) {
  document.querySelector('#log').textContent = msg;
  console.log(msg);
}

fetch('min-wasm-fail.wasm').then(function(response) {
  return response.arrayBuffer();
}).then(function (bin) {
  return WebAssembly.compile(bin);
}).then(function (mod) {
  var inst = new WebAssembly.Instance(mod, {});
  var load = inst.exports.load;
  var store = inst.exports.store;
  store(4, 1234);
  if (load(4) !== 1234) {
    // Safari on iOS 11.2.5 returns 0 unexpectedly at non-zero locations
    throw new Error('wasm load/store failure');
  } else {
    return;
  }
}).then(function() {
  log('ok');
}).catch(function(e) {
  log('fail: ' + e);
});

