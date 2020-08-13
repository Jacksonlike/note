# 页面生命周期

## DOMContentLoaded

DOM 览器已完全加载 HTML，并构建了 DOM 树，但像 `<img>` 和样式表之类的外部资源可能尚未加载完成，因此处理程序可以查找 DOM 节点，并初始化接口

不会阻塞 DOMContentLoaded 的脚本

- 具有 async 特性（attribute）的脚本不会阻塞 DOMContentLoaded
- 使用 document.createElement('script') 动态生成并添加到网页的脚本也不会阻塞 DOMContentLoaded

## load

浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等，样式已被应用，图片大小也已知了

## beforeunload

用户正在离开，以检查用户是否保存了更改，并询问他是否真的要离开

## unload

用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据

## document.readyState

- loading —— 文档正在被加载
- interactive —— 文档被全部读取，与 DOMContentLoaded 几乎同时发生，但是在 DOMContentLoaded 之前发生
- complete —— 文档被全部读取，并且所有资源（例如图片等）都已加载完成

readystatechange 事件，会在状态发生改变时触发
