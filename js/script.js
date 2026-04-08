// HealthBridge - Enhanced JavaScript
// Modern healthcare platform with smooth animations and bilingual support
// Performance optimized with debouncing, lazy loading, and efficient event handling

// ========================
// GLOBAL STATE - Optimized
// ========================
const state = {
  currentUser: null,
  language: "en",
  doctors: [],
  appointments: [],
  records: [],
  initialized: false,
};

// ========================
// PERFORMANCE UTILITIES
// ========================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Lazy load images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    },
    { rootMargin: "50px" },
  );

  images.forEach((img) => imageObserver.observe(img));
}

// ========================
// MOCK DATA GENERATORS
// ========================
function generateMockDoctors() {
  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "General Medicine",
    "Gynecology",
    "Ophthalmology",
    "Dentistry",
  ];
  const names = [
    "Dr. Ahmed Hassan",
    "Dr. Sarah Johnson",
    "Dr. Mohammed Ali",
    "Dr. Fatima Al-Rashid",
    "Dr. Omar Khan",
    "Dr. Lisa Smith",
    "Dr. Karim Fayed",
    "Dr. Noura Saeed",
  ];

  return names.map((name, i) => ({
    id: i + 1,
    name: name,
    specialty: specialties[i % specialties.length],
    experience: Math.floor(Math.random() * 15) + 5,
    rating: (Math.random() * 1.5 + 3.5).toFixed(1),
    available: Math.random() > 0.2,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
  }));
}

function generateMockRecords() {
  return [
    {
      id: 1,
      date: "2024-03-15",
      type: "Lab Results",
      title: "Complete Blood Count",
      doctor: "Dr. Ahmed Hassan",
      status: "Normal",
    },
    {
      id: 2,
      date: "2024-03-10",
      type: "Prescription",
      title: "Amoxicillin 500mg",
      doctor: "Dr. Sarah Johnson",
      status: "Active",
    },
    {
      id: 3,
      date: "2024-02-28",
      type: "Diagnosis",
      title: "Annual Physical Exam",
      doctor: "Dr. Mohammed Ali",
      status: "Completed",
    },
    {
      id: 4,
      date: "2024-02-15",
      type: "Imaging",
      title: "Chest X-Ray",
      doctor: "Dr. Fatima Al-Rashid",
      status: "Normal",
    },
  ];
}

