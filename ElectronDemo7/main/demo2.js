

const remote = require('@electron/remote');

var rightTemplate = [
    {label: '复制', accelerator: 'ctrl+c'},
    {label: '粘贴', accelerator: 'ctrl+v'}
];

var m = remote.Menu.buildFromTemplate(rightTemplate);

window.addEventListener('contextmenu',function(e){
    e.preventDefault(); //取消默认的执行方法
    m.popup({window: remote.getCurrentWindow()})
})
