const input = document.getElementById('foo');
const buttonLess = document.getElementById('button-less');

const lessButton = () => {
	if(Number(input.value) > 1) {
		input.value = Number(input.value) - 1;
		buttonLess.className = 'button-form';
	} else {
		buttonLess.className = 'button-form disable';
	}
}

const moreButton = () => {
	input.value = Number(input.value) + 1;
	buttonLess.className = 'button-form';
}

const bigPhoto = document.getElementById('big-photo');
const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');

const displayBigPhoto = (photo, index) => {
	bigPhoto.src = photo
	images[index].className = 'img-active'
	for (var i = 0; i < images.length; i++) {
		if ( i !== index ) {
			images[i].className = ''
		}
	}
}
