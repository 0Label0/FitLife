$(function(){

  const userName = $('#name');
  const lastName = $('#lastname');
  const tel = $('#tel');
  const mail = $('#email');
  
  const REGEX = {
    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,15}$/, 
    lastname: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,40}$/, 
    tel: /^\d{9}$/, 
    mail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
  };
  
  // muestra el error de manera visual
  function visualError(user, errorMessage) {
  
    user.select();
    $('#error-text').text(errorMessage);
  
    // Crea una alerta visual en el input
    user.addClass('error_validation');
  
    // Quita la alerta visual pasados dos segundo
    setTimeout( () => {
      user.removeClass('error_validation');
    },2000);
  }
  
  // valida los inputs
  const validate = (user, regex) => {
    if(regex.test(user.val())) {
      return true;
    }
    return false;
  };

  // para agregar los errores dinámicamente y mejor experiencia de usuario
  const totalValidate = ()=> {
    if(!validate(userName, REGEX.name)){
      visualError(userName, 'El nombre no es válido');
      return false;
    }else if(!validate(lastName, REGEX.lastname)) {
      visualError(lastName, 'El apellido no es válido');
      return false;
    }else if (!validate(tel, REGEX.tel)){
      visualError(tel, 'El número de teléfono no es válido');
      return false;
    }else if(!validate(mail, REGEX.mail,)) {
      visualError(mail, 'El mail no es válido');
      return false;
    }else if(!$('#privacity-politic').is(':checked')){
      visualError($('#privacity-politic'), 'Acepta las políticas de privacidad')
      return false;
    }
    return true;
  
  };

  //------------------------------------------------//

  $.ajax({
    type: "GET",
    url: "../json/card.json",
    data: "data",
    dataType: "json",
    success: function (response) {
      response.forEach(card => {
        const optionItem = $(`
          <option value="${card.name}" data-price="${card.price}">${card.name} - ${card.price}€</option>
        `);
        $('#product').append(optionItem);


        $('#product, #custom-color, #custom-tipography').on('change', calcPrice);
        
      });

    },
    error: function(_, _, err) {
      console.error('Error al cargar las noticias:', err)
    }
  });

  function calcPrice() {
    const selectedOption = $('#product option:selected');
    const customColor = $('#custom-color');
    const customTipography = $('#custom-tipography');
    let total = 0;
    
    // Obtener el precio del producto seleccionado
    if (selectedOption.length && selectedOption.val() !== "") {
      total += parseFloat(selectedOption.data('price'));
    }

    if (customColor.is(':checked')) {
      total += 5; 
    }

    if (customTipography.is(':checked')) {
      total += 3;
    }

    // Mostrar el precio final
    $('#final-price').text(`${total.toFixed(2)}€`);
  }

  // Enviar el formulario
  $('form').submit(e=> { 
    e.preventDefault();
    
    if(totalValidate()) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
      });
      console.log('Formulario completado!');
      $('#error-text').text('Gracias por su compra!');
      $('#error-text').css({
        'color':'#0f0'
      })
    }
    else{
      console.log('no válido');

    }
    
  });
});
