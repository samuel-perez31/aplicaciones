let nombre = prompt("Ingresa un nombrecillo")
let numdep = prompt("Ingresa clave del departamento")
let antiguedad = prompt("Ingresa la antiguedad: ")

console.log("Nombre: " + nombre)
console.log("Numero de Departamento: " + numdep)
console.log("Antiguedad " + antiguedad)

document.getElementById("pepe").innerHTML = `Nombre: ${nombre}`;
document.getElementById("pepe").style.color = "peru";
document.getElementById("pepo").innerHTML = "Numero departamento: " + numdep;
document.getElementById("pepa").innerHTML = "Antiguedad: " + antiguedad;