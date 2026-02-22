let qteShoes = document.getElementById('qtyshoes');
let qteSocks = document.getElementById('qtysocks'); //
let prixTotal = document.getElementById('total'); //
let qteBags = document.getElementById('qtybags');

               //Ajouter article
//Shoes
let btnPlus1 = document.querySelector('#plus1') ;
btnPlus1.onclick=cliquePlus1;

function cliquePlus1() {
let stockActuel = qteShoes.textContent; // 1. lire le texte actuel
let number = parseInt(stockActuel);        // 2. convertir en nombre
number = number + 1;                     // 3. ajouter 1
qteShoes.textContent = number;       // 4. réécrire
recalculerTotal();
}


//Socks
let btnPlus2 = document.querySelector('#plus2') ;
btnPlus2.onclick=cliquePlus2;

function cliquePlus2() {
let stockActuel = qteSocks.textContent; // 1. lire le texte actuel
let number = parseInt(stockActuel);        // 2. convertir en nombre
number = number + 1;                     // 3. ajouter 1
qteSocks.textContent = number;       // 4. réécrire
recalculerTotal();
}

//Bags
let btnPlus3 = document.querySelector('#plus3') ;
btnPlus3.onclick=cliquePlus3;

function cliquePlus3() {
let stockActuel = qteBags.textContent;     // 1. lire le texte actuel
let number = parseInt(stockActuel);        // 2. convertir en nombre
number = number + 1;                     // 3. ajouter 1
qteBags.textContent = number;           // 4. réécrire
recalculerTotal();
}



                 //Retirer article
//idem Ajout

//Shoes
let btnMoins1 = document.querySelector('#moins1') ;
btnMoins1.onclick=cliqueMoins1;

function cliqueMoins1() {
let stockActuel = qteShoes.textContent;
let number = parseInt(stockActuel);
if (number > 0){
number = number - 1;
qteShoes.textContent = number;
recalculerTotal();
}
}

//Socks
let btnMoins2 = document.querySelector('#moins2') ;
btnMoins2.onclick=cliqueMoins2;

function cliqueMoins2() {
let stockActuel = qteSocks.textContent;
let number = parseInt(stockActuel);
if (number > 0){
number = number - 1;
qteSocks.textContent = number;
recalculerTotal();
}
}

//Bags
let btnMoins3 = document.querySelector('#moins3')
btnMoins3.onclick=cliqueMoins3;

function cliqueMoins3() {
let stockActuel = qteBags.textContent;
let number = parseInt(stockActuel);
if (number > 0){
number = number - 1;
qteBags.textContent = number;
recalculerTotal();
}
}



                   //Vider Panier 

//Shoes
let btnTrash1 = document.querySelector('#trash1') ;
btnTrash1.onclick=cliqueTrash1;

function cliqueTrash1() {
let stockActuel = qteShoes.textContent;
let number = parseInt(stockActuel);
if (number > 0){
number = 0;
qteShoes.textContent = number;
recalculerTotal();
}
}


// Socks
let btnTrash2 = document.querySelector('#trash2') ;
btnTrash2.onclick=cliqueTrash2;

function cliqueTrash2() {
let stockActuel = qteSocks.textContent;
let number = parseInt(stockActuel);
if (number > 0){
number = 0;
qteSocks.textContent = number;
recalculerTotal();
}
}


// Bags
let btnTrash3 = document.querySelector('#trash3') ;
btnTrash3.onclick=cliqueTrash3;

function cliqueTrash3() {
let stockActuel = qteBags.textContent;
let number = parseInt(stockActuel);
if (number > 0){
number = 0;
qteBags.textContent = number;
recalculerTotal();
}
}

                    //TOTAL PANIER 
function recalculerTotal() {
let nShoes = parseInt(qteShoes.textContent);
let nSocks = parseInt(qteSocks.textContent);
let nBags  = parseInt(qteBags.textContent);

function recalculerTotal() {
let nShoes = parseInt(qteShoes.textContent);
let nSocks = parseInt(qteSocks.textContent);
let nBags  = parseInt(qteBags.textContent);

let total = nShoes * 100 + nSocks * 20 + nBags * 50;
prixTotal.textContent = total;
}

}



                 //Animation Like
let btnHeart = document.querySelectorAll('.heartLike') ;   //prend tous les éléments qui ont la classe heart-like
btnHeart.forEach(function(heart) {              //forEach---on répète la même action pour chaque cœur
heart.addEventListener('click', function () {   //quand on clique sur ce cœur-là, on exécute la fonction
heart.classList.toggle('liked');               //ajoute / enlève la classe liked sur ce cœur précis.
});
})