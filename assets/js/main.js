(function () {
  // Function to set the active tab based on the stored information in localStorage
  

  //===== mobile-menu-btn
  let navbarToggler = document.querySelector(".mobile-menu-btn");
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  /**
   * Back to top button
   */
  var backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      backToTopBtn.classList.add("active");
    } else {
      backToTopBtn.classList.remove("active");
    }
  });

  /*Initiate Gallery Lightbox*/
  const galelryLightbox = GLightbox({
    selector: ".galelry-lightbox",
  });
})();
