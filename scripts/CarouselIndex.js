const arrPicSrc = ["pictures/Rectangle 6.png", "pictures/Rectangle 9.png", "pictures/pexels-mantasink-1106476.jpg"];
const arrPrNames = ["Lorum", "Ipsem", "Project"];
const curPic = document.querySelector('#curPic');
const MidSlidePic = document.querySelector('#MidSlidePic');
const SideSlidePic = document.querySelector('#SideSlidePic');
const carBtnL = document.querySelector('#carBtnL');
const carBtnR = document.querySelector('#carBtnR');
const carCounter = document.querySelector('#carCounter');
const carNameB = document.querySelector('#carNameB');
const carNameF = document.querySelector('#carNameF');
let curNumPic = 0;
let arrlen = arrPicSrc.length;

function fade() {
    carNameB.innerHTML = arrPrNames[curNumPic];
    carNameF.classList.add("fade-in");
    carNameB.classList.add("fade-out");
    carNameB.addEventListener('animationend', () => {
        carNameF.textContent = carNameB.textContent;
        carNameF.classList.remove("fade-in");
        carNameB.classList.remove("fade-out");
        carNameF.style.opacity = 1;
        carNameB.style.opacity = 0;
    }, { once: true })
}

function slide(isToRight) {
    carBtnL.disabled = true;
    carBtnR.disabled = true;

    SideSlidePic.src = arrPicSrc[curNumPic];
    MidSlidePic.classList.remove("d-none");
    const midAnim = isToRight ? 'mid-slide-to-left' : 'mid-slide-to-right';
    const sideAnim = isToRight ? 'side-slide-to-left' : 'side-slide-to-right';

    MidSlidePic.classList.add(midAnim);
    SideSlidePic.classList.add(sideAnim);

    MidSlidePic.addEventListener('animationend', () => {
        MidSlidePic.classList.remove(midAnim);
        SideSlidePic.classList.remove(sideAnim);
        MidSlidePic.src = arrPicSrc[curNumPic];
        MidSlidePic.classList.add("d-none");
        carBtnL.disabled = false;
        carBtnR.disabled = false;
    }, { once: true });
}


carBtnL.addEventListener("click", () => {
    if (curNumPic === 0) {
        return;
    }
    curNumPic -= 1;
    carCounter.innerHTML = curNumPic + 1;
    slide(false);
    fade();
});
carBtnR.addEventListener("click", () => {
    if (curNumPic + 1 === arrlen) {
        return;
    }
    curNumPic += 1;
    carCounter.innerHTML = curNumPic + 1;
    slide(true);
    fade();
});