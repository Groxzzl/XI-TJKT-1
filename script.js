// Sample data for students
const students = [
    { id: 1, name: "Ahmad Rifai", birthDate: "2007-05-15", photo: "https://via.placeholder.com/150" },
    { id: 2, name: "Budi Santoso", birthDate: "2007-08-22", photo: "https://via.placeholder.com/150" },
    { id: 3, name: "Citra Dewi", birthDate: "2007-01-10", photo: "https://via.placeholder.com/150" },
    { id: 4, name: "Dian Permata", birthDate: "2007-12-03", photo: "https://via.placeholder.com/150" },
    { id: 5, name: "Eko Prabowo", birthDate: "2007-03-28", photo: "https://via.placeholder.com/150" },
    { id: 6, name: "Fitriani Nur", birthDate: "2007-07-19", photo: "https://via.placeholder.com/150" },
    { id: 7, name: "Gita Putri", birthDate: "2007-11-11", photo: "https://via.placeholder.com/150" },
    { id: 8, name: "Hadi Suryanto", birthDate: "2007-04-05", photo: "https://via.placeholder.com/150" },
    { id: 9, name: "Indah Lestari", birthDate: "2007-09-30", photo: "https://via.placeholder.com/150" },
    { id: 10, name: "Joko Widodo", birthDate: "2007-02-14", photo: "https://via.placeholder.com/150" },
    { id: 11, name: "Kartika Sari", birthDate: "2007-06-25", photo: "https://via.placeholder.com/150" },
    { id: 12, name: "Lukman Hakim", birthDate: "2007-10-17", photo: "https://via.placeholder.com/150" },
    { id: 13, name: "Mega Pertiwi", birthDate: "2007-12-08", photo: "https://via.placeholder.com/150" },
    { id: 14, name: "Nanda Kusuma", birthDate: "2007-01-29", photo: "https://via.placeholder.com/150" },
    { id: 15, name: "Oka Prasetya", birthDate: "2007-05-07", photo: "https://via.placeholder.com/150" },
    { id: 16, name: "Putri Ayu", birthDate: "2007-08-12", photo: "https://via.placeholder.com/150" },
    { id: 17, name: "Rizky Firmansyah", birthDate: "2007-03-03", photo: "https://via.placeholder.com/150" },
    { id: 18, name: "Santi Wulandari", birthDate: "2007-07-24", photo: "https://via.placeholder.com/150" },
    { id: 19, name: "Taufik Hidayat", birthDate: "2007-11-09", photo: "https://via.placeholder.com/150" },
    { id: 20, name: "Umi Kalsum", birthDate: "2007-04-16", photo: "https://via.placeholder.com/150" },
    { id: 21, name: "Vina Anggraini", birthDate: "2007-09-21", photo: "https://via.placeholder.com/150" },
    { id: 22, name: "Wawan Setiawan", birthDate: "2007-02-27", photo: "https://via.placeholder.com/150" },
    { id: 23, name: "Yuni Pratiwi", birthDate: "2007-06-13", photo: "https://via.placeholder.com/150" }
];

// Sample data for class structure
const classStructure = {
    homeroomTeacher: "Dra. Siti Nurhaliza",
    classPresident: "Ahmad Rifai",
    vicePresident: "Budi Santoso",
    secretary1: "Citra Dewi",
    secretary2: "Dian Permata",
    treasurer1: "Eko Prabowo",
    treasurer2: "Fitriani Nur",
    security: "Gita Putri",
    cleanliness: "Hadi Suryanto",
    scouting: "Indah Lestari",
    ceremony: "Joko Widodo",
    religion: "Kartika Sari"
};

// Sample data for schedules
const picketSchedule = {
    "Senin": ["Ahmad Rifai", "Budi Santoso", "Citra Dewi"],
    "Selasa": ["Dian Permata", "Eko Prabowo", "Fitriani Nur"],
    "Rabu": ["Gita Putri", "Hadi Suryanto", "Indah Lestari"],
    "Kamis": ["Joko Widodo", "Kartika Sari", "Lukman Hakim"],
    "Jumat": ["Mega Pertiwi", "Nanda Kusuma", "Oka Prasetya"]
};

