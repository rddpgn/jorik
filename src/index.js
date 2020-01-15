
    let mobileMenuButton = document.getElementById('mobile-menu-button');
    let mobileMenu = document.getElementById('mobile-menu');
    let mobileMenuBc = document.getElementById('mobile-menu-bc');
    let mobileMenuButtonHide = document.getElementById('mobile-menu-button-hide');
    let quads = document.getElementsByClassName('quad');

    window.onload = () => {
        mobileMenuButton.onclick = () => {
            mobileMenu.classList.toggle('mobile-menu_hidden');
        };
        mobileMenuButtonHide.onclick = () => {
            mobileMenu.classList.toggle('mobile-menu_hidden');
        };
        mobileMenuBc.onclick = () => {
            mobileMenu.classList.toggle('mobile-menu_hidden');
        };
        makeQuads(quads);
    };



    let header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 32) {
            header.classList.add('header_float');
        } else {
            header.classList.remove('header_float');
        }
    });
    
    function resizedw(){
        makeQuads(quads);
    }
    
    let doit;
    window.onresize = function(){
      clearTimeout(doit);
      doit = setTimeout(resizedw, 100);
    };
    
    function makeQuads(elems) {
        for(let elem of elems) {
            elem.style.height = `${elem.offsetWidth}px`;
        }
    };