// ========================
// TRANSLATIONS - Optimized
// ========================
const translations = {
  en: {
    // Navigation
    home: "Home",
    doctors: "Doctors",
    appointments: "Appointments",
    records: "Medical Records",
    support: "Support",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    login: "Login",
    signUp: "Sign Up",
    logout: "Logout",
    settings: "Settings",

    // Hero
    welcome: "Welcome to HealthBridge",
    subtitle:
      "Your health, our priority. Book appointments and access your medical records easily.",
    searchPlaceholder: "Search doctors or departments...",
    searchDoctors: "Search doctors...",
    emergency: "Emergency",

    // Services
    services: "Our Services",
    servicesSubtitle:
      "Comprehensive healthcare solutions designed for your convenience",
    onlineBooking: "Online Booking",
    onlineBookingDesc:
      "Book appointments with top doctors instantly through our easy-to-use platform.",
    medicalRecords: "Medical Records",
    medicalRecordsDesc:
      "Access your complete medical history, lab results, and prescriptions anytime.",
    twentyFourSevenSupport: "24/7 Support",
    supportDesc:
      "Get assistance anytime with our dedicated support team and live chat.",
    emergencyCare: "Emergency Care",
    emergencyCareDesc:
      "Quick access to emergency services and nearest hospital locations.",

    // Testimonials
    whatPatientsSay: "What Patients Say",
    testimonialsSubtitle:
      "Hear from our satisfied patients about their experience",
    testimonial1:
      '"HealthBridge made it so easy to book my appointment. The interface is clean and intuitive!"',
    testimonial2:
      '"I love being able to access my medical records instantly. Best healthcare app I\'ve used."',
    testimonial3:
      '"The emergency feature gave me peace of mind. Highly recommended for everyone."',

    // CTA
    readyToStart: "Ready to Take Control of Your Health?",
    joinThousands: "Join thousands of patients who trust HealthBridge",
    getStartedToday: "Get Started Today",

    // Footer
    quickLinks: "Quick Links",
    findDoctor: "Find a Doctor",
    bookAppointment: "Book Appointment",
    connectingPatients:
      "Connecting patients with quality healthcare services. Your health journey starts here.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    copyright: "© 2026 HealthBridge. All rights reserved.",

    // Dashboard
    dashboard: "Dashboard",
    dashboardOverview: "Dashboard Overview",
    totalAppointments: "Total Appointments",
    pendingRecords: "Pending Records",
    yourRating: "Your Rating",
    upcoming: "Upcoming Appointments",
    noAppointments: "No upcoming appointments",
    viewAll: "View All",
    needToSeeDoctor: "Need to see a doctor?",
    bookWithSpecialists: "Book an appointment with our top specialists today.",
    bookNow: "Book Now",

    // Doctors
    findDoctor: "Find the right doctor for your needs",
    allSpecialties: "All Specialties",
    availability: "Availability",
    availableNow: "Available Now",
    today: "Today",
    thisWeek: "This Week",
    chooseDepartment: "Choose Department",
    chooseDoctor: "Choose Doctor",
    yearsExp: "years exp",
    available: "Available",
    notAvailable: "Not Available",
    cardiology: "Cardiology",
    dermatology: "Dermatology",
    neurology: "Neurology",
    pediatrics: "Pediatrics",
    orthopedics: "Orthopedics",
    dentistry: "Dentistry",
    ophthalmology: "Ophthalmology",
    gynecology: "Gynecology",

    // About
    ourStory: "Our Story",
    ourMission: "Our Mission",
    ourVision: "Our Vision",
    missionVision: "Mission & Vision",
    ourTeam: "Our Team",
    ourStoryP1:
      "Founded in 2026, HealthBridge was born from a simple idea: healthcare should be accessible, transparent, and patient-centered. We started with a small team of healthcare professionals and technologists who believed that the patient experience could be better.",
    ourStoryP2:
      "Today, we serve thousands of patients, connecting them with top-tier medical professionals and providing tools to manage their health journey.",

    // Contact
    getInTouch: "Get in Touch",
    weLoveToHear:
      "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    firstName: "First Name",
    lastName: "Last Name",
    enterFirstName: "Enter your first name",
    enterLastName: "Enter your last name",
    phoneNumber: "Phone Number",
    enterPhone: "Enter your phone number",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    generalInquiry: "General Inquiry",
    appointmentIssue: "Appointment Issue",
    technicalSupport: "Technical Support",
    feedback: "Feedback",
    visitUs: "Visit Us",
    callUs: "Call Us",
    workingHours: "Working Hours",
    monFri: "Mon - Fri",
    saturday: "Saturday",
    sunday: "Sunday",
    emergencyOnly: "Emergency Only",
    twentyFourSeven: "24/7",
    hospitalAddress: "123 Healthcare Avenue, Medical District, City 12345",

    // Auth
    welcomeBack: "Welcome Back",
    signInToAccess: "Sign in to access your health dashboard",
    emailPhone: "Email / Phone",
    enterEmail: "Enter your email or phone",
    password: "Password",
    enterPassword: "Enter your password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot Password?",
    signIn: "Sign In",
    fullName: "Full Name",
    enterFullName: "Enter your full name",
    userType: "User Type",
    patient: "Patient",
    doctor: "Doctor",
    confirmPassword: "Confirm Password",
    confirmYourPassword: "Confirm your password",
    createAccount: "Create Account",
    orContinueWith: "Or continue with",
    google: "Google",

    // Appointments
    bookAppointment: "Book an Appointment",
    selectDepartment: "Select Department",
    selectDoctor: "Select Doctor",
    preferredDate: "Preferred Date",
    preferredTime: "Preferred Time",
    patientName: "Patient Name",
    additionalNotes: "Additional Notes (Optional)",
    confirmBooking: "Confirm Booking",
    appointmentHistory: "Appointment History",
    noAppointmentsFound: "No appointments found",
    status: "Status",
    actions: "Actions",
    departments: "Departments",

    // Records
    allRecords: "All Records",
    labResults: "Lab Results",
    prescriptions: "Prescriptions",
    diagnoses: "Diagnoses",
    imaging: "Imaging",
    filter: "Filter",
    exportAll: "Export All",
    view: "View",
    download: "Download PDF",
    normal: "Normal",
    active: "Active",
    completed: "Completed",

    // Emergency
    backToHome: "Back to Home",
    nearestHospital: "Nearest Hospital",
    ambulance: "Ambulance",
    poisonControl: "Poison Control",
    firstAid: "First Aid Instructions",
    cpr: "CPR",
    burns: "Burns",
    bleeding: "Bleeding",
    choking: "Choking",
    call911: "CALL 911",
    getDirections: "Get Directions",
    callAmbulance: "Call Ambulance",
    callNow: "Call Now",
    hospitalName: "City General Hospital",
    distance: "0.5 miles away",
    address: "123 Medical Center Dr",
    emergencyLine: "Emergency Line",
    avgResponse: "Avg response",
    poisonHotline: "24/7 Hotline",
    forPoisoning: "For poisoning emergencies",
    whatToDoEmergency:
      "If you are experiencing a life-threatening emergency, call immediately",
    checkResponsiveness: "1. Check responsiveness",
    call911First: "2. Call 911",
    pushHard: "3. Push hard and fast in center of chest",
    useAed: "4. Use AED if available",
    coolWater: "1. Cool with running water",
    coverDressing: "2. Cover with sterile dressing",
    noIce: "3. Do not apply ice",
    seekAttention: "4. Seek medical attention",
    applyPressure: "1. Apply direct pressure",
    elevate: "2. Elevate the wound",
    cleanCloth: "3. Use clean cloth/bandage",
    callIfSevere: "4. Call 911 if severe",
    encourageCough: "1. Encourage coughing",
    heimlich: "2. Perform Heimlich maneuver",
    callUnable: "3. Call 911 if unable to breathe",
    continueHelp: "4. Continue until help arrives",

    // Support
    faq: "Frequently Asked Questions",
    howToBook: "How do I book an appointment?",
    bookAppointmentAnswer:
      "You can book an appointment by visiting the Appointments page, selecting your preferred department and doctor, and choosing an available time slot.",
    accessRecords: "Can I access my medical records online?",
    accessRecordsAnswer:
      "Yes! All your medical records, lab results, and prescriptions are available in the Medical Records section of your dashboard.",
    dataSecure: "Is my data secure?",
    dataSecureAnswer:
      "Absolutely. We use industry-standard encryption and security measures to protect your personal health information.",
    emergencyAnswer:
      "For emergencies, please use the Emergency button on the homepage or call 911 immediately.",
    liveChat: "Live Chat Support",
    healthbridgeSupport: "HealthBridge Support",
    helloHowCanHelp: "Hello! How can I help you today?",
    typeMessage: "Type your message...",
    send: "Send",
    contactInfo: "Contact Information",

    // Settings
    profile: "Profile",
    accountSecurity: "Account & Security",
    notifications: "Notifications",
    privacy: "Privacy",
    appearance: "Appearance",
    languageRegion: "Language & Region",
    dataStorage: "Data & Storage",
    connectedDevices: "Connected Devices",
    activityLog: "Activity Log",
    profileSettings: "Profile Settings",
    displayName: "Display Name",
    dateOfBirth: "Date of Birth",
    bio: "Bio",
    emergencyContact: "Emergency Contact",
    saveChanges: "Save Changes",
    changePassword: "Change Password",
    passwordLastChanged: "Last changed 3 months ago",
    change: "Change",
    twoFactorAuth: "Two-Factor Authentication",
    twoFactorDesc: "Add an extra layer of security to your account",
    loginSecurity: "Login Security",
    emailVerification: "Email Verification",
    emailVerified: "Your email is verified",
    phoneVerification: "Phone Verification",
    phoneNotVerified: "Your phone is not verified",
    verify: "Verify",
    loginAlerts: "Login Alerts",
    loginAlertsDesc: "Get notified of new logins",
    dangerZone: "Danger Zone",
    deactivateAccount: "Deactivate Account",
    deactivateDesc: "Temporarily disable your account",
    deactivate: "Deactivate",
    deleteAccount: "Delete Account",
    deleteAccountDesc: "Permanently delete your account and all data",
    delete: "Delete",
    verified: "Verified",
    notificationPreferences: "Notification Preferences",
    emailNotifications: "Email Notifications",
    emailNotificationsDesc: "Receive updates via email",
    smsNotifications: "SMS Notifications",
    smsNotificationsDesc: "Receive text messages for important updates",
    pushNotifications: "Push Notifications",
    pushNotificationsDesc: "Browser push notifications",
    notificationTypes: "Notification Types",
    appointmentReminders: "Appointment Reminders",
    appointmentRemindersDesc: "Get reminded before your appointments",
    testResults: "Test Results",
    testResultsDesc: "Notify when new test results are available",
    prescriptionAlerts: "Prescription Alerts",
    prescriptionAlertsDesc: "Reminders for prescription refills",
    healthTips: "Health Tips & News",
    healthTipsDesc: "Weekly health tips and news updates",
    marketingEmails: "Marketing Emails",
    marketingEmailsDesc: "Promotional offers and updates",
    privacySettings: "Privacy Settings",
    profileVisibility: "Profile Visibility",
    profileVisibilityDesc: "Who can see your profile information",
    everyone: "Everyone",
    doctorsOnly: "Doctors Only",
    onlyMe: "Only Me",
    shareMedicalRecords: "Share Medical Records",
    shareMedicalRecordsDesc: "Allow doctors to access your records",
    dataAnalytics: "Data Analytics",
    dataAnalyticsDesc: "Help us improve by sharing usage data",
    thirdPartySharing: "Third-Party Sharing",
    thirdPartySharingDesc: "Share data with trusted partners",
    dataManagement: "Data Management",
    downloadData: "Download Your Data",
    downloadDataDesc: "Get a copy of all your personal data",
    download: "Download",
    clearHistory: "Clear Search History",
    clearHistoryDesc: "Remove all your search history",
    clear: "Clear",
    appearanceSettings: "Appearance Settings",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    auto: "Auto",
    compactMode: "Compact Mode",
    compactModeDesc: "Reduce spacing for more content",
    animations: "Animations",
    animationsDesc: "Enable smooth transitions and animations",
    highContrast: "High Contrast",
    highContrastDesc: "Increase contrast for better visibility",
    reducedMotion: "Reduced Motion",
    reducedMotionDesc: "Minimize animations for accessibility",
    languageRegionSettings: "Language & Region Settings",
    language: "Language",
    region: "Region",
    timezone: "Timezone",
    dateFormat: "Date Format",
    timeFormat: "Time Format",
    currency: "Currency",
    dataStorageSettings: "Data & Storage Settings",
    storageUsed: "Storage Used",
    storageUsedDesc: "2.4 GB of 5 GB used",
    manage: "Manage",
    cacheData: "Cache & Data",
    clearCache: "Clear Cache",
    cacheSize: "Cache size: 124 MB",
    offlineMode: "Offline Mode",
    offlineModeDesc: "Download data for offline access",
    autoSync: "Auto Sync",
    autoSyncDesc: "Automatically sync data across devices",
    syncFrequency: "Sync Frequency",
    syncFrequencyDesc: "How often to sync your data",
    realtime: "Real-time",
    hourly: "Every hour",
    daily: "Daily",
    manualOnly: "Manual only",
    currentDevice: "Current Device",
    disconnect: "Disconnect",
    disconnectAllDevices: "Disconnect All Devices",
    successfulLogin: "Successful login",
    appointmentBooked: "Appointment booked",
    passwordChanged: "Password changed",
    profileUpdated: "Profile updated",
    newDevice: "New device connected",
    downloadFullLog: "Download Full Activity Log",
    cancel: "Cancel",
    edit: "Edit",
    twoFactorAuthDisabled: "Two-factor authentication disabled",

    // Misc
    loading: "Loading...",
    expertDoctors: "Expert Doctors",
    patientsServed: "Patients Served",
    emergencyCare24_7: "Emergency Care",
    ourMissionP:
      "Our mission is to empower patients with easy access to healthcare services and information, improving health outcomes through technology.",
    ourVisionP:
      "Our vision is to create a world where everyone has access to quality healthcare, regardless of location or circumstances.",
    supportDescription:
      "We're here to help. Find answers or chat with our support team.",
  },

  ar: {
    // Navigation
    home: "الرئيسية",
    doctors: "الأطباء",
    appointments: "المواعيد",
    records: "السجلات الطبية",
    support: "الدعم",
    aboutUs: "من نحن",
    contactUs: "اتصل بنا",
    login: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    logout: "تسجيل الخروج",
    settings: "الإعدادات",

    // Hero
    welcome: "مرحباً بك في HealthBridge",
    subtitle: "صحتك، أولويتنا. احجز مواعيدك واطلع على سجلاتك الطبية بسهولة.",
    searchPlaceholder: "ابحث عن طبيب أو قسم...",
    searchDoctors: "ابحث عن أطباء...",
    emergency: "طوارئ",

    // Services
    services: "خدماتنا",
    servicesSubtitle: "حلول رعاية صحية شاملة مصممة لراحتك",
    onlineBooking: "الحجز الإلكتروني",
    onlineBookingDesc:
      "احجز مواعيد مع أفضل الأطباء فوراً من خلال منصتنا السهلة الاستخدام.",
    medicalRecords: "السجلات الطبية",
    medicalRecordsDesc:
      "اطلع على تاريخك الطبي الكامل، نتائج المختبر، والوصفات الطبية في أي وقت.",
    twentyFourSevenSupport: "دعم 24/7",
    supportDesc:
      "احصل على المساعدة في أي وقت مع فريق الدعم المخصص لدينا والدردشة المباشرة.",
    emergencyCare: "رعاية الطوارئ",
    emergencyCareDesc: "وصول سريع إلى خدمات الطوارئ ومواقع أقرب المستشفيات.",

    // Testimonials
    whatPatientsSay: "ماذا يقول المرضى",
    testimonialsSubtitle: "استمع إلى مرضانا الراضين عن تجربتهم",
    testimonial1:
      '"جعلتني HealthBridge أحجز موعدي بسهولة. الواجهة نظيفة وبديهية!"',
    testimonial2:
      '"أحب أن أستطيع الوصول إلى سجلاتي الطبية فوراً. أفضل تطبيق رعاية صحية استخدمته."',
    testimonial3: '"منحني ميزة الطوارئ راحة البال. أنصح به بشدة للجميع."',

    // CTA
    readyToStart: "هل أنت مستعد للتحكم في صحتك؟",
    joinThousands: "انضم إلى آلاف المرضى الذين يثقون بـ HealthBridge",
    getStartedToday: "ابدأ اليوم",

    // Footer
    quickLinks: "روابط سريعة",
    findDoctor: "ابحث عن طبيب",
    bookAppointment: "حجز موعد",
    connectingPatients:
      "ربط المرضى بخدمات الرعاية الصحية عالية الجودة. رحلتك الصحية تبدأ هنا.",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",
    copyright: "© 2026 HealthBridge. جميع الحقوق محفوظة.",

    // Dashboard
    dashboard: "لوحة التحكم",
    dashboardOverview: "نظرة عامة على لوحة التحكم",
    totalAppointments: "إجمالي المواعيد",
    pendingRecords: "السجلات المعلقة",
    yourRating: "تقييمك",
    upcoming: "المواعيد القادمة",
    noAppointments: "لا توجد مواعيد قادمة",
    viewAll: "عرض الكل",
    needToSeeDoctor: "تحتاج لزيارة طبيب؟",
    bookWithSpecialists: "احجز موعداً مع أفضل المتخصصين لدينا اليوم.",
    bookNow: "احجز الآن",

    // Doctors
    findDoctor: "ابحث عن الطبيب المناسب لاحتياجاتك",
    allSpecialties: "جميع التخصصات",
    availability: "التوفر",
    availableNow: "متاح الآن",
    today: "اليوم",
    thisWeek: "هذا الأسبوع",
    chooseDepartment: "اختر القسم",
    chooseDoctor: "اختر الطبيب",
    yearsExp: "سنوات خبرة",
    available: "متاح",
    notAvailable: "غير متاح",
    cardiology: "قلب",
    dermatology: "طب الجلد",
    neurology: "مخ وأعصاب",
    pediatrics: "طب الأطفال",
    orthopedics: "طب الجراحة العظمية",
    dentistry: "طب الأسنان",
    ophthalmology: "طب العيون",
    gynecology: "نساء وتوليد",

    // About
    ourStory: "قصتنا",
    ourMission: "رسالتنا",
    ourVision: "رؤيتنا",
    missionVision: "الرسالة والرؤية",
    ourTeam: "فريقنا",
    ourStoryP1:
      "تأسست HealthBridge عام 2026، وولدت من فكرة بسيطة: أن تكون الرعاية الصحية متاحة وشفافة وموجهة نحو المريض. بدأنا بفريق صغير من المتخصصين في الرعاية الصحية وتقنية المعلومات الذين آمنوا بإمكانية تحسين تجربة المريض.",
    ourStoryP2:
      "اليوم، نخدم آلاف المرضى، ونربطهم بأفضل المتخصصين الطبيين ونوفر لهم أدوات لإدارة رحلتهم الصحية.",

    // Contact
    getInTouch: "تواصل معنا",
    weLoveToHear:
      "نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.",
    firstName: "الاسم الأول",
    lastName: "الاسم الأخير",
    enterFirstName: "أدخل اسمك الأول",
    enterLastName: "أدخل اسمك الأخير",
    phoneNumber: "رقم الهاتف",
    enterPhone: "أدخل رقم هاتفك",
    subject: "الموضوع",
    message: "الرسالة",
    sendMessage: "إرسال رسالة",
    generalInquiry: "استفسار عام",
    appointmentIssue: "مشكلة في الموعد",
    technicalSupport: "دعم تقني",
    feedback: "ملاحظات",
    visitUs: "زورنا",
    callUs: "اتصل بنا",
    workingHours: "ساعات العمل",
    monFri: "الإثنين - الجمعة",
    saturday: "السبت",
    sunday: "الأحد",
    emergencyOnly: "طوارئ فقط",
    twentyFourSeven: "24/7",
    hospitalAddress: "123 شارع الرعاية الصحية، حي طبي، المدينة 12345",

    // Auth
    welcomeBack: "مرحباً بعودتك",
    signInToAccess: "سجل الدخول للوصول إلى لوحة التحكم الصحية",
    emailPhone: "البريد الإلكتروني / الهاتف",
    enterEmail: "أدخل بريدك الإلكتروني أو هاتفك",
    password: "كلمة المرور",
    enterPassword: "أدخل كلمة المرور",
    rememberMe: "تذكرني",
    forgotPassword: "نسيت كلمة المرور؟",
    signIn: "تسجيل الدخول",
    fullName: "الاسم الكامل",
    enterFullName: "أدخل اسمك الكامل",
    userType: "نوع المستخدم",
    patient: "مريض",
    doctor: "طبيب",
    confirmPassword: "تأكيد كلمة المرور",
    confirmYourPassword: "أكد كلمة المرور",
    createAccount: "إنشاء حساب",
    orContinueWith: "أو استمر مع",
    google: "جوجل",

    // Appointments
    bookAppointment: "حجز موعد",
    selectDepartment: "اختر القسم",
    selectDoctor: "اختر الطبيب",
    preferredDate: "التاريخ المفضل",
    preferredTime: "الوقت المفضل",
    patientName: "اسم المريض",
    additionalNotes: "ملاحظات إضافية (اختياري)",
    confirmBooking: "تأكيد الحجز",
    appointmentHistory: "تاريخ المواعيد",
    noAppointmentsFound: "لم يتم العثور على مواعيد",
    status: "الحالة",
    actions: "الإجراءات",
    departments: "الأقسام",

    // Records
    allRecords: "جميع السجلات",
    labResults: "نتائج المختبر",
    prescriptions: "الوصفات الطبية",
    diagnoses: "التشخيصات",
    imaging: "الأشعة",
    filter: "تصفية",
    exportAll: "تصدير الكل",
    view: "عرض",
    download: "تحميل PDF",
    normal: "طبيعي",
    active: "نشط",
    completed: "مكتمل",

    // Emergency
    backToHome: "العودة للرئيسية",
    nearestHospital: "أقرب مستشفى",
    ambulance: "سيارة إسعاف",
    poisonControl: "مركز السموم",
    firstAid: "إسعافات أولية",
    cpr: "إنعاش قلبي رئوي",
    burns: "الحروق",
    bleeding: "النزيف",
    choking: "الاختناق",
    call911: "اتصل بـ 911",
    getDirections: "الحصول على الاتجاهات",
    callAmbulance: "استدعاء إسعاف",
    callNow: "اتصل الآن",
    hospitalName: "مستشفى المدينة العام",
    distance: "0.5 ميل",
    address: "123 شارع المستشفى",
    emergencyLine: "خط الطوارئ",
    avgResponse: "متوسط الاستجابة",
    poisonHotline: "خط المساعدة 24/7",
    forPoisoning: "لحالات التسمم الطارئة",
    whatToDoEmergency: "إذا كنت تواجه حالة طوارئ تهدد الحياة، اتصل فوراً",
    checkResponsiveness: "1. تحقق من الاستجابة",
    call911First: "2. اتصل بـ 911",
    pushHard: "3. اضغط بقوة وسرعة على وسط الصدر",
    useAed: "4. استخدم جهاز إزالة الرجفان إذا كان متوفراً",
    coolWater: "1. برد بالماء الجاري",
    coverDressing: "2. غطِ بضمادة معقمة",
    noIce: "3. لا تضع ثلجاً",
    seekAttention: "4. اطلب الرعاية الطبية",
    applyPressure: "1. اضغط مباشرة",
    elevate: "2. ارفع الجرح",
    cleanCloth: "3. استخدم قطعة قماش/ضمادة نظيفة",
    callIfSevere: "4. اتصل بـ 911 إذا كان حاداً",
    encourageCough: "1. شجع على السعال",
    heimlich: "2. قم بمناورة هايمليك",
    callUnable: "3. اتصل بـ 911 إذا كان غير قادر على التنفس",
    continueHelp: "4. استمر حتى وصول المساعدة",

    // Support
    faq: "الأسئلة الشائعة",
    howToBook: "كيف أحجز موعداً؟",
    bookAppointmentAnswer:
      "يمكنك حجز موعد بزيارة صفحة المواعيد، واختيار القسم والطبيب المفضل، وتحديد وقت متاح.",
    accessRecords: "هل يمكنني الوصول إلى سجلاتي الطبية عبر الإنترنت؟",
    accessRecordsAnswer:
      "نعم! جميع سجلاتك الطبية ونتائج المختبر والوصفات الطبية متاحة في قسم السجلات الطبية في لوحة التحكم.",
    dataSecure: "هل بياناتي آمنة؟",
    dataSecureAnswer:
      "بالتأكيد. نحن نستخدم تشفيراً وإجراءات أمان على مستوى الصناعة لحماية معلوماتك الصحية الشخصية.",
    emergencyAnswer:
      "للحالات الطارئة، يرجى استخدام زر الطوارئ في الصفحة الرئيسية أو الاتصال بـ 911 فوراً.",
    liveChat: "الدردشة المباشرة",
    healthbridgeSupport: "دعم HealthBridge",
    helloHowCanHelp: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
    typeMessage: "اكتب رسالتك...",
    send: "إرسال",
    contactInfo: "معلومات الاتصال",

    // Settings
    profile: "الملف الشخصي",
    accountSecurity: "الحساب والأمان",
    notifications: "الإشعارات",
    privacy: "الخصوصية",
    appearance: "المظهر",
    languageRegion: "اللغة والمنطقة",
    dataStorage: "البيانات والتخزين",
    connectedDevices: "الأجهزة المتصلة",
    activityLog: "سجل النشاط",
    profileSettings: "إعدادات الملف الشخصي",
    displayName: "اسم العرض",
    dateOfBirth: "تاريخ الميلاد",
    bio: "نبذة",
    emergencyContact: "جهة اتصال الطوارئ",
    saveChanges: "حفظ التغييرات",
    changePassword: "تغيير كلمة المرور",
    passwordLastChanged: "آخر تغيير قبل 3 أشهر",
    change: "تغيير",
    twoFactorAuth: "المصادقة الثنائية",
    twoFactorDesc: "أضف طبقة أمان إضافية لحسابك",
    loginSecurity: "أمان تسجيل الدخول",
    emailVerification: "التحقق من البريد الإلكتروني",
    emailVerified: "بريدك الإلكتروني مُحقق",
    phoneVerification: "التحقق من الهاتف",
    phoneNotVerified: "هاتفك غير مُحقق",
    verify: "تحقق",
    loginAlerts: "تنبيهات تسجيل الدخول",
    loginAlertsDesc: "احصل على إشعارات عند تسجيل دخول جديد",
    dangerZone: "منطقة الخطر",
    deactivateAccount: "تعطيل الحساب",
    deactivateDesc: "تعطيل حسابك مؤقتاً",
    deactivate: "تعطيل",
    deleteAccount: "حذف الحساب",
    deleteAccountDesc: "حذف حسابك وبياناتك نهائياً",
    delete: "حذف",
    verified: "مُحقق",
    notificationPreferences: "تفضيلات الإشعارات",
    emailNotifications: "إشعارات البريد الإلكتروني",
    emailNotificationsDesc: "استلام التحديثات عبر البريد",
    smsNotifications: "إشعارات الرسائل القصيرة",
    smsNotificationsDesc: "استلام رسائل نصية للتحديثات المهمة",
    pushNotifications: "إشعارات الدفع",
    pushNotificationsDesc: "إشعارات المتصفح",
    notificationTypes: "أنواع الإشعارات",
    appointmentReminders: "تذكيرات المواعيد",
    appointmentRemindersDesc: "تذكير قبل مواعيدك",
    testResults: "نتائج الفحوصات",
    testResultsDesc: "إشعار عند توفر نتائج جديدة",
    prescriptionAlerts: "تنبيهات الوصفات",
    prescriptionAlertsDesc: "تذكيرات لإعادة تعبئة الوصفات",
    healthTips: "نصائح وأخبار صحية",
    healthTipsDesc: "نصائح صحية وتحديثات أسبوعية",
    marketingEmails: "رسائل تسويقية",
    marketingEmailsDesc: "عروض ترويجية وتحديثات",
    privacySettings: "إعدادات الخصوصية",
    profileVisibility: "رؤية الملف الشخصي",
    profileVisibilityDesc: "من يمكنه رؤية معلومات ملفك",
    everyone: "الجميع",
    doctorsOnly: "الأطباء فقط",
    onlyMe: "أنا فقط",
    shareMedicalRecords: "مشاركة السجلات الطبية",
    shareMedicalRecordsDesc: "السماح للأطباء بالوصول لسجلاتك",
    dataAnalytics: "تحليلات البيانات",
    dataAnalyticsDesc: "ساعدنا في التحسين بمشاركة بيانات الاستخدام",
    thirdPartySharing: "المشاركة مع طرف ثالث",
    thirdPartySharingDesc: "مشاركة البيانات مع شركاء موثوقين",
    dataManagement: "إدارة البيانات",
    downloadData: "تحميل بياناتك",
    downloadDataDesc: "احصل على نسخة من جميع بياناتك الشخصية",
    download: "تحميل",
    clearHistory: "مسح سجل البحث",
    clearHistoryDesc: "إزالة جميع سجل البحث",
    clear: "مسح",
    appearanceSettings: "إعدادات المظهر",
    theme: "السمة",
    light: "فاتح",
    dark: "داكن",
    auto: "تلقائي",
    compactMode: "الوضع المدمج",
    compactModeDesc: "تقليل المسافات لمحتوى أكثر",
    animations: "الرسوم المتحركة",
    animationsDesc: "تفعيل الانتقالات السلسة والرسوم المتحركة",
    highContrast: "تباين عالي",
    highContrastDesc: "زيادة التباين لرؤية أفضل",
    reducedMotion: "حركة مخفضة",
    reducedMotionDesc: "تقليل الرسوم المتحركة لإمكانية الوصول",
    languageRegionSettings: "إعدادات اللغة والمنطقة",
    language: "اللغة",
    region: "المنطقة",
    timezone: "المنطقة الزمنية",
    dateFormat: "تنسيق التاريخ",
    timeFormat: "تنسيق الوقت",
    currency: "العملة",
    dataStorageSettings: "إعدادات البيانات والتخزين",
    storageUsed: "التخزين المستخدم",
    storageUsedDesc: "2.4 جيجابايت من 5 جيجابايت",
    manage: "إدارة",
    cacheData: "ذاكرة التخزين المؤقت والبيانات",
    clearCache: "مسح ذاكرة التخزين",
    cacheSize: "حجم الذاكرة: 124 ميجابايت",
    offlineMode: "وضع عدم الاتصال",
    offlineModeDesc: "تحميل البيانات للوصول بدون إنترنت",
    autoSync: "المزامنة التلقائية",
    autoSyncDesc: "مزامنة البيانات تلقائياً عبر الأجهزة",
    syncFrequency: "تكرار المزامنة",
    syncFrequencyDesc: "كم مرة تتم مزامنة بياناتك",
    realtime: "في الوقت الفعلي",
    hourly: "كل ساعة",
    daily: "يومياً",
    manualOnly: "يدوي فقط",
    currentDevice: "الجهاز الحالي",
    disconnect: "فصل",
    disconnectAllDevices: "فصل جميع الأجهزة",
    successfulLogin: "تسجيل دخول ناجح",
    appointmentBooked: "تم حجز موعد",
    passwordChanged: "تم تغيير كلمة المرور",
    profileUpdated: "تم تحديث الملف الشخصي",
    newDevice: "جهاز جديد متصل",
    downloadFullLog: "تحميل سجل النشاط الكامل",
    cancel: "إلغاء",
    edit: "تعديل",
    twoFactorAuthDisabled: "تم تعطيل المصادقة الثنائية",

    // Misc
    loading: "جاري التحميل...",
    expertDoctors: "أطباء خبراء",
    patientsServed: "مرضى تم خدمتهم",
    emergencyCare24_7: "رعاية طوارئ 24/7",
    ourMissionP:
      "مهمتنا هي تمكين المرضى من الوصول السهل إلى خدمات الرعاية الصحية والمعلومات، وتحسين النتائج الصحية من خلال التكنولوجيا.",
    ourVisionP:
      "رؤيتنا هي خلق عالم يتمتع فيه الجميع بإمكانية الوصول إلى رعاية صحية عالية الجودة، بغض النظر عن الموقع أو الظروف.",
    supportDescription:
      "نحن هنا للمساعدة. ابحث عن إجابات أو تحدث مع فريق الدعم الخاص بنا.",
  },
};

