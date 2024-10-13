const contenedor = document.getElementById('contenedor');

let b1 = document.createElement("button");
b1.textContent = "Azul";
b1.addEventListener('click', function() {
    document.body.style.backgroundColor = "blue";
});

let b2 = document.createElement("button");
b2.textContent = "Rojo";
b2.addEventListener('click', function() {
    document.body.style.backgroundColor = "red";
});

let b3 = document.createElement("button");
b3.textContent = "Amarillo";
b3.addEventListener('click', function() {
    document.body.style.backgroundColor = "yellow";
});

contenedor.appendChild(b1);
contenedor.appendChild(b2);
contenedor.appendChild(b3);