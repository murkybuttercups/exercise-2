
// declare variable name
var name;


// array to store the content of the prompts
var question = ["Hi " + name + ", we're going to call ya Joe.",
				"So your family heriloom sausage, cured for 3000 years and slow smoked for another 2000 just to make it sound fancier has been stolen. What do?",
				"The guards give you the information of the thief who took the sausage: they were the height of a halfling, cloaked in black! They took off to the halfling village in the magical forest!",
				"You find yourself in the halfling village, the only place that looks open is the tavern.",
				"Good one, everyone turns to look at you. A halfling cloaked in black flees into the back room.",
				"You encounter the halfling.",
				"The halfling throws the sausage at you. It hits you in the face and you fall over, and the halfling disappears into the darkness of the magic forest",
				"You get up and look at the sausage, there's a bite out of it. At least you got it back though!",
				"Welp, looks like the end of our tale. Good job?"];

// array to store the content of the first input option button
var answer1 = ["Cool", 
			"Look for the thief", 
			"Search the forest for clues", 
			"Kick down the door!", 
			"Chase the halfling!", 
			"Strike a cool pose and tell them they're busted!", 
			"Get up", 
			"Return home",
			"The"];

// array to store the content of the second input option button
var answer2 = ["Wait, what??",
				"Tell the guards",
				"Go to the Halfling Village",
				"Sneak in the door!",
				"Try to sneak around back to cut them off",
				"Try to knock them down",
				"Inspect the sausage",
				"Take a contemplative walk in the forest",
				"End"];

// variable to increment array position
var counter = 0;

// call init function
window.onload = init;

// this function does the things
function init() {

	// prompts the user to input their name
	name = prompt("What's your name?", "");

	document.getElementById("question").innerHTML = question [counter];
	document.getElementById("input1").innerHTML = answer1 [counter];
	document.getElementById("input2").innerHTML = answer2 [counter];
};


document.onkeypress = function(event) {

	//var keypressed = event.charCode;

	// alert("you pressed " + event.charCode)

	if (event.charCode == 44 || event.charCode == 46) {
		console.log("you pressed a key!")
		counter++;
	console.log(counter);
	if (counter >= 0 && counter <= 8) {
		document.getElementById("question").innerHTML = question [counter];
		document.getElementById("input1").innerHTML = answer1 [counter];
		document.getElementById("input2").innerHTML = answer2 [counter];
	} else {
		location.reload(true);
	};
	};

};

// this still doesn't work for input 2 and I'm mad about it
//document.getElementById("input").addEventListener("click", main);

// document.onkeypress = checkkey;

// function checkkey() {

// 	var key = event.keyCode;

// 	if (key == 37 || key == 39) {
// 		main;
// 	};

// };

// function pressedkey() {

// 	var key = event.keyCode;

// 	if (key == 37 || key == 39) {
// 		main;
// 	};

// };

// function main() {
// 	counter++;
// 	console.log(counter);
// 	if (counter >= 0 && counter <= 8) {
// 		console.log(question [counter]);
// 		console.log(answer1 [counter]);
// 		console.log(answer2 [counter]);
// 	} else {
// 		location.reload(true);
// 	};
// };


// document.addEventListener("click", function(event) {
// 	var option = event.target;
// 	if (option.className == input1 || option.className == input2) {
// 		main;
// 	};
// });