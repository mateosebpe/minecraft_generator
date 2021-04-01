
document.addEventListener('DOMContentLoaded', () => {
    const spinner = document.getElementById('spinner');
    const button = document.getElementById('button');
    const alert = document.getElementById('alert');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');

    spinner.classList.add('d-none');
    alert.classList.add('d-none');

    button.addEventListener('click', () => {
        spinner.classList.remove('d-none');
        setTimeout(() => { 
        spinner.classList.add('d-none');
        alert.classList.remove('d-none'); 
        email.value = 'bastian45forever@gmail.com'
        pass.value = '45ismyfavoritenumber'
        }, 9000);
    });
});