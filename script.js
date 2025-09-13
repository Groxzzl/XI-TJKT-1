// Sample data for students (remains the same)
const students = [
  {
    id: 1,
    name: "Ahmad Rifai",
    birthDate: "2007-09-13",
    photo: "https://groxzzl.github.io/pagesft/arya/arya3.webp",
  },
  {
    id: 2,
    name: "Budi Santoso",
    birthDate: "2007-09-13",
    photo: "https://groxzzl.github.io/pagesft/lukman/lukman1.webp",
  },
  {
    id: 3,
    name: "Citra Dewi",
    birthDate: "2007-01-10",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Dian Permata",
    birthDate: "2007-12-03",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Eko Prabowo",
    birthDate: "2007-03-28",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Fitriani Nur",
    birthDate: "2007-07-19",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Gita Putri",
    birthDate: "2007-11-11",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Hadi Suryanto",
    birthDate: "2007-04-05",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Indah Lestari",
    birthDate: "2007-09-30",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Joko Widodo",
    birthDate: "2007-02-14",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Kartika Sari",
    birthDate: "2007-06-25",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Lukman Hakim",
    birthDate: "2007-10-17",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "Mega Pertiwi",
    birthDate: "2007-12-08",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "Nanda Kusuma",
    birthDate: "2007-01-29",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Oka Prasetya",
    birthDate: "2007-05-07",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    name: "Putri Ayu",
    birthDate: "2007-08-12",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "Rizky Firmansyah",
    birthDate: "2007-03-03",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "Santi Wulandari",
    birthDate: "2007-07-24",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "Taufik Hidayat",
    birthDate: "2007-11-09",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "Umi Kalsum",
    birthDate: "2007-04-16",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 21,
    name: "Vina Anggraini",
    birthDate: "2007-09-21",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 22,
    name: "Wawan Setiawan",
    birthDate: "2007-02-27",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 23,
    name: "Yuni Pratiwi",
    birthDate: "2007-06-13",
    photo: "https://via.placeholder.com/150",
  },
];

// Sample data for class structure (Hierarchical)
const classStructure = {
  topRoles: [{ position: "Wali Kelas", name: "Burhanudin S.Kom" }],
  mainOfficers: [
    { position: "Ketua Kelas", name: "Calista Lutfi Arindi" },
    { position: "Wakil Ketua", name: "Reza" },
  ],
  coreTeam: [
    { position: "Sekretaris 1", name: "Citra Dewi" },
    { position: "Sekretaris 2", name: "Dian Permata" },
    { position: "Bendahara 1", name: "Eko Prabowo" },
    { position: "Bendahara 2", name: "Fitriani Nur" },
  ],
  sections: [
    { position: "Seksi Keamanan", name: "Gita Putri" },
    { position: "Seksi Kebersihan", name: "Hadi Suryanto" },
    { position: "Seksi Kepramukaan", name: "Indah Lestari" },
    { position: "Seksi Upacara", name: "Joko Widodo" },
    { position: "Seksi Keagamaan", name: "Kartika Sari" },
  ],
};

