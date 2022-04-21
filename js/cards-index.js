const btnLowCarbohidrados = document.querySelector('#btn-low-carbohidratos');
const btnLowGrasas = document.querySelector('#btn-low-grasas');
const btnLowCalorias = document.querySelector('#btn-low-calorias');
const btnMejores = document.querySelector('#mejores');
const btnTodos = document.querySelector('#todos');
const contenedor =document.querySelector('#resultado-section-cinco'); 

let botonSeleccionado;

const arrayBotones = [btnLowCarbohidrados,btnLowGrasas,btnLowCalorias,btnMejores,btnTodos];

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    ImprimirHTML(db);
    btnTodos.classList.add('seleccionado-btn');
})


function eventos(){
    btnLowCarbohidrados.addEventListener('click',mostrarBajoEnCarbohidratos);
    btnLowGrasas.addEventListener('click',mostrarBajoEnGrasas);
    btnLowCalorias.addEventListener('click',mostrarBajoEnCalorias);
    btnMejores.addEventListener('click',mostrarMejores);
    btnTodos.addEventListener('click',mostrarTodos);
}

function mostrarTodos(e){

    botonSeleccionado = arrayBotones.filter(element => element.id === e.target.id);
    botonSeleccionado.forEach(element=>{
        element.classList.add('seleccionado-btn')

        const diferentes = arrayBotones.filter(element=> element.id !== e.target.id)

        diferentes.forEach(element=>{
                element.classList.remove('seleccionado-btn')
        })
    })


    ImprimirHTML(db);
}


function mostrarBajoEnCarbohidratos(e){
    botonSeleccionado = arrayBotones.filter(element => element.id === e.target.id);
    botonSeleccionado.forEach(element=>{
        element.classList.add('seleccionado-btn')
        const diferentes = arrayBotones.filter(element=> element.id !== e.target.id)
            diferentes.forEach(element=>{
                element.classList.remove('seleccionado-btn')
            })
    })


    let arregloBajoCalorias = db.filter(element=>element.convencion === 'lowCarbohidratos');
    arregloBajoCalorias.forEach(element =>{
        ImprimirHTML(arregloBajoCalorias);
    })
}

function mostrarBajoEnGrasas(e){
    botonSeleccionado = arrayBotones.filter(element => element.id === e.target.id);
    botonSeleccionado.forEach(element=>{
        element.classList.add('seleccionado-btn')
        const diferentes = arrayBotones.filter(element=> element.id !== e.target.id)
            diferentes.forEach(element=>{
                element.classList.remove('seleccionado-btn')
            })
    })

    let arregloBajoGrasas = db.filter(element=>element.convencion === 'lowGrasas');
    arregloBajoGrasas.forEach(element=>{
        ImprimirHTML(arregloBajoGrasas);
    })
}

function mostrarBajoEnCalorias(e){
    botonSeleccionado = arrayBotones.filter(element => element.id === e.target.id);
    botonSeleccionado.forEach(element=>{
        element.classList.add('seleccionado-btn')
        const diferentes = arrayBotones.filter(element=> element.id !== e.target.id)
            diferentes.forEach(element=>{
                element.classList.remove('seleccionado-btn')
            })
    })


    let arregloBajoCalorias = db.filter(element=>element.convencion === 'lowCalorias');
    arregloBajoCalorias.forEach(element=>{
        ImprimirHTML(arregloBajoCalorias);
    })
}

function mostrarMejores(e){
    botonSeleccionado = arrayBotones.filter(element => element.id === e.target.id);
    botonSeleccionado.forEach(element=>{
        element.classList.add('seleccionado-btn')
        const diferentes = arrayBotones.filter(element=> element.id !== e.target.id)
            diferentes.forEach(element=>{
                element.classList.remove('seleccionado-btn')
            })
    })


    let arregloMejores = db.filter(element=>element.convencion === 'mejores');
    arregloMejores.forEach(element=>{
        ImprimirHTML(arregloMejores);
    })
}

function ImprimirHTML(arreglo){
    limpiarHTML();
    arreglo.forEach(element => {
        const card = document.createElement('ARTICLE');
        card.classList.add('card-5');
        const img = document.createElement('IMG');
        img.src = element.url;
        img.alt = 'img-arreglo';
        img.classList.add('img-respuesta');
        const h4 = document.createElement('h4');
        h4.classList.add('h4-5')
        h4.textContent = element.nombre;
        card.appendChild(img);
        card.appendChild(h4);
        contenedor.appendChild(card)
    });
}

function limpiarHTML(){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}