let filterProjects = null;

function renderProjects(category) {
  const container = document.getElementById('filtered-projects');
  container.innerHTML = '';
  const filtered = category === 'all'
    ? allProjects
    : allProjects.filter(p => p.type === category);
  filtered.forEach((p, idx) => {
    console.log(`Rendering project ${idx + 1}:`, p);
    
    container.innerHTML += `
              <div class="project-card" data-id="${idx}">
                <div class="blur-img-container">
                  <div class="img-wrapper">
                    <img src="${p.image}">
                  </div>
                </div>
                <img class="project-image" src="${p.image}" alt="project-image">
                <div class="project-details">
                  <p class="project-type">${p.type.charAt(0).toUpperCase() + p.type.slice(1)}</p>
                  <h3 class="project-name">${p.name}</h3>
                  <p class="project-description">${p.description}</p>
                </div>
              </div>
            `;
  });
  filterProjects = filtered;
};

// Initial render
renderProjects('all');

// Tab click event (category filter)
document.querySelectorAll('.category-tab').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderProjects(this.dataset.category);
  });
});

// Create a popup for web projects
function createWebProjectPopup(project) {
  // Simulate a PDF-like viewer with white pages for web projects
  const popup = document.createElement("div");
      popup.className = "popup-overlay";

      const closeBtn = document.createElement("button");
      closeBtn.className = "popup-close";
      closeBtn.innerHTML = "&times;";
      closeBtn.onclick = () => popup.remove();

      const scrollWrapper = document.createElement("div");
      scrollWrapper.className = "scroll-wrapper";
      scrollWrapper.id = "mediaScroll";

      const thumbnailStrip = document.createElement("div");
      thumbnailStrip.className = "thumbnail-strip";
      thumbnailStrip.id = "thumbnailStrip";

      popup.appendChild(closeBtn);
      popup.appendChild(scrollWrapper);
      popup.appendChild(thumbnailStrip);
      document.body.appendChild(popup);
      const data = project?.data || [];
      data.forEach((item, index) => {
        const isVideo = item.image.includes(".mp4") || item.image.includes("Video/");

        const mediaDiv = document.createElement("div");
        mediaDiv.className = "media-item";
        mediaDiv.id = `media-${index}`;

        if (isVideo) {
          mediaDiv.innerHTML = `
            <video controls>
              <source src="${item.image}" type="video/mp4">
              Trình duyệt không hỗ trợ video.
            </video>
          `;
        } else {
          mediaDiv.innerHTML = `<img src="${item.image}" alt="image">`;
        }

        scrollWrapper.appendChild(mediaDiv);

        const thumb = document.createElement("img");
        thumb.src = isVideo ? "https://www.shutterstock.com/shutterstock/videos/3462523569/thumb/1.jpg?ip=x480" : item.image;
        thumb.alt = "thumb";
        thumb.addEventListener("click", () => {
          document.getElementById(`media-${index}`).scrollIntoView({ behavior: "smooth", inline: "start" });
        });
        thumbnailStrip.appendChild(thumb);
      });
}

// Add click event for website projects
document.getElementById('filtered-projects').addEventListener('click', function (e) {
  let card = e.target.closest('.project-card');
  if (!card) return;
  const idx = card.getAttribute('data-id');

  const project = filterProjects[idx];
  
  // Video handled above, now handle website
  if (project.type === 'project'  || project.type === 'design'  || project.type === 'ai') {
    createWebProjectPopup(project);
  }
});