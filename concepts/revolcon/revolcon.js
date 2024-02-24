const nav = document.querySelector('.nav__revolcon')
const revolcon = document.querySelector('.revolcon')

const repeat = 21;
const timing = 80;

async function fillImage() {
    await new Promise(resolve => {
        for (let i = 1; i < repeat; i++) {
            const imageBack = document.createElement('div');
            imageBack.classList.add('revolcon__image');
            setTimeout(() => {
                revolcon.appendChild(imageBack);
            }, timing * i);
        }
        setTimeout(() => {
            resolve();
        }, timing * repeat);
    });
}


let listImgaes = null
function updateImges(){
    listImgaes = document.querySelectorAll('.revolcon__image')
}

async function fillImageReverse(){
    await new Promise(resolve=>{
        updateImges()
        listImgaes.forEach((picture,index)=>{
            setTimeout(()=>{
                picture.style.backgroundImage = 'url(./assets/thuglife.jpg)' 
            },(timing*repeat - index*timing))
        })
        setTimeout(() => {
            resolve();
        }, timing * repeat);
    })
}

async function animationGears(reverse=false){
    await new Promise(resolve=>{
        updateImges()
        listImgaes.forEach((picture)=>{
            if (reverse) {
                picture.style.backgroundImage = 'url(./assets/deadPool.webp)';
                picture.style.animation = 'unset'
                picture.style.animation = 'gears linear 1.5s 1.5s reverse backwards'
            }else{
                picture.style.animation = 'gears linear 1.5s forwards'
            }
        })
        setTimeout(resolve, 1500);
    })
}

async function squareMove(){
    await new Promise(resolve=>{
        listImgaes.forEach((picture,i)=>{
            picture.style.animation = `squareMove linear 1s .${i*50}s forwards`
        })
        setTimeout(resolve, 2000);
    })
}

async function shakeRandon(){
    await new Promise(resolve=>{
        listImgaes.forEach(picture=>{
            picture.style.backgroundImage = 'url(./assets/jack.webp)'
            picture.style.animation = `shake linear .5s ${Math.random()*3}s infinite`
        })
        setTimeout(resolve,3000)
    })    
}

document.addEventListener('DOMContentLoaded',async ()=>{
    await fillImage()
    await fillImageReverse()
    await animationGears();
    await animationGears(true);
    await squareMove()
    await shakeRandon()
    console.log('FIN');
})
