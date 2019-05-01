// Sasso Carta e Forbice tra due giocatori CPU

// Creo una funzione per generare un elemento random
var items = ["sasso", "carta", "forbici"];

function random_item(items){
  var segno = items[Math.floor(Math.random()*items.length)];
  return segno
}
// assegno alle variabili un uguaglianza e faccio un console.log
var cpu1 = random_item(items);
var cpu2 = random_item(items);
console.log("cpu1 " + cpu1);
console.log("cpu2 " + cpu2);

// condizioni di vincita di cpu1
if ((cpu1 == "sasso") && (cpu2 = "forbici") || (cpu1 == "forbici") && (cpu2 == "carta") || (cpu1 == "carta") && (cpu2 == "sasso")) {
  console.log("cpu1 ha vinto!");
// condizioni di vincita di cpu2
} else if ((cpu2 == "sasso") && (cpu1 == "forbici") || (cpu2 == "forbici") && (cpu1 == "carta") || (cpu2 == "carta") && (cpu1 == "sasso")) {
  console.log("cpu2 ha vinto!");
// condizioni di pareggio
} else
  console.log("pareggio");




// Il sasso spezza le forbici (vince il sasso)
// Le forbici tagliano la carta (vincono le forbici)
// La carta avvolge il sasso (vince la carta)
