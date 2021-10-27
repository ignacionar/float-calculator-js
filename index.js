const resultado = document.querySelector("#result");
const operacion = document.querySelector("#operation_");
const botones = document.querySelector("#botones");

function display(e) {
    e.target.className === "--igual" ? calcular() : operacion.innerText += e.target.innerText;
}

function clear() {
    operacion.innerText = "";
}

function calcular() {
    try {
        resultado.innerText = eval(operacion.innerText).toFixed(2)
    }
    catch(err) {
        resultado.innerText = "error"
    }
    clear()
}

botones.addEventListener("click", display)