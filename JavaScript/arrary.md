# 数组

## 关于 for..in 和 for..of

- for..in 一般情况下遍历对象，for..of 遍历数组
- 数组也是对象，所以 for..in 也可以遍历数组，但是速度慢，for..in 会遍历所有属性，不仅仅是数字属性。
- for..of 还可以遍历 ArrayLike 类型的对象，如 Set。

## splice

```javascript
arr.splice(index[, deleteCount, elem1, ..., elemN])
```

- 从 index 开始：删除 deleteCount 个元素并在当前位置插入 elem1, ..., elemN。最后返回已删除元素的数组。

- 允许负向索引

## slice

```javascript
arr.slice([start], [end])
```

- 会返回一个新数组，将所有从索引 start 到 end（不包括 end）的数组项复制到一个新的数组。start 和 end 都可以是负数，在这种情况下，从末尾计算索引。

## concat

```javascript
arr.concat(arg1, arg2...)
```

- 接受任意数量的参数 — 数组或值都可以。

- 结果是一个包含来自于 arr，然后是 arg1，arg2 的元素的新数组。

### Symbol.isConcatSpreadable

类似数组的对象具有 Symbol.isConcatSpreadable 属性，那么它就会被 concat 当作一个数组来处理：此对象中的元素将被添加：

```javascript
let arr = [1, 2];

let arrayLike1 = {
  0: "something",
  1: "else",
  length: 2
};

let arrayLike2 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log(arr.concat(arrayLike1)); // 1,2,[object Object]
console.log(arr.concat(arrayLike2)); // 1,2,something,else
```

## forEach

```javascript
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```

- 允许为数组的每个元素都运行一个函数。
- 该函数的结果（如果它有返回）会被抛弃和忽略。

## indexOf/lastIndexOf 和 includes

```javascript
// 从索引 from 开始搜索 item，如果找到则返回索引，否则返回 -1。
arr.indexOf(item, from)
// 和上面相同，只是从右向左搜索。
arr.lastIndexOf(item, from)
// 从索引 from 开始搜索 item，如果找到则返回 true（译注：如果没找到，则返回 false）。
arr.includes(item, from)
```

- 这些方法使用的是严格相等 === 比较
- includes 的一个非常小的差别是它能正确处理NaN，而不像 indexOf/lastIndexOf

```javascript
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1（应该为 0，但是严格相等 === equality 对 NaN 无效）
alert( arr.includes(NaN) );// true（这个结果是对的）
```

## find 和 findIndex

```javascript
let result = arr.find(function(item, index, array) {
  // 如果返回 true，则返回 item 并停止迭代
  // 对于 falsy 则返回 undefined
});
```

- arr.findIndex 方法（与 arr.find 方法）基本上是一样的，但它返回找到元素的索引，而不是元素本身。并且在未找到任何内容时返回 -1。

## filter

```javascript
let results = arr.filter(function(item, index, array) {
  // 如果 true item 被 push 到 results，迭代继续
  // 如果什么都没找到，则返回空数组
});
```

## map

```javascript
let result = arr.map(function(item, index, array) {
  // 返回新值而不是当前元素
})
```

## sort(fn)

数组进行 原位（in-place） 排序，更改元素的顺序。

```javascript
function compare(a, b) {
  if (a > b) return 1; // 如果第一个值比第二个值大
  if (a == b) return 0; // 如果两个值相等
  if (a < b) return -1; // 如果第一个值比第二个值小
}
```

- 元素默认情况下被按字符串进行排序。
- 比较函数只需要返回一个正数表示“大于”，一个负数表示“小于”。

## reverse

原位倒序

## split 和 join

## reduce/reduceRight

```javascript
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```

- accumulator – 是上一个函数调用的结果，第一次等于 initial（如果提供了 initial 的话）。
- item — 当前的数组元素。
- index — 当前索引。
- arr — 数组本身。
- 没有 initial 值的话，默认以数组第一个元素作为初值，这种情况遇到空数组就会报错。所以建议始终指定初始值。

## Array.isArray

如果 value 是一个数组，则返回 true；否则返回 false。

## arr.some(fn)/arr.every(fn)

与 map 类似，对数组的每个元素调用函数 fn。如果任何/所有结果为 true，则返回 true，否则返回 false。

## arr.fill(value, start, end)

 从索引 start 到 end，用重复的 value 填充数组。

## arr.copyWithin(target, start, end)

将从位置 start 到 end 的所有元素复制到 自身 的 target 位置（覆盖现有元素）。
