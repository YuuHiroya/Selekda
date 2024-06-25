var i = 0;
var images = [];
var time = 3000;

//image list
images[0] = 'IMAGES/assets (1).jpeg';
images[1] = 'IMAGES/assets (1).jpg';
images[2] = 'IMAGES/assets (2).jpeg';
images[3] = 'IMAGES/assets (2).jpg';
images[4] = 'IMAGES/assets (3).jpg';
images[5] = 'IMAGES/assets (4).png';
images[6] = 'IMAGES/assets (6).jpg';
images[6] = 'IMAGES/assets (7).jpg';
images[6] = 'IMAGES/assets (9).jpg';
images[6] = 'IMAGES/assets (10).jpg';
images[6] = 'IMAGES/assets (12).jpg';

function changeImg() {
    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0
    }

    setTimeout("changeImg()", 5000);
}

window.onload = changeImg;

const slideshow = document.querySelector('.img-slide');

slideshow.addEventListener('click', () => {
    slideshow.classList.toggle('active');
})
