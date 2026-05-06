// Data simulasi untuk notifikasi
const fakeUsers = ["Andi", "Budi", "Siska", "JotUser", "Gamers", "ProPlayer", "Fahri", "Rina"];
const fakeItems = ["5 Diamonds ML", "Weekly Diamond Pass", "1000 FF Diamonds", "Pulsa Rp 50.000", "Token PLN 20k"];

function showLiveNotif() {
    const notif = document.getElementById('live-notif');
    const text = document.getElementById('notif-text');
    
    // Pilih data acak
    const user = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
    const item = fakeItems[Math.floor(Math.random() * fakeItems.length)];
    
    // Set teks (Contoh: Andi*** baru saja membeli...)
    text.innerText = `${user}*** baru saja membeli ${item}`;
    
    // Munculkan (Hapus class yang menyembunyikan)
    notif.classList.remove('translate-y-32');
    notif.classList.add('translate-y-0');
    
    // Sembunyikan lagi setelah 4 detik
    setTimeout(() => {
        notif.classList.remove('translate-y-0');
        notif.classList.add('translate-y-32');
    }, 4000);
}

// Jalankan rutin
setInterval(showLiveNotif, 12000); 
setTimeout(showLiveNotif, 3000);