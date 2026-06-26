//quertySelector

const heading = document.querySelector ('.header__texto h2');
heading.textContent = 'Blog de cafe con consejos y Cursos';
console.log(heading);

//quertySelectorAll

const enlaces = document.querySelectorAll ('.navegacion a');
enlaces[0].textContent = 'Sobre Nosotros'
enlaces[0].classList.add('nueva__clase')
// enlaces[0].classList.remove('navegacion__enlace')


  // const nuevoEnlace = document.createElement('A');
//Agregar HREF
  // nuevoEnlace.href = 'https://michael-tienda-virtual.netlify.app';

//Agregar TEXTO
  // nuevoEnlace.textContent = 'Tienda virtual';

//Agregar CLASE
  // nuevoEnlace.classList.add('navegacion__enlace');

//Agregar al documento
  // const navegacion = document.querySelector('.navegacion');
  // navegacion.appendChild(nuevoEnlace);

  // console.log(nuevoEnlace);




//Eventos

// console.log(1);

// window.addEventListener('load', function () {
//     console.log(2);
// });
// window.onload = function () {
//     console.log(3);
// }
// window.addEventListener('DOMContentLoaded', function () {
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function () {
//     console.log('Scrolling...')
// }


// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (e) {
//     console.log(e);
//     e.preventDefault();

//     //Validar Formulario

//     console.log('Enviando Formulario');
// });




//Datos
const datos = {
    nombre : '',
    email : '',
    mensaje : ''

}

//Eventos de Inputs y Textarea

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento Submit
formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    //Validar Formulario
    const { nombre, email, mensaje, } = datos;

    if(mensaje === '' || email === '' || nombre === '') {
    mostrarAlerta('Todos los campos son obligatorios', 'error');

        return; //Corta la ejecución del codigo
    }

    //Enviar formulario
    mostrarAlerta('Enviando Formulario correctamente')
});


function leerTexto (e) {
    // console.log(e.target.value)
    datos[e.target.id] = e.target.value
    
    // console.log(datos);
}

function mostrarAlerta (mensaje, error = null) {
    const alerta = document.createElement ('P')
    alerta.textContent = mensaje;

    console.log(error);
    if(error) {
        alerta.classList.add('error')
    }else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild (alerta);
    //desaparecer en 5 segundos
    setTimeout(() => {
        alerta.remove();
    },5000);
    
}
