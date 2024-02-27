//selectores

const table = document.querySelector(".table")
const thead= document.createElement("thead")
const tbody = document.createElement("tbody")



window.addEventListener("DOMContentLoaded", ()=>{
   createThead() 
   table.appendChild(tbody)
   createContentTable() 
})


function createThead(){
    const tr= document.createElement("tr")
    thead.appendChild(tr)

    for (let index = 0; index < 12; index++) {
        const th = document.createElement("th")
        th.textContent= "Round " +index  
        tr.appendChild(th)
    }

    tr.firstChild.textContent = "Player"
    tr.lastChild.textContent = "Total points"
   table.appendChild(thead)

}

function createContentTable(){
    const tr= document.createElement("tr")
    tbody.appendChild(tr)

    for (let index = 0; index < 12; index++) {
        const td = document.createElement("td")
        td.setAttribute("contenteditable", "true")
        tr.appendChild(td)
    }
    
}
