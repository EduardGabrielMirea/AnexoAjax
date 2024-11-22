document.addEventListener("DOMContentLoaded", function () {
    const cargarUsuariosBtn = document.getElementById("cargarUsuarios");
    const listaUsuarios = document.getElementById("listaUsuarios");
    const actualizarForm = document.getElementById("actualizarForm");
    const respuestaDiv = document.getElementById("respuesta");

    // Función para cargar los usuarios con GET
    cargarUsuariosBtn.addEventListener("click", function () {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "servidor.php", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const usuarios = JSON.parse(xhr.responseText);

                // Limpiar la lista
                listaUsuarios.innerHTML = "";

                if (usuarios.usuarios) {
                    usuarios.usuarios.forEach(usuario => {
                        const li = document.createElement("li");
                        li.textContent = `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`;
                        listaUsuarios.appendChild(li);
                    });
                } else {
                    listaUsuarios.innerHTML = "<li>No se encontraron usuarios.</li>";
                }
            }
        };

        xhr.send();
    });

    // Función para actualizar los usuarios con POST
    actualizarForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nuevoNombre = document.getElementById("nuevoNombre").value;
        const nuevaEdad = document.getElementById("nuevaEdad").value;

        const datos = JSON.stringify({
            nombre: nuevoNombre,
            edad: nuevaEdad
        });

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "servidor.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const respuesta = JSON.parse(xhr.responseText);
                respuestaDiv.textContent = respuesta.mensaje || respuesta.error;
            }
        };

        xhr.send(datos);
    });
});
