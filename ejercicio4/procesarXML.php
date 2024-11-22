<?php
    // Obtiene el contenido del cuerpo de la solicitud (archivo XML enviado)
    $xmlData = file_get_contents("php://input");

    try {
        // Carga el XML enviado
        $xml = new SimpleXMLElement($xmlData);

        // Procesa los datos del XML y genera una respuesta
        $respuesta = "Usuarios encontrados:\n";
        foreach ($xml->usuario as $usuario) {
            $nombre = $usuario->nombre;
            $edad = $usuario->edad;
            $respuesta .= "Nombre: $nombre, Edad: $edad\n";
        }
        echo $respuesta;
    } catch (Exception $e) {
        // Error si el XML no es válido
        echo "Error: No se pudo procesar el XML enviado.";
    }
?>
