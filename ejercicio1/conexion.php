<?php
/*Configurar los parametros de conexion*/
    
$opciones = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_PERSISTENT => true
);
try{
$pdo = new PDO(
    'mysql:host=localhost;dbname=clase;charset=utf8',  // DSN
        'root',                                         // Nombre de usuario
        'sa',                                           // Contraseña
        $opciones                                        // Opciones adicionales
);
}catch (PDOException $e) {
    // Capturar errores en caso de fallo
    echo "Error en la conexión: " . $e->getMessage();
}
?>