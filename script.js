// --- NAVBAR SCROLL EFFECT ---
document.addEventListener("scroll", () => {
  const nav = document.getElementById("main-nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Data siswa dengan penambahan 'key' untuk mencocokkan dengan backend
const students = [
    { id: 1, name: "Danang", key: "danang", birthDate: "2007-09-13", photo: "https://groxzzl.github.io/pagesft/lukman/lukman1.webp" },
    { id: 2, name: "Abdul", key: "abdul", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 3, name: "Daffa", key: "daffa", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 4, name: "Rafly", key: "rafly", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 5, name: "Farrel", key: "farrel", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 6, name: "Ryan", key: "ryan", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 7, name: "Bagas", key: "bagas", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 8, name: "Wahyu", key: "wahyu", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 9, name: "Hafidz", key: "hafidz", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 10, name: "Fathur", key: "fathur", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 11, name: "Fadhil", key: "fadhil", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 12, name: "Fatih", key: "fatih", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 13, name: "Faras", key: "faras", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 14, name: "Fakhri", key: "fakhri", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 15, name: "Fauzan", key: "fauzan", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 16, name: "Fannan", key: "fannan", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 17, name: "Firdaus", key: "firdaus", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 18, name: "Irfan", key: "irfan", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 19, name: "Ilham", key: "ilham", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 20, name: "Daffa Rafi", key: "daffarafi", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 21, name: "Rafi", key: "rafi", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 22, name: "Rizky", key: "rizky", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 23, name: "Raihan", key: "raihan", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 24, name: "Syahran", key: "syahran", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 25, name: "Zaki", key: "zaki", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 26, name: "Zhafran", key: "zhafran", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 27, name: "Maulana", key: "maulana", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 28, name: "M Hafidz", key: "mhafidz", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 29, name: "M Rizky", key: "mrizky", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 30, name: "Nabil", key: "nabil", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 31, name: "Najwan", key: "najwan", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 32, name: "Naufal", key: "naufal", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 33, name: "Neza", key: "neza", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 34, name: "Oscar", key: "oscar", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
    { id: 35, name: "Putra", key: "putra", birthDate: "2007-01-01", photo: "https://via.placeholder.com/200" },
];


// Contoh data untuk struktur kelas (Hierarkis)
const classStructure = {
  topRoles: [{ position: "Wali Kelas", name: "Burhanudin S.Kom" }],
  mainOfficers: [
    { position: "Ketua Kelas", name: "Calista Lutfi Arindi" },
    { position: "Wakil Ketua", name: "Maulana Riza" },
  ],
  coreTeam: [
    { position: "Sekretaris 1", name: "Risma Ailla Azulla" },
    { position: "Sekretaris 2", name: "Shinta Zahra Aulia" },
    { position: "Bendahara 1", name: "Rizqi Febriana Aulia" },
    { position: "Bendahara 2", name: "Lailatul Magfiroh" },
  ],
  sections: [
    { position: "Seksi Keamanan", name: "Zada, Arfi, Lutfi" },
    { position: "Seksi Kebersihan", name: "Cindy, Diva, Tegar" },
    { position: "Seksi Kepramukaan", name: "Deni, Wahfi, Ilham" },
    { position: "Seksi Upacara", name: "Reffa, Faril, Adit" },
    { position: "Seksi Keagamaan", name: "Abil, Rio, Azzam" },
  ],
};

// Contoh data untuk jadwal (tetap sama)
const picketSchedule = {
  Senin: ["Shinta", "Faril", "Rio", "Wahyu"],
  Selasa: ["Laila", "Abil", "Arfi", "Danang"],
  Rabu: ["Kiky", "Lutfi", "Adit", "Reza"],
  Kamis: ["Ailla", "Wahfi", "Deni", "Zada"],
  Jumat: ["LIBUR"],
  Sabtu: ["Calista", "Tegar", "Ilham", "Diva"],
  Ahad: ["Cindy", "Reffa", "Azzam"],
};

const lessonSchedule = {
  Senin: [
    { time: "07.00 - 08.40", subject: "Pemrograman Web" },
    { time: "08.40 - 09.20", subject: "Istirahat" },
    { time: "09.20 - 11.00", subject: "Komputer dan Jaringan Dasar" },
    { time: "11.00 - 11.40", subject: "Istirahat" },
    { time: "11.40 - 13.20", subject: "Sistem Komputer" },
  ],
  Selasa: [
    { time: "07.00 - 08.40", subject: "Dasar Desain Grafis" },
    { time: "08.40 - 09.20", subject: "Istirahat" },
    { time: "09.20 - 11.00", subject: "Matematika" },
    { time: "11.00 - 11.40", subject: "Istirahat" },
    { time: "11.40 - 13.20", subject: "Bahasa Indonesia" },
  ],
  Rabu: [
    { time: "07.00 - 08.40", subject: "Pemrograman Web" },
    { time: "08.40 - 09.20", subject: "Istirahat" },
    { time: "09.20 - 11.00", subject: "Komputer dan Jaringan Dasar" },
    { time: "11.00 - 11.40", subject: "Istirahat" },
    { time: "11.40 - 13.20", subject: "Pendidikan Pancasila" },
  ],
  Kamis: [
    { time: "07.00 - 08.40", subject: "Sistem Komputer" },
    { time: "08.40 - 09.20", subject: "Istirahat" },
    { time: "09.20 - 11.00", subject: "Bahasa Inggris" },
    { time: "11.00 - 11.40", subject: "Istirahat" },
    { time: "11.40 - 13.20", subject: "Olahraga" },
  ],
  Jumat: [],
  Sabtu: [
    { time: "07.00 - 08.40", subject: "Sistem Komputer" },
    { time: "08.40 - 09.20", subject: "Istirahat" },
    { time: "09.20 - 11.00", subject: "Bahasa Inggris" },
    { time: "11.00 - 11.40", subject: "Istirahat" },
    { time: "11.40 - 13.20", subject: "Olahraga" },
  ],
  Ahad: [
    { time: "07.00 - 08.40", subject: "Sistem Komputer" },
    { time: "08.40 - 09.20", subject: "Istirahat" },
    { time: "09.20 - 11.00", subject: "Bahasa Inggris" },
    { time: "11.00 - 11.40", subject: "Istirahat" },
    { time: "11.40 - 13.20", subject: "Olahraga" },
  ],
};

// Fungsi bantuan
function checkBirthdayToday(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  return (
    today.getDate() === birth.getDate() && today.getMonth() === birth.getMonth()
  );
}

function formatDate(dateString) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
}

// --- FUNGSI RENDER ---

function renderStudentProfiles() {
  const studentList = document.getElementById("student-list");
  studentList.innerHTML = "";
  
  const row = document.createElement("div");
  row.className = "row g-4";
  
  students.forEach((student) => {
    const isBirthday = checkBirthdayToday(student.birthDate);
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3";
    
    // Menambahkan data-student-id pada card utama
    col.innerHTML = `
      <div class="card h-100 shadow-sm student-card ${isBirthday ? "birthday-today" : ""}" data-student-id="${student.key}">
        <img src="${student.photo}" class="card-img-top" alt="${student.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text small text-muted mb-0">${formatDate(student.birthDate)}</p>
        </div>
      </div>
    `;
    
    row.appendChild(col);
  });
  
  studentList.appendChild(row);
}

function renderBirthdayStudents() {
  const birthdayContainer = document.getElementById("birthday-students");
  birthdayContainer.innerHTML = "";
  const birthdayStudents = students.filter((s) =>
    checkBirthdayToday(s.birthDate),
  );

  if (birthdayStudents.length === 0) {
    birthdayContainer.innerHTML =
      '<p class="text-white-50">Tidak ada yang berulang tahun hari ini.</p>';
    return;
  }

  birthdayStudents.forEach((student) => {
    const studentDiv = document.createElement("div");
    studentDiv.className = "text-center birthday-card";
    studentDiv.innerHTML = `
            <img src="${student.photo}" alt="${student.name}" class="rounded-circle mb-2" width="80" height="80">
            <h6 class="mb-0 text-white">${student.name}</h6>
        `;
    birthdayContainer.appendChild(studentDiv);
  });
}

function renderClassStructure() {
  const container = document.getElementById("structure-container");
  container.innerHTML = "";

  const createCardColumn = (position, name, colClasses, cardClasses = "", icon = "") => {
    return `
            <div class="${colClasses}">
                <div class="card h-100 shadow-sm text-center ${cardClasses}">
                    <div class="card-body d-flex flex-column justify-content-center p-3">
                        ${icon ? `<div class="mb-2 icon-container">${icon}</div>` : ""}
                        <h5 class="card-title ${cardClasses.includes("bg-primary") ? "text-white" : "text-primary"} mb-1">${position}</h5>
                        <p class="card-text mt-1 mb-0">${name}</p>
                    </div>
                </div>
            </div>
        `;
  };

  let topRoleHtml = classStructure.topRoles.map((role) => createCardColumn(role.position, role.name, "col-md-8 col-lg-6 mx-auto mb-4", "bg-primary text-white top-role-card", '<i class="fas fa-chalkboard-teacher fa-2x"></i>')).join("");
  container.innerHTML += `<div class="row justify-content-center mb-5"><div class="col-12 text-center mb-4"><h3 class="section-subtitle">Kepemimpinan Kelas</h3></div>${topRoleHtml}</div>`;

  let mainOfficersHtml = classStructure.mainOfficers.map((role) => createCardColumn(role.position, role.name, "col-md-5 mx-auto officer-card mb-4", "", '<i class="fas fa-user-tie fa-2x"></i>')).join("");
  container.innerHTML += `<div class="row justify-content-center mb-5 g-4"><div class="col-12 text-center mb-4"><h3 class="section-subtitle">Pimpinan Utama</h3></div>${mainOfficersHtml}</div>`;

  container.innerHTML += '<div class="row"><div class="col-12 text-center my-4"><h3 class="section-subtitle">Tim Inti</h3></div></div>';
  let coreTeamHtml = classStructure.coreTeam.map((role) => createCardColumn(role.position, role.name, "col-md-6 col-lg-3 mx-auto core-team-card mb-4", "", '<i class="fas fa-users fa-2x"></i>')).join("");
  container.innerHTML += `<div class="row justify-content-center g-4 mb-5">${coreTeamHtml}</div>`;

  container.innerHTML += '<div class="row"><div class="col-12 text-center my-4"><h3 class="section-subtitle">Seksi-Seksi</h3></div></div>';
  let sectionsHtml = classStructure.sections.map((role) => createCardColumn(role.position, role.name, "col-lg-4 col-md-6 col-sm-12 mb-4", "", '<i class="fas fa-tasks fa-2x"></i>')).join("");
  container.innerHTML += `<div class="row g-4">${sectionsHtml}</div>`;
}

function renderPicketSchedule() {
  const container = document.getElementById("picket-content");
  container.innerHTML = "";
  const row = document.createElement("div");
  row.className = "row g-3";

  for (const [day, studentList] of Object.entries(picketSchedule)) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    let listItems = studentList.map((name) => `<li>${name}</li>`).join("");

    col.innerHTML = `<div class="day-schedule h-100"><h5 class="text-primary">${day}</h5><ul class="list-unstyled mb-0">${listItems}</ul></div>`;
    row.appendChild(col);
  }
  container.appendChild(row);
}

function renderLessonSchedule() {
  const container = document.getElementById("lesson-content");
  container.innerHTML = "";
  const row = document.createElement("div");
  row.className = "row g-3";

  for (const [day, lessons] of Object.entries(lessonSchedule)) {
    const col = document.createElement("div");
    col.className = "col-12";

    let tableRows = lessons.map((lesson) => `<tr><td class="text-muted">${lesson.time}</td><td>${lesson.subject}</td></tr>`).join("");
    if (lessons.length === 0) {
      tableRows = '<tr><td colspan="2" class="text-center text-muted">Hari libur</td></tr>';
    }

    col.innerHTML = `<div class="day-schedule"><h5 class="text-primary">${day}</h5><div class="table-responsive"><table class="table table-striped mb-0"><tbody>${tableRows}</tbody></table></div></div>`;
    row.appendChild(col);
  }
  container.appendChild(row);
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", function () {
  tsParticles.load("particles-js", {
    fullScreen: { enable: false },
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } },
    },
    retina_detect: true,
  });

  renderStudentProfiles();
  renderBirthdayStudents();
  renderClassStructure();
  renderPicketSchedule();
  renderLessonSchedule();
  
  // Panggil fungsi baru untuk galeri dinamis
  fetchGalleryData();

  setInterval(() => {
    renderBirthdayStudents();
    renderStudentProfiles();
  }, 60000);
});


