## 前言

本仓库是学习技术胖的Electron课程过程中，自己做的实现。

* 视频地址：[Electron免费视频教程-从基础到实战_bilibili](https://www.bilibili.com/video/BV177411s7Lt)
* 博客地址：[技术胖-Electron 免费视频教程-用前端技术开发桌面应用](https://jspang.com/article/62)



注意事项：

1. 需要一定的Node基础
2. 技术胖用的Electron版本比较旧（版本号为8左右），目前最新的版本号是19（v19.0.1），remote模块已经被弃用了，参考了最新版的写法实现了技术胖课程里的demo案例，参考[electron报错：Uncaught TypeError: Cannot read property ‘BrowserWindow‘ of undefined_程序源-的博客-CSDN博客](https://blog.csdn.net/weixin_46205984/article/details/120065725)
3. 本课程还是比较简单的，适合入门；待学习完后，再去看官方最新的文档，也不会那么困难了。Electron官方文档地址 [Introduction | Electron](https://www.electronjs.org/docs/latest)，可能需要科学上网。
4. 关于npx：[npx 使用教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2019/02/npx.html)









## 目录介绍

该课程分为17课，第一课为介绍Node和Electron，后面每节课都是讲一个小知识点；本仓库也是从第二节课开始，每个目录实现了每节课要达到的效果。课程大纲如下：

01_课程介绍和Electron简介

02_Electron开发环境搭建

03_Electron编写一个HelloWorld

04_Electron编写邀请小姐姐程序

05_Electron中Remote模块讲解

06_Electron中菜单的创建和绑定事件

07_Electron中右键菜单的制作

08_Electron中通过链接打开浏览器

09_Electron中嵌入网页和打开子窗口

10_Electron子窗口向父窗口传递信息

11_Electron选择文件对话框使用

12_Electron保存文件对话框使用

13_Electron消息对话框操作

14_Electron断网提醒功能制作

15_Electron底部通知消息制作

16_Electron注册全局快捷键

17_剪切板功能的使用

## 运行方法

首先要安装Electron

### 全局安装

推荐全局安装，方便。

全局安装Electron 和 remote模块

```shell
npm install -g electron @electron/remote
```

由于国内网络问题，安装失败可以试试以下命令再安装

```shell
npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
```



检查Electron安装：

```shell
ElectronDemo> npx electron -v
v19.0.1
```





### 局部安装

如果是局部安装： 以下两条命令是等价的。

```shell
npm install electron  --save-dev
npm install electron  --D
```



检查安装是否成功：

```shell
--方法1，使用npx
npx electron -v
v19.0.1


--方法2：直接使用可执行文件检查
.\node_modules\.bin\electron -v
```





### 启动Electron

安装完后，可以先启动试试效果

```shell
--如果是局部安装，
.\node_modules\.bin\electron

-- 如果是全局安装，打开cmd后执行
electron
```



### 运行demo

然后要运行哪个demo，就进入那个demo的目录，然后执行以下目录即可。

```shell
-- 如果是局部安装
npx electron .

-- 如果是全局安装
electron .
```







