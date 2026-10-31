
// ========================================
// DATA CERITA
// ========================================

const cerita = [
    {
        gambar: "images/page1.png",
        audio: "audio/halaman1.mp3",
        teks: [
            "Ibu mempunyai dua orang anak.",
            "Mereka tinggal di sebuah kampung."
        ]
    },
    {
        gambar: "images/page2.png",
        audio: "audio/halaman2.mp3",
        teks: [
            "Ibu mendapat telur ikan.",
            "Ibu membawa telur itu pulang."
        ]
    },
    {
        gambar: "images/page3.png",
        audio: "audio/halaman3.mp3",
        teks: [
            "Ibu memberikan telur ikan kepada kakak.",
            "Ibu berpesan supaya kakak menyimpan telur ikan itu."
        ]
    },
    {
        gambar: "images/page4.png",
        audio: "audio/halaman4.mp3",
        teks: [
            "Ibu keluar mencari rezeki.",
            "Kakak menjaga adik di rumah."
        ]
    },
    {
        gambar: "images/page5.png",
        audio: "audio/halaman5.mp3",
        teks: [
            "Adik melihat telur ikan di dalam bekas.",
            "Adik memakan telur ikan itu."
        ]
    },
    {
        gambar: "images/page6.png",
        audio: "audio/halaman6.mp3",
        teks: [
            "Ibu pulang ke rumah.",
            "Ibu melihat bekas telur ikan yang kosong."
        ]
    },
    {
        gambar: "images/page7.png",
        audio: "audio/halaman7.mp3",
        teks: [
            "Ibu berasa sangat sedih.",
            "Ibu menangisi telur ikan yang habis."
        ]
    },
    {
        gambar: "images/page8.png",
        audio: "audio/halaman8.mp3",
        teks: [
            "Ibu meninggalkan rumah.",
            "Ibu mencari Batu Belah Batu Bertangkup."
        ]
    },
    {
        gambar: "images/page9.png",
        audio: "audio/halaman9.mp3",
        teks: [
            "Ibu memanggil Batu Belah Batu Bertangkup.",
            "Batu itu menelan ibu."
        ]
    },
    {
        gambar: "images/page10.png",
        audio: "audio/halaman10.mp3",
        teks: [
            "Kakak dan adik mengejar ibu.",
            "Mereka tiba selepas ibu ditelan batu."
        ]
    },
    {
        gambar: "images/page11.png",
        audio: "audio/halaman11.mp3",
        teks: [
            "Kita mesti bercakap benar.",
            "Kita hendaklah menghargai keluarga."
        ],
        pengajaran: true
    }
];


// ========================================
// PEMBOLEH UBAH
// ========================================

let halamanSemasa = 0;
let audioSemasa = null;


// ========================================
// ELEMEN HTML
// ========================================

const cover = document.getElementById("cover");
const halamanCerita = document.getElementById("halaman-cerita");

const nomborHalaman = document.getElementById("nombor-halaman");
const gambarCerita = document.getElementById("gambar-cerita");
const teksCerita = document.getElementById("teks-cerita");

const butangMula = document.getElementById("btn-mula");
const butangSebelum = document.getElementById("btn-sebelum");
const butangSeterusnya = document.getElementById("btn-seterusnya");
const butangBacaSemula = document.getElementById("btn-baca-semula");


// ========================================
// AUDIO INDIVIDU SETIAP PERKATAAN
// ========================================