// ========================
// INITIALIZATION - Optimized
// ========================
document.addEventListener("DOMContentLoaded", function () {
  // Initialize state from localStorage
  initState();

  // Initialize language
  initLanguage();

  // Check authentication
  checkAuth();

  // Setup navigation
  setupNavigation();

  // Setup event listeners
  setupEventListeners();

  // Load page specific content
  loadPageSpecificContent();

  // Translate static content
  translateStaticContent();

  // Initialize map
  initMap();

  // Setup scroll effects
  setupScrollEffects();

  // Apply saved theme
  applySavedTheme();

  // Lazy load images
  lazyLoadImages();

  // Mark as initialized
  state.initialized = true;
});

function initState() {
  try {
    state.currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
    state.language = localStorage.getItem("language") || "en";
    state.doctors =
      JSON.parse(localStorage.getItem("doctors")) || generateMockDoctors();
    state.appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    state.records =
      JSON.parse(localStorage.getItem("records")) || generateMockRecords();

    // Save doctors if not exists
    if (!localStorage.getItem("doctors")) {
      localStorage.setItem("doctors", JSON.stringify(state.doctors));
    }
  } catch (e) {
    console.error("Error initializing state:", e);
    // Fallback to defaults
    state.doctors = generateMockDoctors();
    state.records = generateMockRecords();
  }
}

