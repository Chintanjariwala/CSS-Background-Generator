var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
}

function randomBackground() {

	body.style.background = 
	"linear-gradient(to right," 
	+ getRandomColor()
	+ ", " 
	+ getRandomColor() 
	+ ")";
	
	css.textContent = body.style.background + ";"
}

function setGradient(){
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomBackground);
