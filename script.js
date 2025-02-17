// script.js

// Decsription pops up in the table on click:
document.querySelectorAll("tr").forEach((row) => {
  if (!row.classList.contains("description-row")) {
    // Attach a click event to non-description rows (main rows)
    row.addEventListener("click", () => {
      // Find the corresponding description row (next sibling)
      let descriptionRow = row.nextElementSibling;

      // If the description row is not already shown, toggle it
      if (descriptionRow && descriptionRow.classList.contains("description-row")) {
        // Hide any currently visible description row
        document.querySelectorAll(".description-row").forEach((descRow) => {
          if (descRow !== descriptionRow) {
            descRow.style.height = "0"; // Collapse it
            descRow.style.display = "none"; // Hide it
          }
        });

        // Toggle the visibility of the clicked description row
        if (descriptionRow.style.display === "none" || descriptionRow.style.height === "0") {
          descriptionRow.style.display = "table-row";
          setTimeout(() => {
            descriptionRow.style.height = "auto"; // Expand to fit content
          }, 10); // Allow the display to be set first
        } else {
          descriptionRow.style.height = "0"; // Collapse it
          descriptionRow.style.display = "none"; // Hide it
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
