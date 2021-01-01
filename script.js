(function() {
    let header = document.querySelector('.header__menu');
    window.onscroll = () => {
        if(window.pageYOffset > 50){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    };
}());