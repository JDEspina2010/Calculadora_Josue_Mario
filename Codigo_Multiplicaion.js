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