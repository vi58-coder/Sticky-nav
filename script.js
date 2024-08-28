const navEl = document.querySelector(".navbar");

const bottomEl = document.querySelector(".bottom-container");

console.log(navEl.offsetHeight);

console.log(bottomEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomEl.offsetTop - navEl.offsetHeight - 50){
        navEl.classList.add("active")
    }else{
        navEl.classList.remove("active")
    }
});