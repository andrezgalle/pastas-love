const listaTienda = document.querySelector('.lista');
const tablaContenedora = document.querySelector('.tabla-de-resultados');
const contenedorBotones = document.querySelector('.contenedor-buttons');
const respuesta = document.querySelector('.respuesta');
const buttonPagar = document.querySelector('.botton-pagar');
const encabezado = document.querySelector('.encabezado-resultado');
const buttonReset = document.querySelector('.botton-reset');
let carrito =[];

eventos();
function eventos(){
    listaTienda.addEventListener('click',agregar);
    buttonPagar.addEventListener('click',totalCompra);
    buttonReset.addEventListener('click',resetear);
}

function agregar(e){
    if(e.target.classList.contains('button-carro')){
        const itemSeleccionado = e.target.parentElement;
        leerDatos(itemSeleccionado);
    }
}

function resetear(){
    encabezado.textContent = 'Aún no tiene productos agregados al carrito';
    contenedorBotones.style.display = 'none';
    carrito = [];
    carritoHTML(carrito);
}


function leerDatos(item){

    info ={
        img:item.querySelector('img').src,
        titulo:item.querySelector('h3').textContent,
        precio:item.querySelector('p span').textContent,
        Id:item.querySelector('button').getAttribute('data-id'),
        cantidad:1
    }

    //revisar si el obj existe
    existe = carrito.some(element=> element.Id === info.Id);

    if(existe){
        const item = carrito.map(element=>{
            if(element.Id === info.Id){
                return element.cantidad++;
            }else{
                return element;
            }
        })
    }else{
        carrito = [...carrito,info];
        encabezado.textContent = 'Agregando...';

    }
    /* console.log(carrito) */

    //llamar al carritohtml
    carritoHTML(carrito);
}

function carritoHTML(array){
    limpiarCarrito();
    array.forEach(element => {
        const row = document.createElement('tr');
        row.innerHTML =`
            <th class="imgg"><img src="${element.img}" width="100"></th>
            <th class="titlee">${element.titulo}</th>
            <th class="pricee">$${element.precio}</th>
            <th>${element.cantidad}</th>
        `
        tablaContenedora.appendChild(row);

        if(carrito === []){
            contenedorBotones.style.display = 'none';
        }else{
            contenedorBotones.style.display = 'block';
        }
    });
}


function totalCompra(){
     let total =0;

    carrito.forEach(element=>{
        return total+=parseFloat(element.precio)*element.cantidad;
        
    })
    const alerta = document.createElement('P');
    alerta.classList.add('alerta-pago');
    alerta.textContent = `Total a Pagar: $${total}`;
    respuesta.appendChild(alerta);
    encabezado.textContent = 'Pedido Exitoso';

    setTimeout(() => {
        alerta.remove();
        carrito = [];
        carritoHTML(carrito);
        contenedorBotones.style.display = 'none';
        encabezado.textContent = 'Aún no tiene productos agregados al carrito';
    },3000);
}

function limpiarCarrito(){
    while(tablaContenedora.firstChild){
        tablaContenedora.removeChild(tablaContenedora.firstChild);
    }
}