document.addEventListener("DOMContentLoaded", function () {
    var enviarXmlBtn = document.getElementById("enviarXml");
    var respuesta = document.getElementById("respuesta");
    var procesarXmlPhp = 'procesarXML.php'; // URL del script PHP

    enviarXmlBtn.addEventListener("click", function () {
        // Lee el archivo XML alojado localmente
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "archivo.xml", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var xmlData = xhr.responseText; // Contenido del archivo XML

                // Ahora envía el XML al servidor mediante POST
                var xhrPost = new XMLHttpRequest();
                xhrPost.open("POST", procesarXmlPhp, true);
                xhrPost.setRequestHeader("Content-Type", "application/xml");

                xhrPost.onreadystatechange = function () {
                    if (xhrPost.readyState === 4 && xhrPost.status === 200) {
                        // Muestra la respuesta del servidor
                        respuesta.value = xhrPost.responseText;
                    }
                };

                xhrPost.send(xmlData); // Enviar el XML al servidor
            }
        };
        xhr.send();
    });
});
