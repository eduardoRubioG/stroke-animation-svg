// A potential function to animate the whole thing instead of doing everything by hand 
document.addEventListener('DOMContentLoaded', () => {
  function animateSgv (id, delay, delayIncrement, speed){
      const logo = document.getElementById(id);
      const logoPaths = document.querySelectorAll(`#${id} path`);
      delay = delay;
      for(let i = 0; i < logoPaths.length;i++){
          logoPaths[i].style.strokeDasharray  = logoPaths[i].getTotalLength();
          logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
          logoPaths[i].style.animation = `line-anim ${speed}s ease forwards ${delay}s`;
          delay+=delayIncrement;
          console.log(delay);
      }
      logo.style.animation = `fill 1.8s ease forwards ${delay}s`;
  }
// Set the id of SVG, delay time in seconds to start animation, delay between each animation, how fast the animation goes
animateSgv('hero-text', 0, 0.1, 2);
animateSgv('hero-rose-logo', 0, 2.7,10); 
}, false);
