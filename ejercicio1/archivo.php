<?php
require("conexion.php");
$sql = $pdo->query("SELECT * FROM personas");
while ($resultado = $sql->fetch()) {
    echo $resultado['nombre'] . " " . $resultado['apellido'] . "<br>";
}
?>