var slider = document.getElementById('font-size');
const texttt = document.querySelector('h1');
const texts = document.querySelector('.texts');
const spn = document.querySelector('button');
const body = document.querySelector('body');

slider.addEventListener('input', function() {
	var size = slider.value;
	texttt.style.fontSize = size + 'px';
	texts.style.fontSize = size + 'px';
});
spn.addEventListener('click', function() {
	body.classList.toggle('hiden');
});
