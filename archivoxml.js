$(document).ready(() => {
  $("#XML").click(() => {
      $("#XML").hide();
    $.ajax({
      type: "GET",
      url: "archivo.xml",
      dataType: "xml"
    }).done((data) => {
      const estudiante = $(data).find("estudiante").first();
      let nombres = estudiante.find("nombre").text();
      let apellidos = estudiante.find("apellido").text();
      let fechaNacimiento = estudiante.find("fechanaci").text();
      let nacionalidad = estudiante.find("nacionalidad").text();
      let genero = estudiante.find("genero").text();
      let estadoCivil = estudiante.find("estadocivil").text();
      let cedula = estudiante.find("cedula").text();
      let domicilio = estudiante.find("domicilio").text();
      let discapacidad = estudiante.find("discapacidad").text();
      let dependencia = estudiante.find("dependencia").text();
      let telefonoCelular = estudiante.find("celular").text();
      let correo = estudiante.find("correo").text();

      $("#nombres").append(nombres);
      $("#apellidos").append(apellidos);
      $("#fechaNacimiento").append(fechaNacimiento);
      $("#nacionalidad").append(nacionalidad);
      $("#genero").append(genero);
      $("#estadoCivil").append(estadoCivil);
      $("#cedula").append(cedula);
      $("#domicilio").append(domicilio);
      $("#discapacidad").append(discapacidad);
      $("#dependencia").append(dependencia);
      $("#telefonoCelular").append(telefonoCelular);
      $("#correo").append(correo);

      $("#contenido").show();
      
    });
  });
});


$(document).ready(()=>{

  $("#botonjson").click(function(){
    $("#botonjson").hide();
    $.ajax({
      type: "GET",
      url: "file.json",
      dataType: "json"
    }).done((data)=>{
      $.each(data,function(indice, persona){
        let fila = $("<tr>");
        fila.append($(`<td>${persona.nombree}</td>`));
        fila.append($(`<td>${persona.apellido}</td>`));
        fila.append($(`<td>${persona.fechaNacimientO}</td>`));
        fila.append($(`<td>${persona.NacionalidaD}</td>`));
        fila.append($(`<td>${persona.DiscapacidaD}</td>`));
        fila.append($(`<td>${persona.carrera}</td>`));
        fila.append($(`<td>${persona.semestre}</td>`));

        $("#personas tbody").append(fila);
      });
      $("#personas").show();
    });
  });
});