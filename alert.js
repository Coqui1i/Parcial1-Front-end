document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrarBtn").addEventListener("click", function (event) {
        event.preventDefault(); 
        
        let nombres = document.getElementById("nombres").value;
        let apellidos = document.getElementById("apellidos").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;
        let estrato = document.getElementById("estrato").value;
        let fechaNacimiento = document.getElementById("fecha-nacimiento").value;
        let grupoSanguineo = document.getElementById("grupo-sanguineo").value;

        
        let genero = document.querySelector('input[name="genero"]:checked').value;

        
        let actividades = [];
        document.querySelectorAll('.form-check-input[type="checkbox"]:checked').forEach((checkbox) => {
            actividades.push(checkbox.value);
        });

        
        let mensaje = `📋 **Datos Registrados:**\n
        - Nombres: ${nombres}
        - Apellidos: ${apellidos}
        - Email: ${email}
        - Teléfono: ${telefono}
        - Estrato: ${estrato}
        - Fecha de Nacimiento: ${fechaNacimiento}
        - Grupo Sanguíneo: ${grupoSanguineo}
        - Género: ${genero}
        - Actividades Favoritas: ${actividades.join(", ")}`;

    
        alert(mensaje);
    });
});
