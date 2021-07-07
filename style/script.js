
//Event Listeners
document.addEventListener('DOMContentLoaded', pageLoaded);


const tags = document.getElementsByClassName("tag");
const intro = document.getElementById("intro");
const continueBtn = document.getElementById("continueButton");


function pageLoaded() {  
  intro.classList.add("visible");
  document.addEventListener('scroll', fadeScroll);
  continueBtn.addEventListener('click', clickButton);
}

function fadeScroll(){
  for (let i = 0; i < tags.length; i++) {
    let tag = tags[i]
    let rect = tag.getBoundingClientRect();
    if (rect.top <= window.pageYOffset - 50) {
      tag.classList.add("visible");
      continueBtn.classList.add("invisible");
    } 
  }
}

function clickButton(){
  continueBtn.classList.add("invisible");
}

function clickArrow(arrow) {
  console.log(arrow.getAttribute("data-id"));
  let x = arrow.getAttribute("data-id");
  document.getElementById("features-" + x).classList.add("visible");
}