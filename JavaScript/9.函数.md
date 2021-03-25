# 函数对象

函数就是对象。

## 常见属性

### name

```javascript
function sayHi1() {
  console.log("Hi");
}
console.log(sayHi1.name); // sayHi1


let sayHi2 = function() {
  console.log("Hi");
};
console.log(sayHi2.name); // sayHi2

function f(sayHi3 = function() {}) {
  console.log(sayHi3.name); // sayHi3
}
f();

let user = {
  sayHi() { /* ... */ },
  sayBye() { /* ... */ },
}
console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

// 函数是在数组中创建的
// 引擎无法设置正确的名字，所以没有值
let arr = [function() {}];
console.log( arr[0].name ); // <空字符串>
```

### length

返回函数入参的个数，且余参不参与计算。

```javascript
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
```

### [[Environment]]

- 闭包是指使用一个特殊的属性 [[Environment]] 来记录函数自身的创建时的环境的函数，它具体指向了函数创建时的词法环境。

- 使用 new Function 创建的函数，它的 [[Environment]] 指向全局词法环境，而不是函数所在的外部词法环境

### 其他属性

函数可以带有额外的属性。很多知名的 JavaScript 库都充分利用了这个功能。

## 箭头函数

### 没有“this”

- 箭头函数没有 this。如果访问 this，则会从外部获取
- 箭头函数不能用作构造器（constructor）。不能用 new 调用它们。

#### 与 bind 的不同

- .bind(this) 创建了一个该函数的“绑定版本”
- 箭头函数 => 没有创建任何绑定。箭头函数只是没有 this。this 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。

### 没有“arguments”

### 没有“super”
