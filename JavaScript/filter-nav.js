// ============================
// 1. Utils
// ============================

function getQueryParam(param) {
  return new URLSearchParams(window.location.search).get(param) || "";
}

function setReligion(religion) {
  const url = new URL(window.location.href);
  url.searchParams.set('religion', religion);
  window.location.href = url.toString();
}

// ============================
// 2. filter (Gallery.html)
// ============================
function setReligion(religion) {
  let religionSelect = document.getElementById("religionSelect");
  if (religionSelect) {
      religionSelect.value = religion;
      filterEvents();  
  }
}

function filterEvents() {
  let country = document.getElementById("countrySelect").value || "";
  let religion = document.getElementById("religionSelect").value || "";
  let month = document.getElementById("monthSelect").value || "";
  let sortBy = document.getElementById("sortSelect")?.value || ""; 

  let events = Array.from(document.querySelectorAll(".gallery .event"));

  let visibleEvents = events.filter(event => {
      let match = (!country || event.dataset.country === country) &&
                  (!religion || event.dataset.religion === religion) &&
                  (!month || event.dataset.month === month);
      event.style.display = match ? "flex" : "none";
      return match;
  });

  updateLayout();

  if (sortBy === "name") {
      visibleEvents.sort((a, b) => 
          a.querySelector("h3").innerText.localeCompare(b.querySelector("h3").innerText)
      );
      let gallery = document.querySelector(".gallery");
      visibleEvents.forEach(event => gallery.appendChild(event));
  }

  updateShowMore(visibleEvents);  
  console.log("Visible Events:", visibleEvents.length);
  console.log("Hidden Events:", events.length - visibleEvents.length);
}

function resetFilters() {
  document.getElementById("countrySelect").value = "";
  document.getElementById("religionSelect").value = "";
  document.getElementById("monthSelect").value = "";
  document.getElementById("sortSelect").value = "";

  visibleCount = 9;
  filterEvents();
}

function updateLayout() {
  let container = document.querySelector(".gallery");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(3, 1fr)";
  container.style.gap = "20px";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("reset-btn")?.addEventListener("click", resetFilters);
});

// ============================
// 3. event (Gallery.html)
// ============================

let visibleCount = 9;

function updateShowMore(visibleEvents = Array.from(document.querySelectorAll(".gallery .event"))) {
    visibleEvents.forEach((event, index) => {
        event.style.display = index < visibleCount ? "flex" : "none";
    });

    let showMoreBtn = document.getElementById("show-more-btn");
    if (showMoreBtn) {
        showMoreBtn.style.display = visibleCount < visibleEvents.length ? "block" : "none";
    }
}

function showAllEvents() {
    visibleCount += 3;
    filterEvents();
}

// ============================
// 4. load event
// ============================

document.addEventListener("DOMContentLoaded", function () {
    if (!window.location.pathname.endsWith("Gallery.html")) return;

    updatePage();
    filterEvents();

    document.getElementById("show-more-btn")?.addEventListener("click", showAllEvents);
});

// ============================
// 5. upadte gallery
// ============================

function updatePage() {
  let galleryTitle = document.getElementById('gallery-title');
  let religion = getQueryParam('religion');

  if (galleryTitle && religion) galleryTitle.innerText = `Gallery - ${religion}`;
}
