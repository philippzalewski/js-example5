// plik scripts.js

var a = prompt('Wpisz wartość "a"');
var b = prompt('Wpisz wartość "b"');
var value = (a*a) + (2*a*b) - (b*b);

if ( value < 0 ) {
  alert('Wynik ujemny');
  console.log('Wynik ujemny');
} else if ( value > 0 ) {
    alert('Wynik dodatni');
    console.log('Wynik dotatni');
}  else {
  alert('Wynik jest równy 0');
  console.log('Wynik jest równy 0');
  
}
  