///////////1st dice/////////

var randomnumber1 =Math.floor(Math.random() * 6)+1;  //1-6

var randomdiceimage = "images/dice" + randomnumber1 +".png"; //dice1 -dice6



var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomdiceimage);





  //////// 2nd dice//////////
var randomnumber2 = Math.floor(Math.random() * 6)+1;

var randomdiceimage2 ="images/dice" +randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);






if(randomdiceimage > randomdiceimage2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins !"

}
else if (randomdiceimage < randomdiceimage2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins !"
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
