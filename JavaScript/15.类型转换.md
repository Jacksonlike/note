# Object 的转换规则

## ToPrimitive

三种 hint (ECMA 规范中是这样描述的):

### "string"

对象到字符串的转换，当我们对期望一个字符串的对象执行操作时。

```javascript
// 输出
alert(obj);

// 将对象作为属性键
anotherObj[obj] = 123;
```

### "number"

对象到数字的转换，例如当我们进行数学运算时。

```javascript
// 显式转换
let num = Number(obj);

// 数学运算（除了二进制加法）
let n = +obj; // 一元加法
let delta = date1 - date2;

// 小于/大于的比较
let greater = user1 > user2;
```

### "default"

在少数情况下发生，当运算符“不确定”期望值的类型时。

### toString/valueOf

如果没有 Symbol.toPrimitive，那么 JavaScript 将尝试找到 toString/valueOf，并且按照下面的顺序进行尝试：

- 对于 “string” hint，toString -> valueOf。
- “number” 或者 “default” hint，valueOf -> toString。
- 如果没有 Symbol.toPrimitive 和 valueOf，toString 将处理所有原始转换。
