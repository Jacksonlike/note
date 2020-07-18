# class

## 什么是 class

```javascript
class User {
  classField = "类字段";

  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// 佐证：User 是一个函数
alert(typeof User); // function
```

class User {...} 构造实际上做了如下的事儿：

![class User](../img/39.png)

- 建一个名为 User 的函数，该函数成为类声明的结果，该函数的代码来自于 constructor
- 存储类中的方法

### 与普通的构造函数区别

- 通过 class 创建的函数具有特殊的内部属性标记 [[FunctionKind]]:"classConstructor"
- 调用类构造器时必须要用 new 关键词
- 类方法不可枚举，类定义将 "prototype" 中的所有方法的 enumerable 标志设置为 false
- 类总是使用 use strict。 在类构造中的所有代码都将自动进入严格模式

### class 字段

- “类字段”是一种允许添加任何属性的语法。上面例子中的 classField 字段
- 类字段设置在单个对象上的，而不是设置在类的原型对象上的
- 在 constructor 完成工作后被处理的

### 语法总结

```javascript
class MyClass {
  prop = value; // 属性

  constructor(...) { // 构造器
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter 方法
  set something(...) {} // setter 方法

  [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
  // ...
}
```
