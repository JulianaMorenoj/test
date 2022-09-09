const $input = document.querySelector('#contrasenia');


function cargar(){
    $input.addEventListener('mouseleave',encriptar)
    $input.addEventListener('mouseenter',desencriptar)
    mostrarMensaje('Contraseña debe tener 8 caracteres');
    $input.addEventListener('keyup',validarCaracteres)
}

function validarCaracteres(){
    const $message = document.querySelector('#mensaje');
    if($input.value.length<8){
        $message.style.display = 'block';
    }else{
        $message.style.display = 'none';
    }
}

function encriptar(){
    $input.setAttribute('type', 'password');
}
function desencriptar(){
    $input.setAttribute('type', 'text');
}

function mostrarMensaje(texto){
    const elem = document.createElement('p');
    elem.id ='mensaje';
    elem.textContent = texto;
    elem.style.display='none';
    $input.parentNode.appendChild(elem)
}

document.addEventListener("DOMContentLoaded", cargar, false);
