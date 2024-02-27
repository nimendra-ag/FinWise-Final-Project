window.addEventListener("scroll", function() {
    var button = document.getElementById("scrollToTopButton");
    if (window.pageYOffset > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
  
  document.getElementById("scrollToTopButton").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  