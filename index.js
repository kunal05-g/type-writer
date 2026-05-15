const words = ["Developer", "Designer", "Creator"];
let wordIndex = 0;
let charIndex = 0;

const typewriter = document.getElementById("typewriter");

function typeEffect() {

  if(charIndex < words[wordIndex].length){

    typewriter.textContent += words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(eraseEffect, 1000);

  }
}

function eraseEffect(){

  if(charIndex > 0){

    typewriter.textContent = words[wordIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  } else {

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

    setTimeout(typeEffect, 500);
  }
}

typeEffect();