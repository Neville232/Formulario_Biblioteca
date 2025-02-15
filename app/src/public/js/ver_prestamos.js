document.addEventListener('DOMContentLoaded', function() {
  fetch('/loans')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('loanCardsContainer');
      data.forEach(loan => {
        const card = document.createElement('div');
        card.className = 'card';

        // Formatear las fechas
        const fechaPrestamo = new Date(loan.fecha_prestamo).toLocaleDateString();
        const fechaDevolucion = loan.fecha_devolucion ? new Date(loan.fecha_devolucion).toLocaleDateString() : 'No devuelto';

        card.innerHTML = `
          <h2>${loan.nombres} ${loan.apellidos}</h2>
          <p>Correo: ${loan.correo}</p>
          <p>Teléfono: ${loan.telefono}</p>
          <p>RFID: ${loan.rfid}</p>
          <h3>Libro: ${loan.titulo}</h3>
          <p>Autor: ${loan.autor}</p>
          <p>Cota: ${loan.cota}</p>
          <p>Edición: ${loan.edicion}</p>
          <p>Fecha de Publicación: ${new Date(loan.publicacion).toLocaleDateString()}</p>
          <p>Ejemplar: ${loan.ejemplar}</p>
          <p>Fecha de Préstamo: ${fechaPrestamo}</p>
          <p>Fecha de Devolución: ${fechaDevolucion}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});