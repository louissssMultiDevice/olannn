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

// Event listener saat tombol diklik
playButton.addEventListener("click", () => {
    audio.play().then(() => {
        playButton.style.display = "none"; // Sembunyikan tombol setelah klik
    }).catch(error => {
        console.log("Autoplay gagal: ", error);
    });
});

// Event listener saat lagu diputar untuk menampilkan lirik
audio.addEventListener("timeupdate", () => {
    let currentTime = Math.floor(audio.currentTime);

    let currentLyric = lyricsData.find(lyric => lyric.time === currentTime);
    
    if (currentLyric) {
        lyricsContainer.textContent = currentLyric.text;
        lyricsContainer.style.opacity = 1;
    } else {
        lyricsContainer.style.opacity = 0;
    }
});

// Auto play jika user memberikan izin
document.addEventListener("click", () => {
    audio.play().catch(error => {
        console.log("Autoplay diblokir oleh browser. User harus klik dulu.");
    });
}, { once: true });
