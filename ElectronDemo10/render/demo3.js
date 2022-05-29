var mybtn = document.querySelector('#btn')

btn.onclick = function(e){
    window.open('./popup_page.html')
}




window.addEventListener('message', (msg)=>{
    let mytext = document.getElementById('mytext');
    mytext.innerHTML = JSON.stringify(msg.data);
})
