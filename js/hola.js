const d = document;
const 
$buscar = d.getElementById("buscar"),
$btnBuscar = d.getElementById("btn-buscar");

d.addEventListener("click", e => {
    if(e.target.matches("#btn-buscar")){
        $buscar.classList.add("movimiento")
        $btnBuscar.classList.add("none")
    }
    
    if(e.target.matches("#cerrar")){
        $buscar.classList.remove("movimiento")
        $btnBuscar.classList.remove("none")
    }
})

