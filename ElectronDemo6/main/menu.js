const {Menu, BrowserWindow} = require('electron');

var template = [
    {
        label: '会所',
        submenu: [
            {
                label: 'spa',
                click: ()=>{
                    win = new BrowserWindow({
                        width: 500,
                        height: 800,
                        webPreferences:{
                            nodeIntegration: true
                        }
                    });
                    win.loadFile('yellow.html');
                    win.on('closed', ()=>{
                        win = null;
                    })
                }
            },
            {label: '按摩'}
        ]
    },{
        label: '洗浴中心',
        submenu: [
            {label: '玫瑰浴'},
            {label: '爱情拍手'}
        ]
    }
];

var m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);
