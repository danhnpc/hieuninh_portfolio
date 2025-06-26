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
                  <img class="project-logo" src="${p.logo}">
                </div>
              </div>
            `;
  });
  filterProjects = filtered;
};

// Initial render
renderProjects('all');

function createVideoPopup(videoUrl, project) {
  let embedUrl = '';
  const ytMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/);
  if (ytMatch) {
    embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;
  } else {
    embedUrl = videoUrl;
  }
  let popup = document.createElement('div');
  popup.className = 'project-popup';
  popup.style = `
            position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;
            background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;
          `;
  popup.innerHTML = `
            <div style="background:#222;padding:32px 24px 24px 24px;border-radius:16px;max-width:90vw;max-height:90vh;overflow:auto;position:relative;box-shadow:0 8px 32px #000a;">
              <button style="position:absolute;top:12px;right:16px;font-size:2rem;background:none;border:none;color:#fff;cursor:pointer;" aria-label="Close">&times;</button>
              <div style="width:100%;max-width:560px;margin:0 auto 16px auto;">
          <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;">
            <iframe src="${embedUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
              style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:12px;background:#000;"></iframe>
          </div>
              </div>
              <h2 style="color:#fff;margin:0 0 8px 0;">${project.name}</h2>
              <p style="color:#aaa;margin:0 0 12px 0;">${project.description}</p>
              <a href="${videoUrl}" target="_blank" rel="noopener" style="display:inline-block;margin-top:8px;color:#4af;text-decoration:underline;font-size:1.1em;">Xem trên YouTube</a>
              <div style="color:#888;font-size:0.95em;margin-top:4px;">Nếu video không phát được, hãy bấm "Xem trên YouTube".</div>
            </div>
          `;
  document.body.appendChild(popup);
  popup.addEventListener('click', function (ev) {
    if (ev.target === popup || ev.target.tagName === 'BUTTON') popup.remove();
  });
}
// Override click event for video projects to show embedded player
document.getElementById('filtered-projects').addEventListener('click', function (e) {
  let card = e.target.closest('.project-card');
  if (!card) return;
  const idx = card.getAttribute('data-id');
  const category = document.querySelector('.category-tab.active').dataset.category;
  const filtered = category === 'all' ? allProjects : allProjects.filter(p => p.type === category);
  const project = filtered[idx];
  if (project.videoUrl) {
    createVideoPopup(project.videoUrl, project);
  }
});

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