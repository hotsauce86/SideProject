

function setTextandInt(){
var changeText = "some text";
var someInt = 5;

	document.getElementById('changeThisText').innerHTML = changeText;
	document.getElementById('changeThisInt').innerHTML = someInt;
}

function 	countToTen() {

	var		Lang = ["Java", "C#", "Python", "Racket", "Prolog", "Visual Basic"];
	var		text = "";
	var 	i;	
	for(i = 0; i < Lang.length; i ++){
			text += Lang[i] + "<br>";
	}
	document.getElementById("pablo").innerHTML	= text;
	// body...
}

