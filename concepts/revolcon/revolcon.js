const nav = document.querySelector('.nav__revolcon')
const revolcon = document.querySelector('.revolcon')

const repeat = 20;
for(let i = 0; repeat==i ; i++){
    const imageBack = document.createElement('div')
    imageBack.classList.add('revolcon__image')
    revolcon.appendChild(imageBack)
    console.log(repeat);
}