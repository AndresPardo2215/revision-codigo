let formulario = document.querySelector(".formulario") /* Correción de querrySelector a la clase formulario */

formulario.onsubmit = function(e) {

  e.preventDefault();  /*Correción al método preventDefault*/
  
  let name = formulario.elements[0] /* Cambio en nombre de variable */
  let age = formulario.elements[1] /* Cambio en nombre de variable */
  let nationality = formulario.elements[2] /*cambio de nombre de variable*/


  let nombre = name.value
  let edad = age.value

  let i = nationality.selectedIndex
  let nacionalidad = nationality.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    name.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {

 agregarInvitado(nombre, edad, nacionalidad)
  } else {
    alert("el nombre o la edad son incorrectos")
  }
}

/* let botonBorrar = document.createElement("button")  Repetición de código
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar); */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

let lista = document.getElementById("lista-de-invitados")

let elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")   /* Corrección de la sintáxis del método add */
lista.appendChild(elementoLista)


/* let spanNombre = document.createElement("span") /* Repetición de código 
let inputNombre = document.createElement("input") 
let espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre
//elementoLista.appendChild(spanNombre)
//elementoLista.appendChild(inputNombre)
//elementoLista.appendChild(espacio)*/

function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}