const passwordbox = document.getElementById('password');
const length = 8 ;


const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols ='!@#$%^&*?';


const allChars = upperCase+ lowerCase+ numbers + symbols ;

function createpassword() {
    let password = '';
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=numbers[Math.floor(Math.random()* numbers.length)];
    password +=symbols[Math.floor(Math.random()*symbols.length)];

    while (length > password.length) {
        password +=allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordbox.value = password;

}

function copypassword() {
    passwordbox.select();
    document.execCommand('copy');
}