const lessonSchedule = {
    "Senin": [
        { time: "07.00 - 08.40", subject: "Pemrograman Web" },
        { time: "08.40 - 09.20", subject: "Istirahat" },
        { time: "09.20 - 11.00", subject: "Komputer dan Jaringan Dasar" },
        { time: "11.00 - 11.40", subject: "Istirahat" },
        { time: "11.40 - 13.20", subject: "Sistem Komputer" }
    ],
    "Selasa": [
        { time: "07.00 - 08.40", subject: "Dasar Desain Grafis" },
        { time: "08.40 - 09.20", subject: "Istirahat" },
        { time: "09.20 - 11.00", subject: "Matematika" },
        { time: "11.00 - 11.40", subject: "Istirahat" },
        { time: "11.40 - 13.20", subject: "Bahasa Indonesia" }
    ],
    "Rabu": [
        { time: "07.00 - 08.40", subject: "Pemrograman Web" },
        { time: "08.40 - 09.20", subject: "Istirahat" },
        { time: "09.20 - 11.00", subject: "Komputer dan Jaringan Dasar" },
        { time: "11.00 - 11.40", subject: "Istirahat" },
        { time: "11.40 - 13.20", subject: "Pendidikan Pancasila" }
    ],
    "Kamis": [
        { time: "07.00 - 08.40", subject: "Sistem Komputer" },
        { time: "08.40 - 09.20", subject: "Istirahat" },
        { time: "09.20 - 11.00", subject: "Bahasa Inggris" },
        { time: "11.00 - 11.40", subject: "Istirahat" },
        { time: "11.40 - 13.20", subject: "Olahraga" }
    ],
    "Jumat": [] // Empty for Friday (day off)
};

// Sample data for gallery
const galleryPhotos = [
    { id: 1, url: "https://via.placeholder.com/300x200?text=Kegiatan+1", caption: "Kegiatan 1" },
    { id: 2, url: "https://via.placeholder.com/300x200?text=Kegiatan+2", caption: "Kegiatan 2" },
    { id: 3, url: "https://via.placeholder.com/300x200?text=Kegiatan+3", caption: "Kegiatan 3" },
    { id: 4, url: "https://via.placeholder.com/300x200?text=Kegiatan+4", caption: "Kegiatan 4" },
    { id: 5, url: "https://via.placeholder.com/300x200?text=Kegiatan+5", caption: "Kegiatan 5" },
    { id: 6, url: "https://via.placeholder.com/300x200?text=Kegiatan+6", caption: "Kegiatan 6" }
];

// DOM Elements
const studentList = document.getElementById('student-list');
const birthdayStudents = document.getElementById('birthday-students');
const structureContainer = document.querySelector('.structure-container');
const picketContent = document.getElementById('picket-content');
const lessonContent = document.getElementById('lesson-content');
const photoGallery = document.getElementById('photo-gallery');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Render student profiles
    renderStudentProfiles();
    
    // Render birthday students
    renderBirthdayStudents();
    
    // Render class structure
    renderClassStructure();
    
    // Render schedules
    renderPicketSchedule();
    renderLessonSchedule();
    
    // Render gallery
    renderGallery();
    
    // Setup chat functionality
    setupChat();
    
    // Setup navigation
    setupNavigation();
    
    // Setup schedule tabs
    setupScheduleTabs();
});

// Render student profiles
function renderStudentProfiles() {
    studentList.innerHTML = '';
    
    students.forEach(student => {
        const isBirthdayToday = checkBirthdayToday(student.birthDate);
        const studentCard = document.createElement('div');
        studentCard.className = `student-card ${isBirthdayToday ? 'birthday-today' : ''}`;
        studentCard.innerHTML = `
            <img src="${student.photo}" alt="${student.name}">
            <div class="student-info">
                <h3>${student.name}</h3>
                <p>${formatDate(student.birthDate)}</p>
            </div>
        `;
        studentList.appendChild(studentCard);
    });
}

// Render birthday students
function renderBirthdayStudents() {
    birthdayStudents.innerHTML = '';
    
    const todayBirthdayStudents = students.filter(student => 
        checkBirthdayToday(student.birthDate)
    );
    
    if (todayBirthdayStudents.length === 0) {
        birthdayStudents.innerHTML = '<p>Tidak ada ulang tahun hari ini</p>';
        return;
    }
    
    todayBirthdayStudents.forEach(student => {
        const birthdayCard = document.createElement('div');
        birthdayCard.className = 'birthday-card birthday-today';
        birthdayCard.innerHTML = `
            <img src="${student.photo}" alt="${student.name}">
            <h3>${student.name}</h3>
        `;
        birthdayStudents.appendChild(birthdayCard);
    });
}

