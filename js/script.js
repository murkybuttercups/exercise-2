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

var question = ["So your family heriloom sausage, cured for 3000 years and slow smoked for another 2000 just to make it sound fancier has been stolen. What do?",
				"The guards give you the information of the thief who took the sausage: they were the height of a halfling, cloaked in black! They took off to the halfling village in the magical forest!",
				"You find yourself in the halfling village, the only place that looks open is the tavern.",
				"Good one, everyone turns to look at you. A halfling cloaked in black flees into the back room.",
				"You encounter the halfling.",
				"The halfling throws the sausage at you. It hits you in the face and you fall over, and the halfling disappears into the darkness of the magic forest",
				"You get up and look at the sausage, there's a bite out of it. At least you got it back though!",
				"Welp, looks like the end of our tale. Good job?"];
var counter = 0;

window.onload = init;
function init() {
	// console.log(question [3]);
	console.log(counter);
	if (document.getElementById("input").onclick == true); {
		counter++;
	};
	document.getElementById("question").innerHTML[counter];
}