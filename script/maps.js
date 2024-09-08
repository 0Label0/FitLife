function iniciarMap(){
  // coordenadas de la empresa (Madrid)
  const coord = { lat: 40.4168, lng: -3.7038 };
  
  // Crear un nuevo mapa centrado en las coordenadas especificadas
  const map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });

  // Crear un marcador en las coordenadas especificadas y añadirlo al mapa
  const marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

iniciarMap();