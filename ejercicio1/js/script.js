document.addEventListener("DOMContentLoaded",function () {
    const xhr = new XMLHttpRequest();
    const fullName = document.getElementById("fullName");
    const getForm = document.getElementById("getForm");


    getForm.addEventListener("submit",function () {
        var name = document.getElementById("name").value;
        var lastName = document.getElementById("lastName").value;
        
        const file = 'archivo.php';
        const parametros = `?name=${encodeURIComponent(name)}&lastName=${encodeURIComponent(lastName)}`; 
       
        xhr.open("GET",file + parametros,true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                fullName.value = xhr.responseText;
            }
        }
        xhr.send();
    });
});