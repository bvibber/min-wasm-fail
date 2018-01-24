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
  // test storing to and loading from a non-zero location via a parameter.
  if (inst.exports.test(4)) {
    // ok, we stored a value.
  } else {
    // Safari on iOS 11.2.5 returns 0 unexpectedly at non-zero locations
    throw new Error('wasm load/store failure');
  }
}).then(function() {
  log('ok');
}).catch(function(e) {
  log('fail: ' + e);
});

