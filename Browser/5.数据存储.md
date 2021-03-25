# 数据存储

## Cookie

Cookie 是直接存储在浏览器中的一小串数据。它们是 HTTP 协议的一部分，由 RFC 6265 规范定义。

Cookie 通常是由 Web 服务器使用响应 Set-Cookie HTTP-header 设置的。然后浏览器使用 Cookie HTTP-header 将它们自动添加到（几乎）每个对相同域的请求中

### Cookie 限制

- encodeURIComponent 编码后的 name=value 对，大小不能超过 4kb
- 每个域的 cookie 总数不得超过 20+ 左右，具体限制取决于浏览器

### Cookie 选项

```js
document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
```

#### path

url 路径前缀，该路径下的页面可以访问该 cookie。必须是绝对路径。默认为当前路径
通常，我们应该将 path 设置为根目录：path=/，以使 cookie 对此网站的所有页面可见

#### domain

可访问 cookie 的域。默认情况下，cookie 只有在设置的域下才能被访问到，子域也无法访问。

将 domain 选项显式地设置为根域：domain=site.com，则可允许子域进行访问

#### expires，max-age

过期时间

#### source

默认情况下，cookie 基于域而不区分协议。source 选项表明该 cookie 只能通过 HTTPS 传输

#### samesite

防御 XSRF 攻击，不过 samesite 兼容性不好

- samesite=strict（和没有值的 samesite 一样)
  
  如果用户来自同一网站之外，那么设置了 samesite=strict 的 cookie 永远不会被发送
- samesite=lax
  
  如果以下两个条件均成立，则会发送 samesite=lax cookie
  - HTTP 方法是“安全的”（例如 GET 方法，而不是 POST）
  - 该操作执行顶级导航（更改浏览器地址栏中的 URL）

#### httponly

如果 cookie 设置了 httpOnly，那么 document.cookie 则看不到 cookie，所以它受到了保护

### 第三方 cookie

## LocalStorage，sessionStorage

两个存储对象都提供相同的方法和属性：

- setItem(key, value) —— 存储键/值对
- getItem(key) —— 按照键获取值
- removeItem(key) —— 删除键及其对应的值
- clear() —— 删除所有数据
- key(index) —— 获取该索引下的键名
- length —— 存储的内容的长度

### LocalStorage

- 在同源（同域/端口/协议，URL 路径可以不同）的所有标签页和窗口之间共享数据
- 数据不会过期。**浏览器重启甚至系统重启后仍然存在**

### sessionStorage

- sessionStorage 的数据只存在于当前浏览器标签页
  - 具有相同页面的另一个标签页中将会有不同的存储
  - 同一标签页下的 iframe 之间是共享的（假如它们来自相同的源）
- 数据在页面刷新后仍然保留，但在关闭/重新打开浏览器标签页后不会被保留

### Storage 事件

- key —— 发生更改的数据的 key（如果调用的是 .clear() 方法，则为 null）
- oldValue —— 旧值（如果是新增数据，则为 null）
- newValue —— 新值（如果是删除数据，则为 null）
- url —— 发生数据更新的文档的 url
- storageArea —— 发生数据更新的 localStorage 或 sessionStorage 对象

## IndexedDB

简单的键值对数据库
