const NUM0 = document
  .getElementById("0")
  .addEventListener("click", () => clickBtn("0"));
const NUM1 = document
  .getElementById("1")
  .addEventListener("click", () => clickBtn("1"));
const NUM2 = document
  .getElementById("2")
  .addEventListener("click", () => clickBtn("2"));
const NUM3 = document
  .getElementById("3")
  .addEventListener("click", () => clickBtn("3"));
const NUM4 = document
  .getElementById("4")
  .addEventListener("click", () => clickBtn("4"));
const NUM5 = document
  .getElementById("5")
  .addEventListener("click", () => clickBtn("5"));
const NUM6 = document
  .getElementById("6")
  .addEventListener("click", () => clickBtn("6"));
const NUM7 = document
  .getElementById("7")
  .addEventListener("click", () => clickBtn("7"));
const NUM8 = document
  .getElementById("8")
  .addEventListener("click", () => clickBtn("8"));
const NUM9 = document
  .getElementById("9")
  .addEventListener("click", () => clickBtn("9"));
const DOT = document
  .getElementById(".")
  .addEventListener("click", () => clickBtn("."));
const SUM = document
  .getElementById("+")
  .addEventListener("click", () => asignarOperacion("+"));
const REST = document
  .getElementById("-")
  .addEventListener("click", () => asignarOperacion("-"));
const MULT = document
  .getElementById("*")
  .addEventListener("click", () => asignarOperacion("*"));
const DIVIDE = document
  .getElementById("/")
  .addEventListener("click", () => asignarOperacion("/"));
const PERCENT = document
  .getElementById("%")
  .addEventListener("click", () => asignarOperacion("%"));
const SQUARE = document
  .getElementById("x²")
  .addEventListener("click", () => asignarOperacion("x²"));
const ROOT = document
  .getElementById("²√")
  .addEventListener("click", () => asignarOperacion("²√"));
const C = document
  .getElementById("c")
  .addEventListener("click", () => limpiar());
const CALCULATE = document
  .getElementById("calculate")
  .addEventListener("click", () => calcularResultado());

let numero1: number = 0;
let numero2: number = 0;
let operador: string = "";
let caja: HTMLElement = document.getElementById("resultado");

function clickBtn(valor: string): void {
  if (caja.innerHTML === "0") {
    caja.innerHTML = "";
  }
  caja.innerHTML += valor;
}

function asignarOperacion(sender): void {
  numero1 = parseFloat(caja.innerHTML);
  caja.innerHTML = sender;
  operador = sender;
}

function limpiar(): void {
  caja.innerHTML = "0";
  numero1 = 0;
  numero2 = 0;
  operador = undefined;
}

function calcularResultado(): void {
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
      if (numero1 === 0 || numero2 === 0) {
        alert("No se puede dividir entre cero");
        caja.innerHTML = "0";
        break;
      } else {
        caja.innerHTML += numero1 / numero2;
        break;
      }
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
