let hoursEl=document.querySelector('.hours')
let minutesEl=document.querySelector('.minutes')
let secondsEl=document.querySelector('.seconds')
let ampmEl=document.querySelector('.ampm')

function updateClock(){
    let hours = new Date().getHours()
    let mins = new Date().getMinutes()
    let secs = new Date().getSeconds()
    let ampm = "AM"

    if(hours > 12){
        hours = hours - 12
        ampm = "PM"
    }
    
    hours = hours < 10 ? "0"+hours : hours
    mins = mins < 10 ? "0"+mins : mins
    secs = secs < 10 ? "0"+secs : secs
    
    hoursEl.innerText = hours
    minutesEl.innerText = mins
    secondsEl.innerText = secs
    ampmEl.innerText = ampm
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()