const audioPerkataan = {
    ibu: "audio/ibu.mp3",
    mempunyai: "audio/mempunyai.mp3",
    dua: "audio/dua.mp3",
    orang: "audio/orang.mp3",
    anak: "audio/anak.mp3",
    mereka: "audio/mereka.mp3",
    tinggal: "audio/tinggal.mp3",
    di: "audio/di.mp3",
    sebuah: "audio/sebuah.mp3",
    kampung: "audio/kampung.mp3",

    mendapat: "audio/mendapat.mp3",
    telur: "audio/telur.mp3",
    ikan: "audio/ikan.mp3",
    membawa: "audio/membawa.mp3",
    itu: "audio/itu.mp3",
    pulang: "audio/pulang.mp3",

    memberikan: "audio/memberikan.mp3",
    kepada: "audio/kepada.mp3",
    kakak: "audio/kakak.mp3",
    berpesan: "audio/berpesan.mp3",
    supaya: "audio/supaya.mp3",
    menyimpan: "audio/menyimpan.mp3",

    keluar: "audio/keluar.mp3",
    mencari: "audio/mencari.mp3",
    rezeki: "audio/rezeki.mp3",
    menjaga: "audio/menjaga.mp3",
    adik: "audio/adik.mp3",
    rumah: "audio/rumah.mp3",

    melihat: "audio/melihat.mp3",
    dalam: "audio/dalam.mp3",
    bekas: "audio/bekas.mp3",
    memakan: "audio/memakan.mp3",

    ke: "audio/ke.mp3",
    yang: "audio/yang.mp3",
    kosong: "audio/kosong.mp3",

    berasa: "audio/berasa.mp3",
    sangat: "audio/sangat.mp3",
    sedih: "audio/sedih.mp3",
    menangisi: "audio/menangisi.mp3",
    habis: "audio/habis.mp3",

    meninggalkan: "audio/meninggalkan.mp3",
    batu: "audio/batu.mp3",
    belah: "audio/belah.mp3",
    bertangkup: "audio/bertangkup.mp3",

    memanggil: "audio/memanggil.mp3",
    menelan: "audio/menelan.mp3",

    dan: "audio/dan.mp3",
    mengejar: "audio/mengejar.mp3",
    tiba: "audio/tiba.mp3",
    selepas: "audio/selepas.mp3",
    ditelan: "audio/ditelan.mp3",

    kita: "audio/kita.mp3",
    mesti: "audio/mesti.mp3",
    bercakap: "audio/bercakap.mp3",
    benar: "audio/benar.mp3",
    hendaklah: "audio/hendaklah.mp3",
    menghargai: "audio/menghargai.mp3",
    keluarga: "audio/keluarga.mp3"
};


// ========================================
// PEMENGGALAN SUKU KATA
// ========================================

const sukuKataKhas = {
    ibu: ["i", "bu"],
    mempunyai: ["mem", "pu", "nya", "i"],
    dua: ["du", "a"],
    orang: ["o", "rang"],
    anak: ["a", "nak"],
    mereka: ["me", "re", "ka"],
    tinggal: ["ting", "gal"],
    sebuah: ["se", "buah"],
    kampung: ["kam", "pung"],

    mendapat: ["men", "da", "pat"],
    telur: ["te", "lur"],
    ikan: ["i", "kan"],
    membawa: ["mem", "ba", "wa"],
    itu: ["i", "tu"],
    pulang: ["pu", "lang"],

    memberikan: ["mem", "be", "ri", "kan"],
    kepada: ["ke", "pa", "da"],
    kakak: ["ka", "kak"],
    berpesan: ["ber", "pe", "san"],
    supaya: ["su", "pa", "ya"],
    menyimpan: ["me", "nyim", "pan"],

    keluar: ["ke", "lu", "ar"],
    mencari: ["men", "ca", "ri"],
    rezeki: ["re", "ze", "ki"],
    menjaga: ["men", "ja", "ga"],
    adik: ["a", "dik"],
    rumah: ["ru", "mah"],

    melihat: ["me", "li", "hat"],
    dalam: ["da", "lam"],
    bekas: ["be", "kas"],
    memakan: ["me", "ma", "kan"],

    berasa: ["be", "ra", "sa"],
    sangat: ["sa", "ngat"],
    sedih: ["se", "dih"],
    menangisi: ["me", "na", "ngi", "si"],
    habis: ["ha", "bis"],

    meninggalkan: ["me", "ning", "gal", "kan"],
    batu: ["ba", "tu"],
    belah: ["be", "lah"],
    bertangkup: ["ber", "tang", "kup"],

    memanggil: ["me", "mang", "gil"],
    menelan: ["me", "ne", "lan"],
    mengejar: ["me", "nge", "jar"],
    selepas: ["se", "le", "pas"],
    ditelan: ["di", "te", "lan"],

    kita: ["ki", "ta"],
    mesti: ["mes", "ti"],
    bercakap: ["ber", "ca", "kap"],
    benar: ["be", "nar"],
    hendaklah: ["hen", "dak", "lah"],
    menghargai: ["meng", "har", "ga", "i"],
    keluarga: ["ke", "lu", "ar", "ga"],

    yang: ["yang"],
    kosong: ["ko", "song"]
};


// ========================================
// PECAHKAN SUKU KATA
// ========================================