// --- FUNGSI BARU UNTUK GALERI DINAMIS & SLIDESHOW ---

async function fetchGalleryData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        
        renderKegiatanGallery(data.gallery_kegiatan || []);
        renderSiswaSlideshows(data);

    } catch (error) {
        console.error("Gagal mengambil data galeri:", error);
    }
}

function renderKegiatanGallery(urls) {
    const galleryContainer = document.getElementById('photo-gallery'); // Targetkan container galeri yang sudah ada
    if (!galleryContainer) {
        console.error("Elemen #photo-gallery tidak ditemukan.");
        return;
    }
    
    galleryContainer.innerHTML = ''; // Kosongkan galeri
    if (urls.length === 0) {
        galleryContainer.innerHTML = '<p class="text-center col-12">Belum ada foto kegiatan.</p>';
        return;
    }

    urls.forEach(url => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 mb-4";
        col.innerHTML = `
            <div class="gallery-item" style="border-radius: 12px; overflow: hidden; border: 1px solid #333;">
                <a href="${url}" data-fancybox="gallery">
                    <img src="${url}" class="img-fluid" alt="Foto Kegiatan" style="width: 100%; height: 200px; object-fit: cover; transition: transform 0.3s ease;">
                </a>
            </div>
        `;
        galleryContainer.appendChild(col);
    });
}

function renderSiswaSlideshows(data) {
    const studentCards = document.querySelectorAll('.student-card');
    studentCards.forEach(card => {
        const studentId = card.dataset.studentId;
        if (!studentId) return;

        const studentKey = `siswa_${studentId}`;
        const urls = data[studentKey];

        const imgElement = card.querySelector('img');
        if (!imgElement) return;

        if (urls && urls.length > 1) {
            const container = document.createElement('div');
            container.className = 'slideshow-container';
            
            urls.forEach((url, index) => {
                const newImg = document.createElement('img');
                newImg.src = url;
                newImg.alt = `Foto ${studentId}`;
                if (index === 0) newImg.classList.add('active');
                container.appendChild(newImg);
            });

            imgElement.replaceWith(container);
            startSlideshow(container);

        } else if (urls && urls.length === 1) {
            imgElement.src = urls[0];
        }
    });
}

function startSlideshow(slideshowContainer) {
    let currentIndex = 0;
    const images = slideshowContainer.querySelectorAll('img');
    if (images.length <= 1) return;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3000);
}