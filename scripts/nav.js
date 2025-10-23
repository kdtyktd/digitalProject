const mediaQueryList = window.matchMedia("(max-width: 600px)");
const navMenu = document.querySelector("#menubtn");
const navContent = document.querySelector(".nav-link-ul");
if (mediaQueryList.matches) {
    navMenu.classList.remove('d-none');
    navContent.classList.add("d-none");
    let isNavOpen = false;
    navMenu.addEventListener("click", () => {
        if (!isNavOpen) {
            navContent.classList.remove("d-none");
            isNavOpen = true;
        }
        else {
            navContent.classList.add("d-none");
            isNavOpen = false;
        }

    })
}