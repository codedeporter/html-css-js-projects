function changeText(){
    let changeEl = document.querySelector('#container')
    if(changeEl.innerHTML === "JavaScript"){
        changeEl.innerHTML = "Hyper Text Markup Language"
        console.log("what?")
    }else{
        changeEl.innerHTML = "JavaScript"
        console.log("hello")
    }
}