# Map 和 Set

## Map

- map.keys() —— 遍历并返回所有的键（returns an iterable for keys），
- map.values() —— 遍历并返回所有的值（returns an iterable for values），
- map.entries() —— 遍历并返回所有的实体（returns an iterable for entries）[key, value]，for..of 在默认情况下使用的就是这个。

- 使用 SameValueZero 算法来比较键是否相等。
- 与严格等于 === 差不多，但区别是 NaN 被看成是等于 NaN。所以 NaN 也可以被用作键。

- 迭代的顺序与插入值的顺序相同。与普通的 Object 不同，Map 保留了此顺序。

### Object.entries 和 Object.fromEntries

- 从一个已有的普通对象（plain object）来创建一个 Map，那么我们可以使用内建方法 Object.entries(obj)。
- 给定一个具有 [key, value] 键值对的可迭代对象，Object.fromEntries会根据给定数组创建一个对象。

```javascript
let obj = {
  name: "John",
  age: 30
};
let map = new Map(Object.entries(obj));
alert( map.get('name') ); // John

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
// 现在 prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
```

### 与 Object 的不同点

- 任何键、对象都可以作为键。
- 有其他的便捷方法，如 size 属性。

## Set

- set.keys() —— 遍历并返回所有的值（returns an iterable object for values），
- set.values() —— 与 set.keys() 作用相同，这是为了兼容 Map，
- set.entries() —— 遍历并返回所有的实体（returns an iterable object for entries）[value, value]，它的存在也是为了兼容 Map。

- 可以使用 for..of 或 forEach 来遍历 Set
