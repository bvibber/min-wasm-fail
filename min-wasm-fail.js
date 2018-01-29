function testSafariWebAssemblyBug() {
  var bin = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]);
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
