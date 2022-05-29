demo目的：搭建开发环境。
1. 搭建node开发环境。从官网nodejs.org下载LTS版本（长期稳定版），Windows直接默认安装即可。
2. 检查node开发环境：安装完后，打开命令行，输入npm -v 和 node -v
3. 新建目录ElectronDemo2
4. 进入目录，并npm 初始化：npm init --yes
5. 安装Electron ，下面两个命令都是等价的。
    npm install electron  --save-dev 
    npm install electron  --D
6. 检查Electron安装：npx electron -v
    ./node_modules/.bin/electron -v
7. 启动Electron .\node_modules\.bin\electron
8. 也可全局安装，这样后续练习时就不用每次都安装
