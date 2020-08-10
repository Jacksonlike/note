# 浏览器事件

## 常用事件类型

### 鼠标事件

- click —— 当鼠标点击一个元素时（触摸屏设备会在点击时生成）。
- contextmenu —— 当鼠标右键点击一个元素时。
- mouseover / mouseout —— 当鼠标指针移入/离开一个元素时。
- mousedown / mouseup —— 当在元素上按下/释放鼠标按钮时。
- mousemove —— 当鼠标移动时。

### 键盘事件

- keydown and keyup – 键盘按下/松开

### 表单（form）元素事件

- submit —— 当访问者提交了一个 `<form>` 时。
- focus —— 当访问者聚焦于一个元素时，例如聚焦于一个 `<input>`

### Document 事件

- DOMContentLoaded —— 当 HTML 的加载和处理均完成，DOM 被完全构建完成时

### CSS 事件

- transitionend —— 当一个 CSS 动画完成时

## addEventListener

`element.addEventListener(event, handler[, options])`

- event 事件名，例如："click"
- handler 处理程序
- options
  - once：如果为 true，那么会在被触发后自动删除监听器
  - capture：事件处理的阶段。由于历史原因，options 也可以是 false/true，它与 {capture: false/true} 效果相同
  - passive：如果为 true，那么处理程序将不会调用 preventDefault()

对于某些事件，只能通过 addEventListener 设置处理程序，例如，DOMContentLoaded 事件，该事件在文档加载完成并且 DOM 构建完成时触发

## event 对象

- event.type 事件类型
- event.currentTarget 处理事件的元素
- event.clientX / event.clientY 指针事件（pointer event）的指针的窗口相对坐标
- event.target —— 引发事件的层级最深的元素
- event.eventPhase —— 当前阶段（capturing=1，target=2，bubbling=3）

### 冒泡

当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。

- event.target —— 是引发事件的“目标”元素，它在冒泡过程中不会发生变化
- this（=event.currentTarget） —— 是“当前”元素，其中有一个当前正在运行的处理程序

#### 停止冒泡

- event.stopPropagation 停止冒泡
- event.stopImmediatePropagation 用于停止冒泡，并阻止当前元素上的处理程序（元素在一个事件上有多个处理程序）运行

### 捕获

DOM 事件标准描述了事件传播的 3 个阶段：

1. 捕获阶段（Capturing phase）—— 事件（从 Window）向下走近元素
2. 目标阶段（Target phase）—— 事件到达目标元素
3. 冒泡阶段（Bubbling phase）—— 事件从元素上开始冒泡

![DOM 事件](../img/52.png)

### 事件委托

1. 在容器（container）上放一个处理程序
2. 在处理程序中 —— 检查源元素 event.target
3. 如果事件发生在我们感兴趣的元素内，那么处理该事件

## 浏览器默认行为

许多事件会自动触发浏览器执行某些行为
