document.addEventListener("DOMContentLoaded", function () {

    var saludo = document.getElementById("saludo");
    saludo.readOnly = true; // El área de texto será de solo lectura
    
    var form = document.getElementById("formulario");
    var xhr = new XMLHttpRequest();
    var saludoPhp = 'saludo.php'; // URL del archivo PHP
    
    // Escucha el evento de envío del formulario
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío tradicional del formulario

        // Obtén el valor del nombre
        var nombre = document.getElementById("nombre").value;

        //Mirar lo del headerRequest.
        // Crea un objeto FormData para enviar los datos
        var formData = new FormData();
        formData.append("nombre", nombre);

        // Configura y envía la solicitud POST
        xhr.open("POST", saludoPhp, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                saludo.value = xhr.responseText; // Muestra el saludo en el área de texto
            }
        };
        xhr.send(formData);
    });

});
