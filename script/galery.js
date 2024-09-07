
$(function() {
  $.ajax({
    type: "GET",
    url: "/json/card.json",
    data: "data",
    dataType: "json",
    success: function (response) {
      response.forEach(card => {
        const galeryItem = $(`
          <div class="card reveal">
            <div><img class="img-card" width="400" height="300" src="${card.image}" alt="${card.description}"></div>
            <div>
              <div class="name">${card.name}</div>
              <div class="price-cart"><span class="price">${card.price}€</span> <span class="cart">Add Product</span></div>
              <div class="stock">Quedan ${card.stock} productos</div>
            </div>
          </div>
        `);
        const dinamicGaleryItem = $(`
          <div class="mini-card">
            <div><img width="200" height="200" class="img-mini-card" src="${card.image}" alt="${card.description}"></div>
            <div class="name">${card.name}</div>
          </div>
        `);
       

        
        $('.galery-dinamic').append(dinamicGaleryItem);
        $('.card-container').append(galeryItem);
      });
    },
    error: function(_,_, err) {
      console.log("Ha ocurrido un error al cargar las cards", err);
    }
  });
});