// ========================
// LANGUAGE FUNCTIONS
// ========================
function initLanguage() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
}

function toggleLanguage() {
  state.language = state.language === "en" ? "ar" : "en";
  localStorage.setItem("language", state.language);
  initLanguage();
  translateStaticContent();
  updateUIForAuth();
  loadPageSpecificContent();
  showToast(state.language === "ar" ? "تم تغيير اللغة" : "Language changed");
}

function t(key) {
  return translations[state.language]?.[key] || key;
}

function translateStaticContent() {
  // Use requestAnimationFrame for better performance
  requestAnimationFrame(() => {
    // Translate elements with data-translate
    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.getAttribute("data-translate");
      const translation = translations[state.language]?.[key];
      if (translation) {
        el.textContent = translation;
      }
    });

    // Translate placeholders
    document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-translate-placeholder");
      const translation = translations[state.language]?.[key];
      if (translation) {
        el.placeholder = translation;
      }
    });
  });
}

// ========================
// AUTHENTICATION
// ========================
function checkAuth() {
  const protectedPages = ["dashboard", "appointments", "records", "settings"];
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  if (protectedPages.includes(currentPage) && !state.currentUser) {
    // Store intended page for redirect after login
    sessionStorage.setItem("redirectAfterLogin", window.location.href);
    window.location.href = "login.html";
    return false;
  }

  updateUIForAuth();
  return true;
}

