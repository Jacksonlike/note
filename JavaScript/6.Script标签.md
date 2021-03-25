# Script 标签

## 模块和脚本

### JavaScript 有两种源文件

- 脚本：主动性的 JavaScript 代码段

  - 包含语句

- 模块：等待被调用的库

  ```html
  <!-- 引用办法 -->
  <script type="module" src="xxxxx.js"></script>
  ```

  - 包含语句、import 声明，export 声明

脚本和模块的区别仅仅在于是否包含 `import` 和 `export` 。

### import 声明

#### 两种声明方式

```javascript
import "mod"; //引入一个模块

import x from "./a.js" // 引入模块中导出的默认值。
import {a as x, modify} from "./a.js"; // 引入模块中的变量。
import * as x from "./a.js" // 把模块中所有的变量以类似对象属性的方式引入。
```

直接 import 一个模块，只是保证了这个模块代码被执行，引用它的模块是无法获得它的任何信息的。

### export 声明

## defer 和 async

- async 属性。立即请求文件，但不阻塞渲染引擎，而是文件加载完毕后阻塞渲染引擎并立即执行文件内容。
- defer 属性。立即请求文件，但不阻塞渲染引擎，等到解析完 HTML 之后再执行文件内容。
- HTML5 标准 type 属性，对应值为“module”。让浏览器按照 ECMAScript 6 标准将文件当作模块进行解析，默认阻塞效果同 defer，也可以配合 async 在请求完成后立即执行。

![defer 和 async](../img/14.png)

