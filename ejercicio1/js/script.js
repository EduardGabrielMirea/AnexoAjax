document.addEventListener("DOMContentLoaded",function () {
    const xhr = new XMLHttpRequest();
    const form = document.querySelector("form");
    form.addEventListener()

    const obtenerUsuarios = document.getElementById("obtenUsuarios");
    const filePhp = 'archivo.php';
    obtenerUsuarios.addEventListener("click",function (event) {
       event.preventDefault();

       xhr.open("GET",filePhp,true);
       xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {

            }
       };
       xhr.send();
    });
});