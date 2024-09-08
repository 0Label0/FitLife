
$(function() {
  // recoge las noticias y las muestra en pantalla
  $.ajax({
    type: "GET",
    url: "/json/news.json",
    data: "json",
    dataType: "json",
    success: function (response) {
      response.forEach(noticia => {
        const article = $(`
          <div>
           <h3 class='news-title'>${noticia.title}</h3>
            <p class='news-description'>${noticia.description}</p>  
          </div>
        `);
        $('#news-container').append(article);
      });
    },
    // muetra el error en consola en caso de que haya
    error: function(_, _, err) {
      console.error('Error al cargar las noticias:', err);
    }
  });
});
