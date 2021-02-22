/*
  API id ( 6208d3d6d1160c602118ecfa405c8f70 )

  Nombre de la ciudad
  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  Nombre del país
  api.openweathermap.org/data/2.5/weather?q={country code}&appid={API key}
*/

window.onload = function (){
  document.getElementById("boton").addEventListener("click", datos);
  document.getElementById("boton_2").addEventListener("click", datos);
};

function datos (evento) {
  // Obtencion de los datos del .html
  let nombre = document.getElementById("text_nombre").value;
  let ciudad = document.getElementById("text_ciudad").value;
  let pais = document.getElementById("text_pais").value;
  console.log(nombre+", "+ciudad+", "+pais);

  // Respuesta de la API
  const api_id = "6208d3d6d1160c602118ecfa405c8f70";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${api_id}&Lang=es&units=metric`;

  fetch(url)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(datos) {
      console.log(datos);
      // Temperatura dada por la API
      let temp = datos.main.temp;
      let temp_min = datos.main.temp_min;
      let temp_max = datos.main.temp_max;
      let icon = datos.weather['0'].icon;
      console.log(temp+", "+temp_min+", "+temp_max);
      console.log("Icono: "+icon);
      /*
      contenido.innerHTML =  `
      <img src="${datos.weather['0'].icon}" width="100px" class="img-fluid">
      `
      */
    })
    .catch((error) =>{
      console.error(error);
    });

  // Datos metidos
  /*
  let msj1 = "Hola "+nombre+", hoy hace en "+ciudad+"/"+pais;
  document.getElementById("msj1").innerHTML=msj1;
  */
};