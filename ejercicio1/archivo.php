<?php
require("conexion.php");
$sql = $pdo->query("SELECT * FROM persona");
while ($resultado = $sql->fetch()) {
    echo $resultado['nombre'] . " " . $resultado['apellido'] . "<br>";
}

if (isset($_GET['name']) && is_string($_GET['name']) && isset($_GET['lastName']) && is_string($_GET['lastName'])) {
    $name = $_GET['name'];
    $lastName = $_GET['lastName'];
    $fullName = $name . ' - ' . $lastName;
    echo $fullName;
}else{
}
?>