(function() {
  $.ajax({
    type: "GET",
    url: "/json/card.json",
    data: "data",
    dataType: "json",
    success: function (response) {
      response.forEach(card => {
        const galeryItem = $(`
          <div class="card reveal">
            <div class="img"><img src="${card.image}" alt="${card.description}"></div>
            <div>
              <div class="name">${card.name}</div>
              <div class="price-cart"><span class="price">${card.price}€</span> <span class="cart">cart</span></div>
              <div class="stock">Quedan ${card.stock} productos</div>
            </div>
          </div>
        `)
        $('.card-container').append(galeryItem)
      });
    },
    error: function(_,_, err) {
      console.log("Ha ocurrido un error al cargar las cards", err);
    }
  });
})();