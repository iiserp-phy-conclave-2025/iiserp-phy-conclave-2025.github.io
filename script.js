// script.js

document.querySelectorAll("tr").forEach((row) => {
  if (!row.classList.contains("description-row")) {
    row.addEventListener("click", () => {
      let descriptionRow = row.nextElementSibling;

      if (descriptionRow && descriptionRow.classList.contains("description-row")) {
        // Hide all other descriptions
        document.querySelectorAll(".description-row").forEach((descRow) => {
          if (descRow !== descriptionRow) {
            descRow.style.display = "none"; // Hide other descriptions
          }
        });

        // Toggle the clicked row's description
        if (descriptionRow.style.display === "none" || !descriptionRow.style.display) {
          descriptionRow.style.display = "table-row";
        } else {
          descriptionRow.style.display = "none";
        }
      }
    });
  }
});

//Scrolling to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//Footer that appears only when scrolled to the end:
window.addEventListener("scroll", function () {
  let footer = document.getElementById("custom-footer");
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});

//Visitor counter
document.addEventListener("DOMContentLoaded", function () {
  let counterElement = document.getElementById("visitor-counter");

  // Do not count visits if running locally
  if (window.location.hostname === "localhost" || window.location.protocol === "file:") {
    console.log("Editing mode detected, visitor count not updated.");
    return;
  }

  if (counterElement) {
    let visits = JSON.parse(localStorage.getItem("visitHistory")) || [];
    let today = new Date().toDateString();

    // Check if the user has already visited today
    if (!visits.includes(today)) {
      visits.push(today);
      localStorage.setItem("visitHistory", JSON.stringify(visits));
    }

    // Update counter in the footer
    counterElement.textContent = `Visitors: ${visits.length}`;
  }
});

//Testing js:
console.log("scripts.js loaded!");
console.log(localStorage.getItem("visitHistory"));
