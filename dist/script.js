const video = document.getElementById("bg-video");
const volumeSlider = document.getElementById("volumeSlider");
const muteBtn = document.getElementById("muteBtn");

// 預設靜音（避免被瀏覽器擋）
video.muted = true;
video.volume = 0.5;

// 音量控制
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

// 靜音切換
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔇" : "🔊";
});

// 點擊頁面後開聲
document.body.addEventListener("click", () => {
  video.muted = false;
  video.play();
}, { once: true });