// Render class structure
function renderClassStructure() {
    structureContainer.innerHTML = `
        <div class="structure-item">
            <h3>Wali Kelas</h3>
            <p>${classStructure.homeroomTeacher}</p>
        </div>
        <div class="structure-item">
            <h3>Ketua Kelas</h3>
            <p>${classStructure.classPresident}</p>
        </div>
        <div class="structure-item">
            <h3>Wakil Ketua</h3>
            <p>${classStructure.vicePresident}</p>
        </div>
        <div class="structure-item">
            <h3>Sekretaris 1</h3>
            <p>${classStructure.secretary1}</p>
        </div>
        <div class="structure-item">
            <h3>Sekretaris 2</h3>
            <p>${classStructure.secretary2}</p>
        </div>
        <div class="structure-item">
            <h3>Bendahara 1</h3>
            <p>${classStructure.treasurer1}</p>
        </div>
        <div class="structure-item">
            <h3>Bendahara 2</h3>
            <p>${classStructure.treasurer2}</p>
        </div>
        <div class="structure-item">
            <h3>Seksi Keamanan</h3>
            <p>${classStructure.security}</p>
        </div>
        <div class="structure-item">
            <h3>Seksi Kebersihan</h3>
            <p>${classStructure.cleanliness}</p>
        </div>
        <div class="structure-item">
            <h3>Seksi Kepramukaan</h3>
            <p>${classStructure.scouting}</p>
        </div>
        <div class="structure-item">
            <h3>Seksi Upacara</h3>
            <p>${classStructure.ceremony}</p>
        </div>
        <div class="structure-item">
            <h3>Seksi Keagamaan</h3>
            <p>${classStructure.religion}</p>
        </div>
    `;
}

// Render picket schedule
function renderPicketSchedule() {
    picketContent.innerHTML = '';
    
    for (const [day, students] of Object.entries(picketSchedule)) {
        const daySchedule = document.createElement('div');
        daySchedule.className = 'day-schedule';
        daySchedule.innerHTML = `
            <h3>${day}</h3>
            <ul>
                ${students.map(student => `<li>${student}</li>`).join('')}
            </ul>
        `;
        picketContent.appendChild(daySchedule);
    }
}

// Render lesson schedule
function renderLessonSchedule() {
    lessonContent.innerHTML = '';
    
    for (const [day, subjects] of Object.entries(lessonSchedule)) {
        const daySchedule = document.createElement('div');
        daySchedule.className = 'day-schedule';
        
        if (subjects.length === 0) {
            daySchedule.innerHTML = `
                <h3>${day}</h3>
                <p>Hari libur</p>
            `;
        } else {
            daySchedule.innerHTML = `
                <h3>${day}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Waktu</th>
                            <th>Mata Pelajaran</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${subjects.map(subject => `
                            <tr>
                                <td>${subject.time}</td>
                                <td>${subject.subject}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        }
        
        lessonContent.appendChild(daySchedule);
    }
}

// Render gallery
function renderGallery() {
    photoGallery.innerHTML = '';
    
    galleryPhotos.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${photo.url}" alt="${photo.caption}">
        `;
        photoGallery.appendChild(galleryItem);
    });
}

// Setup chat functionality
function setupChat() {
    // Load chat messages from localStorage
    loadChatMessages();
    
    // Send message when button is clicked
    sendButton.addEventListener('click', sendMessage);
    
    // Send message when Enter key is pressed
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Send message
function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message) {
        const timestamp = new Date();
        const messageData = {
            content: message,
            timestamp: timestamp.getTime(),
            own: true
        };
        
        // Save message to localStorage
        saveChatMessage(messageData);
        
        // Clear input
        messageInput.value = '';
        
        // Refresh chat display
        loadChatMessages();
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Save chat message to localStorage
function saveChatMessage(message) {
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Load chat messages from localStorage
function loadChatMessages() {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    chatMessages.innerHTML = '';
    
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.own ? 'own' : ''}`;
        messageElement.innerHTML = `
            <div class="message-content">${message.content}</div>
            <div class="message-time">${formatTime(new Date(message.timestamp))}</div>
        `;
        chatMessages.appendChild(messageElement);
    });
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Scroll to section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Setup schedule tabs
function setupScheduleTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding pane
            document.getElementById(`${tabName}-content`).classList.add('active');
        });
    });
}

// Helper functions
function checkBirthdayToday(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    return today.getDate() === birth.getDate() && 
           today.getMonth() === birth.getMonth();
}

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Update birthday display every minute
setInterval(() => {
    renderBirthdayStudents();
    renderStudentProfiles();
}, 60000);
