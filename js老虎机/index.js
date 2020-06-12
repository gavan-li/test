var getDom = function(elem) {
	return document.querySelector(elem)
}

var step = -100;
var firstLi = getDom('.first');
var secondLi = getDom('.second');
var thirdLi = getDom('.third');
var firstStop = getDom('#btn1');
var secondStop = getDom('#btn2');
var thirdStop = getDom('#btn3');
var startBtn = getDom('#start');
var product = [
	{id: 0, name: 'product01'},
	{id: 1, name: 'product02'},
	{id: 2, name: 'product03'},
	{id: 3, name: 'product04'},
	{id: 4, name: 'product05'},
	{id: 5, name: 'product06'}
]
var len = product.length;

// 初始化计算list高度
addKeyFrames(step*len+'px')

startBtn.addEventListener('click', function() {
	firstLi.style.animationPlayState = 'running'
	secondLi.style.animationPlayState = 'running'
	thirdLi.style.animationPlayState = 'running'
})

firstStop.addEventListener('click', function() {
	var arr = getPrizeIndex(firstLi);
	console.log(arr)
	firstLi.style.animationPlayState = 'paused'
	createHtml(arr)
	// $result.innerHTML = ulHtm
	// $list.setAttribute('style', 'animation: none; transform: translateY('+moveY+'px)')
})

secondStop.addEventListener('click', function() {
	secondLi.style.animationPlayState = 'paused'
})

thirdStop.addEventListener('click', function() {
	thirdLi.style.animationPlayState = 'paused'
})

function createHtml(arr) {
	var productArr = []
	arr.forEach(item => {
		productArr.push(product[item])
	})
}

// 获得中奖奖品ID
function getPrizeIndex(elem) {
	let tranxY = document.defaultView.getComputedStyle(elem, null).transform.match(/\-?[0-9]+\.?[0-9]*/g)[5]
	tranxY = parseInt(tranxY)
	console.log(tranxY)
	const si = makePrizeIndex(tranxY);
	const mi = si + 1;
	const ei = mi + 1;
	return [si, mi, ei].map(item => {
		if (item >= len) {
			item -= 6
		}
		return item
	})
}

// 获取list滚动长度
function makePrizeIndex(tranxY) {
	const yu = tranxY%step;
	const max = tranxY - yu + step
	const min = tranxY - yu
	let result = Math.abs(yu) > Math.abs(step/2) ? max : min
	// console.log(yu, min, max, result)
	return Math.abs(result/step);
}

// 设置keyframes属性
function addKeyFrames(value){
    var style = document.createElement('style');
    style.type = 'text/css';
    var keyFrames = '\
    @keyframes rowup {\
        0% {}\
        100% {transform: translate3d(0, VALUE, 0);}\
    }';
    style.innerHTML = keyFrames.replace(/VALUE/g, value);
    document.getElementsByTagName('head')[0].appendChild(style);
}

