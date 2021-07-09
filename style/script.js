
//Event Listeners
document.addEventListener('DOMContentLoaded', pageLoaded);


const tags = document.getElementsByClassName("tag");
const intro = document.getElementById("intro");
const continueBtn = document.getElementById("continueButton");
const underCardHolder = document.getElementById("under-card-holder");
const pullMe = document.getElementById("pull-me");
const pullMeMobile = document.getElementById("pull-me-mobile");


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
  let f = document.getElementById("features-" + x);
  let ar = document.getElementById("arrow-" + x);
  ar.remove();
  let transitionCard = f.parentNode.parentNode;
  transitionCard.classList.remove("hide-mobile");
  transitionCard.offsetHeight;
  f.parentNode.classList.add("visible-card", "six");
  
  f.classList.add("visible");
  if (x == 1) {
    pullMe.remove();
    pullMeMobile.remove();
  };
} 
