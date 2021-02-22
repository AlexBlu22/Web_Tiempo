/*
  API id ( 6208d3d6d1160c602118ecfa405c8f70 )

  Nombre de la ciudad
  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  Nombre del país
  api.openweathermap.org/data/2.5/weather?q={country code}&appid={API key}
*/

window.onload = function (){
  document.getElementById("boton").addEventListener("click", datos);
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
      // Datos dados por la API
      let temp = datos.main.temp;
      let temp_min = datos.main.temp_min;
      let temp_max = datos.main.temp_max;
      let icon = datos.weather['0'].icon;
      console.log(temp+", "+temp_min+", "+temp_max);
      console.log("Icono: "+icon);
      // Informacion mostrada en el Modal
      contenido.innerHTML =  `
      <b>Hola ${nombre}, hoy en ${ciudad}/${pais} hace:<br></b>
      <b><h3>${temp} ºC</h3></b>
      Max: ${temp_max} ºC<br>
      Min: ${temp_min} ºC<br>
      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" width="100px" class="img-fluid"><br>
      <a href="https://openweathermap.org/" class="">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg text-secondary" viewBox="0 0 16 16">
          <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
        </svg>
      </a>
      `
    })
    .catch((error) =>{
      console.error(error);
      contenido.innerHTML =  `
      Rellena el campo <b>Ciudad</b> o <b>País</b> como minimo
      `
    });

  // Datos metidos
  /*
  let msj1 = "Hola "+nombre+", hoy hace en "+ciudad+"/"+pais;
  document.getElementById("msj1").innerHTML=msj1;
  */
};