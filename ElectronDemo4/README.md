demo目的：读取文件内容展示到Electron上。了解主进程和渲染进程

1. 新建xiaojiejie.txt文件，里面随便写点东西
2. 新建main.js文件，内容同上一节差不多，不过要新建窗口时要加上属性 
    nodeIntegration: true, // 是否启用Node integration. 默认值为 false
    contextIsolation: false, // 是否在独立 JavaScript 环境中运行 Electron API和指定的preload 脚本. 默认为 true
3. 新建index.html文件，添加一个按钮和一个dev
4. 新建renderer/index.js文件，里面添加读取文件的代码，并为button绑定事件
5. 在index.html里引入index.js文件
6. npm 初始化
7. 运行程序，打开窗口进行测试

