<?php
    // Verifica que se envió un nombre
    if (isset($_POST['nombre']) && !empty(trim($_POST['nombre']))) {
        $nombre = htmlspecialchars(trim($_POST['nombre'])); // Escapa caracteres especiales para evitar problemas de seguridad
        echo "¡Hola, $nombre! Bienvenido/a a nuestra página web.";
    } else {
        echo "Por favor, proporciona un nombre válido.";
    }
?>
