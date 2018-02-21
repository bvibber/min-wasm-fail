// This code is released as public domain -- anyone may use it for any purpose.

function testSafariWebAssemblyBug() {
  var bin = new Uint8Array(INSERT_BYTES_HERE);
  var mod = new WebAssembly.Module(bin);
  var inst = new WebAssembly.Instance(mod, {});

  // test storing to and loading from a non-zero location via a parameter.
  // Safari on iOS 11.2.5 returns 0 unexpectedly at non-zero locations
  return (inst.exports.test(4) !== 0);
}

function log(msg) {
  document.querySelector('#log').textContent = msg;
  console.log(msg);
}

if (testSafariWebAssemblyBug()) {
  // ok, we stored a value.
  log('ok');
} else {
  log('fail');
}
