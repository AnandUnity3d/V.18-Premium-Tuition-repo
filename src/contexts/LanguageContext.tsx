import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.technology': 'Technology',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Karnataka\'s First Tech-Enabled Tuition Center',
    'hero.subtitle': 'Immersive 3D Learning for Classes 8–12',
    'hero.description': 'Experience the future of education with our cutting-edge 3D technology, expert faculty, and personalized attention in both local languages and English at affordable prices.',
    'hero.bookDemo': 'Book Free Demo',
    'hero.watchVideo': 'Watch Video',
    
    // Stats
    'stats.students': 'Students Enrolled',
    'stats.success': 'Success Rate',
    'stats.experience': 'Years Experience',
    'stats.locations': 'Locations',
    
    // About Section
    'about.title': 'About V.18 Premium Tuition',
    'about.subtitle': 'Revolutionizing Education Through Technology',
    'about.description': 'V.18 Premium Tuition is Karnataka\'s pioneering tech-enabled learning center, combining traditional teaching excellence with cutting-edge 3D visualization technology. We make complex concepts simple and engaging through immersive learning experiences.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To democratize quality education by making advanced learning technology accessible and affordable for every student in Karnataka.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To become the leading educational institution that bridges the gap between traditional learning and future-ready skills.',
    'about.values.title': 'Our Values',
    'about.values.description': 'Excellence, Innovation, Accessibility, and Student-Centric Approach guide everything we do.',
    
    // Programs Section
    'programs.title': 'Our Programs',
    'programs.subtitle': 'Comprehensive Learning Solutions for Every Student',
    'programs.class8.title': 'Foundation Building',
    'programs.class8.description': 'Strong conceptual foundation with interactive 3D models for Mathematics, Science, and Social Studies.',
    'programs.class9.title': 'Skill Development',
    'programs.class9.description': 'Advanced problem-solving techniques with immersive learning for all core subjects.',
    'programs.class10.title': 'Board Preparation',
    'programs.class10.description': 'Comprehensive SSLC exam preparation with proven strategies and practice tests.',
    'programs.class11.title': 'Stream Specialization',
    'programs.class11.description': 'Focused preparation for Science, Commerce, and Arts streams with career guidance.',
    'programs.class12.title': 'Competitive Edge',
    'programs.class12.description': 'PUC exam excellence plus JEE/NEET/CET preparation with expert mentorship.',
    'programs.learnMore': 'Learn More',
    
    // Technology Section
    'technology.title': 'Cutting-Edge Technology',
    'technology.subtitle': 'Experience Learning Like Never Before',
    'technology.description': 'Our state-of-the-art 3D learning environment transforms abstract concepts into tangible experiences, making education more engaging and effective.',
    'technology.vr.title': '3D Virtual Reality',
    'technology.vr.description': 'Immersive VR experiences that bring textbook concepts to life',
    'technology.ai.title': 'AI-Powered Learning',
    'technology.ai.description': 'Personalized learning paths adapted to each student\'s pace',
    'technology.interactive.title': 'Interactive Simulations',
    'technology.interactive.description': 'Hands-on experiments and simulations for better understanding',
    'technology.mobile.title': 'Mobile Learning',
    'technology.mobile.description': 'Access learning materials anytime, anywhere on any device',
    
    // Admissions Section
    'admissions.title': 'Admissions Open',
    'admissions.subtitle': 'Join Karnataka\'s Most Advanced Learning Center',
    'admissions.description': 'Secure your spot in our innovative learning program. Limited seats available for the upcoming academic year.',
    'admissions.bookDemo': 'Book Free Demo',
    'admissions.downloadBrochure': 'Download Brochure',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.description': 'Ready to transform your learning experience? Contact us today to learn more about our programs and schedule a free demo.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Hours',
    'contact.hours.value': 'Mon-Sat: 9:00 AM - 8:00 PM',
    
    // Footer
    'footer.tagline': 'simplify the imagination',
    'footer.description': 'Karnataka\'s first tech-enabled tuition center offering immersive 3D learning experiences for Classes 8–12.',
    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Programs',
    'footer.contact': 'Contact',
    'footer.locations': 'Locations',
    'footer.rights': 'All rights reserved.',
    
    // Booking Modal
    'booking.title': 'Book Free Demo',
    'booking.studentName': 'Student Name',
    'booking.parentName': 'Parent/Guardian Name',
    'booking.phone': 'Phone Number',
    'booking.email': 'Email Address',
    'booking.class': 'Class',
    'booking.location': 'Nearest Location',
    'booking.preferredDate': 'Preferred Date',
    'booking.preferredTime': 'Preferred Time',
    'booking.cancel': 'Cancel',
    'booking.submit': 'Book Demo',
    'booking.selectClass': 'Select Class',
    'booking.selectLocation': 'Select Nearest Location',
    'booking.selectTime': 'Select Time',
    'booking.emailOptional': 'Enter email address (optional)',
    'booking.studentNamePlaceholder': 'Enter student\'s full name',
    'booking.parentNamePlaceholder': 'Enter parent\'s full name',
    'booking.phonePlaceholder': 'Enter 10-digit mobile number',
  },
  kn: {
    // Header
    'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
    'nav.programs': 'ಕೋರ್ಸ್‌ಗಳು',
    'nav.technology': 'ತಂತ್ರಜ್ಞಾನ',
    'nav.admissions': 'ಪ್ರವೇಶ',
    'nav.contact': 'ಸಂಪರ್ಕ',
    
    // Hero Section
    'hero.title': 'ಕರ್ನಾಟಕದ ಮೊದಲ ತಂತ್ರಜ್ಞಾನ-ಸಕ್ರಿಯ ಟ್ಯೂಷನ್ ಕೇಂದ್ರ',
    'hero.subtitle': '8-12 ತರಗತಿಗಳಿಗೆ ಇಮ್ಮರ್ಸಿವ್ 3D ಕಲಿಕೆ',
    'hero.description': 'ನಮ್ಮ ಅತ್ಯಾಧುನಿಕ 3D ತಂತ್ರಜ್ಞಾನ, ಪರಿಣಿತ ಅಧ್ಯಾಪಕರು ಮತ್ತು ಸ್ಥಳೀಯ ಭಾಷೆಗಳು ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ವೈಯಕ್ತಿಕ ಗಮನದೊಂದಿಗೆ ಶಿಕ್ಷಣದ ಭವಿಷ್ಯವನ್ನು ಅನುಭವಿಸಿ.',
    'hero.bookDemo': 'ಉಚಿತ ಡೆಮೋ ಬುಕ್ ಮಾಡಿ',
    'hero.watchVideo': 'ವೀಡಿಯೋ ವೀಕ್ಷಿಸಿ',
    
    // Stats
    'stats.students': 'ದಾಖಲಾದ ವಿದ್ಯಾರ್ಥಿಗಳು',
    'stats.success': 'ಯಶಸ್ಸಿನ ಪ್ರಮಾಣ',
    'stats.experience': 'ವರ್ಷಗಳ ಅನುಭವ',
    'stats.locations': 'ಸ್ಥಳಗಳು',
    
    // About Section
    'about.title': 'V.18 ಪ್ರೀಮಿಯಂ ಟ್ಯೂಷನ್ ಬಗ್ಗೆ',
    'about.subtitle': 'ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ಶಿಕ್ಷಣದಲ್ಲಿ ಕ್ರಾಂತಿ',
    'about.description': 'V.18 ಪ್ರೀಮಿಯಂ ಟ್ಯೂಷನ್ ಕರ್ನಾಟಕದ ಪ್ರವರ್ತಕ ತಂತ್ರಜ್ಞಾನ-ಸಕ್ರಿಯ ಕಲಿಕಾ ಕೇಂದ್ರವಾಗಿದೆ, ಸಾಂಪ್ರದಾಯಿಕ ಬೋಧನಾ ಉತ್ಕೃಷ್ಟತೆಯನ್ನು ಅತ್ಯಾಧುನಿಕ 3D ದೃಶ್ಯೀಕರಣ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ.',
    'about.mission.title': 'ನಮ್ಮ ಧ್ಯೇಯ',
    'about.mission.description': 'ಕರ್ನಾಟಕದ ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗೆ ಸುಧಾರಿತ ಕಲಿಕಾ ತಂತ್ರಜ್ಞಾನವನ್ನು ಪ್ರವೇಶಿಸಬಹುದಾದ ಮತ್ತು ಕೈಗೆಟುಕುವಂತೆ ಮಾಡುವ ಮೂಲಕ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ಪ್ರಜಾಪ್ರಭುತ್ವೀಕರಿಸುವುದು.',
    'about.vision.title': 'ನಮ್ಮ ದೃಷ್ಟಿ',
    'about.vision.description': 'ಸಾಂಪ್ರದಾಯಿಕ ಕಲಿಕೆ ಮತ್ತು ಭವಿಷ್ಯದ-ಸಿದ್ಧ ಕೌಶಲ್ಯಗಳ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುವ ಪ್ರಮುಖ ಶೈಕ್ಷಣಿಕ ಸಂಸ್ಥೆಯಾಗುವುದು.',
    'about.values.title': 'ನಮ್ಮ ಮೌಲ್ಯಗಳು',
    'about.values.description': 'ಉತ್ಕೃಷ್ಟತೆ, ನಾವೀನ್ಯತೆ, ಪ್ರವೇಶಿಸುವಿಕೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ-ಕೇಂದ್ರಿತ ವಿಧಾನ ನಾವು ಮಾಡುವ ಎಲ್ಲವನ್ನೂ ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತದೆ.',
    
    // Programs Section
    'programs.title': 'ನಮ್ಮ ಕೋರ್ಸ್‌ಗಳು',
    'programs.subtitle': 'ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗೆ ಸಮಗ್ರ ಕಲಿಕಾ ಪರಿಹಾರಗಳು',
    'programs.class8.title': 'ಅಡಿಪಾಯ ನಿರ್ಮಾಣ',
    'programs.class8.description': 'ಗಣಿತ, ವಿಜ್ಞಾನ ಮತ್ತು ಸಮಾಜ ವಿಜ್ಞಾನಕ್ಕಾಗಿ ಸಂವಾದಾತ್ಮಕ 3D ಮಾದರಿಗಳೊಂದಿಗೆ ಬಲವಾದ ಪರಿಕಲ್ಪನಾ ಅಡಿಪಾಯ.',
    'programs.class9.title': 'ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿ',
    'programs.class9.description': 'ಎಲ್ಲಾ ಮುಖ್ಯ ವಿಷಯಗಳಿಗೆ ಇಮ್ಮರ್ಸಿವ್ ಕಲಿಕೆಯೊಂದಿಗೆ ಸುಧಾರಿತ ಸಮಸ್ಯೆ-ಪರಿಹಾರ ತಂತ್ರಗಳು.',
    'programs.class10.title': 'ಬೋರ್ಡ್ ತಯಾರಿ',
    'programs.class10.description': 'ಸಾಬೀತಾದ ತಂತ್ರಗಳು ಮತ್ತು ಅಭ್ಯಾಸ ಪರೀಕ್ಷೆಗಳೊಂದಿಗೆ ಸಮಗ್ರ SSLC ಪರೀಕ್ಷಾ ತಯಾರಿ.',
    'programs.class11.title': 'ಸ್ಟ್ರೀಮ್ ವಿಶೇಷೀಕರಣ',
    'programs.class11.description': 'ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ವಿಜ್ಞಾನ, ವಾಣಿಜ್ಯ ಮತ್ತು ಕಲಾ ವಿಭಾಗಗಳಿಗೆ ಕೇಂದ್ರೀಕೃತ ತಯಾರಿ.',
    'programs.class12.title': 'ಸ್ಪರ್ಧಾತ್ಮಕ ಅಂಚು',
    'programs.class12.description': 'ಪರಿಣಿತ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ PUC ಪರೀಕ್ಷಾ ಉತ್ಕೃಷ್ಟತೆ ಮತ್ತು JEE/NEET/CET ತಯಾರಿ.',
    'programs.learnMore': 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    
    // Technology Section
    'technology.title': 'ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನ',
    'technology.subtitle': 'ಹಿಂದೆಂದೂ ಇಲ್ಲದಂತೆ ಕಲಿಕೆಯನ್ನು ಅನುಭವಿಸಿ',
    'technology.description': 'ನಮ್ಮ ಅತ್ಯಾಧುನಿಕ 3D ಕಲಿಕಾ ವಾತಾವರಣವು ಅಮೂರ್ತ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಸ್ಪರ್ಶಿಸಬಹುದಾದ ಅನುಭವಗಳಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ.',
    'technology.vr.title': '3D ವರ್ಚುವಲ್ ರಿಯಾಲಿಟಿ',
    'technology.vr.description': 'ಪಠ್ಯಪುಸ್ತಕ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಜೀವಂತಗೊಳಿಸುವ ಇಮ್ಮರ್ಸಿವ್ VR ಅನುಭವಗಳು',
    'technology.ai.title': 'AI-ಚಾಲಿತ ಕಲಿಕೆ',
    'technology.ai.description': 'ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಯ ವೇಗಕ್ಕೆ ಅನುಗುಣವಾಗಿ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಕಲಿಕಾ ಮಾರ್ಗಗಳು',
    'technology.interactive.title': 'ಸಂವಾದಾತ್ಮಕ ಸಿಮ್ಯುಲೇಷನ್‌ಗಳು',
    'technology.interactive.description': 'ಉತ್ತಮ ತಿಳುವಳಿಕೆಗಾಗಿ ಪ್ರಾಯೋಗಿಕ ಪ್ರಯೋಗಗಳು ಮತ್ತು ಸಿಮ್ಯುಲೇಷನ್‌ಗಳು',
    'technology.mobile.title': 'ಮೊಬೈಲ್ ಕಲಿಕೆ',
    'technology.mobile.description': 'ಯಾವುದೇ ಸಾಧನದಲ್ಲಿ ಎಲ್ಲಿ ಬೇಕಾದರೂ, ಯಾವಾಗ ಬೇಕಾದರೂ ಕಲಿಕಾ ಸಾಮಗ್ರಿಗಳನ್ನು ಪ್ರವೇಶಿಸಿ',
    
    // Admissions Section
    'admissions.title': 'ಪ್ರವೇಶ ತೆರೆದಿದೆ',
    'admissions.subtitle': 'ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ಸುಧಾರಿತ ಕಲಿಕಾ ಕೇಂದ್ರಕ್ಕೆ ಸೇರಿ',
    'admissions.description': 'ನಮ್ಮ ನವೀನ ಕಲಿಕಾ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ನಿಮ್ಮ ಸ್ಥಾನವನ್ನು ಭದ್ರಪಡಿಸಿಕೊಳ್ಳಿ. ಮುಂಬರುವ ಶೈಕ್ಷಣಿಕ ವರ್ಷಕ್ಕೆ ಸೀಮಿತ ಸ್ಥಾನಗಳು ಲಭ್ಯವಿದೆ.',
    'admissions.bookDemo': 'ಉಚಿತ ಡೆಮೋ ಬುಕ್ ಮಾಡಿ',
    'admissions.downloadBrochure': 'ಬ್ರೋಷರ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    
    // Contact Section
    'contact.title': 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    'contact.subtitle': 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
    'contact.description': 'ನಿಮ್ಮ ಕಲಿಕಾ ಅನುಭವವನ್ನು ಪರಿವರ್ತಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ? ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಲು ಮತ್ತು ಉಚಿತ ಡೆಮೋವನ್ನು ನಿಗದಿಪಡಿಸಲು ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    'contact.phone': 'ದೂರವಾಣಿ',
    'contact.email': 'ಇಮೇಲ್',
    'contact.address': 'ವಿಳಾಸ',
    'contact.hours': 'ಸಮಯ',
    'contact.hours.value': 'ಸೋಮ-ಶನಿ: ಬೆಳಿಗ್ಗೆ 9:00 - ಸಂಜೆ 8:00',
    
    // Footer
    'footer.tagline': 'ಕಲ್ಪನೆಯನ್ನು ಸರಳಗೊಳಿಸಿ',
    'footer.description': '8-12 ತರಗತಿಗಳಿಗೆ ಇಮ್ಮರ್ಸಿವ್ 3D ಕಲಿಕಾ ಅನುಭವಗಳನ್ನು ನೀಡುವ ಕರ್ನಾಟಕದ ಮೊದಲ ತಂತ್ರಜ್ಞಾನ-ಸಕ್ರಿಯ ಟ್ಯೂಷನ್ ಕೇಂದ್ರ.',
    'footer.quickLinks': 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    'footer.programs': 'ಕೋರ್ಸ್‌ಗಳು',
    'footer.contact': 'ಸಂಪರ್ಕ',
    'footer.locations': 'ಸ್ಥಳಗಳು',
    'footer.rights': 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    
    // Booking Modal
    'booking.title': 'ಉಚಿತ ಡೆಮೋ ಬುಕ್ ಮಾಡಿ',
    'booking.studentName': 'ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು',
    'booking.parentName': 'ಪೋಷಕ/ಪಾಲಕರ ಹೆಸರು',
    'booking.phone': 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ',
    'booking.email': 'ಇಮೇಲ್ ವಿಳಾಸ',
    'booking.class': 'ತರಗತಿ',
    'booking.location': 'ಹತ್ತಿರದ ಸ್ಥಳ',
    'booking.preferredDate': 'ಆದ್ಯತೆಯ ದಿನಾಂಕ',
    'booking.preferredTime': 'ಆದ್ಯತೆಯ ಸಮಯ',
    'booking.cancel': 'ರದ್ದುಮಾಡಿ',
    'booking.submit': 'ಡೆಮೋ ಬುಕ್ ಮಾಡಿ',
    'booking.selectClass': 'ತರಗತಿ ಆಯ್ಕೆಮಾಡಿ',
    'booking.selectLocation': 'ಹತ್ತಿರದ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    'booking.selectTime': 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ',
    'booking.emailOptional': 'ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ (ಐಚ್ಛಿಕ)',
    'booking.studentNamePlaceholder': 'ವಿದ್ಯಾರ್ಥಿಯ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
    'booking.parentNamePlaceholder': 'ಪೋಷಕರ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
    'booking.phonePlaceholder': '10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}