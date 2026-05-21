function validar() {
    var usuario = document.getElementById("nombre").value;
    var contraseña = document.getElementById("clave").value;
    
    if (usuario == "Tefo" && contraseña == "tefo1234") {

        window.location.href = "https://tefo0088.github.io/Alas-del-sur/reservas.html";
    } else {
       
        alert("Permiso denegado: Usuario o contraseña incorrectos. Por favor, verifique sus datos.");
    }
}

function cargarDatosAvion() { 
    var parametros = new URLSearchParams(window.location.search);
    var nombreAvion = parametros.get('avion');
    var precioAvion = parametros.get('precio');
    if (nombreAvion && precioAvion) {
        document.getElementById("titulo-avion").innerHTML = nombreAvion;
        document.getElementById("precio-base").innerHTML = precioAvion;
    }
}

function calcularCosto() {
    
    var precioPorHora = parseFloat(document.getElementById("precio-base").innerHTML);
    
    
    var horas = parseInt(document.getElementById("horas").value);

    
    if (isNaN(horas) || horas < 1) {
        alert("El tiempo mínimo para alquilar o cotizar una aeronave es de 1 hora.");
        document.getElementById("horas").value = 1; 
        return; 
    }
    var cotizacionDolar = 1395.50;  
    var totalDolares = precioPorHora * horas;
    var totalPesos = totalDolares * cotizacionDolar;

    
    
    document.getElementById("resultado-usd").innerHTML = "Total en USD: $" + totalDolares.toLocaleString('en-US') + " Dólares";
    document.getElementById("resultado-ars").innerHTML = "Total en ARS: $" + totalPesos.toLocaleString('es-AR') + " Pesos (Aprox)";
}

function registrarSocio() {
    
    var nombre = document.getElementById("reg-nombre").value;
    var dni = document.getElementById("reg-dni").value;
    var correo = document.getElementById("reg-correo").value;
    var licencia = document.getElementById("reg-licencia").value;

    
    if (nombre == "" || dni == "" || correo == "") {
        alert("¡Atención! Por favor, completa todos los campos del formulario para procesar tu solicitud.");
        return; 
    }


    var mensajePiloto = "";
    if (licencia == "no") {
        mensajePiloto = "¡Perfecto! Nos comunicaremos con vos para iniciar el exámen psicofísico y el curso de Alumno Piloto.";
    } else {
        mensajePiloto = "¡Excelente! Un administrador validará tu licencia (" + licencia.toUpperCase() + ") en los registros de ANAC.";
    }

    alert("¡Solicitud Recibida, " + nombre + " !Bienvenido a Alas del Sur." + mensajePiloto);

    window.location.href = "index.html";
}