function pecahSukuKata(perkataan) {
    const bersih = perkataan
        .toLowerCase()
        .replace(/[^a-z]/g, "");

    return sukuKataKhas[bersih] || [bersih];
}


// ========================================
// HENTIKAN AUDIO SEMASA
// ========================================

function hentikanAudio() {
    if (audioSemasa) {
        audioSemasa.pause();
        audioSemasa.currentTime = 0;
        audioSemasa = null;
    }
}


// ========================================
// MAIN AUDIO
// ========================================

function mainAudio(laluanAudio) {
    hentikanAudio();

    const audioBaharu = new Audio(laluanAudio);

    audioSemasa = audioBaharu;

    audioBaharu.play().catch((ralat) => {
        console.warn(
            `Audio gagal dimainkan: ${laluanAudio}`,
            ralat
        );
    });

    return audioBaharu;
}


// ========================================
// MAIN AUDIO PERKATAAN
// ========================================

function mainAudioPerkataan(perkataan) {
    const namaPerkataan = perkataan
        .toLowerCase()
        .replace(/[^a-z]/g, "");

    const laluanAudio = audioPerkataan[namaPerkataan];

    if (laluanAudio) {
        mainAudio(laluanAudio);
    } else {
        hentikanAudio();

        console.warn(
            `Audio untuk perkataan "${namaPerkataan}" belum didaftarkan.`
        );
    }
}


// ========================================
// PAPARKAN PERKATAAN
// ========================================

function paparPerkataan(teks, hurufBesar = false) {
    const bekas = document.createElement("span");

    bekas.className = "perkataan";
    bekas.tabIndex = 0;
    bekas.setAttribute("role", "button");
    bekas.setAttribute("aria-label", `Dengar ${teks}`);

    const padanan = teks.match(/^([^a-z]*)([a-z]+)([^a-z]*)$/i);

    if (!padanan) {
        bekas.textContent = teks;
        return bekas;
    }

    const [, awal, perkataan, akhir] = padanan;

    bekas.append(document.createTextNode(awal));

    const sukuKata = pecahSukuKata(perkataan);

    sukuKata.forEach((suku, indeks) => {
        const bahagian = document.createElement("span");

        bahagian.className =
            "suku-kata " +
            (indeks % 2 === 0 ? "hitam" : "merah");

        suku = suku.toLowerCase();

        if (hurufBesar && indeks === 0) {
            suku = suku.charAt(0).toUpperCase() + suku.slice(1);
        }

        bahagian.textContent = suku;
        bekas.appendChild(bahagian);
    });

    bekas.append(document.createTextNode(akhir));

    // Klik perkataan untuk mendengar sebutannya.
    bekas.addEventListener("click", (event) => {
        event.stopPropagation();
        mainAudioPerkataan(perkataan);
    });

    // Sokongan papan kekunci.
    bekas.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.stopPropagation();
            mainAudioPerkataan(perkataan);
        }
    });

    return bekas;
}


// ========================================
// AUDIO COVER
// ========================================

function mainAudioCover() {
    if (cover.hidden) {
        return;
    }

    if (
        audioSemasa &&
        !audioSemasa.paused &&
        audioSemasa.src.includes("cover.mp3")
    ) {
        return;
    }

    mainAudio("audio/cover.mp3");
}


// ========================================
// AUDIO HALAMAN
// ========================================

function mainAudioHalaman() {
    const data = cerita[halamanSemasa];

    if (data && data.audio) {
        mainAudio(data.audio);
    }
}


// ========================================
// KEMBALI KE MUKA DEPAN
// ========================================

function kembaliKeMukaDepan() {
    hentikanAudio();

    halamanCerita.hidden = true;
    cover.hidden = false;

    mainAudioCover();
}


// ========================================
// KEMAS KINI BUTANG NAVIGASI
// ========================================

