const {app, BrowserWindow} = require('electron');


app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        height:500,
        width: 800,
        webPreferences:{
            nodeIntegration : true, //开启node
            contextIsolation : false
        }
    });

    mainWindow.loadFile('index.html');
    mainWindow.on('closed', ()=>{
        mainWindow = null;
    })
})
