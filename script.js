function abrirTexto(id) {
    const elemento = document.getElementById(id);
    elemento.classList.toggle('show'); 
  }
  



function abrirJanela(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'block'; 
  }
  

  function fecharJanela(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'none'; 
  }
  
