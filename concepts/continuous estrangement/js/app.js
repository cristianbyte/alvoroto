
const body = document.querySelector('body')
const header = document.querySelector('body > header')
const audio = document.querySelector('audio')
const aside =document.querySelector('.aside')



let size1 = 70
let size2 = 30
let size3 = 10
let sizeChange = 5

header.addEventListener('click', ()=>{
    console.dir(audio)
    header.classList.add('hide')
    aside.classList.add('unhide')
    if (audio.paused== true){
        audio.play()
    }else{
        audio.pause()
    }
})

function CreateSqare(nodo, ancho, color, index) {
    const cuadrado = document.createElement('div');
    cuadrado.classList.add(`justNew${index}`);
    cuadrado.style.backgroundColor = `${color}`;
    cuadrado.style.width = `${ancho}vw`;
    cuadrado.style.height = cuadrado.style.width;
    cuadrado.style.zIndex = index.toString();
    cuadrado.style.position = 'absolute';
    cuadrado.style.display =  'flex';
    cuadrado.style.alignItems = 'cernter'
    cuadrado.style.justifyContent = 'center'
    nodo.appendChild(cuadrado)    
    const newCuadro = nodo.querySelector(`.justNew${index}`)
    console.dir(newCuadro)
    return (newCuadro)
}



const cuadro1 = CreateSqare(body, size1, 'red', 1)
const cuadro2 = CreateSqare(body, size2, 'blue', 2)
const cuadro3 = CreateSqare(body, size3 , 'green', 3)

console.dir(cuadro1.style)




function makeSquareSmaller(nodo, decremento) {
    const firstValue = Number(nodo.style.width.match(/[a-z]+|[^a-z]+/gi)[0])
    if (firstValue > sizeChange) {
        nodo.style.width = `${firstValue - decremento}vw`
        nodo.style.height = nodo.style.width
        if(firstValue<= size1 && firstValue> size2){
            nodo.style.zIndex = '2'
        }else if(firstValue<= size2 && firstValue>size3){
            nodo.style.zIndex = '3'
        }
    }else{
        nodo.style.width = `120vw`
        nodo.style.height = nodo.style.width
        nodo.style.zIndex = '1' 
        nodo.style.backgroundImage = 'url(https://naukas.com/fx/uploads/2018/03/frodo.jpg)'
        nodo.style.backgroundRepeat = 'no-repeat'
        nodo.style.backgroundSize =  'cover'
        
    }

}


// makeSquareSmaller(cuadro2, 1)
// makeSquareSmaller(cuadro3, 1)


setInterval(makeSquareSmaller, 30, cuadro1, 1)
setInterval(makeSquareSmaller, 30, cuadro2, 1)
setInterval(makeSquareSmaller, 30, cuadro3, 1)


async function getConcepts(){
    const response = await fetch('../../database/database.json')
    const data = await response.json()
    const listaConcepto = document.createElement('ul')
    const closer = document.createElement('li')
    const iconoCerrar = document.createElement('i')
    iconoCerrar.classList.add('bx')
    iconoCerrar.classList.add('bx-x')
    iconoCerrar.classList.add('bx-tada')
    aside.append(listaConcepto)
    closer.appendChild(iconoCerrar)
    
    data.forEach(concepto => {
        let item = document.createElement('li')
        let nameAncla = document.createElement('a')
        nameAncla.href=concepto.url
        nameAncla.textContent=concepto.name
        item.append(nameAncla)
        listaConcepto.append(item)
    });
    listaConcepto.appendChild(closer)
    iconoCerrar.addEventListener('click', ()=>{
    header.classList.remove('hide')
    aside.classList.remove('unhide')

    })
}

getConcepts()