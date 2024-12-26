document.addEventListener("DOMContentLoaded", () => {
    lottie.loadAnimation({
      container: document.getElementById("flower-animation"), // ID container
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets10.lottiefiles.com/packages/lf20_v7tkzptj.json" // Animasi bunga dari LottieFiles
    });
  });
  
  const calendarData = {
    "2024-05-01": "Kaki aku abis ketancep paku, kamu nanyain terus aku merasa di peduliin hehe saltink dikit banyak",
    "2024-05-02": "Bisa bisanya axel bikin playlist spoti covernya sm kmu hufftt tp malemnya kita ngechat lama hehe senangggg",
    "2024-05-04": "Ini sampe tanggal 11 kita ngechat mulu bnr bnr deep, kamu suka tbtb chat dengan topik random HAHA caper km yaa sayangg",
    "2024-05-10": "Kamu ngirim aku pap????? kaget astaghfirulah tapi cantik bgt hehe sukak",
    "2024-05-12": "Tanggal bersejarah bgt yah, kita ngobrol sampe subuh, iseng iseng chat flirty awalnya cuma buat havefun tanpa serius, tiba tiba jadian hehe <3",
    "2024-05-13": "Hehe di minggu minggu ini full senyum, flirty terus udah ga merasa bersalah, hepi hepi terus moodnya mwahhh",
    "2024-05-22": "mami kamu keluar kota TRS KITA CALL FIRST TIME WKWKWK aku aga kaget karena jarang denger suara km tp so funn hehe suka jugaaak",
    "2024-05-25": "kita pertama kali 'berantem' karena ak ngebohong gaada acara biar bs telp sm km hehe maaf ya sayang dl aku childish bgt",
    "2024-05-27": "ini karena mami km dah plg kita gabisa call huhu, tapi KT COLONG2 CALL 10-15mnt MALEM MALEM WKWKWKWK LAMA LAMA KETERUSAN 1-2JAM",
    "2024-05-31": "kita colong colong call lagi sleepcall malem2, hehe ak inget bgt km lucu kaya anak kecil clingy bgt sayangg",
    "2024-06-01": "kita callan lama sampe 4 jam heheee ak salting bgt pas km blg foto foto aku ganteng <3 uhu gakuat dipuji kitin",
    "2024-06-03": "udah mulai callan setiap mami kamu udah tidur hehee, jadi merasa ditemenin sama kamu teruss sayaangg",
    "2024-06-05": "ini kamu terlalu kecanduan sm bersin aku sampe diminta bersin terus wkwkkwk",
    "2024-06-09": "di minggu ini kita callan mulai lama-lama, bisa 7-9 jam omg hehe ditinggal tidur terussss",
    "2024-06-10": "ak pap fotoku pas masi abs absnya WKKWKWKW spertinya km sgt suka WKWKWKKW, OYA KM DI CHAT CC AKU TBTB WKWKW HAYOOOO",
    "2024-06-14": "aku sempetin pulanggg, kamu jemput aku di WTC hehehe kita ketemu pertama kali, masih kaku bangeett omg lucu kt ke aeon, foto foto trs plgnya mam shihlin ak suapinn",
    "2024-06-15": "FIRST TIME aku kerumah kamu, kt ngedate tp sama disa huhu mls ganggu jd gbs beduaan tp gapapa hehe masi kaku juga soalnya, TRS ipad km ketinggalan aku pake buat minivlog hehe",
    "2024-06-16": "kita ketemuan di gereja buat balikin ipad kamuu, aku dag dig dug bgt ketemu mami kamu WKWKWKWK abis itu aku nyusul km ke the breeze trs kt pacaran tipis hehe",
    "2024-06-17": "ga ekspek, KM MAIN DI KUCING HAHAHA tp kt ngobrol bertiga sm epan misahh, wow first time km keluar sampe tengah malem kahh? emg cm sm ak doang hehehe",
    "2024-06-24": "di minggu-minggu ini kt sibuk lagi, ggr efek abis ketemu trs ldr lagii jadi makin bucin paraahh wkwk",
    "2024-07-01": "TIBA TIBA DAH JULI aku reflek mulai mikir ultah km mau kasih apa yak wkwkwk",
    "2024-07-02": "aku pulanggg libur semesterr!! kamu jemput aku di batan!! kita ke living world marathon nightmare&daydream!! DAN KITA FIRST TIME KISS di bibir WKWKWK SALTING SERU DAN ENAKKKK!!!! love you",
    "2024-07-04": "aku nganterin km ke kampus terus kita jalan ke aeon, mam yoshinoya huft ak inget bgt ada yg nawarin km parfum maksa gt, OYA kt ntn ipar adalah maut kwkwkwkw",
    "2024-07-09": "minggu minggu km uas, huhuhu km sgt sibuk dan kelelahan, kasian sm km sayaangg tp km keren sdh keep up",
    "2024-07-12": "main sama epan sama disa ke black sinyoo, abis itu plgnya ke warung sedjagat WKWKWK main kartu truth or daree, kt main sampe malem lagiii deh",
    "2024-07-18": "kita ntn film pusaka di paradise, beli shihlin trs duduk sweetbox HEHE bisa nempel2 dan modus dikit ntn sambil pegangan tangaan <3",
    "2024-07-24": "kita main di aeon lanjutin nightmare & daydream di parkiran, paginya mam nasgor sm mami kamu hehe, ini jg pertama kali ak mam kamu di parkiran aeon wlee hehe",
    "2024-07-25": "jalan jalan keliling bsd-sumarecon karena mas mas aeon gabolehin mesra-mesraan najisss ii, trs plgnya kita beli mam di solaria paradise, trs plgnya kt CIUMAN LAMA BGT DIVIDEOIN HEHEHE WKWKWKWK ENAKKKKKK SYG",
    "2024-07-26": "aku mulai panik KM BNTR LG ULTAH AK BLM ADA SAMSEK trs aku kepikiran bikinin ala ala skripsi penelitian gt, hehe ak mulai bikin dehh",
    "2024-07-29": "ini malem malem aku ke pamulang, print in hadiah buat km",
    "2024-07-30": "kita main ke cat cafe!!! seru bgttt hehe abistu plgnya ak kasih kamu hadiah trs suru bukanya nanti tgh malem wkwkw",
    "2024-07-31": "ur birthday!!!!!!! semoga km suka kadoo yang ku bikinn",
    "2024-08-04": "kita terakhir main, gereja sm mami km sm cici km, trs ngedate kesana kemari trs ciuman bntr di aeon pas jemput mami cici km WKKWKW trs mam di seafood",
    "2024-08-05": "ak pulangg, km anterin ak ke travel, kt mam mie, ntn youtube trs ciuman banyak di mobil WKWKWKWK",
    "2024-08-20": "minggu minggu kt sibuk, siklusnya bgn, kuliah, ak urusan panit, plg, kt vc hehe tp takpa ak ttp sgt menunggu bs vc km",
    "2024-09-15": "bulan ini kurang lebih templatenya sama, kamu kuliah, aku sibuk organisasi, kadang gak bisa vc kalo aku rapat sampe malam hehe maaf ya sayaang <3",
    "2024-10-15": "di bulan ini kamu juga mulai ikut organisasii!! aku inget banget dari kamu pldk yang bikin km misuh misuh mulu huuft dasar gasuh, terus kamu siap siap lawfest yang tbtb diubah jadi lfc. kamu lumayan capek hrs kerja di both gasuh sm lfc",
    "2024-11-07": "di minggu2 ini kamu selalu curhat misuh ttg kanay WKWKWK jujur aku lama lama jg kesel sm dia WKWKWK",
    "2024-11-15": "KAMU MAIN KE BANDUNG!!!! kita strolling around bandung ,main ke pvj, nonton wanita ahli neraka hehe akhirnya ketemu lagii kangen bgt sm km ",
    "2024-11-19": "kamu lagi acara gasuh mengajar, lagi pengabdian ke panti ya klo gasalah? hihi lucu cewek akuuu keren bgttt!",
    "2024-12-07": "BULAN INI KM SANGAT BANYAK SELFIE trs kirim ke aku OMG CANTIK BGT AKU SUKAAAAAAAA tolong lah plis bgt hrs perbanyak pap ke aku hehe!",
    "2024-12-15": "aku lagi uas, dan siap2 mau ketemu kamu hehehe, gi bljr sgt keras biar ga remed dan bs plg cepattt!",
    "2024-12-23": "kita main lagi!! setelah sekian lama!! hehe senengg!! nonton horor barenggg, mam barenggg dan main sampe malemmm trs pacaran nakal dikit di mobil hehehe so funnn i love you syggg",
    "2024-12-24": "aku culik kamu malem-malem sebelum km berangkat ke bali hehe, kt ke indomart trs makan ketan susu trs KT CIUMAN DIJALAN WKWKWKWK",
    "2024-12-25": "kamu berangkat ke bali huhu, see you mingdep sayangku!"
  };
  
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  
  let currentYear = 2024; // Set initial year to 2024
  let currentMonth = 4; // Set initial month to May (index 4)
  
  // Fungsi untuk mengisi dropdown tahun
  function populateYearDropdown(startYear, endYear) {
    const yearSelect = document.getElementById("year-select");
    yearSelect.innerHTML = ""; // Bersihkan dropdown jika ada isian sebelumnya
    for (let year = startYear; year <= endYear; year++) {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    }
    yearSelect.value = currentYear; // Set tahun saat ini sebagai default
  }
  
  // Fungsi untuk membuat kalender
  function generateCalendar(year, month) {
    const calendar = document.getElementById("calendar");
    const monthName = document.getElementById("month-name");
    const yearSelect = document.getElementById("year-select");
  
    // Update judul bulan dan dropdown tahun
    monthName.textContent = monthNames[month];
    yearSelect.value = year;
  
    // Hapus kalender sebelumnya
    calendar.innerHTML = "";
  
    // Hitung jumlah hari dalam bulan
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Isi tanggal kosong sebelum hari pertama
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement("div");
      calendar.appendChild(emptyCell);
    }
  
    // Tambahkan hari dalam bulan
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const dayElement = document.createElement("div");
      dayElement.className = "day";
      dayElement.textContent = day;
  
      if (calendarData[date]) {
        dayElement.classList.add("special");
        dayElement.dataset.date = date;
        dayElement.addEventListener("click", () => showPopup(date));
      }
  
      calendar.appendChild(dayElement);
    }
  }
  
  // Fungsi untuk menampilkan pop-up
  function showPopup(date) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    popupText.textContent = calendarData[date];
    popup.classList.remove("hidden");
  }
  
  // Fungsi untuk menutup pop-up
  document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
  });
  
  document.getElementById("close-popup-btn").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
  });
  
  // Fungsi untuk navigasi bulan
  document.getElementById("prev-month").addEventListener("click", () => {
    if (currentMonth > 4) { // Pastikan bulan tidak lebih kecil dari Mei
      currentMonth--;
      generateCalendar(currentYear, currentMonth);
      updateNavigationButtons(); // Perbarui tombol
    }
  });
  
  document.getElementById("next-month").addEventListener("click", () => {
    if (currentMonth < 11) { // Pastikan bulan tidak lebih besar dari Desember
      currentMonth++;
      generateCalendar(currentYear, currentMonth);
      updateNavigationButtons(); // Perbarui tombol
    }
  });
  
  // Event listener untuk dropdown tahun
  document.getElementById("year-select").addEventListener("change", (event) => {
    currentYear = parseInt(event.target.value, 10);
    generateCalendar(currentYear, currentMonth);
    updateNavigationButtons(); // Perbarui tombol
  });
  
  // Populate dropdown tahun hanya dengan 2024
  populateYearDropdown(2024, 2024);
  
  // Generate kalender awal
  updateNavigationButtons();
  generateCalendar(currentYear, currentMonth);
  
  function updateNavigationButtons() {
    const prevButton = document.getElementById("prev-month");
    const nextButton = document.getElementById("next-month");
  
    // Sembunyikan tombol "Prev" jika di Mei 2024
    if (currentYear === 2024 && currentMonth === 4) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "inline-block";
    }
  
    // Sembunyikan tombol "Next" jika di Desember 2024
    if (currentYear === 2024 && currentMonth === 11) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "inline-block";
    }
  }
  