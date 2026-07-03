document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var qtyInput = document.getElementById("qtyInput");
  if (qtyInput) {
    document.querySelectorAll(".qty-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var step = parseInt(btn.dataset.step, 10);
        var current = parseInt(qtyInput.value, 10) || 1;
        var next = Math.max(1, current + step);
        qtyInput.value = next;
      });
    });
  }

  var mainImg = document.getElementById("mainMediaImg");
  if (mainImg) {
    document.querySelectorAll(".product-detail__thumb").forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        mainImg.src = thumb.dataset.full;
      });
    });
  }
});
