ddddocument.getElementById('employeeRegisterForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(message => {
      document.getElementById('employeeInfo').innerText = message;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('employeeInfo').innerText = 'Error registrando empleado';
    });
  });