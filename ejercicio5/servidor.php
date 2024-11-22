<?php
$archivo = 'archivo.json';

// Manejador de solicitudes GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($archivo)) {
        // Leer y devolver el contenido del archivo JSON
        $jsonData = file_get_contents($archivo);
        echo $jsonData;
    } else {
        echo json_encode(["error" => "El archivo JSON no existe."]);
    }
}

// Manejador de solicitudes POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    if (isset($data['nombre']) && isset($data['edad'])) {
        if (file_exists($archivo)) {
            // Leer el archivo JSON existente
            $jsonData = file_get_contents($archivo);
            $usuarios = json_decode($jsonData, true);

            // Agregar el nuevo usuario
            $nuevoUsuario = [
                "nombre" => htmlspecialchars($data['nombre']),
                "edad" => (int)$data['edad']
            ];
            $usuarios['usuarios'][] = $nuevoUsuario;

            // Guardar los datos actualizados en el archivo JSON
            file_put_contents($archivo, json_encode($usuarios, JSON_PRETTY_PRINT));
            echo json_encode(["mensaje" => "Usuario agregado correctamente."]);
        } else {
            echo json_encode(["error" => "El archivo JSON no existe."]);
        }
    } else {
        echo json_encode(["error" => "Datos inválidos."]);
    }
}
?>
