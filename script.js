const lyricsData = [
    { time: 210, text: "Do you think I have forgotten?" },  
    { time: 213, text: "Do you think I have forgotten?" },  
    { time: 217, text: "Do you think I have forgotten about you?" },  
    { time: 223, text: "And there was something 'bout you that now I can't remember" },  
    { time: 229, text: "It's the same damn thing that made my heart surrender" },  
    { time: 234, text: "And I miss you on a train, I miss you in the morning" },  
    { time: 240, text: "I never know what to think about" },  
    { time: 243, text: "I think about you (so don't let go)" },  
    { time: 248, text: "About you (so don't let go)" },  
    { time: 252, text: "Do you think I have forgotten about you? (Don't let go)" },  
    { time: 257, text: "About you" },  
    { time: 260, text: "About you" },  
    { time: 265, text: "Do you think I have forgotten about you? (Don't let go)" }  
];

const audio = document.getElementById("audio");
const lyricsContainer = document.getElementById("lyrics");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = "none";
});

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
