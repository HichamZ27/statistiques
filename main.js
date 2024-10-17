// Déclaration et initialisation des variables
let total = 0;
let average = null;
let array = new Array();
let i = 0;
let saisie = " ";
let numberInput = null;
let sum = null;
let max;
let min;

// Doit afficher le total, la somme, la moyenne et push les nombres saisis dans le tableau
while (numberInput != 0) {
  saisie = prompt("Entrez un nombre (0 = arrêt de la saisie)");
  total += 1;
  sum = sum + numberInput;
  average = sum / numberInput;
  array.push(numberInput);
  i < total;
  i++;
  numberInput = parseInt(saisie);
}

// Doit afficher la valeur min et max
max = Math.max(...array);
min = Math.min(...array);

// Affichage des résultats
stats = prompt(
  "Total de nombres saisis : " +
    total +
    "\nSomme des nombres saisis : " +
    sum +
    "\nMoyenne des nombres saisis : " +
    average +
    "\nCompris entre : " +
    min +
    " et " +
    max
);

// Récupérer l'élément avec l'id 'year' et y insérer l'année actuelle
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
