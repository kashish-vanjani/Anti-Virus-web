// Toggle password visibility
document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordField = document.querySelector('.password-field');
    const passwordFieldType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordFieldType);

    // Change the icon based on the field type
    this.querySelector('img').src =
        passwordFieldType === 'password'
            ? 'https://cdn-icons-png.flaticon.com/512/159/159604.png'
            : 'https://cdn-icons-png.flaticon.com/512/159/159594.png';
});
