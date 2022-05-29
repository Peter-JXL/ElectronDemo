const {app, BrowserWindow, globalShortcut } = require('electron');

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
    mainWindow.webContents.openDevTools();

    globalShortcut.register('ctrl+e', function(){
        mainWindow.loadURL('https://jspang.com')
    })

    let isRegister = globalShortcut.isRegistered('ctrl+e')?'Register Success':'Register fail'
    console.log ('--------->', isRegister)

    mainWindow.on('closed',()=>{
        mainWindow = null; //当程序关闭时，释放内存，避免内存泄漏
    });

});

app.on('will-quit', function(){
    //注销全局快捷键
    globalShortcut.unregister('ctrl+e');
    globalShortcut.unregisterAll();
})