function updateUIForAuth() {
  const authLinks = document.getElementById("auth-links");
  if (!authLinks) return;

  if (state.currentUser) {
    authLinks.innerHTML = `
      <div class="user-nav-group">
        <a href="settings.html" class="settings-icon-btn" title="${t("settings")}">⚙️</a>
        <a href="dashboard.html" class="btn btn-outline">${escapeHtml(state.currentUser.name)}</a>
        <button onclick="logout()" class="btn btn-secondary">${t("logout")}</button>
      </div>
    `;
  } else {
    authLinks.innerHTML = `
      <a href="login.html" class="btn btn-outline">${t("login")}</a>
      <a href="login.html#signup" class="btn btn-primary">${t("signUp")}</a>
    `;
  }
}

function login(email, password, userType = "patient") {
  // Validate inputs
  if (!email || !password) {
    showToast("Please enter both email and password", "error");
    return;
  }

  const mockUser = {
    id: Date.now(),
    email: email,
    name: email.split("@")[0] || "User",
    type: userType,
    phone: "+1234567890",
  };

  state.currentUser = mockUser;
  localStorage.setItem("currentUser", JSON.stringify(mockUser));
  showToast(t("welcomeBack"));

  // Check for redirect
  const redirectUrl = sessionStorage.getItem("redirectAfterLogin");
  sessionStorage.removeItem("redirectAfterLogin");

  setTimeout(() => {
    window.location.href = redirectUrl || "dashboard.html";
  }, 1000);
}

function signup(userData) {
  // Validate
  if (!userData.name || !userData.email || !userData.password) {
    showToast("Please fill in all required fields", "error");
    return;
  }

  if (userData.password !== userData.confirmPassword) {
    showToast("Passwords do not match", "error");
    return;
  }

  showToast(
    state.language === "ar"
      ? "تم إنشاء الحساب بنجاح!"
      : "Account created successfully!",
  );
  setTimeout(() => (window.location.href = "login.html"), 1000);
}

function logout() {
  state.currentUser = null;
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

// ========================
// NAVIGATION - Optimized
// ========================
function setupNavigation() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");
  const navbar = document.getElementById("navbar");

  if (mobileMenuBtn && navMenu) {
    // Toggle menu
    mobileMenuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isActive = navMenu.classList.toggle("active");

      // Toggle icon
      mobileMenuBtn.innerHTML = isActive ? "&#10005;" : "&#9776;";
      mobileMenuBtn.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileMenuBtn.innerHTML = "&#9776;";
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          mobileMenuBtn.innerHTML = "&#9776;";
          mobileMenuBtn.setAttribute("aria-expanded", "false");
        }
      }
    });

    // Handle escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        mobileMenuBtn.innerHTML = "&#9776;";
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Highlight current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Navbar scroll effect - throttled for performance
  if (navbar) {
    const handleScroll = throttle(() => {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
  }
}

// ========================
// SCROLL EFFECTS - Optimized
// ========================
function setupScrollEffects() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) return;

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards
  document.querySelectorAll(".card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });
}

// ========================
// THEME FUNCTIONS
// ========================
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  const savedCompact = localStorage.getItem("compactMode") === "true";
  const savedHighContrast = localStorage.getItem("highContrast") === "true";
  const savedReducedMotion = localStorage.getItem("reducedMotion") === "true";

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-theme");
  }

  if (savedCompact) {
    document.body.classList.add("compact-mode");
  }

  if (savedHighContrast) {
    document.body.classList.add("high-contrast");
  }

  if (savedReducedMotion) {
    document.body.classList.add("reduced-motion");
  }
}

// ========================
// PAGE SPECIFIC CONTENT
// ========================
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
    case "about.html":
      // About page specific logic if needed
      break;
    case "settings.html":
      loadSettings();
      break;
    case "settings.html": // Call settings-specific JS after loading settings
      loadSettingsPageSpecificJs();
      break;
  }
}

