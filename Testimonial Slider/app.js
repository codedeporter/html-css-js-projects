const testimonials = [
    {
        name: "Trudey P.",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60", 
        text: "We were treated like royalty. I would like to personally thank you for your outstanding product. I have gotten at least 50 times the value from apple. I couldn't have asked for more than this."
    },
    {
        name: "Peyton U.",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
        text: "I will refer everyone I know. I have gotten at least 50 times the value from apple. I am really satisfied with my apple. Not able to tell you how happy I am with apple."
    },
    {
        name: "Valdemar E.",
        photo: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
        text: "I will refer everyone I know. I would be lost without apple. It's just amazing. "
    }
]

const imgEl = document.querySelector('img')
const textEl = document.querySelector('.text')
const usernameEl = document.querySelector('.username')

let index = 0

updateTestimonial()

function updateTestimonial(){
    const {name, photo, text} = testimonials[index]
    imgEl.src = photo
    textEl.innerText = text
    usernameEl.innerText = name
    index++
    if(index===testimonials.length){
        index = 0
    }
    setTimeout(() => {
        updateTestimonial()
    }, 10000)
}