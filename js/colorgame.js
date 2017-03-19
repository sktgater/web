var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var pickedColor = pickColor();

var squaresTag = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisaplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


// Easy button
easybtn.addEventListener("click", function(){
	numOfSquares = 3;

	// Display chosen color
	easybtn.style.background = "steelblue";
	easybtn.style.color = "white";
	hardbtn.style.background = "white";
	hardbtn.style.color = "steelblue";

	// generate new color and picked color
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	// update first three squares with new colors
	for (var i = 0; i < colors.length; i++){
		squaresTag[i].style.background = colors[i];
	}
	//
	for (var i = 3; i < squaresTag.length; i++){
		squaresTag[i].style.display = "none";
	}

});

// hard button
hardbtn.addEventListener("click", function(){
	numOfSquares = 6;
	easybtn.style.background = "white";
	easybtn.style.color = "steelblue";
	hardbtn.style.background = "steelblue";
	hardbtn.style.color = "white";

	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 3; i < squaresTag.length; i++){
		squaresTag[i].style.display = "block";
	}
	for (var i = 0; i < colors.length; i++){
		squaresTag[i].style.background = colors[i];
	}
	
});

// Reset button
resetBtn.addEventListener("click", function () {
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squaresTag.length; i++){
		squaresTag[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	resetBtn.textContent = "New Colors";
	messageDisaplay.textContent = "";

});

// Loop through each square, assign color from colors to each square
for (var i = 0; i < squaresTag.length; i++){
	// Assign colors to each square
	squaresTag[i].style.background = colors[i];

	// For each square, add each square event listener
	squaresTag[i].addEventListener("click", function(){
		if (this.style.background === pickedColor){
			messageDisaplay.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.background = pickedColor;
			resetBtn.textContent = "Play Again?";
		}
		else{
			this.style.background = "#232323";
			messageDisaplay.textContent = "Try Again";
		}
	});
}

colorDisplay.textContent = pickedColor;

// change all squares to one color
function changeColors(color){
	for (var i = 0; i < squaresTag.length; i++){
		squaresTag[i].style.background = color;
	}
}

// Randomly pick a color as the desired color
function pickColor(){
	var random = Math.floor(Math.random() 
		* colors.length);
	return colors[random];
}

// Generate num number of colors as an array
function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}


	return arr;
}

// Randomly generate a RGB combination
function randomColor(){
	return "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
}