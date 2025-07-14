const overlay = document.querySelector('.overlay');
const textItems = document.querySelectorAll('.text');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;

    // Fade out the video (overlay gets darker)
    let opacity = scrollY / maxScroll;
    if (opacity > 1) opacity = 1;
    overlay.style.opacity = opacity;

    // Fade in text when scrolled down
    textItems.forEach(item => {
        if (scrollY > maxScroll / 2) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
});

// Video Background
const video = document.getElementById('bgVideo');

// Bật âm thanh
video.muted = false; // Cho phép âm thanh
video.volume = 1;    // Bắt đầu với âm lượng max

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const fadeStart = 0;                // Bắt đầu fade
    const fadeEnd = window.innerHeight; // Fade xong khi scroll hết màn hình

    // Tính tỷ lệ fade
    let fadeRatio = (scrollY - fadeStart) / (fadeEnd - fadeStart);
    if (fadeRatio < 0) fadeRatio = 0;
    if (fadeRatio > 1) fadeRatio = 1;

    // Fade opacity và volume
    video.style.opacity = 1 - fadeRatio;
    video.volume = 1 - fadeRatio;

    // Nếu fade xong thì pause luôn video
    if (fadeRatio >= 1) {
        video.pause();
    } else {
        if (video.paused) video.play();
    }
});

const playBtn = document.getElementById('playBtn');
// Khi bấm nút play
playBtn.addEventListener('click', () => {
    video.muted = false; // Bật tiếng
    video.play();
    playBtn.style.display = 'none';
});

// Khi video bắt đầu play tự động (ví dụ scroll lên)
video.addEventListener('play', () => {
    console.log("Video auto-play detected 🎥");
    playBtn.style.display = 'none'; // Ẩn nút Play nếu video tự chạy
});