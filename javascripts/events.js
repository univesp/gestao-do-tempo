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

  let conteudoItems = document.querySelectorAll('.conteudo');
  let menus = document.querySelectorAll('.menu-nums');
  let qtdeConteudos = 8;

  conteudoItems.forEach(e => {
    if(e.id !== 'conteudo1'){
      e.style.display = 'none';
    }
  });

  // Troca conteúdos quando clica no numero (menu)
  for (let i = 1; i < qtdeConteudos+1; i++) {
  
    document.addEventListener('click', (e)=>{
      let elementId = e.target.id;
  
      switch (elementId){
  
        case `menu${i}`:
          conteudoItems.forEach(e => {
            if(e.id === `conteudo${i}`){
              e.style.display = 'flex';
            }else{
              e.style.display = 'none';
            }
          });
          menus.forEach(e => {
            if(e.id === `menu${i}`){
              e.style.fontWeight = 'bold';
            }else{
              e.style.fontWeight = '400';
            }
          });
          break;
  
      }
    })
    
  }
  

})
