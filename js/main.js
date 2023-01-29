// Hiện sub menu bị ẩn
function activeSubMenu(index)
{
    var active = document.getElementsByClassName('haveSub');
    var haveSub = document.getElementsByClassName('sub-menu');
    var clickout = false;
    if(active[index].classList.contains('no-active'))
    {
        changeSubActive();
        active[index].classList.remove('no-active');
        active[index].classList.add('active');
        haveSub[index].classList.remove('display-none');
    }
    else
    {
        // console.log(clickout);
        active[index].classList.remove('active');
        active[index].classList.add('no-active')
        haveSub[index].classList.add('display-none');
    }
    // console.log(active[index].classList.contains('no-active'));
}

function changeSubActive()
{
    var active = document.getElementsByClassName('haveSub');
    for(var i = 0;i < active.length;i++)
        if(active[i].classList.contains('active'))
            activeSubMenu(i);
}

// Check out side clicked element
var indexHaveSub = -1;  
document.addEventListener('click',(evt) => 
{
    const flyoutEl = document.getElementsByClassName("haveSub");
    let targetEl = evt.target; // clicked element    
    do {
        if(targetEl == flyoutEl[0]) {
        // This is a click inside, does nothing, just return.
            indexHaveSub = 0;
            return;
        }
        if(targetEl == flyoutEl[1]){
            indexHaveSub = 1
            return;
        }
        if(targetEl == flyoutEl[2]){
            indexHaveSub = 2
            return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.      
    if(indexHaveSub >= 0)
    {
        activeSubMenu(indexHaveSub);
        indexHaveSub = -1;
    }
}
);

function mouseOverNav(index){
    let subNav = document.getElementsByClassName('haveSub');
    let megaMenu = document.getElementsByClassName('sub-menu');
    if(subNav[index].classList.contains('no-active'))
    {
        subNav[index].classList.remove('no-active');
        subNav[index].classList.add('active');
        megaMenu[index].classList.remove('display-none');
    }
}

function mouseOutNav(index){
    let subNav = document.getElementsByClassName('haveSub');
    let megaMenu = document.getElementsByClassName('sub-menu');
    if(subNav[index].classList.contains('active'))
    {
        subNav[index].classList.remove('active');
        subNav[index].classList.add('no-active');
        megaMenu[index].classList.add('display-none');
    }
}

function mouseOverMega(index){
    let megaMenu = document.getElementsByClassName('mega-menu');
    let subMega = document.getElementsByClassName('sub-mega');
    if(megaMenu[index].classList.contains('no-active'))
    {
        megaMenu[index].classList.remove('no-active');
        megaMenu[index].classList.add('active');
        subMega[index].classList.remove('display-none');
    }
}

function mouseOutMega(index){
    let megaMenu = document.getElementsByClassName('mega-menu');
    let subMega = document.getElementsByClassName('sub-mega');
    if(megaMenu[index].classList.contains('active'))
    {
        megaMenu[index].classList.remove('active');
        megaMenu[index].classList.add('no-active');
        subMega[index].classList.add('display-none');
    }
}