const mediaQueryList = window.matchMedia("(max-width: 600px)");
const navMenu = document.querySelector("#menubtn");
const navContent = document.querySelector(".nav-link-ul");
let isNavOpen = false;
function showNav() {
    if (!isNavOpen) {
        navContent.classList.remove("d-none");
        isNavOpen = true;
    }
    else {
        navContent.classList.add("d-none");
        isNavOpen = false;
    }

}

if (mediaQueryList.matches) {
    navMenu.classList.remove('d-none');
    navContent.classList.add("d-none");
    navMenu.addEventListener("click", showNav);
}
mediaQueryList.onchange = (e) => {
    if (!(e.matches)) {
        navContent.classList.remove("d-none");
        navMenu.classList.add('d-none');
        navMenu.removeEventListener("click", showNav);
    } else {
        navContent.classList.add("d-none");
        navMenu.classList.remove('d-none');
        navMenu.addEventListener("click", showNav);
    }
};