function loadHomePage() {
  // Update stats
  const statsContainer = document.getElementById("stats");
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="stat-card">
        <h4>50+</h4>
        <p>${t("expertDoctors")}</p>
      </div>
      <div class="stat-card" style="background: linear-gradient(135deg, var(--secondary) 0%, #0284c7 100%);">
        <h4>10k+</h4>
        <p>${t("patientsServed")}</p>
      </div>
      <div class="stat-card" style="background: linear-gradient(135deg, var(--accent) 0%, #d97706 100%); color: white;">
        <h4>24/7</h4>
        <p>${t("emergencyCare24_7")}</p>
      </div>
    `;
  }
}

function loadDoctorsPage() {
  const container = document.getElementById("doctors-list");
  if (!container) return;

  renderDoctors(state.doctors);

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

  // Use DocumentFragment for better performance
  const fragment = document.createDocumentFragment();

  doctors.forEach((doctor) => {
    const card = document.createElement("div");
    card.className = "doctor-card";
    card.innerHTML = `
      <div class="doctor-img">👨‍⚕️</div>
      <div class="doctor-info">
        <h3>${escapeHtml(doctor.name)}</h3>
        <p class="specialty">${escapeHtml(t(doctor.specialty.toLowerCase()) || doctor.specialty)}</p>
        <div class="rating">⭐ ${doctor.rating} (${doctor.experience} ${t("yearsExp")})</div>
        <p style="color: ${doctor.available ? "var(--success)" : "var(--danger)"}; font-weight: 500; margin-bottom: 1rem;">
          ${doctor.available ? `● ${t("available")}` : `● ${t("notAvailable")}`}
        </p>
        <button class="btn btn-primary" style="width: 100%; margin-top: auto;" 
                onclick="bookDoctor(${doctor.id})" ${!doctor.available ? "disabled" : ""}>
          ${t("bookAppointment")}
        </button>
      </div>
    `;
    fragment.appendChild(card);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
}

function loadDashboard() {
  if (!state.currentUser) return;

  const nameEl = document.getElementById("dashboard-user-name");
  const emailEl = document.getElementById("dashboard-user-email");

  if (nameEl) {
    nameEl.textContent =
      state.language === "ar"
        ? "مرحباً، " + escapeHtml(state.currentUser.name)
        : "Welcome, " + escapeHtml(state.currentUser.name);
  }
  if (emailEl) {
    emailEl.textContent = escapeHtml(state.currentUser.email);
  }

  // Update stat labels
  const statLabels = document.querySelectorAll(".stat-label");
  if (statLabels.length >= 3) {
    statLabels[0].textContent = t("totalAppointments");
    statLabels[1].textContent = t("pendingRecords");
    statLabels[2].textContent = t("yourRating");
  }

  const upcomingContainer = document.getElementById("upcoming-appointments");
  if (upcomingContainer) {
    const upcoming = state.appointments.filter(
      (a) => new Date(a.date) > new Date(),
    );
    if (upcoming.length === 0) {
      upcomingContainer.innerHTML = `<p class="text-center" style="color: var(--text-muted); padding: 2rem;">${t("noAppointments")}</p>`;
    } else {
      const fragment = document.createDocumentFragment();
      upcoming.forEach((appt) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.marginBottom = "1rem";
        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h4 style="font-weight: 600;">${escapeHtml(appt.doctorName)}</h4>
              <p style="color: var(--text-muted); font-size: 0.9rem;">${escapeHtml(appt.department)} - ${appt.date}</p>
            </div>
            <span class="btn btn-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">${appt.time}</span>
          </div>
        `;
        fragment.appendChild(card);
      });
      upcomingContainer.innerHTML = "";
      upcomingContainer.appendChild(fragment);
    }
  }

  // Update section headers
  const upcomingHeader = document.getElementById("upcoming-header");
  if (upcomingHeader) upcomingHeader.textContent = t("upcoming");

  const recentRecordsHeader = document.getElementById("recent-records-header");
  if (recentRecordsHeader)
    recentRecordsHeader.textContent = t("medicalRecords");

  const viewAllBtns = document.querySelectorAll(".view-all-btn");
  viewAllBtns.forEach((btn) => (btn.textContent = t("viewAll")));

  const needDoctorText = document.getElementById("need-doctor-text");
  if (needDoctorText) needDoctorText.textContent = t("needToSeeDoctor");

  const bookSpecialistsText = document.getElementById("book-specialists-text");
  if (bookSpecialistsText)
    bookSpecialistsText.textContent = t("bookWithSpecialists");

  const bookNowBtn = document.getElementById("book-now-btn");
  if (bookNowBtn) bookNowBtn.textContent = t("bookNow");
}

function loadAppointments() {
  const form = document.getElementById("booking-form");
  if (form) {
    // Populate doctor select
    const doctorSelect = document.getElementById("doctor-select");
    if (doctorSelect) {
      doctorSelect.innerHTML =
        `<option value="">${t("chooseDoctor")}</option>` +
        state.doctors
          .map(
            (d) =>
              `<option value="${d.id}">${escapeHtml(d.name)} - ${escapeHtml(t(d.specialty.toLowerCase()) || d.specialty)}</option>`,
          )
          .join("");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const doctor = state.doctors.find((d) => d.id == formData.get("doctor"));

      if (!doctor) {
        showToast("Please select a doctor", "error");
        return;
      }

      const appointment = {
        id: Date.now(),
        doctorId: formData.get("doctor"),
        doctorName: doctor.name,
        department: formData.get("department"),
        date: formData.get("date"),
        time: formData.get("time"),
        patientName: formData.get("patientName"),
        notes: formData.get("notes"),
        status: "confirmed",
      };

      state.appointments.push(appointment);
      localStorage.setItem("appointments", JSON.stringify(state.appointments));
      showToast(
        state.language === "ar"
          ? "تم حجز الموعد بنجاح!"
          : "Appointment booked successfully!",
      );
      form.reset();
      loadAppointments();
    });
  }

  const historyHeader = document.getElementById("appointment-history-header");
  if (historyHeader) historyHeader.textContent = t("appointmentHistory");

  const historyContainer = document.getElementById("appointment-history");
  if (historyContainer) {
    if (state.appointments.length === 0) {
      historyContainer.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-muted);">${t("noAppointmentsFound")}</td>
        </tr>
      `;
    } else {
      const fragment = document.createDocumentFragment();
      state.appointments.forEach((appt) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${escapeHtml(appt.doctorName)}</td>
          <td>${escapeHtml(appt.department)}</td>
          <td>${appt.date}</td>
          <td>${appt.time}</td>
          <td><span class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">${appt.status}</span></td>
          <td>
            <button class="btn btn-danger" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;" onclick="cancelAppointment(${appt.id})">${t("cancel")}</button>
          </td>
        `;
        fragment.appendChild(row);
      });
      historyContainer.innerHTML = "";
      historyContainer.appendChild(fragment);
    }
  }

  // Update table headers
  const ths = document.querySelectorAll("thead th");
  if (ths.length >= 6) {
    ths[0].textContent = t("doctors");
    ths[1].textContent = t("departments");
    ths[2].textContent = t("preferredDate");
    ths[3].textContent = t("preferredTime");
    ths[4].textContent = t("status");
    ths[5].textContent = t("actions");
  }
}

