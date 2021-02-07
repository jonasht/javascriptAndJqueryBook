var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
    comprimento = 'Boa Noite!'
    
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    comprimento = 'Boa Tarde!'

} else if (hourNow > 0) {
    greeting = 'Good morning!';
    comprimento = 'Bom dia!'

} else {
    greeting = 'Welcome!';
    comprimento = 'Bem Vindo!'
}

document.write('<h3>' + greeting + '</h3>');
document.write('<h3>' + comprimento + '</h3>');