const {app, BrowserWindow} = require('electron');

var mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 800,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    require('@electron/remote/main').initialize();
    require('@electron/remote/main').enable(mainWindow.webContents);

    mainWindow.loadFile('index.html');

    mainWindow.on('closed',()=>{
        mainWindow = null; //当程序关闭时，释放内存，避免内存泄漏
    });


})

