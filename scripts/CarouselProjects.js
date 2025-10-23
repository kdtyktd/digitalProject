const picDiv1 = document.querySelector('#picDiv1');
const picDiv2 = document.querySelector('#picDiv2');
const picDiv3 = document.querySelector('#picDiv3');
const arrDivPic = [picDiv1, picDiv2, picDiv3];
const carCounter = document.querySelector('#carCounter');
let curNumPic = 0;

const picsArr = [
    ["pictures/image 32.png", "pictures/image 30.png", "pictures/image 33.png"],
    ["pictures/image 32.png", "pictures/image 30.png", "pictures/image 33.png"],
    ["pictures/image 32.png", "pictures/image 30.png", "pictures/image 33.png"]
];



const carBtnL = document.querySelector('#carBtnL');
const carBtnR = document.querySelector('#carBtnR');

function slide(isToRight, curNumPic) {
    carBtnL.disabled = true;
    carBtnR.disabled = true;

    arrDivPic.forEach((el, i) => {
        const picMid = el.querySelector('#picMid');
        const picSides = el.querySelector('#picSide');
        picSides.src = picsArr[i][curNumPic];

        const midAnim = isToRight ? 'mid-slide-to-left' : 'mid-slide-to-right';
        const sideAnim = isToRight ? 'side-slide-to-left' : 'side-slide-to-right';
        picMid.classList.remove("d-none");
        picMid.classList.add(midAnim);
        picSides.classList.add(sideAnim);

        picMid.addEventListener('animationend', () => {
            picMid.classList.remove(midAnim);
            picSides.classList.remove(sideAnim);
            picMid.src = picsArr[i][curNumPic];
            picMid.classList.add("d-none");
            carBtnL.disabled = false;
            carBtnR.disabled = false;
        }, { once: true });
    });
}

const textDivArr = Array.from(document.getElementsByClassName("animText"));
const textArr = [[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam egestas ex non vulputate consequat. 
    Integer mollis condimentum quam in scelerisque.`,
    `Etiam mollis libero sit amet nisi vulputate posuere. 
    Sed ut finibus ipsum. Nulla convallis, ipsum vitae consectetur condimentum, 
    augue justo volutpat eros, et lobortis ante tortor ac eros. `,
    `Vestibulum id justo sed justo tempus pretium. 
    Morbi nec lorem sed lectus fermentum aliquet at et tellus. 
    Curabitur pellentesque feugiat molestie.`],
[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam egestas ex non vulputate consequat. 
    Integer mollis condimentum quam in scelerisque.`,
    `Etiam mollis libero sit amet nisi vulputate posuere. 
    Sed ut finibus ipsum. Nulla convallis, ipsum vitae consectetur condimentum, 
    augue justo volutpat eros, et lobortis ante tortor ac eros. `,
    `Vestibulum id justo sed justo tempus pretium. 
    Morbi nec lorem sed lectus fermentum aliquet at et tellus. 
    Curabitur pellentesque feugiat molestie.`],
[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam egestas ex non vulputate consequat. 
    Integer mollis condimentum quam in scelerisque.`,
    `Etiam mollis libero sit amet nisi vulputate posuere. 
    Sed ut finibus ipsum. Nulla convallis, ipsum vitae consectetur condimentum, 
    augue justo volutpat eros, et lobortis ante tortor ac eros. `,
    `Vestibulum id justo sed justo tempus pretium. 
    Morbi nec lorem sed lectus fermentum aliquet at et tellus. 
    Curabitur pellentesque feugiat molestie.`]]


function fade() {
    textDivArr.forEach((el, i) => {
        el.classList.add("fade-in");
        el.addEventListener('animationend', () => {
            el.getElementsByTagName('p')[0].innerHTML = textArr[i][curNumPic];
            el.classList.remove("fade-in");
            el.classList.add("fade-out");
            el.addEventListener('animationend', () => { el.classList.remove("fade-out"); }, { once: true })
        }, { once: true })

    });
}

carBtnL.addEventListener("click", () => {
    if (curNumPic === 0) return;
    curNumPic -= 1;
    carCounter.innerHTML = curNumPic + 1;
    slide(false, curNumPic);
    fade();
});

carBtnR.addEventListener("click", () => {
    if (curNumPic + 1 === picsArr[0].length) return;
    curNumPic += 1;
    carCounter.innerHTML = curNumPic + 1;
    slide(true, curNumPic);
    fade();
});

Array.from(document.getElementsByClassName("view-btn")).forEach((el) => {
    el.addEventListener("click", () => {
        window.location.href = "aboutProject.html";
    });
});