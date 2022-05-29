var electron = require('electron');

var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({width:800, height:500});
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', ()=>{
        mainWindow = null;  //关闭后释放内存，避免内存泄漏
    })
})

