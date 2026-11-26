document.addEventListener("DOMContentLoaded", () => {
  // 1. Auto-update copyright year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Compact Service Search Filter
  const searchInput = document.getElementById("service-search");
  const serviceButtons = document.querySelectorAll(".service-btn");
  const serviceCount = document.getElementById("service-count");
  const noResults = document.getElementById("no-results");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    serviceButtons.forEach((btn) => {
      const title = btn.querySelector("h3").textContent.toLowerCase();
      const subtitle = btn.querySelector("p").textContent.toLowerCase();
      const keywords = btn.getAttribute("data-keywords").toLowerCase();

      if (
        title.includes(query) ||
        subtitle.includes(query) ||
        keywords.includes(query)
      ) {
        btn.style.display = "flex";
        visibleCount++;
      } else {
        btn.style.display = "none";
      }
    });

    serviceCount.textContent = `${visibleCount} available`;

    if (visibleCount === 0) {
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
    }
  });
});
