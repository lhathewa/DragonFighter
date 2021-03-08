var containerEle = document.body.querySelector(".container");
do{

var hit = Number(prompt("How Many Times Will You Hit The Dragon?"));
var Dragon = 10;
var Fighter = 5;
var damage = Math.floor(Math.random() * hit + 1);
var dragonmove = Math.floor(Math.random() * 2 + 1);
var x = Dragon - damage;
var y = Fighter - dragonmove
containerEle.innerHTML =
  "You dealt " +
  damage +
  " damage to the dragon." +
  "  The dragon dealt "+
  dragonmove +
  " damage to you";
}
while(x > 1 & y >1);
if (x < 1){
 containerEle.innerHTML = "You have slayed the dragon!";
}
if(y < 1){
 containerEle.innerHTML = " Full marks for bravery, but you're dead!";
}