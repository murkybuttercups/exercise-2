// console.log("yeehaw");

// var q1 = "What's your name?",
// var q2 = "Hi _____, we gon call ya Joe.",
// var q3 = "So your family heriloom sausage, cured for 3000 years and slow smoked for another 2000 just to make it sound fancier has been stolen. What do?",
// var q4 = "The guards give you the information of the thief who took the sausage: they were the height of a halfling, cloaked in black! They took off to the halfling village in the magical forest!";
// var q5 = "You find yourself in the halfling village, the only place that looks open is the tavern.",
// var q6 = "Good one, everyone turns to look at you. A halfling cloaked in black flees into the back room.",
// var q7 = "You encounter the halfling.",
// var q8 = "he halfling throws the sausage at you. It hits you in the face and you fall over, and the halfling disappears into the darkness of the magic forest",
// var q9 = "You get up and look at the sausage, there's a bite out of it. At least you got it back though!",
// var q10 = "Welp, looks like the end of our tale. Good job?",



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
var input1 = ["Cool", 
			"Look for the thief", 
			"Search the forest for clues", 
			"Kick down the door!", 
			"Chase the halfling!", 
			"Strike a cool pose and tell them they're busted!", 
			"Get up", 
			"Return home",
			"The"];

// array to store the content of the second input option button
var input2 = ["Wait, what??",
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

// declare variable name
var name;

// call init function
window.onload = init;

//input.addEventListener("onclick", increment);

// this function does the things
function init() {

	// prompts the user to input their name
	name = prompt("What's your name?", "");

	console.log(question [counter]);
	console.log(input1 [counter]);
	console.log(input2 [counter]);


	//if (document.getElementById("input").onclick == true); {
	//	counter++;
	//};
	// document.getElementById("question").innerHTML[counter];
}


document.getElementById("input").addEventListener("click", function() {
	counter++;
	console.log(counter);
	if (counter >= 0 && counter <= 8) {
		console.log(question [counter]);
		console.log(input1 [counter]);
		console.log(input2 [counter]);
		//document.getElementById("question").innerHTML(question [counter]);
	} else {
		location.reload(true);
	};

});


//function increment() {
//	counter++;
//	console.log(counter);
//}

//document.getElementById("input").onclick = increment;
//console.log(counter);