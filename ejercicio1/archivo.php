<?php

// Data Base Connect
$servername = "localhost";
$username = "root";
$password = "symfony";
$dbname = "clase";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];

    $sql = "INSERT INTO personas (nombre, apellido) VALUES ('$nombre', '$apellido')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["mensaje" => "Usuario añadido correctamente"]);
    }else{
        echo json_encode(["mensaje" => "Error: ".$sql . "<br>" . $conn->error]);
    }
}else if ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $sql = "SELECT * FROM personas";
    $result = $conn->query($sql);
    $personas = [];

    while ($row = $result->fetch_assoc()) {
        $personas[] = $row;
    }
    echo json_encode($personas);
}
$conn->close();
?>