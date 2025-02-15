ddocument.addEventListener('DOMContentLoaded', function() {
    const employeeForm = document.getElementById('employeeRegistrationForm');
    const studentForm = document.getElementById('studentRegistrationForm');
    const queryForm = document.getElementById('studentQueryForm');

    if (employeeForm) {
        employeeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombres = document.getElementById('nombres').value;
            const apellidos = document.getElementById('apellidos').value;
            const correo = document.getElementById('correo').value;
            const telefono = document.getElementById('telefono').value;
            const rfid = document.getElementById('rfid').value;

            fetch('/register-empleado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombres, apellidos, correo, telefono, rfid })
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }

    if (studentForm) {
        studentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombres = document.getElementById('nombres').value;
            const apellidos = document.getElementById('apellidos').value;
            const correo = document.getElementById('correo').value;
            const telefono = document.getElementById('telefono').value;
            const rfid = document.getElementById('rfid').value;
            const expediente = document.getElementById('expediente').value;
            const carrera = document.getElementById('carrera').value;
            const semestre = document.getElementById('semestre').value;

            fetch('/register-alumno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombres, apellidos, correo, telefono, rfid, expediente, carrera, semestre })
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }

    if (queryForm) {
        queryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const alumnoId = document.getElementById('alumnoId').value;

            fetch(`/consultar-alumno/${alumnoId}`)
            .then(response => response.json())
            .then(data => {
                const studentInfo = document.getElementById('studentInfo');
                studentInfo.innerHTML = `
                    <h2>Información del Alumno</h2>
                    <p><strong>Nombres:</strong> ${data.nombres}</p>
                    <p><strong>Apellidos:</strong> ${data.apellidos}</p>
                    <p><strong>Correo:</strong> ${data.correo}</p>
                    <p><strong>Teléfono:</strong> ${data.telefono}</p>
                    <p><strong>RFID:</strong> ${data.rfid}</p>
                    <p><strong>Expediente:</strong> ${data.expediente}</p>
                    <p><strong>Carrera:</strong> ${data.carrera}</p>
                    <p><strong>Semestre:</strong> ${data.semestre}</p>
                    <h3>Libros Prestados</h3>
                    <ul>
                        ${data.libros.map(libro => `<li>${libro.titulo} por ${libro.autor}</li>`).join('')}
                    </ul>
                `;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});