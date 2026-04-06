// HealthBridge - Main JavaScript File
const APP_VERSION = "3"; // Change this when updating doctors

function checkVersion() {
  const savedVersion = localStorage.getItem("appVersion");

  if (!savedVersion) {
    // First visit ever
    localStorage.setItem("appVersion", APP_VERSION);
    return;
  }

  if (savedVersion !== APP_VERSION) {
    // Version changed - ask user (or auto-reset for new doctors)
    const shouldReset = confirm(
      "New version detected!\n\n" +
        "Click OK to refresh with latest doctors.\n" +
        "Click Cancel to keep your current data.",
    );

    if (shouldReset) {
      localStorage.removeItem("doctors");
      // Keep appointments and records (user data)
    }

    localStorage.setItem("appVersion", APP_VERSION);

    if (shouldReset) {
      location.reload();
    }
  }
}

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
  const doctors = [];
  for (let i = 0; i < 8; i++) {
    doctors.push({
      id: i + 1,
      name: names[i],
      specialty: specialties[i % specialties.length],
      experience: Math.floor(Math.random() * 15) + 5,
      rating: (Math.random() * 1.5 + 3.5).toFixed(1),
      available: Math.random() > 0.2,
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

// Complete Translations Object
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
    welcome: "Welcome to HealthBridge",
    subtitle:
      "Your health, our priority. Book appointments and access your medical records easily.",
    searchPlaceholder: "Search doctors or departments...",
    searchDoctors: "Search doctors...",
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
    findDoctor: "Find a Doctor",
    departments: "Departments",
    services: "Our Services",
    dashboard: "Dashboard",
    totalAppointments: "Total Appointments",
    pendingRecords: "Pending Records",
    yourRating: "Your Rating",
    viewAll: "View All",
    appointmentHistory: "Appointment History",
    selectDepartment: "Select Department",
    selectDoctor: "Select Doctor",
    preferredDate: "Preferred Date",
    preferredTime: "Preferred Time",
    patientName: "Patient Name",
    additionalNotes: "Additional Notes (Optional)",
    confirmBooking: "Confirm Booking",
    chooseDepartment: "Choose Department",
    chooseDoctor: "Choose Doctor",
    allSpecialties: "All Specialties",
    availability: "Availability",
    availableNow: "Available Now",
    today: "Today",
    thisWeek: "This Week",
    yearsExp: "years exp",
    available: "Available",
    notAvailable: "Not Available",
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
    ourStory: "Our Story",
    missionVision: "Mission & Vision",
    ourMission: "Our Mission",
    ourVision: "Our Vision",
    ourTeam: "Our Team",
    getInTouch: "Get in Touch",
    sendMessage: "Send Message",
    visitUs: "Visit Us",
    callUs: "Call Us",
    workingHours: "Working Hours",
    monFri: "Mon - Fri",
    saturday: "Saturday",
    sunday: "Sunday",
    emergencyOnly: "Emergency Only",
    twentyFourSeven: "24/7",
    subject: "Subject",
    message: "Message",
    generalInquiry: "General Inquiry",
    appointmentIssue: "Appointment Issue",
    technicalSupport: "Technical Support",
    feedback: "Feedback",
    howCanWeHelp: "How can we help you?",
    contactInfo: "Contact Information",
    phone: "Phone",
    email: "Email",
    address: "Address",
    hospitalAddress: "123 Healthcare Avenue, Medical District, City 12345",
    main: "Main",
    emergencyLine: "Emergency Line",
    avgResponse: "Avg response",
    poisonHotline: "24/7 Hotline",
    forPoisoning: "For poisoning emergencies",
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
    readyToStart: "Ready to Take Control of Your Health?",
    joinThousands: "Join thousands of patients who trust HealthBridge",
    getStartedToday: "Get Started Today",
    whatPatientsSay: "What Patients Say",
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
    phoneNumber: "Phone Number",
    enterPhone: "Enter your phone number",
    userType: "User Type",
    patient: "Patient",
    doctor: "Doctor",
    confirmPassword: "Confirm Password",
    confirmYourPassword: "Confirm your password",
    createAccount: "Create Account",
    orContinueWith: "Or continue with",
    google: "Google",
    dashboardOverview: "Dashboard Overview",
    needToSeeDoctor: "Need to see a doctor?",
    bookWithSpecialists: "Book an appointment with our top specialists today.",
    bookNow: "Book Now",
    loading: "Loading...",
    status: "Status",
    actions: "Actions",
    noAppointmentsFound: "No appointments found",
    allRecords: "All Records",
    prescriptions: "Prescriptions",
    diagnoses: "Diagnoses",
    imaging: "Imaging",
    labResults: "Lab Results",
    normal: "Normal",
    active: "Active",
    completed: "Completed",
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
    whatToDoEmergency: "What should I do in case of emergency?",
    emergencyAnswer:
      "For emergencies, please use the Emergency button on the homepage or call 911 immediately.",
    liveChat: "Live Chat Support",
    healthbridgeSupport: "HealthBridge Support",
    helloHowCanHelp: "Hello! How can I help you today?",
    startByGiving: "Start by giving access to your health dashboard",
    createAccountToday: "Create an account today",
    copyright: "© 2026 HealthBridge. All rights reserved.",
    connectingPatients: "Connecting patients with quality healthcare services.",
    expertDoctors: "Expert Doctors",
    patientsServed: "Patients Served",
    emergencyCare24_7: "Emergency Care",
    hospitalName: "City General Hospital",
    distance: "0.5 miles away",
    specialization: "Specialization",
    experience: "Experience",
    rating: "Rating",
    filter: "Filter",
    exportAll: "Export All",
    ourStoryP1:
      "Founded in 2026, HealthBridge was born from a simple idea: healthcare should be accessible, transparent, and patient-centered. We started with a small team of healthcare professionals and technologists who believed that the patient experience could be better.",
    ourStoryP2:
      "Today, we serve thousands of patients, connecting them with top-tier medical professionals and providing tools to manage their health journey.",
    testimonial1:
      '"HealthBridge made it so easy to book my appointment. The interface is clean and intuitive!"',
    testimonial2:
      '"I love being able to access my medical records instantly. Best healthcare app I\'ve used."',
    testimonial3:
      '"The emergency feature gave me peace of mind. Highly recommended for everyone."',
    weLoveToHear:
      "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    firstName: "First Name",
    lastName: "Last Name",
    enterFirstName: "Enter your first name",
    enterLastName: "Enter your last name",
    bookAppointment: "Book an Appointment",
    neurology: "Neurology",
    cardiology: "Cardiology",
    dermatology: "Dermatology",
    pediatrics: "Pediatrics",
    orthopedics: "Orthopedics",
    dentistry: "Dentistry",
    ophthalmology: "Ophthalmology",
    gynecology: "Gynecology",
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
    welcome: "مرحباً بك في HealthBridge",
    subtitle: "صحتك، أولويتنا. احجز مواعيدك واطلع على سجلاتك الطبية بسهولة.",
    searchPlaceholder: "ابحث عن طبيب أو قسم...",
    searchDoctors: "ابحث عن أطباء...",
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
    findDoctor: "ابحث عن طبيب",
    departments: "الأقسام",
    services: "خدماتنا",
    dashboard: "لوحة التحكم",
    totalAppointments: "إجمالي المواعيد",
    pendingRecords: "السجلات المعلقة",
    yourRating: "تقييمك",
    viewAll: "عرض الكل",
    appointmentHistory: "تاريخ المواعيد",
    selectDepartment: "اختر القسم",
    selectDoctor: "اختر الطبيب",
    preferredDate: "التاريخ المفضل",
    preferredTime: "الوقت المفضل",
    patientName: "اسم المريض",
    additionalNotes: "ملاحظات إضافية (اختياري)",
    confirmBooking: "تأكيد الحجز",
    chooseDepartment: "اختر القسم",
    chooseDoctor: "اختر الطبيب",
    allSpecialties: "جميع التخصصات",
    availability: "التوفر",
    availableNow: "متاح الآن",
    today: "اليوم",
    thisWeek: "هذا الأسبوع",
    yearsExp: "سنوات خبرة",
    available: "متاح",
    notAvailable: "غير متاح",
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
    ourStory: "قصتنا",
    missionVision: "الرسالة والرؤية",
    ourMission: "رسالتنا",
    ourVision: "رؤيتنا",
    ourTeam: "فريقنا",
    getInTouch: "تواصل معنا",
    sendMessage: "إرسال رسالة",
    visitUs: "زورنا",
    callUs: "اتصل بنا",
    workingHours: "ساعات العمل",
    monFri: "الإثنين - الجمعة",
    saturday: "السبت",
    sunday: "الأحد",
    emergencyOnly: "طوارئ فقط",
    twentyFourSeven: "24/7",
    subject: "الموضوع",
    message: "الرسالة",
    generalInquiry: "استفسار عام",
    appointmentIssue: "مشكلة في الموعد",
    technicalSupport: "دعم تقني",
    feedback: "ملاحظات",
    howCanWeHelp: "كيف يمكننا مساعدتك؟",
    contactInfo: "معلومات الاتصال",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",
    hospitalAddress: "123 شارع الرعاية الصحية، حي طبي، المدينة 12345",
    main: "الرئيسي",
    emergencyLine: "خط الطوارئ",
    avgResponse: "متوسط الاستجابة",
    poisonHotline: "خط المساعدة 24/7",
    forPoisoning: "لحالات التسمم الطارئة",
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
    readyToStart: "هل أنت مستعد للتحكم في صحتك؟",
    joinThousands: "انضم إلى آلاف المرضى الذين يثقون بـ HealthBridge",
    getStartedToday: "ابدأ اليوم",
    whatPatientsSay: "ماذا يقول المرضى",
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
    phoneNumber: "رقم الهاتف",
    enterPhone: "أدخل رقم هاتفك",
    userType: "نوع المستخدم",
    patient: "مريض",
    doctor: "طبيب",
    confirmPassword: "تأكيد كلمة المرور",
    confirmYourPassword: "أكد كلمة المرور",
    createAccount: "إنشاء حساب",
    orContinueWith: "أو استمر مع",
    google: "جوجل",
    dashboardOverview: "نظرة عامة على لوحة التحكم",
    needToSeeDoctor: "تحتاج لزيارة طبيب؟",
    bookWithSpecialists: "احجز موعداً مع أفضل المتخصصين لدينا اليوم.",
    bookNow: "احجز الآن",
    loading: "جاري التحميل...",
    status: "الحالة",
    actions: "الإجراءات",
    noAppointmentsFound: "لم يتم العثور على مواعيد",
    allRecords: "جميع السجلات",
    prescriptions: "الوصفات الطبية",
    diagnoses: "التشخيصات",
    imaging: "الأشعة",
    labResults: "نتائج المختبر",
    normal: "طبيعي",
    active: "نشط",
    completed: "مكتمل",
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
    whatToDoEmergency: "ماذا أفعل في حالة الطوارئ؟",
    emergencyAnswer:
      "للحالات الطارئة، يرجى استخدام زر الطوارئ في الصفحة الرئيسية أو الاتصال بـ 911 فوراً.",
    liveChat: "الدردشة المباشرة",
    healthbridgeSupport: "دعم HealthBridge",
    helloHowCanHelp: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
    startByGiving: "ابدأ بالوصول إلى لوحة التحكم الصحية",
    createAccountToday: "أنشئ حساباً اليوم",
    copyright: "© 2026 HealthBridge. جميع الحقوق محفوظة.",
    connectingPatients: "ربط المرضى بخدمات الرعاية الصحية عالية الجودة.",
    expertDoctors: "أطباء خبراء",
    patientsServed: "مريض تم خدمتهم",
    emergencyCare24_7: "رعاية طوارئ 24/7",
    hospitalName: "مستشفى المدينة العام",
    distance: "0.5 ميل",
    specialization: "التخصص",
    experience: "الخبرة",
    rating: "التقييم",
    filter: "تصفية",
    exportAll: "تصدير الكل",
    ourStoryP1:
      "تأسست HealthBridge عام 2026، وولدت من فكرة بسيطة: أن تكون الرعاية الصحية متاحة وشفافة وموجهة نحو المريض. بدأنا بفريق صغير من المتخصصين في الرعاية الصحية وتقنية المعلومات الذين آمنوا بإمكانية تحسين تجربة المريض.",
    ourStoryP2:
      "اليوم، نخدم آلاف المرضى، ونربطهم بأفضل المتخصصين الطبيين ونوفر لهم أدوات لإدارة رحلتهم الصحية.",
    testimonial1:
      '"جعلتني HealthBridge أحجز موعدي بسهولة. الواجهة نظيفة وبديهية!"',
    testimonial2:
      '"أحب أن أستطيع الوصول إلى سجلاتي الطبية فوراً. أفضل تطبيق رعاية صحية استخدمته."',
    testimonial3: '"منحني ميزة الطوارئ راحة البال. أنصح به بشدة للجميع."',
    weLoveToHear:
      "نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.",
    firstName: "الاسم الأول",
    lastName: "الاسم الأخير",
    enterFirstName: "أدخل اسمك الأول",
    enterLastName: "أدخل اسمك الأخير",
    bookAppointment: "حجز موعد",
    neurology: "مخ و أعصاب",
    cardiology: "قلب",
    dermatology: "طب الجلد",
    pediatrics: "طب الأطفال",
    orthopedics: "طب الجراحة العظمية",
    dentistry: "طب الأسنان",
    ophthalmology: "طب العيون",
    gynecology: "نساء وتوليد",
  },
};

// Initialize App
document.addEventListener("DOMContentLoaded", function () {
  checkVersion();
  initLanguage();
  checkAuth();
  setupNavigation();
  setupEventListeners();
  loadPageSpecificContent();
  translateStaticContent();
  initMap();
});

// Language Functions
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
  loadPageSpecificContent(); // Reload dynamic content with new language
  showToast(state.language === "ar" ? "تم تغيير اللغة" : "Language changed");
}

