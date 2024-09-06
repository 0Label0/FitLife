
(function() {
  $.ajax({
    type: "GET",
    url: "/news.json",
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
    error: function(xhr, status, err) {
      console.error('Error al cargar las noticias:', err);
    }
  });
})();
