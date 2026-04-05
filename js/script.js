// HealthBridge - Main JavaScript File

// Global State
const state = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  language: localStorage.getItem("language") || "en",
  doctors: JSON.parse(localStorage.getItem("doctors")) || generateMockDoctors(),
  appointments: JSON.parse(localStorage.getItem("appointments")) || [],
  records: JSON.parse(localStorage.getItem("records")) || generateMockRecords(),
};

// Mock Data Generators
function generateMockDoctors() {
  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
  ];
  const doctors = [];
  for (let i = 1; i <= 10; i++) {
    doctors.push({
      id: i,
      name: `Dr. ${["Ahmed", "Sara", "Mohammed", "Fatima", "Ali"][Math.floor(Math.random() * 5)]} ${["Smith", "Johnson", "Williams", "Brown"][Math.floor(Math.random() * 4)]}`,
      specialty: specialties[Math.floor(Math.random() * specialties.length)],
      experience: Math.floor(Math.random() * 20) + 5,
      rating: (Math.random() * 2 + 3).toFixed(1),
      available: Math.random() > 0.3,
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
    });
  }
  localStorage.setItem("doctors", JSON.stringify(doctors));
  return doctors;
}

function generateMockRecords() {
  return [
    {
      id: 1,
      date: "2024-03-15",
      type: "Lab Results",
      title: "Blood Test",
      doctor: "Dr. Ahmed Smith",
      status: "Normal",
    },
    {
      id: 2,
      date: "2024-03-10",
      type: "Prescription",
      title: "Antibiotics",
      doctor: "Dr. Sara Johnson",
      status: "Active",
    },
    {
      id: 3,
      date: "2024-02-28",
      type: "Diagnosis",
      title: "Annual Checkup",
      doctor: "Dr. Mohammed Williams",
      status: "Completed",
    },
  ];
}

// Translations
const translations = {
  en: {
    home: "Home",
    doctors: "Doctors",
    appointments: "Appointments",
    records: "Medical Records",
    support: "Support",
    login: "Login",
    signup: "Sign Up",
    logout: "Logout",
    welcome: "Welcome to HealthBridge",
    subtitle:
      "Your health, our priority. Book appointments and access your medical records easily.",
    searchPlaceholder: "Search doctors or departments...",
    emergency: "Emergency",
    bookAppointment: "Book Appointment",
    specialties: "Our Specialties",
    upcoming: "Upcoming Appointments",
    noAppointments: "No upcoming appointments",
    profile: "Profile",
    settings: "Settings",
    language: "Language",
    save: "Save Changes",
    cancel: "Cancel",
    confirm: "Confirm",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    download: "Download PDF",
    send: "Send",
    typeMessage: "Type your message...",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    aboutUs: "About Us",
    findDoctor: "Find a Doctor",
    departments: "Departments",
    services: "Our Services",
  },
  ar: {
    home: "الرئيسية",
    doctors: "الأطباء",
    appointments: "المواعيد",
    records: "السجلات الطبية",
    support: "الدعم",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    logout: "تسجيل الخروج",
    welcome: "مرحباً بك في HealthBridge",
    subtitle: "صحتك، أولويتنا. احجز مواعيدك واطلع على سجلاتك الطبية بسهولة.",
    searchPlaceholder: "ابحث عن طبيب أو قسم...",
    emergency: "طوارئ",
    bookAppointment: "حجز موعد",
    specialties: "تخصصاتنا",
    upcoming: "المواعيد القادمة",
    noAppointments: "لا توجد مواعيد قادمة",
    profile: "الملف الشخصي",
    settings: "الإعدادات",
    language: "اللغة",
    save: "حفظ التغييرات",
    cancel: "إلغاء",
    confirm: "تأكيد",
    delete: "حذف",
    edit: "تعديل",
    view: "عرض",
    download: "تحميل PDF",
    send: "إرسال",
    typeMessage: "اكتب رسالتك...",
    quickLinks: "روابط سريعة",
    contactUs: "اتصل بنا",
    aboutUs: "من نحن",
    findDoctor: "ابحث عن طبيب",
    departments: "الأقسام",
    services: "خدماتنا",
  },
};

