(module
  (memory 1)
  (func $load (param i32) (result i32)
    get_local 0
    i32.load
  )
  (func $store (param i32) (param i32)
    get_local 0
    get_local 1
    i32.store
  )
  (export "load" (func $load))
  (export "store" (func $store))
)
