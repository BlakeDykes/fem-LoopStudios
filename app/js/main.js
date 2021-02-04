const burgerIcon = document.querySelector('#burgerIcon');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const creations = document.querySelectorAll('.filter__black');

//Nav
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

//Hover Creations change text to black
creations.forEach(element => {
    element.addEventListener("mouseover", function(){
        const searchText = "t".concat(element.id);
        document.getElementById(searchText).style.color='black';
    });
});

//Mouse Exit for Creations change text to white
creations.forEach(element => {
    element.addEventListener("mouseleave", function(){
        document.getElementById("t".concat(element.id)).style.color='white';
    });
});