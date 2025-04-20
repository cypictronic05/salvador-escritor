// Mercado Pago integración
const mp = new MercadoPago('TU_PUBLIC_KEY', {
    locale: 'es-CL' // Cambia según país
  });
  
  document.getElementById('buyButton').addEventListener('click', () => {
    fetch("/crear-preferencia") // Tu endpoint en backend (si usas uno)
      .then(res => res.json())
      .then(data => {
        mp.checkout({
          preference: {
            id: data.id
          },
          autoOpen: true, // Abre directamente el checkout
        });
      });
  });
  
  document.getElementById('floatingBtn').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?phone=56948898247&text=%C2%A1Hola,%20amigo!%20Estuve%20por%20su%20sitio%20web%20,%20me%20interesa%20sus%20libro.', '_blank');
}); 