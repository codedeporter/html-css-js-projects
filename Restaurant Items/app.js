const menuItemsArray = [
    {
        id: 1,
        item: "Food item1",
        oneliner: "One:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, maiores!",
        img: "images/food-item1.jpg",
        hotel: "hotel name1",
        desc: "One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias sequi iusto nesciunt cum nihil neque libero iste recusandae voluptatibus?",
        
    },
    {
        id: 2,
        item: "Food item2",
        oneliner: "Two:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, maiores!",
        img: "images/food-item2.jpg",
        hotel: "hotel name2",
        desc: "Two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias sequi iusto nesciunt cum nihil neque libero iste recusandae voluptatibus?",
        
    },
    {
        id: 3,
        item: "Food item3",
        oneliner: "Three:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, maiores!",
        img: "images/food-item3.jpg",
        hotel: "hotel name3",
        desc: "Three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias sequi iusto nesciunt cum nihil neque libero iste recusandae voluptatibus?",
        
    },
    {
        id: 4,
        item: "Food item4",
        oneliner: "Four:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, maiores!",
        img: "images/food-item4.jpg",
        hotel: "hotel name4",
        desc: "Four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias sequi iusto nesciunt cum nihil neque libero iste recusandae voluptatibus?",
        
    },
    {
        id: 5,
        item: "Food item5",
        oneliner: "Five:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, maiores!",
        img: "images/food-item5.jpg",
        hotel: "hotel name5",
        desc: "Five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias sequi iusto nesciunt cum nihil neque libero iste recusandae voluptatibus?",
        
    },

]

const item=document.querySelector("#item")
const oneLiner=document.querySelector("#oneLiner")
const img=document.querySelector("#img")
const hotel=document.querySelector("#hotel")
const desc=document.querySelector("#desc")
const prev=document.querySelector("#prev")
const random=document.querySelector("#random")
const next=document.querySelector("#next")

let currentMenu=0

window.addEventListener('DOMContentLoaded', function(){
    // let menu=menuItemsArray[currentMenu]
    // item.textContent=menu.item
    // oneLiner.textContent=menu.oneliner
    // img.src=menu.img
    // hotel.textContent=menu.hotel
    // desc.textContent=menu.desc
    allMenu(currentMenu)
})

const allMenu=()=>{
    let menu=menuItemsArray[currentMenu]
    item.textContent=menu.item
    oneLiner.textContent=menu.oneliner
    img.src=menu.img
    hotel.textContent=menu.hotel
    desc.textContent=menu.desc
}

//random menu
random.addEventListener('click', ()=>{
    currentMenu=Math.floor(Math.random()*menuItemsArray.length)
    allMenu(currentMenu)
})


//previous button
prev.addEventListener('click', ()=>{
    currentMenu--
    if(currentMenu<0){
        currentMenu=menuItemsArray.length-1
    }
    allMenu(currentMenu)
})


//next button
next.addEventListener('click', ()=>{
    currentMenu++
    if(currentMenu>menuItemsArray.length-1){
        currentMenu=0
    }
    allMenu(currentMenu)
})

