const lyricsData = [
    { time: 210, text: "Do you think..." },      // 3:30
    { time: 213, text: "I have forgotten?" },    // 3:33
    { time: 217, text: "Do you think..." },      // 3:37
    { time: 220, text: "I have forgotten?" },    // 3:40
    { time: 224, text: "About you 🤍" }         // 3:44
];

const audio = document.getElementById("audio");
const lyricsContainer = document.getElementById("lyrics");

audio.addEventListener("timeupdate", () => {
    let currentTime = audio.currentTime;

    let currentLyric = lyricsData.find(lyric => Math.floor(currentTime) === lyric.time);
    
    if (currentLyric) {
        lyricsContainer.textContent = currentLyric.text;
        lyricsContainer.style.opacity = 1;
    } else {
        lyricsContainer.style.opacity = 0;
    }
});