function loadRecords() {
  const container = document.getElementById("records-list");
  if (!container) return;

  // Update filter buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (filterBtns.length >= 5) {
    filterBtns[0].textContent = t("allRecords");
    filterBtns[1].textContent = t("labResults");
    filterBtns[2].textContent = t("prescriptions");
    filterBtns[3].textContent = t("diagnoses");
    filterBtns[4].textContent = t("imaging");
  }

  const exportBtn = document.getElementById("export-btn");
  if (exportBtn) exportBtn.textContent = t("exportAll");

  const filterBtn = document.getElementById("filter-btn");
  if (filterBtn) filterBtn.textContent = t("filter");

  const fragment = document.createDocumentFragment();

  state.records.forEach((record) => {
    let typeKey = "";
    if (record.type === "Lab Results") typeKey = "labResults";
    else if (record.type === "Prescription") typeKey = "prescriptions";
    else if (record.type === "Diagnosis") typeKey = "diagnoses";
    else if (record.type === "Imaging") typeKey = "imaging";

    let statusKey = "";
    if (record.status === "Normal") statusKey = "normal";
    else if (record.status === "Active") statusKey = "active";
    else if (record.status === "Completed") statusKey = "completed";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <span class="btn btn-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.875rem; display: inline-block; margin-bottom: 0.5rem;">${t(typeKey) || record.type}</span>
          <h3 style="margin-top: 0.5rem;">${escapeHtml(record.title)}</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">${escapeHtml(record.doctor)} • ${record.date}</p>
        </div>
        <span style="color: ${record.status === "Normal" ? "var(--success)" : "var(--secondary)"}; font-weight: 600;">
          ${t(statusKey) || record.status}
        </span>
      </div>
      <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
        <button class="btn btn-outline" style="padding: 0.375rem 0.75rem; font-size: 0.875rem;" onclick="viewRecord(${record.id})">${t("view")}</button>
        <button class="btn btn-secondary" style="padding: 0.375rem 0.75rem; font-size: 0.875rem;" onclick="downloadRecord(${record.id})">${t("download")}</button>
      </div>
    `;
    fragment.appendChild(card);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
}

function loadSettings() {
  // Load user data into profile form
  if (state.currentUser) {
    const nameParts = state.currentUser.name
      ? state.currentUser.name.split(" ")
      : ["", ""];
    const firstNameInput = document.getElementById("profile-firstname");
    const lastNameInput = document.getElementById("profile-lastname");
    const emailInput = document.getElementById("profile-email-input");
    const displayNameInput = document.getElementById("profile-display");

    if (firstNameInput) firstNameInput.value = nameParts[0] || "";
    if (lastNameInput) lastNameInput.value = nameParts.slice(1).join(" ") || "";
    if (emailInput) emailInput.value = state.currentUser.email || "";
    if (displayNameInput) displayNameInput.value = state.currentUser.name || "";
  }

  // Set language selector
  const langSelect = document.getElementById("settings-language");
  if (langSelect) {
    langSelect.value = state.language;
  }
}

// ========================
// ACTIONS
// ========================
function bookDoctor(doctorId) {
  if (!state.currentUser) {
    showToast(t("login"));
    window.location.href = "login.html";
    return;
  }
  window.location.href = `appointments.html?doctor=${doctorId}`;
}

function cancelAppointment(id) {
  if (
    confirm(
      state.language === "ar"
        ? "هل أنت متأكد من إلغاء هذا الموعد؟"
        : "Are you sure you want to cancel this appointment?",
    )
  ) {
    state.appointments = state.appointments.filter((a) => a.id !== id);
    localStorage.setItem("appointments", JSON.stringify(state.appointments));
    renderAppointmentHistory(); // Call the specific history renderer
    showToast(
      state.language === "ar" ? "تم إلغاء الموعد" : "Appointment cancelled",
    );
  }
}

function viewRecord(id) {
  const record = state.records.find((r) => r.id === id);
  if (record) {
    const title = state.language === "ar" ? "تفاصيل السجل" : "Record Details";
    const typeLabel = state.language === "ar" ? "النوع" : "Type";
    const doctorLabel = state.language === "ar" ? "الطبيب" : "Doctor";
    const dateLabel = state.language === "ar" ? "التاريخ" : "Date";
    const statusLabel = state.language === "ar" ? "الحالة" : "Status";
    const detailsLabel = state.language === "ar" ? "التفاصيل" : "Details";
    const details =
      state.language === "ar"
        ? "تم الفحص بعناية. النتائج في النطاق الطبيعي."
        : "Carefully examined. Results are within normal range.";

    showModal(`
      <h2 style="margin-bottom: 1rem;">${escapeHtml(record.title)}</h2>
      <p style="margin-bottom: 0.5rem;"><strong>${typeLabel}:</strong> ${escapeHtml(record.type)}</p>
      <p style="margin-bottom: 0.5rem;"><strong>${doctorLabel}:</strong> ${escapeHtml(record.doctor)}</p>
      <p style="margin-bottom: 0.5rem;"><strong>${dateLabel}:</strong> ${record.date}</p>
      <p style="margin-bottom: 0.5rem;"><strong>${statusLabel}:</strong> ${record.status}</p>
      <p><strong>${detailsLabel}:</strong> ${details}</p>
    `);
  }
}

function downloadRecord(id) {
  showToast(
    state.language === "ar" ? "جاري تحميل PDF..." : "Downloading PDF...",
  );
  setTimeout(
    () =>
      showToast(
        state.language === "ar" ? "اكتمل التحميل!" : "Download complete!",
      ),
    1500,
  );
}

// ========================
// EVENT LISTENERS - Optimized
// ========================
function setupEventListeners() {
  // Login form
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email")?.value?.trim();
      const password = document.getElementById("password")?.value;
      login(email, password);
    });
  }

  // Signup form
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userData = {
        name: document.getElementById("signup-name")?.value?.trim(),
        email: document.getElementById("signup-email")?.value?.trim(),
        phone: document.getElementById("signup-phone")?.value?.trim(),
        password: document.getElementById("signup-password")?.value,
        confirmPassword: signupForm.querySelector(
          'input[type="password"]:nth-of-type(2)',
        )?.value,
        type: document.getElementById("user-type")?.value || "patient",
      };
      signup(userData);
    });
  }

  // Tab switching
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
      const targetForm = document.getElementById(`${tab}-form`);
      if (targetForm) targetForm.classList.remove("hidden");
    });
  });

  // Handle URL hash for login/signup tab switching
  if (
    window.location.pathname.includes("login.html") &&
    window.location.hash === "#signup"
  ) {
    document.querySelector('[data-tab="signup"]')?.click();
  }

  // Search functionality - debounced for performance
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    const debouncedSearch = debounce((e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = state.doctors.filter(
        (d) =>
          d.name.toLowerCase().includes(query) ||
          d.specialty.toLowerCase().includes(query),
      );
      renderDoctors(filtered);
    }, 300);

    searchInput.addEventListener("input", debouncedSearch);
  }

  // Chat functionality
  const chatForm = document.getElementById("chat-form");
  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("chat-input-field");
      const message = input?.value?.trim();
      if (message) {
        addChatMessage(message, "sent");
        input.value = "";
        setTimeout(() => {
          addChatMessage(
            t("helloHowCanHelp"),
            "received",
            "HealthBridge Support",
          );
        }, 1000);
      }
    });
  }

  // Emergency call
  const emergencyBtn = document.getElementById("emergency-call");
  if (emergencyBtn) {
    emergencyBtn.addEventListener("click", () => {
      const confirmMsg =
        state.language === "ar"
          ? "الاتصال بخط الطوارئ: 911؟"
          : "Call Emergency Hotline: 911?";
      if (confirm(confirmMsg)) {
        window.location.href = "tel:911";
      }
    });
  }

  // Contact form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast(
        state.language === "ar"
          ? "تم إرسال رسالتك بنجاح!"
          : "Your message has been sent successfully!",
      );
      contactForm.reset();
    });
  }
}

function addChatMessage(text, type, sender = "") {
  const container = document.getElementById("chat-messages");
  if (!container) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${type}`;
  if (sender && type === "received") {
    msgDiv.innerHTML = `<strong>${escapeHtml(sender)}</strong><br>${escapeHtml(text)}`;
  } else {
    msgDiv.textContent = text;
  }
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

// ========================
// UTILITY FUNCTIONS
// ========================

// XSS Protection - Escape HTML
function escapeHtml(text) {
  if (typeof text !== "string") return text;
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Toast notification with queue management
let toastQueue = [];
let toastTimeout = null;

function showToast(message, type = "success") {
  // Add to queue
  toastQueue.push({ message, type });

  // Process queue
  processToastQueue();
}

function processToastQueue() {
  if (toastTimeout || toastQueue.length === 0) return;

  const { message, type } = toastQueue.shift();

  // Remove existing toast
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
      toastTimeout = null;
      processToastQueue();
    }, 300);
  }, 3000);
}

function showModal(content) {
  // Remove existing modal
  const existing = document.querySelector(".modal");
  if (existing) existing.remove();

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

  // Close on escape key
  const closeOnEscape = (e) => {
    if (e.key === "Escape") {
      modal.remove();
      document.removeEventListener("keydown", closeOnEscape);
    }
  };
  document.addEventListener("keydown", closeOnEscape);
}

// ========================
// MAP INITIALIZATION
// ========================
function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer || typeof L === "undefined") return;

  const hospitalLat = 29.312139;
  const hospitalLng = 30.856225;

  try {
    const map = L.map("map").setView([hospitalLat, hospitalLng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const popupContent =
      state.language === "ar"
        ? "<b>مركز HealthBridge الطبي</b><br>١٢٣ شارع الرعاية الصحية"
        : "<b>HealthBridge Medical Center</b><br>123 Healthcare Avenue";

    L.marker([hospitalLat, hospitalLng])
      .addTo(map)
      .bindPopup(popupContent)
      .openPopup();
  } catch (e) {
    console.error("Map initialization error:", e);
    mapContainer.innerHTML =
      '<p style="text-align: center; padding: 2rem;">Map loading...</p>';
  }
}

// ========================
// SETTINGS PAGE FUNCTIONS
// ========================
function loadSettingsPageSpecificJs() {
  // Load last visited section
  const lastSection = localStorage.getItem("lastSettingsSection");
  if (lastSection) {
    showSettingsSection(lastSection);
  }

  // Load profile data
  loadProfileData();

  // Load notification preferences
  loadNotificationPrefs();

  // Load theme preference
  loadThemePreference();

  // Profile form submission
  document
    .getElementById("profile-form")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();

      const userData = {
        name:
          document.getElementById("profile-firstname").value +
          " " +
          document.getElementById("profile-lastname").value,
        email: document.getElementById("profile-email-input").value,
        phone: document.getElementById("profile-phone").value,
        displayName: document.getElementById("profile-display").value,
        dob: document.getElementById("profile-dob").value,
        bio: document.getElementById("profile-bio").value,
        emergencyContact: document.getElementById("profile-emergency").value,
      };

      // Update current user
      const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
      Object.assign(currentUser, userData);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      showToast("Profile updated successfully!");
    });
}

function showSettingsSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".settings-section").forEach((section) => {
    section.classList.remove("active");
  });

  // Show selected section
  document.getElementById(sectionId + "-section").classList.add("active");

  // Update sidebar active state
  document.querySelectorAll(".settings-nav a").forEach((link) => {
    link.classList.remove("active");
  });
  document
    .querySelector(`[data-section="${sectionId}"]`)
    .classList.add("active");

  // Save to localStorage
  localStorage.setItem("lastSettingsSection", sectionId);
}

function loadProfileData() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    document.getElementById("profile-name").textContent = user.name || "User";
    document.getElementById("profile-email").textContent = user.email || "";
  }
}

