<meta charset="utf-8">
<script>
var karty=[6,7,8,9,10,"V","Q","K","A"];

//Функция случайной карты
function tianemKartu(){
var karta=(Math.round(Math.random()*(karty.length-1)));
return karta=karty[karta];
}
//Считаем карты игрока
function pods4et(hand){
var sum=0;
for(var i=0;i<hand.length;i++){
if(hand[i]=="V"||hand[i]=="Q"||hand[i]=="K"){
hand[i]=10;}
else if(hand[i]=="A"){
if(sum<=10){
hand[i]=11;}
else {hand[i]=1;}
}
sum+=hand[i];}
return sum;
}
//Раздаем карты и открываем их
var diler=[tianemKartu()];
var player=[tianemKartu(),tianemKartu()];
alert("Карта дилера: " + diler + "\nКарты игрока: " + player.join(" и "));

alert("Сумма карт игрока " + pods4et(player));
</script>