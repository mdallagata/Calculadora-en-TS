var NUM0 = document
    .getElementById("0")
    .addEventListener("click", function () { return clickBtn("0"); });
var NUM1 = document
    .getElementById("1")
    .addEventListener("click", function () { return clickBtn("1"); });
var NUM2 = document
    .getElementById("2")
    .addEventListener("click", function () { return clickBtn("2"); });
var NUM3 = document
    .getElementById("3")
    .addEventListener("click", function () { return clickBtn("3"); });
var NUM4 = document
    .getElementById("4")
    .addEventListener("click", function () { return clickBtn("4"); });
var NUM5 = document
    .getElementById("5")
    .addEventListener("click", function () { return clickBtn("5"); });
var NUM6 = document
    .getElementById("6")
    .addEventListener("click", function () { return clickBtn("6"); });
var NUM7 = document
    .getElementById("7")
    .addEventListener("click", function () { return clickBtn("7"); });
var NUM8 = document
    .getElementById("8")
    .addEventListener("click", function () { return clickBtn("8"); });
var NUM9 = document
    .getElementById("9")
    .addEventListener("click", function () { return clickBtn("9"); });
var DOT = document
    .getElementById(".")
    .addEventListener("click", function () { return clickBtn("."); });
var SUM = document
    .getElementById("+")
    .addEventListener("click", function () { return asignarOperacion("+"); });
var REST = document
    .getElementById("-")
    .addEventListener("click", function () { return asignarOperacion("-"); });
var MULT = document
    .getElementById("*")
    .addEventListener("click", function () { return asignarOperacion("*"); });
var DIVIDE = document
    .getElementById("/")
    .addEventListener("click", function () { return asignarOperacion("/"); });
var PERCENT = document
    .getElementById("%")
    .addEventListener("click", function () { return asignarOperacion("%"); });
var SQUARE = document
    .getElementById("x²")
    .addEventListener("click", function () { return asignarOperacion("x²"); });
var ROOT = document
    .getElementById("²√")
    .addEventListener("click", function () { return asignarOperacion("²√"); });
var C = document
    .getElementById("c")
    .addEventListener("click", function () { return limpiar(); });
var CALCULATE = document
    .getElementById("calculate")
    .addEventListener("click", function () { return calcularResultado(); });
var numero1 = 0;
var numero2 = 0;
var operador = "";
var caja = document.getElementById("resultado");
function clickBtn(valor) {
    if (caja.innerHTML === "0") {
        caja.innerHTML = "";
    }
    caja.innerHTML += valor;
}
function asignarOperacion(sender) {
    numero1 = parseFloat(caja.innerHTML);
    caja.innerHTML = sender;
    operador = sender;
}
function limpiar() {
    caja.innerHTML = "0";
    numero1 = 0;
    numero2 = 0;
    operador = undefined;
}
function calcularResultado() {
    numero2 = parseFloat(caja.innerHTML.substring(1));
    if (operador != undefined && caja.innerHTML != "0") {
        caja.innerHTML = numero1 + caja.innerHTML + "=";
    }
    switch (operador) {
        case "+": {
            caja.innerHTML += numero1 + numero2;
            break;
        }
        case "-": {
            caja.innerHTML += numero1 - numero2;
            break;
        }
        case "*": {
            caja.innerHTML += numero1 * numero2;
            break;
        }
        case "/": {
            caja.innerHTML += numero1 / numero2;
            break;
        }
        case "%": {
            caja.innerHTML += (numero2 / 100) * numero1;
            break;
        }
        case "x²": {
            caja.innerHTML += numero1 * numero1;
            break;
        }
        case "²√": {
            caja.innerHTML += Math.sqrt(numero1);
            break;
        }
        default: {
            alert("Error, ingrese dos valores y un operador.");
        }
    }
}
