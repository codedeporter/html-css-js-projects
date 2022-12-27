const starsEl = document.querySelectorAll(".fa-star")
const emojisEl = document.querySelectorAll(".fa-regular")
const colorsArr = ["red", "orange", "lightblue", "lightgreen","green"]

updateRating(0)

// Tracking the clicks
starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateRating(index)
    })
})

//want the previous and current clicked star only to be highlighted and the proper emoji to be shown for the current
function updateRating(index) {
    starsEl.forEach((starEl, idx) => {
        if(idx < index + 1) {
            starEl.classList.add("active")
        }else{
            starEl.classList.remove("active")
        }
    })
    //emojis separated by multiples of 50px
    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index*50}px)`
        emojiEl.style.color = colorsArr[index]
    })
}