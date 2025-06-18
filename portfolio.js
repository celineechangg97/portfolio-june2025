const correctPassword = "chang123";

    function checkPassword() {
      const passwordInput = document.getElementById('password').value;
      const errorMessage = document.getElementById('error-message');
      const container = document.getElementById('password-container');

      if (passwordInput === correctPassword) {
        // Redirect to the protected page
        window.location.href = "index.html";
      } else {
        // Add shake animation
        errorMessage.textContent = "Incorrect password. Please try again.";
        container.classList.add('shake');

        // Remove the shake class after the animation duration
        setTimeout(() => {
          container.classList.remove('shake');
        }, 500); // Match animation-duration in CSS
      }
    }




    window.addEventListener("load", function(){
      //select all elements you want to animate
      const elements = document.querySelectorAll(".fade-in");
   
      //add the visible class to each element to trigger the css transition
      elements.forEach((element, index) => {
         this.setTimeout(() => {
            element.classList.add("visible");
         }, index*100) // delay for staggered effect
      });
   });
   
   
   window.addEventListener("load", function() {
      const letters = document.querySelectorAll(".name-letter");
      letters.forEach(letter => {
        letter.classList.add("visible");
      });
    });
    
   
    document.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scrollY', window.scrollY);
   });


   // Shrink post-it frame on scroll
window.addEventListener('scroll', () => {
  const postIt = document.querySelector('.post-it-frame');
  if (window.scrollY > 100) {
    postIt.classList.add('shrink');
  } else {
    postIt.classList.remove('shrink');
  }
});
