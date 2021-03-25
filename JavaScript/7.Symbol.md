# Symbol 类型

根据规范，对象的属性键只能是字符串类型或者 Symbol 类型。不是 Number，也不是 Boolean，只有字符串或 Symbol 这两种类型。

## Symbol

- “Symbol” 值表示唯一的标识符
- Symbol 不会被自动转换为字符串

```javascript
let id = Symbol("id");
alert(id); // 类型错误：无法将 Symbol 值转换为字符串。
alert(id.toString()); // Symbol(id)，现在它有效了
```

- Symbol 在 for…in 中会被跳过

```javascript
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// 使用 Symbol 任务直接访问
alert( "Direct: " + user[id] );
```

- Object.keys(user) 同样也会忽略 symbol 属性
- 相反，Object.assign 会同时复制字符串和 symbol 属性

## 全局 Symbol

### symbol.for

全局 Symbol 注册表。我们可以在其中创建 Symbol 并在稍后访问它们，它可以确保每次访问相同名字的 Symbol 时，返回的都是相同的 Symbol。

```javascript
// 从全局注册表中读取
let id = Symbol.for("id"); // 如果该 Symbol 不存在，则创建它

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");

// 相同的 Symbol
alert( id === idAgain ); // true
```

### symbol.keyFor

```javascript
// 通过 name 获取 Symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 通过 Symbol 获取 name
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```

### description

任何 Symbol 都具有 description 属性。
Symbol.keyFor 内部使用全局 Symbol 注册表来查找 Symbol 的键。所以它不适用于非全局 Symbol。如果 Symbol 不是全局的，它将无法找到它并返回 undefined。

```javascript
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name，全局 Symbol
alert( Symbol.keyFor(localSymbol) ); // undefined，非全局

alert( localSymbol.description ); // name
```

## 系统 Symbol

- Symbol.hasInstance
- Symbol.isConcatSpreadable
- Symbol.iterator
- Symbol.toPrimitive

## 其他

从技术上说，Symbol 不是 100% 隐藏的。有一个内置方法 Object.getOwnPropertySymbols(obj) 允许我们获取所有的 Symbol。还有一个名为 Reflect.ownKeys(obj) 的方法可以返回一个对象的 所有 键，包括 Symbol。所以它们并不是真正的隐藏。但是大多数库、内置方法和语法结构都没有使用这些方法。
