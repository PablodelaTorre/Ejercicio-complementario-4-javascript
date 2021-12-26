function saludar(){
    let nombre = prompt('Escriba su nombre:');
    alert("Bienvenido " + nombre);
}

function costoIva(){
    alert("El valor del iva es de " + iva);
}

function mostrarPrecio(){
    let total = costo +  iva;
    alert("El costo total del producto es de " + total);
}


saludar()

let costo = parseFloat(prompt("Ingrese el costo del producto"));

let iva = costo * 0.21;

if (costo != 0){
    costoIva();
    if (iva != 0){
        mostrarPrecio();
    }
} 


