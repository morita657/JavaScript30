const video = document.querySelector("video");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const volume = document.querySelector('input[name="volume"]');
const timeUpdate = document.querySelector('input[name="playbackRate"]');
const playerSkipBtns = document.querySelectorAll('button[class="player__button"]');
let sw = false;

progress.addEventListener('mousedown', () => {
    sw = true;
});
progress.addEventListener('mousemove', (e) => {
    if (sw) {
        let percent = (e.clientX / progress.offsetWidth) * 100;
        progressBar.style.flexBasis = `${percent}%`;
        video.currentTime = (video.duration * percent / 100);
    }
});
progress.addEventListener('mouseup', (e) => {
    sw = false;
});

video.addEventListener('timeupdate', () => {
    let percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
});

toggle.addEventListener('click', () => {
    (video.paused) ? video.play() : video.pause();
});
volume.addEventListener('change', () => {
    video.volume = volume.value;
});
timeUpdate.addEventListener('change', () => {
    video.playbackRate = timeUpdate.value;
});
playerSkipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        video.currentTime += parseFloat(btn.dataset.skip);
    });
});