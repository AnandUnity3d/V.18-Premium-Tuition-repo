import React, { useState } from 'react';
import { Play, Users, Award, BookOpen, Phone, Mail, MapPin, Clock, Star, CheckCircle, ArrowRight, Globe, Zap, Target, Brain, Lightbulb, TrendingUp } from 'lucide-react';
import VideoModal from './components/VideoModal';
import BookingModal from './components/BookingModal';
import CourseModal from './components/CourseModal';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const courseData = {
    'Class 8': {
      class: 'Class 8',
      title: 'Foundation Building Program',
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Kannada/Hindi'],
      duration: '10 months',
      batchSize: '15-20 students',
      features: [
        '3D Interactive Learning',
        'AR/VR Science Labs',
        'Bilingual Teaching',
        'Regular Assessments',
        'Parent-Teacher Meetings'
      ],
      description: 'Build a strong foundation for higher classes with our comprehensive Class 8 program. We focus on conceptual clarity and practical understanding through immersive 3D learning experiences.',
      highlights: [
        'Introduction to advanced mathematical concepts',
        'Interactive science experiments in virtual labs',
        'Strong language skills development',
        'Critical thinking and problem-solving skills',
        'Preparation for competitive exams foundation'
      ]
    },
    'Class 9': {
      class: 'Class 9',
      title: 'Pre-Board Excellence Program',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies'],
      duration: '10 months',
      batchSize: '12-18 students',
      features: [
        'Advanced 3D Simulations',
        'Virtual Chemistry Lab',
        'Physics Concept Visualization',
        'Regular Mock Tests',
        'Individual Attention'
      ],
      description: 'Prepare for board exams with our advanced Class 9 program. Experience complex concepts through immersive AR/VR technology and build confidence for Class 10.',
      highlights: [
        'Advanced problem-solving techniques',
        'Board exam pattern familiarization',
        'Comprehensive revision programs',
        'Doubt clearing sessions',
        'Time management skills development'
      ]
    },
    'Class 10': {
      class: 'Class 10',
      title: 'Board Exam Mastery Program',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies'],
      duration: '12 months',
      batchSize: '10-15 students',
      features: [
        'Board Exam Focused Teaching',
        'Intensive Revision Programs',
        'Mock Test Series',
        'Result Guarantee Program',
        '24/7 Doubt Support'
      ],
      description: 'Achieve excellence in Class 10 board exams with our result-oriented program. Our proven methodology and 3D learning ensure 95%+ results for all students.',
      highlights: [
        'Guaranteed 95%+ results',
        'Comprehensive board exam preparation',
        'Previous year question analysis',
        'Time-bound practice sessions',
        'Stress management and exam techniques'
      ]
    },
    'Class 11': {
      class: 'Class 11',
      title: 'Pre-University Foundation Program',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science'],
      duration: '12 months',
      batchSize: '8-12 students',
      features: [
        'JEE/NEET Foundation',
        'Advanced 3D Modeling',
        'Research-Based Learning',
        'Competitive Exam Prep',
        'Career Guidance'
      ],
      description: 'Start your journey towards engineering and medical entrance exams with our comprehensive Class 11 program. Build strong fundamentals while preparing for competitive exams.',
      highlights: [
        'Dual preparation for boards and entrance exams',
        'Advanced laboratory simulations',
        'Conceptual depth and clarity',
        'Regular performance analysis',
        'Career counseling and guidance'
      ]
    },
    'Class 12': {
      class: 'Class 12',
      title: 'Board + Entrance Exam Program',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science'],
      duration: '14 months',
      batchSize: '6-10 students',
      features: [
        'JEE/NEET Intensive Training',
        'Board Exam Excellence',
        'Advanced Problem Solving',
        'Mock Test Series',
        'College Admission Guidance'
      ],
      description: 'Master both board exams and entrance tests with our intensive Class 12 program. Our dual approach ensures success in both academic and competitive examinations.',
      highlights: [
        'Simultaneous board and entrance exam preparation',
        'Advanced problem-solving techniques',
        'Comprehensive test series',
        'College admission counseling',
        'Scholarship guidance and support'
      ]
    }
  };

  const openCourseModal = (className: string) => {
    setSelectedCourse(courseData[className as keyof typeof courseData]);
    setIsCourseModalOpen(true);
  };

  const closeCourseModal = () => {
    setIsCourseModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">V.18 Premium Tuition</h1>
                <p className="text-xs text-gray-600">Tech-Enabled Learning</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Book Demo
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Karnataka's First
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Tech-Enabled</span>
                <br />Tuition Center
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the future of education with immersive 3D learning, AR/VR technology, 
                and expert teaching in both local languages and English for Classes 8–12.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
                >
                  Book Free Demo
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 animate-float">
                <img
                  src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students using VR technology"
                  className="rounded-2xl shadow-3xl w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float-delayed"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose V.18 Premium Tuition?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary learning experience combining cutting-edge technology with proven teaching methods
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "3D Interactive Learning",
                description: "Complex concepts visualized in 3D for better understanding and retention"
              },
              {
                icon: Globe,
                title: "AR/VR Technology",
                description: "Immersive virtual labs and augmented reality experiences"
              },
              {
                icon: Users,
                title: "Small Batch Size",
                description: "Maximum 15 students per batch for personalized attention"
              },
              {
                icon: Award,
                title: "Expert Faculty",
                description: "Experienced teachers trained in modern pedagogical methods"
              },
              {
                icon: Lightbulb,
                title: "Bilingual Teaching",
                description: "Instruction available in Kannada, Hindi, and English"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "95%+ success rate in board exams and competitive tests"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive courses designed for Classes 8–12 with affordable pricing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { class: "Class 8", price: "₹2,500/month", subjects: "5 Subjects", features: ["Foundation Building", "3D Learning", "Regular Tests"] },
              { class: "Class 9", price: "₹3,000/month", subjects: "6 Subjects", features: ["Pre-Board Prep", "AR Labs", "Mock Tests"] },
              { class: "Class 10", price: "₹3,500/month", subjects: "6 Subjects", features: ["Board Excellence", "Result Guarantee", "Intensive Coaching"] },
              { class: "Class 11", price: "₹4,000/month", subjects: "6 Subjects", features: ["JEE/NEET Foundation", "Advanced Labs", "Career Guidance"] },
              { class: "Class 12", price: "₹4,500/month", subjects: "6 Subjects", features: ["Entrance Exam Prep", "Board + JEE/NEET", "College Guidance"] }
            ].map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.class}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{program.price}</div>
                  <p className="text-gray-600">{program.subjects}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openCourseModal(program.class)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Revolutionizing Education in Karnataka
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                V.18 Premium Tuition is Karnataka's pioneering tech-enabled learning center, 
                making quality education accessible and affordable for students in Classes 8–12.
              </p>
              <div className="space-y-4">
                {[
                  "First AR/VR enabled tuition center in Karnataka",
                  "Bilingual instruction in local languages",
                  "Affordable fees starting from ₹2,500/month",
                  "95%+ success rate in board examinations",
                  "Expert faculty with modern teaching methods"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern classroom with technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">95%+ Success Rate</div>
                    <div className="text-sm text-gray-600">Board Exam Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Serving students across multiple locations in Karnataka</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Jamkhandi", address: "Main Branch", phone: "+91 98765 43210" },
              { name: "Athani", address: "Coming Soon", phone: "+91 98765 43211" },
              { name: "Harugeri", address: "Coming Soon", phone: "+91 98765 43212" },
              { name: "Badami", address: "Coming Soon", phone: "+91 98765 43213" }
            ].map((location, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-2">{location.address}</p>
                <p className="text-blue-600 font-medium">{location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to transform your child's learning experience?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">v18premiumtuition@gmail.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">Jamkhandi, Karnataka</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Book Your Free Demo Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">V.18 Premium Tuition</span>
            </div>
            <p className="text-gray-400 mb-4">Karnataka's First Tech-Enabled Tuition Center</p>
            <p className="text-gray-500 text-sm">
              © 2024 V.18 Premium Tuition. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      {selectedCourse && (
        <CourseModal
          isOpen={isCourseModalOpen}
          onClose={closeCourseModal}
          courseData={selectedCourse}
        />
      )}
      {selectedCourse && (
        <CourseModal
          isOpen={isCourseModalOpen}
          onClose={closeCourseModal}
          courseData={selectedCourse}
        />
      )}
    </div>
  );
}