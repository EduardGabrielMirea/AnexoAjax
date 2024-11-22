document.addEventListener("DOMContentLoaded", function () {

    var resultado = document.getElementById("resultado");
    resultado.readOnly = true; // El campo del promedio será de solo lectura
    
    var form = document.getElementById("formulario");
    var xhr = new XMLHttpRequest();
    var promedioPhp = 'promedio.php'; // Archivo PHP para procesar los datos
    
    // Escucha el evento de envío del formulario
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío tradicional del formulario

        // Obtén los valores de los tres números
        var number1 = document.getElementById("number1").value;
        var number2 = document.getElementById("number2").value;
        var number3 = document.getElementById("number3").value;

        // Crea un objeto FormData para enviar los datos
        var formData = new FormData();
        formData.append("number1", number1);
        formData.append("number2", number2);
        formData.append("number3", number3);

        // Configura y envía la solicitud POST
        xhr.open("POST", promedioPhp, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resultado.value = xhr.responseText; // Muestra el promedio en el campo de texto
            }
        };
        xhr.send(formData);
    });

});