// Notification preferences
function saveNotificationPref(type, enabled) {
  const prefs = JSON.parse(localStorage.getItem("notificationPrefs")) || {};
  prefs[type] = enabled;
  localStorage.setItem("notificationPrefs", JSON.stringify(prefs));
  showToast(
    `${type.charAt(0).toUpperCase() + type.slice(1)} notifications ${enabled ? "enabled" : "disabled"}`,
  );
}

function loadNotificationPrefs() {
  const prefs = JSON.parse(localStorage.getItem("notificationPrefs")) || {};
  if (prefs.email !== undefined)
    document.getElementById("notif-email").checked = prefs.email;
  if (prefs.sms !== undefined)
    document.getElementById("notif-sms").checked = prefs.sms;
  if (prefs.push !== undefined)
    document.getElementById("notif-push").checked = prefs.push;
}

// Theme settings
function setTheme(theme, element) {
  // Update UI
  document
    .querySelectorAll(".theme-option")
    .forEach((opt) => opt.classList.remove("active"));
  element.classList.add("active");

  // Save preference
  localStorage.setItem("theme", theme);

  // Apply theme
  if (theme === "dark") {
    document.documentElement.classList.add("dark-theme");
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark-theme");
  } else {
    // Auto - check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }

  showToast(`Theme set to ${theme}`);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("theme") || "light";
  const themeOption = document.querySelector(
    `.theme-option:nth-child(${savedTheme === "light" ? 1 : savedTheme === "dark" ? 2 : 3})`,
  );
  if (themeOption) {
    setTheme(savedTheme, themeOption);
  }
}

// 2FA toggle
function toggle2FA(checkbox) {
  if (checkbox.checked) {
    showModal(`
      <h3>🔐 ${t("twoFactorAuth")}</h3>
      <p style="margin: 1rem 0;">${t("twoFactorDesc")}</p>
      <div style="width: 200px; height: 200px; background: #f1f5f9; margin: 1rem auto; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
        <span style="font-size: 4rem;">📱</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.9rem;">${t("orContinueWith")} <strong>ABCD-EFGH-IJKL-MNOP</strong></p>
      <div style="margin-top: 1.5rem;">
        <button class="btn btn-primary" onclick="this.closest('.modal').remove(); showToast('2FA enabled successfully!')" style="width: 100%;">${t("verify")} ${t("andEnable")}</button>
      </div>
    `);
  } else {
    showToast(t("twoFactorAuthDisabled"));
  }
}

// Phone verification
function verifyPhone() {
  showModal(`
    <h3>📱 ${t("phoneVerification")}</h3>
    <p style="margin: 1rem 0;">${t("enter6DigitCode")}</p>
    <div class="form-group">
      <input type="text" maxlength="6" placeholder="000000" style="text-align: center; font-size: 1.5rem; letter-spacing: 0.5rem;">
    </div>
    <button class="btn btn-primary" onclick="this.closest('.modal').remove(); showToast('Phone verified successfully!')" style="width: 100%;">${t("verify")}</button>
    <p style="text-align: center; margin-top: 1rem; color: var(--text-muted);">${t("didntReceiveCode")} <a href="#" onclick="showToast('Code resent!'); return false;">${t("resend")}</a></p>
  `);
}

// Account actions
function deactivateAccount() {
  if (confirm(t("deactivateAccountConfirm"))) {
    showToast(t("accountDeactivated"));
    setTimeout(() => logout(), 2000);
  }
}

function deleteAccount() {
  if (confirm(t("deleteAccountWarning"))) {
    if (confirm(t("deleteAccountConfirm"))) {
      localStorage.clear();
      showToast(t("accountDeleted"));
      setTimeout(() => (window.location.href = "index.html"), 2000);
    }
  }
}

// Data management
function downloadUserData() {
  showToast(t("preparingDataDownload"));
  setTimeout(() => {
    showToast(t("dataDownloaded"));
  }, 2000);
}

function clearSearchHistory() {
  if (confirm(t("clearSearchHistoryConfirm"))) {
    localStorage.removeItem("searchHistory");
    showToast(t("searchHistoryCleared"));
  }
}

// Appearance settings
function toggleCompactMode(enabled) {
  document.body.classList.toggle("compact-mode", enabled);
  localStorage.setItem("compactMode", enabled);
  showToast(t("compactMode") + ` ${enabled ? t("enabled") : t("disabled")}`);
}

function toggleAnimations(enabled) {
  document.body.classList.toggle("no-animations", !enabled);
  localStorage.setItem("animations", enabled);
  showToast(t("animations") + ` ${enabled ? t("enabled") : t("disabled")}`);
}

function toggleHighContrast(enabled) {
  document.body.classList.toggle("high-contrast", enabled);
  localStorage.setItem("highContrast", enabled);
  showToast(t("highContrast") + ` ${enabled ? t("enabled") : t("disabled")}`);
}

function toggleReducedMotion(enabled) {
  document.body.classList.toggle("reduced-motion", enabled);
  localStorage.setItem("reducedMotion", enabled);
  showToast(t("reducedMotion") + ` ${enabled ? t("enabled") : t("disabled")}`);
}

// Language change from settings dropdown
function setLanguageFromSettings(lang) {
  state.language = lang;
  localStorage.setItem("language", lang);
  initLanguage();
  translateStaticContent();
  showToast(t("languageChangedTo") + ` ${lang.toUpperCase()}`);
}

// Storage management
function manageStorage() {
  showModal(`
    <h3>💾 ${t("manageStorage")}</h3>
    <div style="margin: 1.5rem 0;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
        <span>${t("documents")}</span>
        <span>1.2 GB</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
        <span>${t("images")}</span>
        <span>800 MB</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
        <span>${t("cache")}</span>
        <span>124 MB</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-weight: 600;">
        <span>${t("totalUsed")}</span>
        <span>2.4 GB</span>
      </div>
    </div>
    <button class="btn btn-primary" onclick="this.closest('.modal').remove()" style="width: 100%;">${t("done")}</button>
  `);
}

function clearCache() {
  if (confirm(t("clearCacheConfirm"))) {
    showToast(t("cacheCleared"));
  }
}

function toggleOfflineMode(enabled) {
  showToast(t("offlineMode") + ` ${enabled ? t("enabled") : t("disabled")}`);
}

// Device management
function disconnectDevice(deviceId) {
  if (confirm(t("disconnectDeviceConfirm"))) {
    showToast(t("deviceDisconnected"));
  }
}

function disconnectAllDevices() {
  if (confirm(t("disconnectAllDevicesConfirm"))) {
    showToast(t("allDevicesDisconnected"));
  }
}

// Activity log
function downloadActivityLog() {
  showToast(t("downloadingActivityLog"));
  setTimeout(() => showToast(t("activityLogDownloaded")), 1500);
}

// Password change modal
function showChangePasswordModal() {
  showModal(`
    <h3>🔐 ${t("changePassword")}</h3>
    <form onsubmit="event.preventDefault(); this.closest('.modal').remove(); showToast('${t("passwordChangedSuccessfully")}');">
      <div class="form-group">
        <label>${t("currentPassword")}</label>
        <input type="password" required>
      </div>
      <div class="form-group">
        <label>${t("newPassword")}</label>
        <input type="password" required>
      </div>
      <div class="form-group">
        <label>${t("confirmNewPassword")}</label>
        <input type="password" required>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%;">${t("changePassword")}</button>
    </form>
  `);
}

// ========================
// EXPORT FUNCTIONS
// ========================
window.toggleLanguage = toggleLanguage;
window.logout = logout;
window.bookDoctor = bookDoctor;
window.cancelAppointment = cancelAppointment;
window.viewRecord = viewRecord;
window.downloadRecord = downloadRecord;
window.showToast = showToast;
window.showModal = showModal;
window.t = t;

// Settings page specific exports
window.showSettingsSection = showSettingsSection;
window.saveNotificationPref = saveNotificationPref;
window.setTheme = setTheme;
window.toggle2FA = toggle2FA;
window.verifyPhone = verifyPhone;
window.deactivateAccount = deactivateAccount;
window.deleteAccount = deleteAccount;
window.downloadUserData = downloadUserData;
window.clearSearchHistory = clearSearchHistory;
window.toggleCompactMode = toggleCompactMode;
window.toggleAnimations = toggleAnimations;
window.toggleHighContrast = toggleHighContrast;
window.toggleReducedMotion = toggleReducedMotion;
window.setLanguageFromSettings = setLanguageFromSettings; // Renamed from changeLanguage to avoid conflict
window.manageStorage = manageStorage;
window.clearCache = clearCache;
window.toggleOfflineMode = toggleOfflineMode;
window.disconnectDevice = disconnectDevice;
window.disconnectAllDevices = disconnectAllDevices;
window.downloadActivityLog = downloadActivityLog;
window.showChangePasswordModal = showChangePasswordModal;
