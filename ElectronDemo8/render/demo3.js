var {shell} = require('electron')

var aHref = document.getElementById('aHref')

aHref.onclick = function(e){
    e.preventDefault();
    var href = this.getAttribute('href')
    shell.openExternal(href)
}
