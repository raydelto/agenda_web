function cargarContactos(){
    var divContactos = document.getElementById('divContactos');  
    divContactos.innerHTML = "";
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(datos){
        return datos.json();
    }).then(function (datos){
        datos.forEach(
            function(contacto){
                divContactos.innerHTML += "<b>"+contacto.nombre + "</b> " + contacto.apellido + " <i>" + contacto.telefono +"</i><br/>";
            }
        )
    })
}

function mostrarContacto(nombre, apellido, telefono){
    var divContactos = document.getElementById('divContactos');  
    divContactos.innerHTML += "<b>"+nombre + "</b> " + apellido + " <i>" + telefono +"</i><br/>";
}

function agregarContacto(){
    var txtNombre = document.getElementById('txtNombre');
    var txtApellido = document.getElementById('txtApellido');
    var txtTelefono = document.getElementById('txtTelefono');
    var contacto = {nombre: txtNombre.value, apellido: txtApellido.value, telefono : txtTelefono.value};
    fetch("http://www.raydelto.org/agenda.php",
        {
          method: 'POST',
          body: JSON.stringify(contacto)
        }
    ).then(function(respuesta){
        return respuesta.json()
    }).then(function(respuesta){
        if(respuesta.exito === true){
            mostrarContacto(txtNombre.value, txtApellido.value, txtTelefono.value);
        }
    })    
    
}
