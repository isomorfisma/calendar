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
    "2022-07-31": "Ulang tahun kamu, mau ngucapin tapi gengsi.",
    "2023-02-14": "Valentine pertama kita bersama.",
    "2024-12-25": "Rayakan Natal denganmu, sangat berkesan!"
  };
  
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  
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
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
    updateNavigationButtons(); // Perbarui tombol
  });
  
  document.getElementById("next-month").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
    updateNavigationButtons(); // Perbarui tombol
  });
  
  // Event listener untuk dropdown tahun
  document.getElementById("year-select").addEventListener("change", (event) => {
    currentYear = parseInt(event.target.value, 10);
    generateCalendar(currentYear, currentMonth);
    updateNavigationButtons(); // Perbarui tombol
  });
  
  // Populate dropdown tahun dengan rentang 2020-2030
  populateYearDropdown(2022, 2024);
  
  // Generate kalender awal
  updateNavigationButtons();
  generateCalendar(currentYear, currentMonth);
  

  function updateNavigationButtons() {
    const prevButton = document.getElementById("prev-month");
    const nextButton = document.getElementById("next-month");
  
    // Sembunyikan tombol "Prev" jika di Januari 2022
    if (currentYear === 2022 && currentMonth === 0) {
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