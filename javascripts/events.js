$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

  
  const fraseGeraResultado = 'Gerar resultado';
  const fraseRefazTeste = 'Refazer teste';
  const selects = document.querySelectorAll('select');
  const botaoGeraResultado = document.querySelector('#geraResultado');
  const areaTextoResultado = document.querySelector('#texto-resultado');
  const arrayValores = [];

  if(botaoGeraResultado.innerHTML === fraseGeraResultado){
    $(botaoGeraResultado).click(function(){
      selects.forEach(e=>{ 
        let notasNumeros = parseInt(e.value);
        arrayValores.push(notasNumeros);
      })
  
      let soma = arrayValores.reduce((accumulator, value) => accumulator + value, 0);
      
      botaoGeraResultado.innerHTML = fraseRefazTeste;
  
      areaTextoResultado.innerHTML = `<p>Resultado: Sua nota percentual de administração do tempo é de <span>${soma}%</span>.</p>`;

      if(botaoGeraResultado.innerHTML === fraseRefazTeste){
        $(botaoGeraResultado).click(function(){
          
          document.location.reload();
          
          window.scrollTo({
            top: 12100,
          });
        })
      } 
      
    })
  } 

 
  
  

})
