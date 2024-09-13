
/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById('hamburger');
const navmenu =document.getElementById('navmenu');
const navclose =document.getElementById('navclose');
const nav_link = document.querySelectorAll('.nav_link');

nav_link.forEach(link =>
    link.addEventListener('click', ()=>{
        navmenu.classList.add('hidden');
    })
)

navclose.addEventListener('click', ()=>{
    navmenu.classList.add('hidden');
})
hamburger.addEventListener('click', ()=>{
    navmenu.classList.remove('hidden');
})
/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const food = document.querySelectorAll('.food');
const snack = document.querySelectorAll('.snack');
const beverage = document.querySelectorAll('.beverage');
tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        tabs.forEach(tab =>{
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        const tabval = tab.getAttribute('data-tabs');

        all.forEach(item =>{
            item.style.display='none';
        })

        if (tabval=='food'){
            food.forEach(item =>{
                item.style.display='block';
            })
        }
        else if (tabval=='snack') {

             snack.forEach(item =>{
                item.style.display='block';
            })
        }
        else if (tabval=='beverage') {

             beverage.forEach(item =>{
                item.style.display='block';
            })
        }
        else{
            all.forEach(item =>{
                item.style.display='block';
            })
    
        }


    })
})



/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');

const darkMode = () => {
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-line','ri-sun-line');
    localStorage.setItem('mode','dark');

}
const lightmode = () => {
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-line','ri-moon-line');
    localStorage.setItem('mode','light');

}

if(localStorage.getItem('mode')=='dark'){
   darkMode();
}
else {
    lightmode();
}

themeBtn.addEventListener('click',(e)=>{
    if(localStorage.getItem('mode')=='light'){
        darkMode();
    }
    else {
        lightmode();
    }

})



/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp= ()=>{
    const scrollUpBtn = document.getElementById('scroll-up');
    if(this.scrollY>=250){
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
    }
    else {
        scrollUpBtn.classList.add('-bottom-1/2');
        scrollUpBtn.classList.remove('bottom-4');
    }
}
window.addEventListener('scroll',scrollUp);
/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader= ()=>{
    const header = document.getElementById('header');
    if(this.scrollY >= 50){
        header.classList.add('border-b' , 'border-secondaryColor');
        
    }
    else {
        
        header.classList.remove('border-b' ,'border-secondaryColor');
    }
}
window.addEventListener('scroll',scrollHeader);
/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = ()=>{
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav_link');
    let current = 'home';
    sections.forEach(section =>{

        const sectionTop = section.offsetTop;
        if (this.scrollY >= sectionTop-60) {
            current =section.getAttribute('id');
            
        }
    })
    navLinks.forEach(item =>{
        item.classList.remove('text-secondaryColor');
        if (item.href.includes(current)) {

            item.classList.add('text-secondaryColor');
        }
    })
  
}

window.addEventListener('scroll', activeLink)
/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

