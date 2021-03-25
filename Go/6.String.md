# String

## 与其他主要编程语言的差异

- string 是数据，类型，不是引用或者指针类型
- string 是只读的 bety slice，len 函数可以返回它所包含的 byte 数
- string 的 byte 数组可以存放任何数据

## Unicode 和 UTF 8

- Unicode 是一种字符集（code point）
- UTF 8 是unicode 的存储实现（转换为字节序列的规则）