function setStep(callback) {
	
}

function rotateFn(deg) {
	var outer = document.querySelector("#outer");
	outer.style.webkitTransform = 'rotate(' + deg + 'deg)';
}

document.querySelector("#inner").onclick = function() {
	setStep(rotateFn);
}