const srcArr = [["pictures/Rectangle 23.png", "pictures/Rectangle 24.png",
    "pictures/Rectangle 25.png", "pictures/Rectangle 27.png",
    "pictures/Rectangle 26.png", "pictures/Rectangle 27.png",
    "pictures/Rectangle 29.png", "pictures/Rectangle 28.png",
    "pictures/Rectangle 23.png", "pictures/Rectangle 30.png"],
["pictures/Rectangle 28.png",
    "pictures/Rectangle 30.png", "pictures/Rectangle 27.png",
    "pictures/Rectangle 29.png", "pictures/Rectangle 25.png",
    "pictures/Rectangle 26.png", "pictures/Rectangle 23.png",
    "pictures/Rectangle 30.png", "pictures/Rectangle 25.png", "pictures/Rectangle 24.png",
]]

const carBtnL = document.querySelector('#carBtnL');
const carBtnR = document.querySelector('#carBtnR');
const carCounter = document.querySelector('#carCounter');
let curPics = 0;
const arrlen = srcArr.length;
const arrImg = Array.from(document.querySelector('#divGal').getElementsByTagName('img'));

function changePics(curPics) {
    for (let i = 0; i < arrImg.length; i++) {
        arrImg[i].src = srcArr[curPics][i];
    }
}



carBtnL.addEventListener("click", () => {
    if (curPics === 0) {
        return;
    }
    curPics -= 1;
    carCounter.innerHTML = curPics + 1;
    changePics(curPics);

});
carBtnR.addEventListener("click", () => {
    if (curPics + 1 === arrlen) {
        return;
    }
    curPics += 1;
    carCounter.innerHTML = curPics + 1;
    changePics(curPics);

});