// Initialize App
document.addEventListener("DOMContentLoaded", function () {
  initLanguage();
  checkAuth();
  setupNavigation();
  setupEventListeners();
  loadPageSpecificContent();
});

// Language Functions
function initLanguage() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
  updatePageText();
}

function toggleLanguage() {
  state.language = state.language === "en" ? "ar" : "en";
  localStorage.setItem("language", state.language);
  initLanguage();
}

function t(key) {
  return translations[state.language][key] || key;
}

function updatePageText() {
  // Update all elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[state.language][key]) {
      el.textContent = translations[state.language][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[state.language][key]) {
      el.placeholder = translations[state.language][key];
    }
  });
}

// Authentication Functions
function checkAuth() {
  const protectedPages = ["dashboard", "appointments", "records"];
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  if (protectedPages.includes(currentPage) && !state.currentUser) {
    window.location.href = "login.html";
  }

  updateUIForAuth();
}

function updateUIForAuth() {
  const authLinks = document.getElementById("auth-links");
  if (!authLinks) return;

  if (state.currentUser) {
    authLinks.innerHTML = `
      <a href="dashboard.html" class="btn btn-outline">${state.currentUser.name}</a>
      <button onclick="logout()" class="btn btn-secondary">${t("logout")}</button>
    `;
  } else {
    authLinks.innerHTML = `
      <a href="login.html" class="btn btn-outline">${t("login")}</a>
      <a href="login.html#signup" class="btn btn-primary">${t("signup")}</a>
    `;
  }
}

function login(email, password, userType = "patient") {
  // Simulate authentication
  const mockUser = {
    id: 1,
    email: email,
    name: email.split("@")[0],
    type: userType,
    phone: "+1234567890",
  };

  state.currentUser = mockUser;
  localStorage.setItem("currentUser", JSON.stringify(mockUser));
  showToast("Login successful!");
  setTimeout(() => (window.location.href = "dashboard.html"), 1000);
}

function signup(userData) {
  // Simulate registration
  showToast("Account created successfully!");
  setTimeout(() => (window.location.href = "login.html"), 1000);
}

function logout() {
  state.currentUser = null;
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

// Navigation
function setupNavigation() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      document.querySelector(".nav-links").classList.toggle("active");
    });
  }

  // Set active nav link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Page Specific Content
function loadPageSpecificContent() {
  const page = window.location.pathname.split("/").pop();

  switch (page) {
    case "index.html":
    case "":
      loadHomePage();
      break;
    case "doctors.html":
      loadDoctorsPage();
      break;
    case "dashboard.html":
      loadDashboard();
      break;
    case "appointments.html":
      loadAppointments();
      break;
    case "records.html":
      loadRecords();
      break;
  }
}

