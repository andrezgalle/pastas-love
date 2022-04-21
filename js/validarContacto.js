const btn = document.querySelector('#button');
const form = document.querySelector('#form');
const nameUser =document.querySelector('#name');
const last =document.querySelector('#last');
const email =document.querySelector('#email');
const menssage = document.querySelector('#menssage');
const resultado = document.querySelector('.resultado');

btn.addEventListener('click',validar)

function validar(){
    if(nameUser.vale === ''|| last.value===''|| email.value === ''||menssage.value ===''){
        imprimirAlerta('Todos los campos son obligatorios','error');

        return;
    }

    imprimirAlerta('Mensaje enviado correctamente','s');

}

function imprimirAlerta(msg,tipo){
    const existe = document.querySelector('.success');

    if(!existe){
        const div = document.createElement('DIV');
        const p = document.createElement('P');
        p.textContent = msg;
        div.appendChild(p);
        resultado.appendChild(div);
    
        if(tipo === 'error'){
            div.classList.add('error');
        }else{
            div.classList.add('success');
        }
    
        setTimeout(() => {
            div.remove();
            form.reset();
        }, 3000);
    }
    
}