const dayEl = document.querySelector("#day")
const hourEl = document.querySelector("#hour")
const minuteEl = document.querySelector("#minute")
const secondEl = document.querySelector("#second")

const newYearTime = new Date("Jan 1, 2023 00:00:00").getTime()
console.log(newYearTime)

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime()
    const gap = newYearTime - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const remainingDays = Math.floor(gap/day)
    console.log(remainingDays)

    const remainingHours = Math.floor((gap%day) / hour)
    console.log(remainingHours)

    const remainingMinutes = Math.floor((gap%hour)/minute)

    const remainingSeconds = Math.floor((gap%minute)/second)

    dayEl.innerText = remainingDays
    hourEl.innerText = remainingHours
    minuteEl.innerText = remainingMinutes
    secondEl.innerText = remainingSeconds

    setTimeout(updateCountdown, 1000)
}