function t(key) {
  return translations[state.language][key] || key;
}

// Translate all static content
function translateStaticContent() {
  // Translate elements with data-translate
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[state.language][key]) {
      el.textContent = translations[state.language][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[state.language][key]) {
      el.placeholder = translations[state.language][key];
    }
  });

  // Translate values (for buttons)
  document.querySelectorAll("[data-translate-value]").forEach((el) => {
    const key = el.getAttribute("data-translate-value");
    if (translations[state.language][key]) {
      el.value = translations[state.language][key];
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
      <a href="login.html#signup" class="btn btn-primary">${t("signUp")}</a>
    `;
  }
}

function login(email, password, userType = "patient") {
  const mockUser = {
    id: 1,
    email: email,
    name: email.split("@")[0],
    type: userType,
    phone: "+1234567890",
  };

  state.currentUser = mockUser;
  localStorage.setItem("currentUser", JSON.stringify(mockUser));
  showToast(t("welcomeBack"));
  setTimeout(() => (window.location.href = "dashboard.html"), 1000);
}

function signup(userData) {
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

// Navigation
function setupNavigation() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      document.querySelector(".nav-links").classList.toggle("active");
    });
  }

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
  // Update stats
  const statsContainer = document.getElementById("stats");
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="stat-card">
        <h4>50+</h4>
        <p>${t("expertDoctors")}</p>
      </div>
      <div class="stat-card">
        <h4>10k+</h4>
        <p>${t("patientsServed")}</p>
      </div>
      <div class="stat-card">
        <h4>24/7</h4>
        <p>${t("emergencyCare24_7")}</p>
      </div>
    `;
  }

  // Update service cards if they exist
  const serviceTitles = document.querySelectorAll(".service-title");
  if (serviceTitles.length >= 4) {
    serviceTitles[0].textContent = t("onlineBooking");
    serviceTitles[1].textContent = t("medicalRecords");
    serviceTitles[2].textContent = t("twentyFourSevenSupport");
    serviceTitles[3].textContent = t("emergencyCare");
  }

  const serviceDescs = document.querySelectorAll(".service-desc");
  if (serviceDescs.length >= 4) {
    serviceDescs[0].textContent = t("onlineBookingDesc");
    serviceDescs[1].textContent = t("medicalRecordsDesc");
    serviceDescs[2].textContent = t("supportDesc");
    serviceDescs[3].textContent = t("emergencyCareDesc");
  }
}

function loadDoctorsPage() {
  const container = document.getElementById("doctors-list");
  if (!container) return;

  renderDoctors(state.doctors);

  const specialtyFilter = document.getElementById("specialty-filter");
  if (specialtyFilter) {
    // Update filter options text
    const options = specialtyFilter.querySelectorAll("option");
    if (options.length > 0) options[0].textContent = t("allSpecialties");

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
        <p class="specialty">${t(doctor.specialty.toLowerCase()) || doctor.specialty}</p>
        <div class="rating">⭐ ${doctor.rating} (${doctor.experience} ${t("yearsExp")})</div>
        <p style="color: ${doctor.available ? "var(--primary)" : "var(--danger)"}">
          ${doctor.available ? `● ${t("available")}` : `● ${t("notAvailable")}`}
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

  const userInfo = document.getElementById("user-info");
  if (userInfo) {
    userInfo.innerHTML = `
      <h2>${state.language === "ar" ? "مرحباً، " : "Welcome, "}${state.currentUser.name}</h2>
      <p>${state.currentUser.email}</p>
    `;
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
    // Update form labels
    const labels = form.querySelectorAll("label");
    if (labels.length >= 6) {
      labels[0].textContent = t("selectDepartment");
      labels[1].textContent = t("selectDoctor");
      labels[2].textContent = t("preferredDate");
      labels[3].textContent = t("preferredTime");
      labels[4].textContent = t("patientName");
      labels[5].textContent = t("additionalNotes");
    }

    // Update placeholders
    const patientNameInput = form.querySelector('input[name="patientName"]');
    if (patientNameInput) patientNameInput.placeholder = t("enterFullName");

    const notesTextarea = form.querySelector('textarea[name="notes"]');
    if (notesTextarea)
      notesTextarea.placeholder =
        state.language === "ar"
          ? "صف أعراضك أو مخاوفك"
          : "Describe your symptoms or concerns";

    // Update select options
    const deptSelect = form.querySelector('select[name="department"]');
    if (deptSelect && deptSelect.options.length > 0) {
      deptSelect.options[0].textContent = t("chooseDepartment");
    }

    const doctorSelect = document.getElementById("doctor-select");
    if (doctorSelect) {
      doctorSelect.innerHTML =
        `<option value="">${t("chooseDoctor")}</option>` +
        state.doctors
          .map(
            (d) =>
              `<option value="${d.id}">${d.name} - ${t(d.specialty.toLowerCase()) || d.specialty}</option>`,
          )
          .join("");
    }

    const timeSelect = form.querySelector('select[name="time"]');
    if (timeSelect && timeSelect.options.length > 0) {
      timeSelect.options[0].textContent = t("preferredTime");
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
          <td colspan="6" style="text-align: center;">${t("noAppointmentsFound")}</td>
        </tr>
      `;
    } else {
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
            <button class="btn btn-danger" onclick="cancelAppointment(${appt.id})">${t("cancel")}</button>
          </td>
        </tr>
      `,
        )
        .join("");
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

  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  if (submitBtn) submitBtn.textContent = t("confirmBooking");
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

  container.innerHTML = state.records
    .map((record) => {
      let typeKey = "";
      if (record.type === "Lab Results") typeKey = "labResults";
      else if (record.type === "Prescription") typeKey = "prescriptions";
      else if (record.type === "Diagnosis") typeKey = "diagnoses";
      else if (record.type === "Imaging") typeKey = "imaging";

      let statusKey = "";
      if (record.status === "Normal") statusKey = "normal";
      else if (record.status === "Active") statusKey = "active";
      else if (record.status === "Completed") statusKey = "completed";

      return `
      <div class="card">
        <div class="flex justify-between items-start">
          <div>
            <span class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.875rem;">${t(typeKey) || record.type}</span>
            <h3 class="mt-1">${record.title}</h3>
            <p class="text-gray-600">${record.doctor} • ${record.date}</p>
          </div>
          <span style="color: ${record.status === "Normal" ? "var(--primary)" : "var(--highlight)"}">
            ${t(statusKey) || record.status}
          </span>
        </div>
        <div class="mt-2 flex gap-1">
          <button class="btn btn-outline" onclick="viewRecord(${record.id})">${t("view")}</button>
          <button class="btn btn-secondary" onclick="downloadRecord(${record.id})">${t("download")}</button>
        </div>
      </div>
    `;
    })
    .join("");
}

// Actions
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
    loadAppointments();
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
      <h2>${record.title}</h2>
      <p><strong>${typeLabel}:</strong> ${record.type}</p>
      <p><strong>${doctorLabel}:</strong> ${record.doctor}</p>
      <p><strong>${dateLabel}:</strong> ${record.date}</p>
      <p><strong>${statusLabel}:</strong> ${record.status}</p>
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
    msgDiv.innerHTML = `<strong>${sender}</strong><br>${text}`;
  } else {
    msgDiv.textContent = text;
  }
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

// Utility Functions
function showToast(message, type = "success") {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

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
}
// Map Initialization
function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return; // Only run on pages with a map

  // Hospital coordinates - CHANGE THESE to your location
  // Find coordinates at https://www.latlong.net
  const hospitalLat = 29.312139; // Example: Cairo
  const hospitalLng = 30.856225;

  // Create map
  const map = L.map("map").setView([hospitalLat, hospitalLng], 15);

  // Add OpenStreetMap tiles (Free, no API key needed)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add marker with popup
  const popupContent =
    state.language === "ar"
      ? "<b>مركز HealthBridge الطبي</b><br>١٢٣ شارع الرعاية الصحية"
      : "<b>HealthBridge Medical Center</b><br>123 Healthcare Avenue";

  L.marker([hospitalLat, hospitalLng])
    .addTo(map)
    .bindPopup(popupContent)
    .openPopup();
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
