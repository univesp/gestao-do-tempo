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

  const conteudos = ['conteudo1', 'conteudo2', 'conteudo3', 'conteudo4', 'conteudo5', 'conteudo6', 'conteudo7', 'conteudo8'];

  let conteudoItems = document.querySelectorAll('.conteudo');

  conteudoItems.forEach(e => {
    if(e.id !== 'conteudo1'){
      e.style.display = 'none';
    }
  })

  document.addEventListener('click', (e)=>{
    let elementId = e.target.id;
    

    switch (elementId){

      case 'menu1':
        conteudoItems.forEach(e => {
          if(e.id === 'conteudo1'){
            e.style.display = 'flex';
          }else{
            e.style.display = 'none';
          }
        })
        break;

      case 'menu2':
        conteudoItems.forEach(e => {
          if(e.id === 'conteudo2'){
            e.style.display = 'flex';
          }else{
            e.style.display = 'none';
          }
        })
        break;

      

    }
  })

})
