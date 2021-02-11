// Este es la logica de FizzBuzz
// for (var i = 1; i < 101; i++) {
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		console.log("FizzBuzz");
// 	} else if (i % 3 == 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 == 0) {
// 		console.log("Buzz");
// 	} else console.log(i);
// }

function refreshPage() {
	window.location.reload();
}

// Funcion para hacer una solicitud de input mediante un prompt

function promptForNumber() {
	do {
		var selection;
		selection = window.prompt("Ingresa una cantidad por analizar", "");
		if (selection == null) {
			return;
		}
		parseInt(selection);
	} while (isNaN(selection) || selection <= 0);
	checkNumber(selection);
}

// The innerText property of the HTMLElement interface
// represents the "rendered" text content of a node and
// its descendants. As a getter, it approximates the text
// the user would get if they highlighted the contents
// of the element with the cursor and then copied it to
// the clipboard.

// Note: innerText is easily confused with Node.textContent,
// but there are important differences between the two.
// Basically, innerText is aware of the rendered
// appearance of text, while textContent is not.

function checkNumber(num) {
	for (let i = 1; i <= num; i++) {
		// Se crea una nueva etiqueta <li></li>
		let element = document.createElement("li");
		element.innerText = "";
		if (i % 3 === 0) {
			element.innerText += "Fizz";
			element.className = "fb";
		}
		if (i % 5 === 0) {
			element.innerText += "Buzz";
			element.className = "fb";
		}
		if (i % 3 === 0 && i % 5 === 0) {
			element.innerText = "FizzBuzz";
			element.className = "fizzB";
		}
		if (element.innerText === "") {
			element.innerText = i;
		}
		document.getElementById("currentP").appendChild(element);
	}
}
