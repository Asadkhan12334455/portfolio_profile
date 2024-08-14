// If you want to update content dynamically, here's a simple example
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("home-content").textContent =
      "Here’s something new!";
  }, 5000);
});
function changePage(url) {
  window.open(url, "_blank");
}
document.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".navbar a");

  sections.forEach((section) => {
    let top = section.offsetTop;
    let height = section.clientHeight;
    let id = section.getAttribute("id");

    if (
      window.scrollY >= top - height / 3 &&
      window.scrollY < top + height - height / 3
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
});

function adjustFontSize() {
  const width = window.innerWidth;
  if (width < 768) {
    document.body.style.fontSize = "14px"; // Smaller font size for mobile
  } else {
    document.body.style.fontSize = "16px"; // Default font size for larger screens
  }
}

// Run function on page load and window resize
window.addEventListener("load", adjustFontSize);
window.addEventListener("resize", adjustFontSize);
