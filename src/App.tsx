import React, { useState } from 'react';
import { Menu, X, GraduationCap, TrendingUp, Globe } from 'lucide-react';
import VideoModal from './components/VideoModal';
import BookingModal from './components/BookingModal';
import CourseModal from './components/CourseModal';
import InvestorPortfolio from './components/InvestorPortfolio';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Course data for the modal
const courseData = {
  'Class 8': {
    class: 'Class 8',
    title: 'Foundation Building Program',
    subjects: ['Mathematics', 'Science', 'Social Studies', 'English', 'Kannada'],
    duration: '10 months',
    batchSize: '15-20 students',
    features: ['3D Interactive Models', 'Bilingual Teaching', 'Regular Assessments', 'Parent Updates'],
    description: 'Build a strong foundation with our comprehensive Class 8 program that combines traditional teaching with cutting-edge 3D technology.',
    highlights: [
      'Interactive 3D models for complex mathematical concepts',
      'Virtual science experiments and simulations',
      'Immersive historical and geographical explorations',
      'Personalized learning paths based on student progress'
    ]
  },
  'Class 9': {
    class: 'Class 9',
    title: 'Skill Development Program',
    subjects: ['Mathematics', 'Science', 'Social Studies', 'English', 'Kannada'],
    duration: '10 months',
    batchSize: '15-20 students',
    features: ['Advanced 3D Simulations', 'Problem-solving Focus', 'Career Guidance', 'Skill Assessments'],
    description: 'Develop critical thinking and problem-solving skills with our advanced Class 9 curriculum enhanced by immersive technology.',
    highlights: [
      'Advanced mathematical problem-solving techniques',
      'Interactive chemistry and physics experiments',
      'Virtual field trips and cultural explorations',
      'Introduction to competitive exam preparation'
    ]
  },
  'Class 10': {
    class: 'Class 10',
    title: 'Board Preparation Program',
    subjects: ['Mathematics', 'Science', 'Social Studies', 'English', 'Kannada'],
    duration: '10 months',
    batchSize: '12-15 students',
    features: ['Board Exam Focus', 'Mock Tests', 'Revision Sessions', 'Stress Management'],
    description: 'Comprehensive SSLC board exam preparation with proven strategies and extensive practice using 3D learning aids.',
    highlights: [
      'Comprehensive board exam preparation strategies',
      'Regular mock tests and performance analysis',
      'Intensive revision sessions with 3D visual aids',
      'Stress management and exam techniques'
    ]
  },
  'Class 11': {
    class: 'Class 11',
    title: 'Stream Specialization Program',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Commerce', 'Arts'],
    duration: '10 months',
    batchSize: '10-15 students',
    features: ['Stream-specific Focus', 'Career Counseling', 'College Preparation', 'Industry Exposure'],
    description: 'Specialized coaching for Science, Commerce, and Arts streams with career guidance and college preparation support.',
    highlights: [
      'Stream-specific curriculum and teaching methodology',
      'Career counseling and college admission guidance',
      'Industry exposure and guest lectures',
      'Foundation for competitive exams (JEE, NEET, CET)'
    ]
  },
  'Class 12': {
    class: 'Class 12',
    title: 'Competitive Edge Program',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Commerce', 'Arts'],
    duration: '10 months',
    batchSize: '8-12 students',
    features: ['PUC Excellence', 'Competitive Exam Prep', 'College Guidance', 'Scholarship Support'],
    description: 'Excel in PUC exams while preparing for competitive exams like JEE, NEET, and CET with expert mentorship.',
    highlights: [
      'Dual focus on PUC board exams and competitive exams',
      'Expert faculty with proven track records',
      'Comprehensive study materials and test series',
      'College admission and scholarship guidance'
    ]
  }
};

