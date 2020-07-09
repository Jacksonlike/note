# 数组

## 关于 for..in 和 for..of

- for..in 一般情况下遍历对象，for..of 遍历数组
- 数组也是对象，所以 for..in 也可以遍历数组，但是速度慢，for..in 会遍历所有属性，不仅仅是数字属性。
- for..of 还可以遍历 ArrayLike 类型的对象，如 Set。
