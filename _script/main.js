$(document).ready(function() {

  var valorNotaFinal = 0.4;
  var valorNotaParcial = 0.6;

  function pct_faltantes(nota,ptMin){
    function faltante() {
      return ((ptMin - $('#resultado .nota').html()) /valorNotaFinal).toFixed(0)
    };
    if(faltante() > 130){
      return 'para ' + nota + ' 😣'
    }else if(faltante() > 120){
      return 'si deberías sacar ' + nota +' ni la virgen te salva'
    }else if(faltante() > 103){
      return 'si querías sacar ' + nota +' PERDEU'
    }else if(faltante() > 100){
      return 'si querías sacar ' + nota +' negocia nomas ya'
    }else if(faltante() > 94){
      return'Fuerza que con ' + faltante() + '% recién sacas ' +  nota;
    }else if(faltante() > 90){
      return'Fuerza que con ' + faltante() + '% recién sacas ' +  nota;
    }else if(faltante() > 80){
      return'Haciendo ' + faltante() + '% sacas ' +  nota;
    }else if(faltante() > 70){
      return'Haciendo ' + faltante() + '% ya pasas con ' +  nota;
    }else if(faltante() > 60){
      return'Haciendo ' + faltante() + '% sacas ' +  nota;
    }else if(faltante() > 50){
      return'Haciendo ' + faltante() + '% pasas con ' +  nota;
    }else if(faltante() > 25){
      return'Haciendo ' + faltante() + '% ya pasas con ' +  nota;
    }else{
      return'Haciendo ' + faltante() + '% ya pasas con ' +  nota;
    }
  };

  function promedio(num1,num2){
    return'T. parciales: <strong class="nota">' + ((num1+num2)/2*valorNotaParcial).toFixed(0) +'</strong>%';
  };

  $("input[type='text']").blur(function(){
    if($(this).val() == "" || isNaN($(this).val()) || $(this).val() > 100 || $(this).val() < 1){
      $(this).addClass('error');
      $(this).val(0);
    }else{
      $(this).removeClass('error');
    }
  });

  $('#submit').click(function() {
    event.preventDefault();

    var n1 = parseInt($('#val1').val());
    var n2 = parseInt($('#val2').val());
    var n3 = parseInt($('#val3').val());

    if(isNaN(n1)){n1=0}
    if(isNaN(n2)){n2=0}
    if(isNaN(n3)){n3=0}

    if(n1<=n2 && n1<n3){
      $('#resultado').html(promedio(n2,n3));
    }else if(n2<=n1 && n2<n3){
      $('#resultado').html(promedio(n1,n3));
    }else{
      $('#resultado').html(promedio(n1,n2));
    };

    $('.resultados').css('display','block');
    $('#para5').html(pct_faltantes(5,91));
    $('#para4').html(pct_faltantes(4,85));
    $('#para3').html(pct_faltantes(3,73));
    $('#para2').html(pct_faltantes(2,65));

    if (parseInt($('#resultado .nota').html()) == 0) {
      $('input[type="text"]').addClass('error');
    }else{
      $('.cont-pres').fadeToggle("slow");
      $('.cont-resulpres').fadeToggle("slow");
    }
  });

  $('#atras').click(function() {
    $('.cont-pres').fadeToggle("slow");
    $('.cont-resulpres').fadeToggle("slow");
  });

});

