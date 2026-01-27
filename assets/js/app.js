const navbar=document.querySelector(".navbar");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){  //if scrolling
        navbar.classList.add("scroll-nav"); //when we scroll website, navbar height gets decreased
    }
    else{
        navbar.classList.remove("scroll-nav")
    }
})