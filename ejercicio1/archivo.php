<?php
    if (isset($_GET['name']) && is_string($_GET['name']) && isset($_GET['lastName']) && is_string($_GET['lastName'])) {
        $name = $_GET['name'];
        $lastName = $_GET['lastName'];
        $fullName = $name . ' - ' . $lastName;
        echo $fullName;
    }else{
        echo "Introduce nombre y apellido";
    }
?>