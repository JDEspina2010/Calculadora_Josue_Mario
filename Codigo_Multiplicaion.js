let activo = document.getElementById("Num1");

document.getElementById("Num1").onclick = () => activo = document.getElementById("Num1");
document.getElementById("Num2").onclick = () => activo = document.getElementById("Num2");

document.querySelectorAll(".numero").forEach(btn => {
    btn.onclick = () => activo.value += btn.innerText;
});

document.getElementById("borrar").onclick = () => {
    document.getElementById("Num1").value = "";
    document.getElementById("Num2").value = "";
    document.getElementById("resultado") = "";
    activo = document.getElementById("Num1");
};

document.getElementById("calcular").onclick = () => {
    let n1 = Number(document.getElementById("Num1").value);
    let n2 = Number(document.getElementById("Num2").value);
    document.getElementById("resultado").innerText = "Resultado: " + (n1 * n2);
};
//Carrusel multiplicacíon
const carruselElemento = document.querySelector(".carrusel-items");

let posicionMaximaDesplazamiento = carruselElemento.scrollWidth - carruselElemento.clientWidth;
let intervaloDesplazamiento = null;
let pasoDesplazamiento = 1;

const iniciarDesplazamiento = () => {
    intervaloDesplazamiento = setInterval(function () {
        carruselElemento.scrollLeft = carruselElemento.scrollLeft + pasoDesplazamiento;
        if (carruselElemento.scrollLeft === posicionMaximaDesplazamiento) {
            pasoDesplazamiento = pasoDesplazamiento * -1;
        } else if (carruselElemento.scrollLeft === 0) {
            pasoDesplazamiento = pasoDesplazamiento * -1;
        }
    }, 10);
};

const detenerDesplazamiento = () => {
    clearInterval(intervaloDesplazamiento);
};

carruselElemento.addEventListener("mouseover", () => {
    detenerDesplazamiento();
});

carruselElemento.addEventListener("mouseout", () => {
    iniciarDesplazamiento();
});

iniciarDesplazamiento();
