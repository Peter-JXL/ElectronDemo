

window.onload = function(){
    var btn = this.document.querySelector('#btn')
    var BrowserWindow = require('@electron/remote').BrowserWindow;

    btn.onclick = ()=>{
        newWin = new BrowserWindow({
            width: 500,
            height: 800
        });

        newWin.loadFile('yellow.html');
        newWin.on('close',()=>{win=null});

    }
}
