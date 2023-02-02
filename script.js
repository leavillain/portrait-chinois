document.addEventListener("DOMContentLoaded", function () {
    /*lier data json*/
    fetch('data.json').then(function (response) {
        response.json().then(function (data) {
            data.forEach(function afficheAnalogies(resultat) {
            document.querySelector('#list').innerHTML += "<section class=\"text\" id=" + resultat.id + "><div id=\"text\"><div class=\"titletext\" id=" + resultat.id + "><h2>Si j’étais " + resultat.Analogies + ", je serais" + resultat.valeurAnalogies + ".</h2><p class=\"justify\">" + resultat.justify + "</p><div class=\"arrowdown\"><a href=" + resultat.arrow + "><img src=\"Images/arrowdown.png\" id=\"arrowdown\"></a></div></div><img src=" + resultat.image + " alt=\"\" class=\"image\"></div></div></section>"
                })
            })
        })
    });
    

/*popup explication*/
var overlay = document.getElementById("overlay");

document.querySelector("#show-popup").addEventListener("click", () => {
overlay.style.display = "block";
});

document.querySelector("#close-popup").addEventListener("click", () => {
overlay.style.display = "none";
});


/*popup mentions légales*/
var overlay2 = document.getElementById("overlay2");

document.querySelector("#show-popup2").addEventListener("click", () => {
overlay2.style.display = "block";
});

document.querySelector("#close-popup2").addEventListener("click", () => {
overlay2.style.display = "none";
});

/*Document title*/
var docTitle = document.title;

window.addEventListener("blur",()=>{
    document.title="Come back :(";
});
window.addEventListener("focus",()=>{
    document.title=docTitle;
});

/*analogie des utilisateurs*/
document.querySelector('#Envoi').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#vous').innerHTML += "<section class=\"text\"><div id=\"text\"><div class=\"titletext\"><h2>Si j’étais " + document.querySelector("#Analogies").value + ", je serais " + document.querySelector("#valeurAnalogies").value + "</h2><p class=\"justify\"> " + document.querySelector("#justify").value + " </p></div><img src=" + document.querySelector("#image").value + " alt='' class='img'></div></section>";

/*envoi à API*/
    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + "Car " + document.querySelector("#justify").value).then(function (response) {
        response.json().then(function (data) {
            if (data.status == "success") {
                document.querySelector("#message").innerHTML = "Bien reçu !";
            } else {
                document.querySelector("#message").innerHTML = "Erreur...";
            }}
        )}
    )}
);