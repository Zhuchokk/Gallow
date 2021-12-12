let word = '';
let words = ['cake', 'hangman', 'apple', 'exit', 'cheese', 'unreal', 'gallow', 'props', 'uncle', 'ace', 'bean', 'tea', 'cup', 'blimey', 'jolly', 'document', 'text', 'python', 'mate', 'row', 'haggle', 'story', 'flog', 'dear', 'person', 'coder', 'wonky', 'dodgy', 'ghost', 'house', 'keyboard', 'mouse', 'youtube', 'bug'];
let errors = [];
let entry = '';
let number_img = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function check () {
	if (word.length == 0){
		return;
	}
	let input = document.getElementById('input');
	input.value = input.value.toLowerCase();
	if (word.indexOf(input.value) != -1){
		let x = word.indexOf(input.value);
		while (x != -1){
			entry = entry.slice(0, x) + input.value + entry.slice(x + 1, entry.length);
			x = word.indexOf(input.value, x + 1);
		}
		
	} else {
		if (errors.indexOf(input.value) == -1){
			errors.push(input.value);
			number_img += 1;
			document.getElementById("g_image").src = "images//" + number_img + ".png";
		}
	}
	document.getElementById("word").innerHTML = "Word: " + entry;
	document.getElementById("errors").innerHTML = "Errors: " + errors.join(",");
	if (entry.indexOf('_') == -1){
		alert('YOU WON!');
		restart()
	} else if(number_img >= 6){
		alert('YOU LOST! The correct answer is ' + word);
		restart()
	}
	input.value = '';

}
function restart () {
	errors = [];
	number_img = 0;
	entry = '';
	word = words[getRandomInt(words.length)]
	for (let i=0; i < word.length; i++)
		entry += "_"
	document.getElementById("restarting").value = "Restart!";
	document.getElementById("word").innerHTML = "Word: " + entry;
	document.getElementById("errors").innerHTML = "Errors: " + errors.join(",");
	document.getElementById("g_image").src = "images//" + number_img + ".png";
}