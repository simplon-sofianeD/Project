// Hello U :
function hello(nom){
	if (nom) {
	    return "Hello " + nom + "!"
	} else {
	    return "Hello World!";
	}
}
// Derniere lettre :
function getLastLetter(word){
    if (word){
        var lastLetter = word[word.length - 1];
        return lastLetter;
    }  else if (word === ""){
        return "";
    } else  {
        return null
    }
}
// Seconde en minute :
function sec2m(sec){
    if (sec > 60) {
    var seconde = sec % 60;
    var minute = (sec - seconde) / 60;
        return minute + "m " + seconde + "s";
    } else if (sec < 60) {
        var seconde = sec;
        return seconde + "s";
    } else {
        return 0;
    }

}
// Liste en objet :
var liste = [null,'','Bob'];
function arrayToObject(list){
var obj = {mail:"", nom:"", prenom: ""}
	for (var i = 0; i < list.length; i++) {
    if ((list[i] === null) || (list[i] === "")){
       list[i] = "inconnu";
    }
  }
      obj.mail = list[0];
      obj.nom = list[1];
      obj.prenom = list[2];
	    return obj;
}
arrayToObject(liste);
// Dans la zone :
