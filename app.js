
var totalScoreP1=0;
var totalScoreP2=0;


function p1(){
    let theImg=document.querySelector(".theImg");
   let theNumber=  Math.trunc(Math.random()*6 +1);
  var num= document.querySelector(".number").textContent=theNumber;
   theImg.src = `dice-${theNumber}.png`;
 
   
   totalScoreP1 +=num;
   document.getElementById('p1').innerHTML=totalScoreP1;
   if (totalScoreP1 >= 100) {
    alert("Player 1 won");
    
   }
}


function p2(){
    let theImg=document.querySelector(".theImg");
   let theNumber=  Math.trunc(Math.random()*6 +1);
  var num= document.querySelector(".number").textContent=theNumber;
   theImg.src = `dice-${theNumber}.png`;
 
   
   totalScoreP2 +=num;
   document.getElementById('p2').innerHTML=totalScoreP2;
   if (totalScoreP2 >= 100) {
    alert("Player 2 won");
    
   }
}
