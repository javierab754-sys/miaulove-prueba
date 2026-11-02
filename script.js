
function cambiarColor(idBoton) {

  document.getElementById("cat1").classList.remove("activo");
  document.getElementById("cat2").classList.remove("activo");
  document.getElementById("cat3").classList.remove("activo");

 
  document.getElementById(idBoton).classList.add("activo");
}


function sumarLike(idContador) {
 
  let contador = document.getElementById(idContador);


  let numero = parseInt(contador.innerText);
  numero = numero + 1;

  
  contador.innerText = numero;
}



function cerrarSesion() {
  alert("Sesión cerrada correctamente");
}
