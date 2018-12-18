const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const imageArr = ["1", "2", "3"];
let currentImage = 0;



const prevImg = () => {
    if(currentImage === 0){
        currentImage = imageArr.length - 1;
    }
    else{
        currentImage--;
    }
    updateImage();
}

const nextImg = () => {
    if(currentImage === imageArr.length - 1){
        currentImage = 0;
    }
    else {
        currentImage++;
    }
    updateImage();
}

prevButton.addEventListener('click', prevImg);
nextButton.addEventListener('click', nextImg);

const updateImage = () => {
    const image = document.getElementById('image');
    image.src = `img/${imageArr[currentImage]}.png`;
}