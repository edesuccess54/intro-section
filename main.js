let status = false;
let status2 = false;

// mobile status 
let status3 = false;
let status4 = false;

const arrowDown = document.querySelectorAll('.arrow-down');
const mobileArrowDown = document.querySelectorAll('.arrow-down');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const bgoverlay = document.querySelector('.bgoverlay');
const mobileSubMenu = document.querySelector('.nav-mobile');

// open the mobile menu
function openMobileNav(e) {
    const navMobile = document.querySelector('.nav-mobile');
    const bgoverlay = document.querySelector('.bgoverlay');
    if(e.target.classList.contains('open')) {
        bgoverlay.classList.add('active');
        navMobile.style.marginRight = '0px'; 
    }
}

// closes the mobile menu 
function closeMobileNav(e) {
    const navMobile = document.querySelector('.nav-mobile');
    const bgoverlay = document.querySelector('.bgoverlay');
    bgoverlay.classList.remove('active');
    navMobile.style.marginRight = '-350px';
}


hamburger.addEventListener('click', openMobileNav);
closeBtn.addEventListener('click', closeMobileNav);
bgoverlay.addEventListener('click', closeMobileNav);

// mobile sub-menu drop down
function subMenuDropDown(e) {
    const features = document.querySelector('.featured');
    const company = document.querySelector('.companied');

    if(e.target.classList.contains('feature')) {
        if(status3 == false) {

            // if(status4 == true) {
            //     company.style.display = 'none';
            //     status4 = false;
            //  }

            e.target.setAttribute('src', 'images/icon-arrow-up.svg');
            features.style.display = 'block';
             status3 = true; 
        } 
        else if(status3 == true) {
            e.target.setAttribute('src', 'images/icon-arrow-down.svg');
            features.style.display = 'none';
             status3 = false;
         }  
    }

    if(e.target.classList.contains('companys')) {

        if(status4 == false) {

            // if(status3 == true) {
            //     features.style.display = 'none';
            //      status3 = false;
            //  }
            
            e.target.setAttribute('src', 'images/icon-arrow-up.svg');
            company.style.display = 'block';
            status4= true;
        } 
        else if(status4 == true) {
            e.target.setAttribute('src', 'images/icon-arrow-down.svg');
            company.style.display = 'none';
            status4 = false;
         }

    }
}


mobileArrowDown.forEach((mobileArrowDown) => {
    mobileArrowDown.addEventListener('click', subMenuDropDown);
})




const toggleNav = (e) => {
    const features = document.querySelector('.features');
    const company = document.querySelector('.company');
    if(e.target.classList.contains('feature')) {
        if(status == false) {

            if(status2 == true) {
                company.style.display = 'none';
                status2 = false;
             }

            features.style.display = 'block';
             status = true;
        } 
        else if(status == true) {
            features.style.display = 'none';
             status = false;
         }       
    } else if(e.target.classList.contains('companys')) {
        if(status2 == false) {

            if(status == true) {
                features.style.display = 'none';
                 status = false;
             }
            
            company.style.display = 'block';
            status2 = true;
        } 
        else if(status2 == true) {
            company.style.display = 'none';
            status2 = false;
         }       
    }

}

arrowDown.forEach((arrowDown) => {
    arrowDown.addEventListener('click', toggleNav);
})

 
