//Actividad 1
let producto = document.getElementById("Producto")
let unidades = document.getElementById("Unidades")
let valor = document.getElementById("Valor")
let array = [];

$(document).ready(() => {
    $("#Guardar").click(function () {
        array.push([producto.value, unidades.value, valor.value]);
        $("#contenido").empty();
        for (const datos of array) {
            $("#contenido").append(`<tr id="rowtabla"><td>${datos[0]}</td><td>${datos[1]}</td><td>${datos[2]}</td></tr>`);
        }
    })

    $("#Calcular").click(function () {
        let suma = 0
        for (const datos of array) {
            suma += datos[2] * datos[1]
        }
        $(".mostrar").empty();
        $(".mostrar").append(`El valor a pagar es: ${suma}`)
    });
})

//Actividad 2
let numero1 = document.getElementById("validation01")
let numero2 = document.getElementById("validation02")
let numero3 = document.getElementById("validation03")
let numero4 = document.getElementById("validation04")
numeros = []

$(document).ready(() => {
    $("#btnResultado").click(function () {
        numeros.splice(0, numeros.length);
        numeros.push(numero1.value)
        numeros.push(numero2.value)
        numeros.push(numero3.value)
        numeros.push(numero4.value)
        mayor = numeros[0]
        menor = numeros[0]
        $("#mostrarResultado").empty()
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
            if (numeros[i] < menor) {
                menor = numeros[i]
            }
        }
        $("#mostrarResultado").append(`El número mayor es: ${mayor} <br> El número menor es: ${menor}`)
    })
})