function kemasKiniButangNavigasi() {
    const halamanTerakhir = halamanSemasa === cerita.length - 1;

    if (halamanTerakhir) {
        // Butang kanan bertukar menjadi Halaman Utama.
        butangSeterusnya.textContent = "🏠";
        butangSeterusnya.setAttribute(
            "aria-label",
            "Kembali ke Halaman Utama"
        );
        butangSeterusnya.title = "Kembali ke Halaman Utama";
        butangSeterusnya.classList.add("butang-halaman-utama");

    } else {
        // Halaman lain menggunakan anak panah biasa.
        butangSeterusnya.textContent = "❯";
        butangSeterusnya.setAttribute(
            "aria-label",
            "Halaman seterusnya"
        );
        butangSeterusnya.title = "Halaman seterusnya";
        butangSeterusnya.classList.remove("butang-halaman-utama");
    }

    if (halamanSemasa === 0) {
        butangSebelum.setAttribute(
            "aria-label",
            "Kembali ke muka depan"
        );
        butangSebelum.title = "Kembali ke muka depan";

    } else {
        butangSebelum.setAttribute(
            "aria-label",
            "Halaman sebelumnya"
        );
        butangSebelum.title = "Halaman sebelumnya";
    }
}


// ========================================
// PAPARKAN HALAMAN CERITA
// ========================================

function paparHalaman() {
    hentikanAudio();

    const data = cerita[halamanSemasa];

    nomborHalaman.textContent = data.pengajaran
        ? "Pengajaran"
        : `Halaman ${halamanSemasa + 1}`;

    nomborHalaman.classList.toggle(
        "pengajaran",
        !!data.pengajaran
    );

    gambarCerita.src = data.gambar;

    gambarCerita.alt = data.pengajaran
        ? "Ilustrasi pengajaran cerita"
        : `Ilustrasi halaman ${halamanSemasa + 1}`;

    teksCerita.replaceChildren();

    teksCerita.classList.toggle(
        "pengajaran",
        !!data.pengajaran
    );

    data.teks.forEach((ayat, indeksAyat) => {
        const perenggan = document.createElement("p");

        perenggan.className = "ayat";

        if (data.pengajaran) {
            perenggan.classList.add("ayat-pengajaran");

            perenggan.classList.add(
                indeksAyat === 0 ? "kiri" : "kanan"
            );
        }

        const perkataan = ayat.split(/\s+/);

        perkataan.forEach((item, indeks) => {
            perenggan.appendChild(
                paparPerkataan(item, indeks === 0)
            );

            if (indeks < perkataan.length - 1) {
                perenggan.appendChild(
                    document.createTextNode(" ")
                );
            }
        });

        teksCerita.appendChild(perenggan);
    });

    // Kemas kini paparan butang navigasi.
    kemasKiniButangNavigasi();

    // Mainkan audio halaman secara automatik.
    mainAudioHalaman();
}


// ========================================
// AUDIO COVER APABILA BUKU DIBUKA
// ========================================

window.addEventListener("load", () => {
    mainAudioCover();
});


// ========================================
// KLIK COVER
// ========================================

document.addEventListener("click", (event) => {
    if (cover.hidden) {
        return;
    }

    if (event.target.closest("#btn-mula")) {
        return;
    }

    // Klik cover menghentikan audio cover.
    hentikanAudio();
});


// ========================================
// MULA MEMBACA
// ========================================

butangMula.addEventListener("click", () => {
    halamanSemasa = 0;

    hentikanAudio();

    cover.hidden = true;
    halamanCerita.hidden = false;

    paparHalaman();
});


// ========================================
// ANAK PANAH KIRI
// ========================================

butangSebelum.addEventListener("click", () => {
    hentikanAudio();

    if (halamanSemasa > 0) {
        halamanSemasa--;
        paparHalaman();

    } else {
        kembaliKeMukaDepan();
    }
});


// ========================================
// ANAK PANAH KANAN / HALAMAN UTAMA
// ========================================

butangSeterusnya.addEventListener("click", () => {
    hentikanAudio();

    if (halamanSemasa < cerita.length - 1) {
        halamanSemasa++;
        paparHalaman();

    } else {
        // Pada halaman pengajaran terakhir,
        // butang kanan membawa murid kembali ke muka depan.
        kembaliKeMukaDepan();
    }
});


// ========================================
// BUTANG BACA SEMULA AYAT
// ========================================

if (butangBacaSemula) {
    butangBacaSemula.addEventListener("click", (event) => {
        event.stopPropagation();

        // Mainkan semula audio penuh halaman semasa.
        mainAudioHalaman();
    });
}


// ========================================
// HENTIKAN AUDIO APABILA KLIK KAWASAN KOSONG
// ========================================

