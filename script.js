document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
});
// Открытие модального окна при нажатии на кнопку "Записаться"
document.getElementById("bookBtn").onclick = function() {
  document.getElementById("bookingModal").style.display = "block";
};

// Закрытие модального окна
document.getElementsByClassName("close-btn")[0].onclick = function() {
  document.getElementById("bookingModal").style.display = "none";
};

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  if (event.target === document.getElementById("bookingModal")) {
    document.getElementById("bookingModal").style.display = "none";
  }
};
