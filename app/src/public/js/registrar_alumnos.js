document.getElementById('studentRegistrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch('/register-student', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(message => {
    alert(message);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error registrando alumno');
  });
});