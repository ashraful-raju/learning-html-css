(function(){

    const menu = document.querySelector('.main-menu');

    const currentLink = window.location.href;

    menu.querySelectorAll('a').forEach(link=>{
        if( currentLink == link.href ){
            link.parentElement.classList.add('active')
        }else{
            link.parentElement.classList.remove('active')
        }

        link.addEventListener('click', ()=>{
            menu.querySelectorAll('a').forEach(linkItem => linkItem.parentElement.classList.remove('active'));

            link.parentElement.classList.add('active')

        })
    })




})();