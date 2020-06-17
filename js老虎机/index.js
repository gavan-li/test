var getDom = function(elem) {
	return document.querySelector(elem)
}

var step = -100;
var firstLi = getDom('.luck-list.first');
var secondLi = getDom('.luck-list.second');
var thirdLi = getDom('.luck-list.third');

var firstExLi = getDom('.luck-exist.first');
var secondExLi = getDom('.luck-exist.second');
var thirdExLi = getDom('.luck-exist.third');

var firstStop = getDom('#btn1');
var secondStop = getDom('#btn2');
var thirdStop = getDom('#btn3');

var startBtn = getDom('#start');
var resetBtn = getDom('#reset');
var product = [
	{id: 0, name: 'prod01'},
	{id: 1, name: 'prod02'},
	{id: 2, name: 'prod03'},
	{id: 3, name: 'prod04'},
	{id: 4, name: 'prod05'},
	{id: 5, name: 'prod06'}
]
var len = product.length;
var flags = [false, false, false];
var count = 0;

// 初始化计算list高度
// addKeyFrames(step*len+'px')

startBtn.addEventListener('click', function() {
	if (count > 0) return
	flags = [true, true, true];

	firstLi.style.animationName = 'rowup'
	secondLi.style.animationName = 'rowup'
	thirdLi.style.animationName = 'rowup'
})

resetBtn.addEventListener('click', function() {
	if (count < 3) return
	count = 0;
	flags = [false, false, false];

	firstLi.style.display = 'block';
	secondLi.style.display = 'block';
	thirdLi.style.display = 'block';
	firstExLi.style.display = 'none';
	secondExLi.style.display = 'none';
	thirdExLi.style.display = 'none';
})

firstStop.addEventListener('click', function() {
	// if (!flags[0]) return;
	// flags[0] = false;
	// count++;

	var arr = getPrizeIndex(firstLi);
	firstLi.style.animationPlayState = 'paused'
	// firstLi.setAttribute('style', 'display: none; animation-name: none;')
	// firstExLi.innerHTML = createHtml(arr);
	// firstExLi.style.display = 'block';
})

secondStop.addEventListener('click', function() {
	if (!flags[1]) return;
	flags[1] = false;
	count++;

	var arr = getPrizeIndex(secondLi);
	secondLi.setAttribute('style', 'display: none; animation-name: none;')
	secondExLi.innerHTML = createHtml(arr);
	secondExLi.style.display = 'block';
})

thirdStop.addEventListener('click', function() {
	if (!flags[2]) return;
	flags[2] = false;
	count++;

	var arr = getPrizeIndex(thirdLi);
	thirdLi.setAttribute('style', 'display: none; animation-name: none;')
	thirdExLi.innerHTML = createHtml(arr);
	thirdExLi.style.display = 'block';
})

function createHtml(arr) {
	var productHtml = ''
	arr.forEach(item => {
		productHtml += '<li>'+product[item].name+'</li>'
	})
	return productHtml
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

