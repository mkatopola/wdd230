document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        document.getElementById('password').value = '';
        document.getElementById('confirm-password').value = '';
        document.getElementById('password').focus();
        event.preventDefault();
    }
});
