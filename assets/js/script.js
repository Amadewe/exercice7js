
    // Multiplier la pointure par 2
    // Ajouter 5 au résultat
    // Multiplier le tout par 50
    // Soustraire l’année de naissance
    // Ajouter au tout 1766

function myFunction() {
var shoeSize = document.getElementById("shoeSize").value;
var yearOfBirth = document.getElementById("yearOfBirth").value;
if(isNaN(shoeSize)==false && isNaN(yearOfBirth)==false){
var result = (((shoeSize*2)+5)*50)-(yearOfBirth)+1766;
alert(result);
} else {
alert ('merci de remplir des chiffres');
}
}
