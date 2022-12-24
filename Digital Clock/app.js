const hourEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")

function updateClock() {
    const currentDate = new Date()
    console.log(currentDate)
    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const second = currentDate.getSeconds()
    const hourDeg = 30*hour
    const minDeg = 6*minute
    const secDeg = second /10
    hourEl.style.transform = `rotate(${hourDeg}deg)`
    minEl.style.transform = `rotate(${minDeg}deg)`
    secondEl.style.transform = `rotate(${secDeg}deg)`
}
setInterval(updateClock, 1000)