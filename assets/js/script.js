
    // Multiplier la pointure par 2
    // Ajouter 5 au résultat
    // Multiplier le tout par 50
    // Soustraire l’année de naissance
    // Ajouter au tout 1766

function myFunction() {
  var regex = new RegExp (/^[0-9]{2}$/);
  // 2 entre {} pour dire qu'on veut juste une poiture à deux chiffres idem pour 4
  var regex2 = new RegExp (/^[0-9]{4}$/);

var shoeSize = document.getElementById("shoeSize").value;
var yearOfBirth = document.getElementById("yearOfBirth").value;
if(regex.test(shoeSize) & regex2.test(yearOfBirth)){
var result = (((shoeSize*2)+5)*50)-(yearOfBirth)+1766;
alert(result);
} else {
alert ('merci de remplir des chiffres');
}
}

var regex = new RegExp(/^[1-9]{2}&/);
    var regex2 = new RegExp(/^[1-9]{4}&/);
    var shoeSize = document.getElementById('shoeSize').value;
    var yearOfBirth = document.getElementById('yearOfBirth').value;

    var result = ((((shoeSize * 2)+5)*50) - yearOfBirth)+1766 ;

    if (regex.test(shoeSize) & regex2.test(yearOfBirth)){
      alert(result);
    }
    else{
      alert('entrer une année et une pointure raisonnable différent de 0 et pas de lettres svp.')
