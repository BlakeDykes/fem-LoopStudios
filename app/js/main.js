const burgerIcon = document.querySelector('#burgerIcon');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

burgerIcon.addEventListener('click', function(){
    //Close Nav
    if(nav.classList.contains('open')){
        nav.classList.remove('open');
        body.classList.remove('no-scroll');
        nav.classList.add('close');
        console.log("burger got clicked - close");
    } 
    //Open Nav
    else {
        nav.classList.remove('close');
        nav.classList.add('open');
        body.classList.add('no-scroll');
        console.log("burger got clicked - open");
    }

    
});
