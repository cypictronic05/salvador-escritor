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
  