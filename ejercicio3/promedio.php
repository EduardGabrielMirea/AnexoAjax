<?php
    // Verifica que los parámetros existen y son números
    if (
        isset($_POST['number1'], $_POST['number2'], $_POST['number3']) &&
        is_numeric($_POST['number1']) &&
        is_numeric($_POST['number2']) &&
        is_numeric($_POST['number3'])
    ) {
        // Convierte los valores a números
        $number1 = (float) $_POST['number1'];
        $number2 = (float) $_POST['number2'];
        $number3 = (float) $_POST['number3'];

        // Calcula el promedio
        $promedio = ($number1 + $number2 + $number3) / 3;

        // Devuelve el promedio
        echo number_format($promedio, 2); // Formato con 2 decimales
    } else {
        // Devuelve un mensaje de error si los datos son inválidos
        echo "Por favor, ingresa tres números válidos.";
    }
?>
