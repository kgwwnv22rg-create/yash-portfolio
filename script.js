// Smooth fade animation on scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});


// Navbar shadow while scrolling

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){
    header.style.background="rgba(0,0,0,0.8)";
}else{
    header.style.background="rgba(0,0,0,0.4)";
}

});


// Gallery Image Click Zoom

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,.9)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";
popup.style.zIndex="9999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";

popup.appendChild(image);

popup.addEventListener("click",()=>{
popup.remove();
});

document.body.appendChild(popup);

});

});

const words = [
    "Fashion Model",
    "Commercial Model",
    "Lifestyle Model",
    "Content Creator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex > current.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const videos = document.querySelectorAll(".reels video");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.play();
        }else{
            entry.target.pause();
        }
    });
},{threshold:0.7});

videos.forEach(video=>observer.observe(video));