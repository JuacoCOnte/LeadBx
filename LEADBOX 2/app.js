
// NavBar
(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();

// var carouselWidth = $('.carousel-inner')[0].scrollWidth;
// var cardWidth = $('.carousel-item').width();
// var scrollPosition = 0;

// $('.carousel-control-next').on ('click', function(){
//     scrollPosition = scrollPosition + cardWidth;
//     $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
// });

$(document).ready(function(){
    $('.carousel').carousel({
        interval: 5000 // Change the interval time in milliseconds
    })
});

 
$(document).ready(function(){
   $('.carousel').carousel({
      interval: 5000
   })
});