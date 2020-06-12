var getDom = function(elem) {
	return document.querySelector(elem)
}

var step = -100;
var setimer = null;
var $list = getDom('.list');
var $start = getDom('#start');
var $stop = getDom('#stop');
var time = 0;

/*$list.setAttribute('style', 'transform: translateY(-100px); transition-duration: 1s')
$list.addEventListener("transitionend", () => {
	$list.setAttribute('style', 'transform: translateY(0)')
});*/
$start.addEventListener('click', function() {
	scroll2()
	setInterval(function() {
		scroll2()
	}, 1000)
})

function scroll2() {
	$list.setAttribute('style', 'transform: translateY(-100px); transition-duration: 1s')
}

$list.addEventListener("transitionend", function(e) {
	console.log(123)
	var $first = this.children[0]
	this.appendChild($first)
	this.setAttribute('style', 'transform: translateY(0); transition: none')
	// this.ontransitionend = null
})

/*function scroll() {
	setimer = setInterval(() => {
		time += 1;
		if (time == 6) {
			$list.setAttribute('style', 'transition: none')
			// clearInterval(setimer);
			time = 0
		}
		$list.setAttribute('style', 'transform: translateY('+ -100*time +'px); transition-duration: 500ms')
	}, 500)
}*/

