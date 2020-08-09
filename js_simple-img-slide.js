let i = 0;
let images = [];
let time = 3000;

images[0] = 'photos/Elon_Musk_Royal_Society.jpg';
images[1] = 'photos/elon-musk-grimes.jpg';
images[2] = 'photos/getty_1130598318_411195.jpg';

function changeImg() {
	document.slides.src = images[i];

	if(i < images.length -1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout(changeImg, time);
}

window.onload = changeImg();