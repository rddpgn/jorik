{
    let mobileMenuButton = document.getElementById('mobile-menu-button');
    let mobileMenu = document.getElementById('mobile-menu');
    let mobileMenuBc = document.getElementById('mobile-menu-bc');
    let mobileMenuButtonHide = document.getElementById('mobile-menu-button-hide');

    window.onload = () => {
        mobileMenuButton.onclick = () => {
            mobileMenu.classList.toggle('mobile-menu_hidden');
        };
        mobileMenuButtonHide.onclick = () => {
            mobileMenu.classList.toggle('mobile-menu_hidden');
        };
        mobileMenuBc.onclick = () => {
            mobileMenu.classList.toggle('mobile-menu_hidden');
        } 
    };
};

let header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 32) {
        header.classList.add('header_float');
    } else {
        header.classList.remove('header_float');
    }
});