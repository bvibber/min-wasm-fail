(module
  (memory 1)
  (func $test (param $loc i32) (result i32)
    ;; Safari on iOS 11.2.5 returns 0 when asked to modify and read loc 4
    ;; via a parameter. If using an i32.const or a local for the location,
    ;; it works as expected.
    get_local $loc
    i32.const 1
    i32.store
    get_local $loc
    i32.load
  )
  (export "test" (func $test))
)
