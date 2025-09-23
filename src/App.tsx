import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Play, 
  BookOpen, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Globe,
  Star,
  CheckCircle,
  Zap,
  Brain,
  Smartphone,
  Eye
} from 'lucide-react';
import VideoModal from './components/VideoModal';
import BookingModal from './components/BookingModal';
import CourseModal from './components/CourseModal';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { language, setLanguage, t } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const courseData = {
    'Class 8': {
      class: 'Class 8',
      title: t('programs.class8.title'),
      subjects: ['Mathematics', 'Science', 'Social Studies', 'English', 'Kannada'],
      duration: '10 months',
      batchSize: '15-20 students',
      features: ['3D Learning', 'Interactive Sessions', 'Regular Assessments', 'Doubt Clearing'],
      description: t('programs.class8.description'),
      highlights: [
        'Strong foundation building',
        'Concept clarity through 3D visualization',
        'Regular practice sessions',
        'Parent-teacher meetings'
      ]
    },
    'Class 9': {
      class: 'Class 9',
      title: t('programs.class9.title'),
      subjects: ['Mathematics', 'Science', 'Social Studies', 'English', 'Kannada'],
      duration: '10 months',
      batchSize: '15-20 students',
      features: ['Advanced 3D Learning', 'Problem Solving', 'Mock Tests', 'Career Guidance'],
      description: t('programs.class9.description'),
      highlights: [
        'Advanced problem-solving techniques',
        'Immersive learning experiences',
        'Regular assessments and feedback',
        'Preparation for board exams'
      ]
    },
    'Class 10': {
      class: 'Class 10',
      title: t('programs.class10.title'),
      subjects: ['Mathematics', 'Science', 'Social Studies', 'English', 'Kannada'],
      duration: '10 months',
      batchSize: '12-15 students',
      features: ['Board Exam Focus', 'Intensive Practice', 'Mock Exams', 'Result Analysis'],
      description: t('programs.class10.description'),
      highlights: [
        'SSLC board exam preparation',
        'Proven strategies and techniques',
        'Regular mock tests',
        'Individual attention'
      ]
    },
    'Class 11': {
      class: 'Class 11',
      title: t('programs.class11.title'),
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Commerce', 'Arts'],
      duration: '10 months',
      batchSize: '10-15 students',
      features: ['Stream Specialization', 'Career Counseling', 'Competitive Prep', 'Lab Sessions'],
      description: t('programs.class11.description'),
      highlights: [
        'Stream-specific preparation',
        'Career guidance and counseling',
        'Foundation for competitive exams',
        'Practical lab sessions'
      ]
    },
    'Class 12': {
      class: 'Class 12',
      title: t('programs.class12.title'),
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Commerce', 'Arts'],
      duration: '10 months',
      batchSize: '10-12 students',
      features: ['PUC Excellence', 'JEE/NEET Prep', 'CET Preparation', 'Expert Mentorship'],
      description: t('programs.class12.description'),
      highlights: [
        'PUC exam excellence',
        'JEE/NEET/CET preparation',
        'Expert faculty mentorship',
        'Result-oriented approach'
      ]
    }
  };

  const openCourseModal = (courseKey) => {
    setSelectedCourse(courseData[courseKey]);
    setIsCourseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">V.18</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">V.18 Premium Tuition</h1>
                <p className="text-sm text-gray-600">{t('footer.tagline')}</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.about')}</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.programs')}</a>
              <a href="#technology" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.technology')}</a>
              <a href="#admissions" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.admissions')}</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('nav.contact')}</a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {language === 'en' ? 'EN' : 'ಕನ್ನಡ'}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  {t('nav.about')}
                </a>
                <a 
                  href="#programs" 
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  {t('nav.programs')}
                </a>
                <a 
                  href="#technology" 
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  {t('nav.technology')}
                </a>
                <a 
                  href="#admissions" 
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  {t('nav.admissions')}
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  {t('nav.contact')}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                {t('hero.subtitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-semibold"
                >
                  {t('hero.bookDemo')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center font-semibold"
                >
                  <Play className="mr-2 w-5 h-5" />
                  {t('hero.watchVideo')}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="3D Learning Technology" 
                  className="rounded-2xl shadow-3xl animate-float"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float-delayed"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">{t('stats.students')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">{t('stats.success')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">{t('stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-gray-600">{t('stats.locations')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              {t('about.subtitle')}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.mission.title')}</h3>
              <p className="text-gray-600">{t('about.mission.description')}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.vision.title')}</h3>
              <p className="text-gray-600">{t('about.vision.description')}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('about.values.title')}</h3>
              <p className="text-gray-600">{t('about.values.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('programs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Class 8 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Class 8</h3>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">{t('programs.class8.title')}</h4>
              <p className="text-gray-600 mb-6">{t('programs.class8.description')}</p>
              <button 
                onClick={() => openCourseModal('Class 8')}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center"
              >
                {t('programs.learnMore')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Class 9 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Class 9</h3>
              <h4 className="text-lg font-semibold text-green-600 mb-4">{t('programs.class9.title')}</h4>
              <p className="text-gray-600 mb-6">{t('programs.class9.description')}</p>
              <button 
                onClick={() => openCourseModal('Class 9')}
                className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center"
              >
                {t('programs.learnMore')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Class 10 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Class 10</h3>
              <h4 className="text-lg font-semibold text-purple-600 mb-4">{t('programs.class10.title')}</h4>
              <p className="text-gray-600 mb-6">{t('programs.class10.description')}</p>
              <button 
                onClick={() => openCourseModal('Class 10')}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center"
              >
                {t('programs.learnMore')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Class 11 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Class 11</h3>
              <h4 className="text-lg font-semibold text-orange-600 mb-4">{t('programs.class11.title')}</h4>
              <p className="text-gray-600 mb-6">{t('programs.class11.description')}</p>
              <button 
                onClick={() => openCourseModal('Class 11')}
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center"
              >
                {t('programs.learnMore')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Class 12 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Class 12</h3>
              <h4 className="text-lg font-semibold text-red-600 mb-4">{t('programs.class12.title')}</h4>
              <p className="text-gray-600 mb-6">{t('programs.class12.description')}</p>
              <button 
                onClick={() => openCourseModal('Class 12')}
                className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center"
              >
                {t('programs.learnMore')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('technology.title')}
            </h2>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              {t('technology.subtitle')}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('technology.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t('technology.vr.title')}</h3>
              <p className="text-gray-600 text-sm">{t('technology.vr.description')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t('technology.ai.title')}</h3>
              <p className="text-gray-600 text-sm">{t('technology.ai.description')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t('technology.interactive.title')}</h3>
              <p className="text-gray-600 text-sm">{t('technology.interactive.description')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t('technology.mobile.title')}</h3>
              <p className="text-gray-600 text-sm">{t('technology.mobile.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('admissions.title')}
          </h2>
          <p className="text-xl mb-6">
            {t('admissions.subtitle')}
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            {t('admissions.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              {t('admissions.bookDemo')}
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              {t('admissions.downloadBrochure')}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              {t('contact.subtitle')}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 87654 32109</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.email')}</h3>
              <p className="text-gray-600">info@v18premium.com</p>
              <p className="text-gray-600">admissions@v18premium.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.address')}</h3>
              <p className="text-gray-600">Jamkhandi, Athani,</p>
              <p className="text-gray-600">Harugeri, Badami</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.hours')}</h3>
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">V.18</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">V.18 Premium Tuition</h3>
                  <p className="text-gray-400 text-sm">{t('footer.tagline')}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
                <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">{t('footer.programs')}</a></li>
                <li><a href="#technology" className="text-gray-400 hover:text-white transition-colors">{t('nav.technology')}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('footer.contact')}</a></li>
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 V.18 Premium Tuition. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      
      {selectedCourse && (
        <CourseModal 
          isOpen={isCourseModalOpen} 
          onClose={() => setIsCourseModalOpen(false)} 
          courseData={selectedCourse}
        />
      )}
    </div>
  );
}

export default App;