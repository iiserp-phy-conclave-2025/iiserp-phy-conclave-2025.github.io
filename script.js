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
// Check if the user has visited before
if (!localStorage.getItem("hasVisited")) {
  // If not, increment the counter
  let visitorCount = parseInt(localStorage.getItem("visitorCount") || "0");
  visitorCount++;
  localStorage.setItem("visitorCount", visitorCount);
  localStorage.setItem("hasVisited", "true");
}

// Display the visitor count
document.getElementById("visitor-counter").textContent = localStorage.getItem("visitorCount") || "--";
