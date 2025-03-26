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

const lyricsContainer = document.getElementById("lyrics");
const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const notif = document.getElementById("notif");
const notifText = document.getElementById("notifText");

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().catch(error => console.log("Gagal play:", error));
        playButton.style.display = "none"; // Sembunyikan tombol Play
        
        // Munculkan Notifikasi
        notifText.innerHTML = "Dari Handi untuk Olannn";
        notif.style.top = "20px"; // Geser ke bawah biar muncul
        notif.style.opacity = "1";
        
        // Hilangkan notifikasi setelah 3 detik
        setTimeout(() => {
            notif.style.top = "-100px";
            notif.style.opacity = "0";
        }, 3000);
    }
});

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().catch(error => console.log("Gagal play:", error));
        playButton.style.display = "none"; // Sembunyikan tombol Play
        showMessages(); // Munculkan pesan setelah play
    }
});

// Pesan spesial
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");
const msg4 = document.getElementById("msg4");

// Event listener saat tombol Play ditekan
playButton.addEventListener("click", () => {
    audio.play().then(() => {
        playButton.style.display = "none"; // Sembunyikan tombol play
        showMessages(); // Tampilkan pesan satu per satu
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

// Fungsi untuk menampilkan pesan spesial setelah klik Play
// fitur semua buatan handi
function showMessages() {
    setTimeout(() => msg1.style.opacity = 1, 1000); // Tampil setelah 1 detik
    setTimeout(() => msg2.style.opacity = 1, 3000); // Tampil setelah 3 detik
    setTimeout(() => msg3.style.opacity = 1, 5000); // Tampil setelah 5 detik
    setTimeout(() => msg4.style.opacity = 1, 7000); // Tampil setelah 7 detik
}
