const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInMiddle");
            document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
        }

    })
})

const boxes = document.querySelectorAll('.box');
 
window.addEventListener('scroll', fadeIn);
 
function fadeIn() {
  boxes.forEach((box) => {
    //get viewport-point where the transition should happen
    let distanceInView =
      box.getBoundingClientRect().top - window.innerHeight + 20;
 
    if (distanceInView < 0) {
      box.classList.add('inView');
    } else {
      box.classList.remove('inView');
    }
  });
}
fadeIn();
