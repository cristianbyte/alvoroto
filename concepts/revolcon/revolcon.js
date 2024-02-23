const nav = document.querySelector('.nav__revolcon')
const revolcon = document.querySelector('.revolcon')

const repeat = 25;
const timing = 80

async function fillImage(){
    for(let i = 1; i<repeat; i++){
        const imageBack = document.createElement('div')
        imageBack.classList.add('revolcon__image')
        setTimeout(()=>{
            revolcon.appendChild(imageBack)
        },timing*i)
    }
}

let listImgaes = null
function updateImges(){
    listImgaes = document.querySelectorAll('.revolcon__image')
}

document.addEventListener('DOMContentLoaded',()=>{
    fillImage()
    setTimeout(()=>{
        updateImges()
        listImgaes.forEach((picture,index)=>{
            setTimeout(()=>{
                picture.style.backgroundImage = 'url(./assets/thuglife.jpg)' 
            },(timing*repeat - index*timing))
        })
    },timing*repeat)
    setTimeout(()=>{
        updateImges()
        listImgaes.forEach((picture)=>{
            picture.style.animation = 'gears linear 2s forwards'
        })

    },timing*repeat*2)
})
