//IMPORTS
import { DoubleSide } from "../threeJS/three.module.js";
import { getData } from "./funtions.js";

//SELECTORS
const header = document.querySelector("header")
const nav = document.createElement("nav")
const btnDown = document.querySelector("#btnDown")
const btnUP = document.createElement("button")

const downArrow = "<i class='bx bxs-chevrons-down bx-fade-down' ></i>"
    const upArrow = "<i class='bx bx-chevron-up bx-fade-up' ></i>"

//EVENTOS
document.addEventListener("DOMContentLoaded", async ()=>{
    const data = await getData("../../../../database/database.json")
    console.log(data);
    generatorMenu(data)
    
})

btnDown.addEventListener("click", (event)=>{ 
    event.preventDefault()
    nav.style.display = "flex"
    header.removeChild(btnDown)
    header.appendChild(btnUP)
    btnUP.innerHTML = upArrow
  
})

btnUP.addEventListener("click", (event)=>{
    event.preventDefault()
    nav.style.display = "none"
    header.removeChild(btnUP)
    header.appendChild(btnDown)
})



//FUNCIONES
function generatorMenu(dataBase){
    dataBase.forEach(data => {
        console.log(data);
        
        const a = document.createElement("a")
        a.textContent = data.name
        a.href = data.url
        
        
        const iframe = document.createElement("iframe")
        iframe.src = data.url

        iframe.addEventListener("click",()=>{
            a.click()
        })



        a.appendChild(iframe)
        nav.appendChild(a)
        nav.style.display = "none"
        
    });
    header.appendChild(nav)
}

