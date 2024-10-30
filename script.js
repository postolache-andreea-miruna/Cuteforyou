"use strict";
(function () {
  window.onload = () => {
    const obj = document.querySelector("#gallery");
    const time = 10000;
    function animStart() {
      if (obj.classList.contains("active") == false) {
        obj.classList.add("active");
        setTimeout(() => {
          animEnd();
        }, time);
      }
    }
    function animEnd() {
      obj.classList.remove("active");
      obj.offsetWidth;
    }


    function showHearts() {
      const heartSpan = document.createElement("span");
      heartSpan.classList.add("heart-span");
      heartSpan.innerHTML = "😘";

      // Randomize position
      heartSpan.style.left = `${Math.random() * 100}vw`;
      heartSpan.style.top = `${Math.random() * 100}vh`;

      document.body.appendChild(heartSpan);

      // Remove hearts after animation ends
      setTimeout(() => {
        heartSpan.remove();
      }, 2000); // Adjust time as needed
    }

    // Event listeners
    document.querySelector(".button").addEventListener("click", () => {
      for (let i = 0; i < 10; i++) { // Adjust the number of hearts as needed
        showHearts();
      }
    });
    document.addEventListener("scroll", function () {
      // scroll or scrollend
      animStart();
    });
    window.addEventListener("resize", animStart);
    animStart();
  };
})();
