// HealthBridge - Enhanced JavaScript
// Modern healthcare platform with smooth animations and bilingual support

// ========================
// GLOBAL STATE
// ========================
const state = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  language: localStorage.getItem("language") || "en",
  doctors: JSON.parse(localStorage.getItem("doctors")) || generateMockDoctors(),
  appointments: JSON.parse(localStorage.getItem("appointments")) || [],
  records: JSON.parse(localStorage.getItem("records")) || generateMockRecords(),
};

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

  const doctors = names.map((name, i) => ({
    id: i + 1,
    name: name,
    specialty: specialties[i % specialties.length],
    experience: Math.floor(Math.random() * 15) + 5,
    rating: (Math.random() * 1.5 + 3.5).toFixed(1),
    available: Math.random() > 0.2,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
  }));

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

// ========================
// TRANSLATIONS
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

    // Misc
    loading: "Loading...",
    settings: "Settings",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",

    expertDoctors: "Expert Doctors",
    patientsServed: "Patients Served",
    emergencyCare24_7: "Emergency Care 24/7",
    supportIntro:
      "We're here to help. Find answers or chat with our support team",
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

    // Misc
    loading: "جاري التحميل...",
    settings: "الإعدادات",
    cancel: "إلغاء",
    delete: "حذف",
    edit: "تعديل",

    expertDoctors: "أطباء خبراء",
    patientsServed: "المرضى الذين تم خدمتهم",
    emergencyCare24_7: "رعاية الطوارئ 24/7",
    supportIntro:
      "نحن هنا للمساعدة. ابحث عن إجابات أو تحدث مع فريق الدعم الخاص بنا",
  },
};

// ========================
// INITIALIZATION
// ========================
document.addEventListener("DOMContentLoaded", function () {
  initLanguage();
  checkAuth();
  setupNavigation();
  setupEventListeners();
  loadPageSpecificContent();
  translateStaticContent();
  initMap();
  setupScrollEffects();
});

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
  return translations[state.language][key] || key;
}

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

// ========================
// AUTHENTICATION
// ========================
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

// ========================
// NAVIGATION
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

      navMenu.classList.toggle("active");

      // Toggle icon
      if (navMenu.classList.contains("active")) {
        mobileMenuBtn.innerHTML = "&#10005;";
        mobileMenuBtn.setAttribute("aria-expanded", "true");
      } else {
        mobileMenuBtn.innerHTML = "&#9776;";
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
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

  // Navbar scroll effect
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
}

// ========================
// SCROLL EFFECTS
// ========================
function setupScrollEffects() {
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
  }
}

function loadHomePage() {
  // Update stats
  const statsContainer = document.getElementById("stats");
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="stat-card">
        <h4>50+</h4>
        <p data-translate="expertDoctors">${t("expertDoctors") || "Expert Doctors"}</p>
      </div>
      <div class="stat-card" style="background: linear-gradient(135deg, var(--secondary) 0%, #0284c7 100%);">
        <h4>10k+</h4>
        <p data-translate="patientsServed">${t("patientsServed") || "Patients Served"}</p>
      </div>
      <div class="stat-card" style="background: linear-gradient(135deg, var(--accent) 0%, #d97706 100%);">
        <h4>24/7</h4>
        <p data-translate="emergencyCare24_7">${t("emergencyCare24_7") || "Emergency Care"}</p>
      </div>
    `;
  }

  // Update service cards
  const serviceTitles = document.querySelectorAll(".service-title");
  const serviceDescs = document.querySelectorAll(".service-desc");

  if (serviceTitles.length >= 4) {
    serviceTitles[0].textContent = t("onlineBooking");
    serviceTitles[1].textContent = t("medicalRecords");
    serviceTitles[2].textContent = t("twentyFourSevenSupport");
    serviceTitles[3].textContent = t("emergencyCare");
  }

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
        <p style="color: ${doctor.available ? "var(--success)" : "var(--danger)"}; font-weight: 500; margin-bottom: 1rem;">
          ${doctor.available ? `● ${t("available")}` : `● ${t("notAvailable")}`}
        </p>
        <button class="btn btn-primary" style="width: 100%; margin-top: auto;" 
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
      <h2 style="font-size: 1.25rem;">${state.language === "ar" ? "مرحباً، " : "Welcome, "}${state.currentUser.name}</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">${state.currentUser.email}</p>
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
      upcomingContainer.innerHTML = `<p class="text-center" style="color: var(--text-muted); padding: 2rem;">${t("noAppointments")}</p>`;
    } else {
      upcomingContainer.innerHTML = upcoming
        .map(
          (appt) => `
        <div class="card" style="margin-bottom: 1rem;">
          <div class="flex justify-between items-center" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h4 style="font-weight: 600;">${appt.doctorName}</h4>
              <p style="color: var(--text-muted); font-size: 0.9rem;">${appt.department} - ${appt.date}</p>
            </div>
            <span class="btn btn-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">${appt.time}</span>
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
    // Populate doctor select
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
          <td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-muted);">${t("noAppointmentsFound")}</td>
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
          <td><span class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">${appt.status}</span></td>
          <td>
            <button class="btn btn-danger" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;" onclick="cancelAppointment(${appt.id})">${t("cancel")}</button>
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
        <div class="flex justify-between items-start" style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <span class="btn btn-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.875rem; display: inline-block; margin-bottom: 0.5rem;">${t(typeKey) || record.type}</span>
            <h3 style="margin-top: 0.5rem;">${record.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">${record.doctor} • ${record.date}</p>
          </div>
          <span style="color: ${record.status === "Normal" ? "var(--success)" : "var(--secondary)"}; font-weight: 600;">
            ${t(statusKey) || record.status}
          </span>
        </div>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
          <button class="btn btn-outline" style="padding: 0.375rem 0.75rem; font-size: 0.875rem;" onclick="viewRecord(${record.id})">${t("view")}</button>
          <button class="btn btn-secondary" style="padding: 0.375rem 0.75rem; font-size: 0.875rem;" onclick="downloadRecord(${record.id})">${t("download")}</button>
        </div>
      </div>
    `;
    })
    .join("");
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
      <h2 style="margin-bottom: 1rem;">${record.title}</h2>
      <p style="margin-bottom: 0.5rem;"><strong>${typeLabel}:</strong> ${record.type}</p>
      <p style="margin-bottom: 0.5rem;"><strong>${doctorLabel}:</strong> ${record.doctor}</p>
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
// EVENT LISTENERS
// ========================
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
      const input = document.getElementById("chat-input-field");
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

// ========================
// UTILITY FUNCTIONS
// ========================
function showToast(message, type = "success") {
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

// ========================
// MAP INITIALIZATION
// ========================
function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer || typeof L === "undefined") return;

  const hospitalLat = 29.312139;
  const hospitalLng = 30.856225;

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