function loadHomePage() {
  // Load stats
  const statsContainer = document.getElementById("stats");
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="stat-card">
        <h4>50+</h4>
        <p>Expert Doctors</p>
      </div>
      <div class="stat-card">
        <h4>10k+</h4>
        <p>Patients Served</p>
      </div>
      <div class="stat-card">
        <h4>24/7</h4>
        <p>Emergency Care</p>
      </div>
    `;
  }
}

function loadDoctorsPage() {
  const container = document.getElementById("doctors-list");
  if (!container) return;

  renderDoctors(state.doctors);

  // Setup filters
  const specialtyFilter = document.getElementById("specialty-filter");
  if (specialtyFilter) {
    specialtyFilter.addEventListener("change", (e) => {
      const filtered =
        e.target.value === "all"
          ? state.doctors
          : state.doctors.filter((d) => d.specialty === e.target.value);
      renderDoctors(filtered);
    });
  }
}

function renderDoctors(doctors) {
  const container = document.getElementById("doctors-list");
  if (!container) return;

  container.innerHTML = doctors
    .map(
      (doctor) => `
    <div class="doctor-card">
      <div class="doctor-img">👨‍⚕️</div>
      <div class="doctor-info">
        <h3>${doctor.name}</h3>
        <p class="specialty">${doctor.specialty}</p>
        <div class="rating">⭐ ${doctor.rating} (${doctor.experience} years exp)</div>
        <p style="color: ${doctor.available ? "var(--primary)" : "var(--danger)"}">
          ${doctor.available ? "● Available" : "● Not Available"}
        </p>
        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" 
                onclick="bookDoctor(${doctor.id})" ${!doctor.available ? "disabled" : ""}>
          ${t("bookAppointment")}
        </button>
      </div>
    </div>
  `,
    )
    .join("");
}

function loadDashboard() {
  if (!state.currentUser) return;

  // Load user info
  const userInfo = document.getElementById("user-info");
  if (userInfo) {
    userInfo.innerHTML = `
      <h2>Welcome, ${state.currentUser.name}</h2>
      <p>${state.currentUser.email}</p>
    `;
  }

  // Load upcoming appointments
  const upcomingContainer = document.getElementById("upcoming-appointments");
  if (upcomingContainer) {
    const upcoming = state.appointments.filter(
      (a) => new Date(a.date) > new Date(),
    );
    if (upcoming.length === 0) {
      upcomingContainer.innerHTML = `<p class="text-center">${t("noAppointments")}</p>`;
    } else {
      upcomingContainer.innerHTML = upcoming
        .map(
          (appt) => `
        <div class="card">
          <div class="flex justify-between items-center">
            <div>
              <h4>${appt.doctorName}</h4>
              <p>${appt.department} - ${appt.date}</p>
            </div>
            <span class="btn btn-secondary">${appt.time}</span>
          </div>
        </div>
      `,
        )
        .join("");
    }
  }
}

function loadAppointments() {
  // Setup booking form
  const form = document.getElementById("booking-form");
  if (form) {
    // Populate doctors dropdown
    const doctorSelect = document.getElementById("doctor-select");
    if (doctorSelect) {
      doctorSelect.innerHTML =
        '<option value="">Select Doctor</option>' +
        state.doctors
          .map(
            (d) =>
              `<option value="${d.id}">${d.name} - ${d.specialty}</option>`,
          )
          .join("");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const appointment = {
        id: Date.now(),
        doctorId: formData.get("doctor"),
        doctorName: state.doctors.find((d) => d.id == formData.get("doctor"))
          ?.name,
        department: formData.get("department"),
        date: formData.get("date"),
        time: formData.get("time"),
        patientName: formData.get("patientName"),
        notes: formData.get("notes"),
        status: "confirmed",
      };

      state.appointments.push(appointment);
      localStorage.setItem("appointments", JSON.stringify(state.appointments));
      showToast("Appointment booked successfully!");
      form.reset();
    });
  }

  // Load appointment history
  const historyContainer = document.getElementById("appointment-history");
  if (historyContainer) {
    historyContainer.innerHTML = state.appointments
      .map(
        (appt) => `
      <tr>
        <td>${appt.doctorName}</td>
        <td>${appt.department}</td>
        <td>${appt.date}</td>
        <td>${appt.time}</td>
        <td><span class="btn btn-secondary" style="padding: 0.25rem 0.5rem;">${appt.status}</span></td>
        <td>
          <button class="btn btn-danger" onclick="cancelAppointment(${appt.id})">Cancel</button>
        </td>
      </tr>
    `,
      )
      .join("");
  }
}

function loadRecords() {
  const container = document.getElementById("records-list");
  if (!container) return;

  container.innerHTML = state.records
    .map(
      (record) => `
    <div class="card">
      <div class="flex justify-between items-start">
        <div>
          <span class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.875rem;">${record.type}</span>
          <h3 class="mt-1">${record.title}</h3>
          <p class="text-gray-600">${record.doctor} • ${record.date}</p>
        </div>
        <span style="color: ${record.status === "Normal" ? "var(--primary)" : "var(--highlight)"}">
          ${record.status}
        </span>
      </div>
      <div class="mt-2 flex gap-1">
        <button class="btn btn-outline" onclick="viewRecord(${record.id})">${t("view")}</button>
        <button class="btn btn-secondary" onclick="downloadRecord(${record.id})">${t("download")}</button>
      </div>
    </div>
  `,
    )
    .join("");
}

// Actions
function bookDoctor(doctorId) {
  if (!state.currentUser) {
    showToast("Please login first");
    window.location.href = "login.html";
    return;
  }
  window.location.href = `appointments.html?doctor=${doctorId}`;
}

function cancelAppointment(id) {
  if (confirm("Are you sure you want to cancel this appointment?")) {
    state.appointments = state.appointments.filter((a) => a.id !== id);
    localStorage.setItem("appointments", JSON.stringify(state.appointments));
    loadAppointments();
    showToast("Appointment cancelled");
  }
}

function viewRecord(id) {
  const record = state.records.find((r) => r.id === id);
  if (record) {
    showModal(`
      <h2>${record.title}</h2>
      <p><strong>Type:</strong> ${record.type}</p>
      <p><strong>Doctor:</strong> ${record.doctor}</p>
      <p><strong>Date:</strong> ${record.date}</p>
      <p><strong>Status:</strong> ${record.status}</p>
      <p><strong>Details:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `);
  }
}

function downloadRecord(id) {
  showToast("Downloading PDF...");
  setTimeout(() => showToast("Download complete!"), 1500);
}

// Event Listeners
function setupEventListeners() {
  // Login form
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      login(email, password);
    });
  }

  // Signup form
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userData = {
        name: document.getElementById("signup-name").value,
        email: document.getElementById("signup-email").value,
        phone: document.getElementById("signup-phone").value,
        password: document.getElementById("signup-password").value,
        type: document.getElementById("user-type").value,
      };
      signup(userData);
    });
  }

  // Tab switching (Login/Signup)
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document
        .querySelectorAll(".auth-form")
        .forEach((f) => f.classList.add("hidden"));
      document.getElementById(`${tab}-form`).classList.remove("hidden");
    });
  });

  // Search functionality
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = state.doctors.filter(
        (d) =>
          d.name.toLowerCase().includes(query) ||
          d.specialty.toLowerCase().includes(query),
      );
      renderDoctors(filtered);
    });
  }

  // Chat functionality
  const chatForm = document.getElementById("chat-form");
  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("chat-input");
      const message = input.value.trim();
      if (message) {
        addMessage(message, "sent");
        input.value = "";
        // Simulate reply
        setTimeout(() => {
          addMessage(
            "Thank you for your message. A doctor will reply shortly.",
            "received",
          );
        }, 1000);
      }
    });
  }

  // Emergency call
  const emergencyBtn = document.getElementById("emergency-call");
  if (emergencyBtn) {
    emergencyBtn.addEventListener("click", () => {
      if (confirm("Call Emergency Hotline: 911?")) {
        window.location.href = "tel:911";
      }
    });
  }
}

// Utility Functions
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toast.style.background =
    type === "error" ? "var(--danger)" : "var(--text-dark)";
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function showModal(content) {
  const modal = document.createElement("div");
  modal.className = "modal active";
  modal.innerHTML = `
  <div class="modal-content">
    <button class="close-modal" onclick="this.closest('.modal').remove()">&times;</button>
    ${content}
  </div>
`;
  document.body.appendChild(modal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required]");
  let valid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      valid = false;
      input.style.borderColor = "var(--danger)";
    } else {
      input.style.borderColor = "var(--accent)";
    }
  });
  return valid;
}

// Export functions for global access
window.toggleLanguage = toggleLanguage;
window.logout = logout;
window.bookDoctor = bookDoctor;
window.cancelAppointment = cancelAppointment;
window.viewRecord = viewRecord;
window.downloadRecord = downloadRecord;
window.showToast = showToast;
window.showModal = showModal;
