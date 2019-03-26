
var resultCont = document.getElementById('result');
var container = document.querySelector('.container');


var options = [{
	"answer1": "That's awesome!",
	"answer": "1"
	}, {
	"answer2": "Oh, that stinks!",
	"answer": "2"
	}, {
	"answer3": "Ahh, not sure what to say then",
	"answer": "3"
	}]


function submit() {

	var selectedOption = document.querySelector('input[type=radio]:checked');

	if(selectedOption.value == options[0].answer) {
		resultCont.textContent = options[0].answer1
		container.style.display = 'none';
		resultCont.style.display = '';
	} else if(selectedOption.value == options[1].answer) {
		resultCont.textContent = options[1].answer2
		container.style.display = 'none';
		resultCont.style.display = '';
	} else{
		resultCont.textContent = options[2].answer3
		container.style.display = 'none';
		resultCont.style.display = '';
	}
}