halamanCerita.addEventListener("click", (event) => {
    // Klik perkataan memainkan audio perkataan.
    if (event.target.closest(".perkataan")) {
        return;
    }

    // Butang navigasi, Baca Semula dan Full screen mempunyai fungsi sendiri.
    if (
        event.target.closest(".butang-navigasi") ||
        event.target.closest("#btn-baca-semula") ||
        event.target.closest("#btn-fullscreen")
    ) {
        return;
    }

    hentikanAudio();
});


// ========================================
// KEADAAN AWAL
// ========================================

cover.hidden = false;
halamanCerita.hidden = true;

// Pastikan butang navigasi bermula dengan paparan yang betul.
kemasKiniButangNavigasi();


// ========================================
// FULL SCREEN - TELEFON SAHAJA
// ========================================

const butangFullScreen = document.getElementById("btn-fullscreen");


// Semak sama ada peranti menggunakan saiz skrin telefon.
function perantiTelefon() {
    return window.matchMedia("(max-width: 600px)").matches;
}


// Kemas kini tulisan pada butang fullscreen.
function kemasKiniButangFullScreen() {
    if (!butangFullScreen) return;

    const sedangFullScreen =
        Boolean(document.fullscreenElement) ||
        document.documentElement.classList.contains("mobile-pseudo-fullscreen");

    butangFullScreen.textContent = sedangFullScreen
        ? "✕ Keluar Full screen"
        : "⛶ Full screen";

    butangFullScreen.setAttribute(
        "aria-label",
        sedangFullScreen
            ? "Keluar daripada skrin penuh"
            : "Aktifkan paparan skrin penuh"
    );

    butangFullScreen.setAttribute(
        "aria-pressed",
        String(sedangFullScreen)
    );
}


// Aktifkan atau keluar daripada fullscreen.
async function aktifkanFullScreen() {

    // Fungsi hanya berjalan pada telefon.
    if (!perantiTelefon()) return;

    const akar = document.documentElement;

    const sedangFullScreen =
        Boolean(document.fullscreenElement) ||
        akar.classList.contains("mobile-pseudo-fullscreen");

    try {

        if (sedangFullScreen) {

            // Keluar daripada fullscreen sebenar.
            if (
                document.fullscreenElement &&
                document.exitFullscreen
            ) {
                await document.exitFullscreen();
            }

            // Buang paparan fullscreen alternatif.
            akar.classList.remove("mobile-pseudo-fullscreen");

            // Lepaskan kunci orientasi jika disokong.
            if (
                screen.orientation &&
                typeof screen.orientation.unlock === "function"
            ) {
                screen.orientation.unlock();
            }

        } else {

            // Cuba aktifkan fullscreen sebenar.
            if (akar.requestFullscreen) {
                await akar.requestFullscreen();

            } else {
                // Fallback untuk browser yang tidak menyokong Fullscreen API.
                akar.classList.add("mobile-pseudo-fullscreen");
            }

            // Cuba tukar orientasi kepada landscape.
            if (
                screen.orientation &&
                typeof screen.orientation.lock === "function"
            ) {
                try {
                    await screen.orientation.lock("landscape");

                } catch (ralatOrientasi) {
                    console.info(
                        "Orientasi landscape tidak disokong oleh browser ini."
                    );
                }
            }
        }

    } catch (ralat) {

        // Jika fullscreen sebenar gagal, gunakan paparan alternatif.
        akar.classList.toggle("mobile-pseudo-fullscreen");

        console.info(
            "Menggunakan paparan penuh alternatif untuk peranti ini."
        );
    }

    kemasKiniButangFullScreen();
}


// Klik butang fullscreen.
if (butangFullScreen) {
    butangFullScreen.addEventListener(
        "click",
        aktifkanFullScreen
    );
}


// Kemas kini apabila status fullscreen berubah.
document.addEventListener(
    "fullscreenchange",
    kemasKiniButangFullScreen
);


// Tekan Escape untuk keluar daripada fullscreen alternatif.
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        document.documentElement.classList.remove(
            "mobile-pseudo-fullscreen"
        );

        if (
            screen.orientation &&
            typeof screen.orientation.unlock === "function"
        ) {
            screen.orientation.unlock();
        }

        kemasKiniButangFullScreen();
    }
});


// Kemas kini apabila saiz skrin berubah.
window.addEventListener(
    "resize",
    kemasKiniButangFullScreen
);


// Kemas kini apabila orientasi telefon berubah.
window.addEventListener(
    "orientationchange",
    kemasKiniButangFullScreen
);


// ========================================
// TAMAT SCRIPT.JS
// ========================================
