# 可迭代对象

可迭代（Iterable） 对象是数组的泛化。这个概念是说任何对象都可以被定制为可在 for..of 循环中使用的对象。

## Symbol.iterator

案例：

```javascript
let range = {
  from: 1,
  to: 5
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function() {

  // ……它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与此迭代器一起工作，要求它提供下一个值
  return {
    current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// 现在它可以运行了！
for (let num of range) {
  console.log(num); // 1, 然后是 2, 3, 4, 5
}
```

### 字符串是可迭代的

- 字符串迭代器能够识别代理对（surrogate pair）。（译注：代理对也就是 UTF-16 扩展字符。）

## 类数组（array-like）

- Iterable 如上所述，是实现 Symbol.iterator 方法的对象。
- Array-like 是有索引和 length 属性的对象，所以它们看起来很像数组。

### Arrary.from

```javascript
Array.from(obj[, mapFn, thisArg])
```

Array.from 可以接受一个可迭代或类数组的值，并返回一个真的数组。然后就可以对其调用数组方法了。
