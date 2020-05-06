# JavaScript 对象

## JavaScript 对象两类属性

对 JavaScript 来说，属性并非只是简单的名称和值，JavaScript 用一组特征（attribute）来描述属性（property）。实际上 JavaScript 对象的运行时是一个“属性的集合”，属性以字符串或者 Symbol 为 key，以数据属性特征值或者访问器属性特征值为 value。

### 数据属性

- value： 就是属性的值
- writable： 决定属性能否被赋值
- enumerable： 决定 `for in` 能否枚举该属性
- configurable：决定该属性能否被删除或者改变特征值

### 访问器属性

- getter： 函数或 undefined，在取属性值时被调用
- setter：函数或 undefined，在设置属性值时被调用
- enumerable： 决定 `for in` 能否枚举该属性
- configurable：决定该属性能否被删除或者改变特征值

### 定义 / 查看属性的特征

```javascript
// 定义对象属性
var o = { a: 1 };
o.b = 2;
Object.defineProperty(o, "c", {
  value: 3,
  writable: false,
  enumerble:false,
  configurable: true,
});

// 查看对象属性
Object.getOwnPropertyDescriptor(o,"a") // {value: 1, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(o,"b") // {value: 2, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(o,"c") // {value: 2, writable: false, enumerable: false, configurable: true}

o.c = 100;
console.log(o.c); // 3
Object.keys(o); // ['a', 'b']
```

## JavaScript 的原型

两句话概括：

- 如果所有对象都有私有字段[[prototype]]，就是对象的原型
- 读一个属性，如果对象本身没有，则会继续访问对象的原型，直到原型为空或者找到为止

ES6 中提供的直接访问和操纵原型的方法：

- `Object.create` 根据指定的原型创建新的对象，原型可以是 `null`
- `Object.getPrototypeOf` 获得一个对象的原型
- `Object.setPrototypeOf` 设置一个对象的原型

## 对象分类

### 宿主对象



### 内置对象

- 固有对象：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例
- 原生对象：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象
- 普通对象：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承

