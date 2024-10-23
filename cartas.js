
const envelopes = document.querySelectorAll('.envelope');

envelopes.forEach(envelope => {
 
    envelope.addEventListener('click', function() {
 
        if (this.classList.contains('open')) {
  
            this.classList.remove('open');
            
            const carta = this.querySelector('.carta');
            if (carta) {
                carta.remove();
            }
        } else {
           
            this.classList.add('open');
            
            
            const carta = document.createElement('div');
            carta.classList.add('carta');
            carta.innerText = this.dataset.reason; 
            
          
            this.appendChild(carta);
        }
    });
});
