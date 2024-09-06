$(function() {

  $.ajax({
    type: "GET",
    url: "/json/opinions.json",
    data: "data",
    dataType: "json",
    success: function (response) {
      response.forEach(opinion => {
        const card = $(`
           <div class= "user-opinion ${opinion.reveal}">
            <div class="card">
              <img class="img-card" width="40" height="40" src="/assets/img/foto-sin-perfil.jpg" alt="Foto sin perfil">
              <p> ${opinion.content} </p>
            </div>
            <strong class="user-name">- ${opinion.user}</strong>

          </div>
     
        `)
        $('.opinions').append(card);
      });
    },
    error: function(_, _, err) {
      console.error('Error al cargar las noticias:', err)
    }
  });

});