
//Funcion que devuelva un descuento del precio del producto dependiendo del dia
//Definir la variable del descuento
//Si el dia es igual a martes entonces aplicar el descuento
//Si el dia es igual a jueves entonces aplicar el descuento
//Si no es ninguno de esos dias entoncces devolver el valor del producto
function descuentoDia (dia,producto) {
    var descuento = producto * 0.8;
    if(dia = "martes"){
        return descuento
    }
    else if( dia = "jueves"){
        return descuento 
    }
    else {
        return producto
    }
    
}
console.log(descuentoDia("martes", [15]))

//Ejercicio 2
//Se crea una funcion que determine la cantidad de productos
function descuento3productos(productos){
    var producto1 = 5000
    var producto2 = 10000
    var producto3 = 10000

    if(productos >= 10000){
        return productos * 0.85
    }
    else if(productos > productos[3]){
        return precios * 0.85
    }
}
console.log(descuento3productos([10001,5000]))

//Ejercicio 3 

function verificar (numeros){
    if(numeros < 0){
        console.log("El numero " + numeros + " que ingresaste es negativo, y se encuentra en el indice ")
    }
    else{
        console.log("El numero pudo ingresar sin problemas")
    }
}

//Ejercicio4 crear una funcion que devuelva el valor mas costoso y otra el menos costoso
//La funcion toma el primer numero dado en la primera posición
//Luego a medida que i va aumentando se va comparando con el numero dado
//Si este es menor que el numero más grande, entonces costoso se reemplaza por el numero mayor
function masCostoso (numero){
    let costoso = numero[0];
    for(i=0;i<numero.length; i++){
        if(costoso<numero[i]){
            costoso = numero[i]
        }
    }
    return costoso
}
console.log(masCostoso([200,5500,900,7000,500,300]))

function menosCostoso(numero){
    let menosCostoso = numero[0];
    for(i=0;i<numero.length; i++){
        if(menosCostoso>numero[i]){
            menosCostoso = numero[i]
        }
    }
    return menosCostoso
}
console.log(menosCostoso([200,5500,900,7000,500,300]))
