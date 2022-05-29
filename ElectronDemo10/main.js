const {app, BrowserWindow, BrowserView} = require('electron');

var mainWindow;


app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        height: 500,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools()

    var view = new BrowserView()   //new出对象
    mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
    view.setBounds({x:0,y:100,width:200, height:200})  //定义view的具体样式和位置
    view.webContents.loadURL('https://www.baidu.com')  //wiew载入的页面


    mainWindow.on('closed',()=>{
        mainWindow = null; //当程序关闭时，释放内存，避免内存泄漏
    });

})