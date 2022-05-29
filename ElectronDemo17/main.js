const {app, BrowserWindow, BrowserView} = require('electron');

var mainWindow;


app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        height: 500,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools()


    mainWindow.on('closed',()=>{
        mainWindow = null; //当程序关闭时，释放内存，避免内存泄漏
    });

})