// Sample data for schedules (remains the same)
const picketSchedule = {
  Senin: ["Ahmad Rifai", "Budi Santoso", "Citra Dewi"],
  Selasa: ["Dian Permata", "Eko Prabowo", "Fitriani Nur"],
  Rabu: ["Gita Putri", "Hadi Suryanto", "Indah Lestari"],
  Kamis: ["Joko Widodo", "Kartika Sari", "Lukman Hakim"],
  Jumat: ["Mega Pertiwi", "Nanda Kusuma", "Oka Prasetya"],
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

// Sample data for gallery (remains the same)
const galleryPhotos = [
  {
    id: 1,
    url: "https://via.placeholder.com/300x200?text=Kegiatan+1",
    caption: "Kegiatan 1",
  },
  {
    id: 2,
    url: "https://via.placeholder.com/300x200?text=Kegiatan+2",
    caption: "Kegiatan 2",
  },
  {
    id: 3,
    url: "https://via.placeholder.com/300x200?text=Kegiatan+3",
    caption: "Kegiatan 3",
  },
  {
    id: 4,
    url: "https://via.placeholder.com/300x200?text=Kegiatan+4",
    caption: "Kegiatan 4",
  },
  {
    id: 5,
    url: "https://via.placeholder.com/300x200?text=Kegiatan+5",
    caption: "Kegiatan 5",
  },
  {
    id: 6,
    url: "https://via.placeholder.com/300x200?text=Kegiatan+6",
    caption: "Kegiatan 6",
  },
];

// Helper functions
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

// --- RENDER FUNCTIONS ---

function renderStudentProfiles() {
  const studentList = document.getElementById("student-list");
  studentList.innerHTML = "";
  students.forEach((student) => {
    const isBirthday = checkBirthdayToday(student.birthDate);
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-6";
    col.innerHTML = `
            <div class="card h-100 shadow-sm student-card ${isBirthday ? "birthday-today" : ""}">
                <img src="${student.photo}" class="card-img-top" alt="${student.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${student.name}</h5>
                    <p class="card-text small text-muted">${formatDate(student.birthDate)}</p>
                </div>
            </div>
        `;
    studentList.appendChild(col);
  });
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
  container.innerHTML = ""; // Clear previous content

  // Helper to create a card column
  const createCardColumn = (position, name, colClasses, cardClasses = "") => {
    return `
            <div class="${colClasses}">
                <div class="card h-100 shadow-sm text-center ${cardClasses}">
                    <div class="card-body d-flex flex-column justify-content-center p-3">
                        <h5 class="card-title ${cardClasses.includes("bg-primary") ? "text-white" : "text-primary"} mb-1">${position}</h5>
                        <p class="card-text mt-1 mb-0">${name}</p>
                    </div>
                </div>
            </div>
        `;
  };

  // Top Role (Wali Kelas)
  let topRoleHtml = classStructure.topRoles
    .map((role) =>
      createCardColumn(
        role.position,
        role.name,
        "col-md-8 col-lg-6",
        "bg-primary text-white",
      ),
    )
    .join("");
  container.innerHTML += `<div class="row justify-content-center mb-4">${topRoleHtml}</div>`;

  // Main Officers (Ketua & Wakil)
  let mainOfficersHtml = classStructure.mainOfficers
    .map((role) => createCardColumn(role.position, role.name, "col-md-5"))
    .join("");
  container.innerHTML += `<div class="row justify-content-center mb-5 g-4">${mainOfficersHtml}</div>`;

  // Core Team (Secretaris & Bendahara)
  container.innerHTML += '<hr class="my-4">';
  let coreTeamHtml = classStructure.coreTeam
    .map((role) =>
      createCardColumn(role.position, role.name, "col-md-6 col-lg-3"),
    )
    .join("");
  container.innerHTML += `<div class="row justify-content-center g-4 mb-5">${coreTeamHtml}</div>`;

  // Sections
  container.innerHTML +=
    '<h4 class="text-center text-muted mb-4">Seksi-Seksi</h4>';
  let sectionsHtml = classStructure.sections
    .map((role) =>
      createCardColumn(
        role.position,
        role.name,
        "col-lg col-md-4 col-sm-6",
        "bg-light",
      ),
    )
    .join("");
  container.innerHTML += `<div class="row g-3">${sectionsHtml}</div>`;
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

    col.innerHTML = `
            <div class="day-schedule h-100">
                <h5 class="text-primary">${day}</h5>
                <ul class="list-unstyled mb-0">${listItems}</ul>
            </div>
        `;
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

    let tableRows = lessons
      .map(
        (lesson) => `
            <tr>
                <td class="text-muted">${lesson.time}</td>
                <td>${lesson.subject}</td>
            </tr>
        `,
      )
      .join("");

    if (lessons.length === 0) {
      tableRows =
        '<tr><td colspan="2" class="text-center text-muted">Hari libur</td></tr>';
    }

    col.innerHTML = `
            <div class="day-schedule">
                <h5 class="text-primary">${day}</h5>
                <div class="table-responsive">
                    <table class="table table-striped mb-0">
                        <tbody>${tableRows}</tbody>
                    </table>
                </div>
            </div>
        `;
    row.appendChild(col);
  }
  container.appendChild(row);
}

function renderGallery() {
  const container = document.getElementById("photo-gallery");
  container.innerHTML = "";
  galleryPhotos.forEach((photo) => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6";
    col.innerHTML = `
            <div class="card gallery-item shadow-sm">
                <img src="${photo.url}" class="img-fluid" alt="${photo.caption}">
            </div>
        `;
    container.appendChild(col);
  });
}

// --- INITIALIZATION ---

document.addEventListener("DOMContentLoaded", function () {
  renderStudentProfiles();
  renderBirthdayStudents();
  renderClassStructure();
  renderPicketSchedule();
  renderLessonSchedule();
  renderGallery();

  // Update birthday display every minute
  setInterval(() => {
    renderBirthdayStudents();
    renderStudentProfiles();
  }, 60000);
});
