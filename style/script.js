
//Event Listeners
document.addEventListener('DOMContentLoaded', pageLoaded);


const tags = document.getElementsByClassName("tag");
const intro = document.getElementById("intro");
const continueBtn = document.getElementById("continueButton");
const underCardHolder = document.getElementById("under-card-holder");
const pullMe = document.getElementById("pull-me");
const arrowRight = document.getElementById("arrow-right");


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
  // Testing 
  console.log(arrow.getAttribute("data-id"));

  let x = arrow.getAttribute("data-id");
  let f = document.getElementById("features-" + x)
  f.parentNode.classList.add("visible-card", "six");
  f.parentNode.parentNode.classList.remove("hide-mobile");
  f.classList.add("visible");
  if (x == 1) {
    pullMe.remove();
  };
} 