function AppContent() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<keyof typeof courseData>('Class 8');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'investors'>('home');
  const { language, setLanguage, t } = useLanguage();

  const openCourseModal = (courseClass: keyof typeof courseData) => {
    setSelectedCourse(courseClass);
    setIsCourseModalOpen(true);
  };

  if (currentPage === 'investors') {
    return <InvestorPortfolio onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">V.18 Premium Tuition</h1>
                <p className="text-xs text-gray-500">{t('footer.tagline')}</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.about')}</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.programs')}</a>
              <a href="#technology" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.technology')}</a>
              <a href="#admissions" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.admissions')}</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.contact')}</a>
              <button
                onClick={() => setCurrentPage('investors')}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <TrendingUp className="w-4 h-4 mr-1" />
                Investors
              </button>
            </nav>

            {/* Language Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'en' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('kn')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'kn' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  ಕನ್ನಡ
                </button>
              </div>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-blue-600"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.about')}</a>
                <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.programs')}</a>
                <a href="#technology" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.technology')}</a>
                <a href="#admissions" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.admissions')}</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.contact')}</a>
                <button
                  onClick={() => {
                    setCurrentPage('investors');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Investors
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t('hero.title')}
              </h1>
              <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-4">
                {t('hero.subtitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('hero.bookDemo')}
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {t('hero.watchVideo')}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="3D Learning Technology"
                  className="rounded-2xl shadow-3xl animate-float"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float-delayed"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">{t('stats.students')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">{t('stats.success')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">{t('stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-gray-600">{t('stats.locations')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern Classroom"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <h3 className="text-xl text-blue-600 font-semibold mb-4">
                {t('about.subtitle')}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('about.mission.title')}</h4>
                  <p className="text-gray-600">{t('about.mission.description')}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('about.vision.title')}</h4>
                  <p className="text-gray-600">{t('about.vision.description')}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('about.values.title')}</h4>
                  <p className="text-gray-600">{t('about.values.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('programs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { class: 'Class 8', title: t('programs.class8.title'), description: t('programs.class8.description'), image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { class: 'Class 9', title: t('programs.class9.title'), description: t('programs.class9.description'), image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { class: 'Class 10', title: t('programs.class10.title'), description: t('programs.class10.description'), image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { class: 'Class 11', title: t('programs.class11.title'), description: t('programs.class11.description'), image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { class: 'Class 12', title: t('programs.class12.title'), description: t('programs.class12.description'), image: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=600' }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {program.class}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <button
                    onClick={() => openCourseModal(program.class as keyof typeof courseData)}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {t('programs.learnMore')} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('technology.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('technology.subtitle')}
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto">
              {t('technology.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🥽', title: t('technology.vr.title'), description: t('technology.vr.description') },
              { icon: '🤖', title: t('technology.ai.title'), description: t('technology.ai.description') },
              { icon: '⚡', title: t('technology.interactive.title'), description: t('technology.interactive.description') },
              { icon: '📱', title: t('technology.mobile.title'), description: t('technology.mobile.description') }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('admissions.title')}
          </h2>
          <h3 className="text-xl mb-6">
            {t('admissions.subtitle')}
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            {t('admissions.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t('admissions.bookDemo')}
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('admissions.downloadBrochure')}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <h3 className="text-xl text-blue-600 font-semibold mb-4">
              {t('contact.subtitle')}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.email')}</h3>
              <p className="text-gray-600">v18premiumtuition@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.address')}</h3>
              <p className="text-gray-600">Jamkhandi, Karnataka</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.hours')}</h3>
              <p className="text-gray-600">{t('contact.hours.value')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">V.18 Premium Tuition</h3>
                  <p className="text-sm text-gray-400">{t('footer.tagline')}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">{t('footer.programs')}</a></li>
                <li><a href="#technology" className="hover:text-white transition-colors">{t('nav.technology')}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t('footer.contact')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.locations')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Jamkhandi</li>
                <li>Athani</li>
                <li>Harugeri</li>
                <li>Badami</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 V.18 Premium Tuition. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <CourseModal
        isOpen={isCourseModalOpen}
        onClose={() => setIsCourseModalOpen(false)}
        courseData={courseData[selectedCourse]}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}