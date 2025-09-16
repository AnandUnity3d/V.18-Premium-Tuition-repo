import React, { useState } from 'react';
import { 
  Play, 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  Zap, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Headphones,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';
import videoFile from './components/video.mp4';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">V.18 Premium Tuition</h1>
                <p className="text-xs text-gray-600">AR/VR Learning Excellence</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 animate-float-delayed"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Karnataka's First AR/VR Tuition Center
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Learning with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> 3D Technology</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Experience education like never before with immersive AR/VR learning for Classes 8-12. 
                Available in Kannada, Hindi, and English at affordable prices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Free Demo
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg border-2 border-blue-600 hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Play className="w-5 h-5 mr-2 inline" />
                  See Tech in Action
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">4+</div>
                  <div className="text-sm text-gray-600">Locations</div>
                </div>
              </div>
            </div>

            {/* Technology Hero Video */}
            <div className="relative animate-fade-in">
              <div className="relative">
                <video
                  className="w-full h-auto rounded-2xl shadow-3xl animate-float"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={videoFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Success Rate Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <CheckCircle className="w-4 h-4 inline mr-1" />
                  100% Success Rate
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white animate-float">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white animate-float-delayed">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose V.18 Premium Tuition?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary learning experience that makes complex concepts simple and engaging
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3D Immersive Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience subjects like never before with our cutting-edge AR/VR technology that brings textbooks to life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Language Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn in your preferred language - Kannada, Hindi, or English. Breaking language barriers in education.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Faculty</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from experienced teachers who combine traditional expertise with modern technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Adaptive learning paths tailored to each student's pace and learning style for maximum effectiveness.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Timings</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from multiple time slots that fit your schedule. Weekend and evening batches available.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                95% of our students show significant improvement in grades within the first 3 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Affordable Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium AR/VR education at prices that won't break the bank
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">₹2,500</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>2D Learning Materials</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Regular Classes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Doubt Clearing Sessions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Monthly Tests</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-gray-600 text-white py-3 rounded-xl hover:bg-gray-700 transition-colors font-semibold"
              >
                Choose Basic
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-500 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium AR/VR</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">₹4,000</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Full AR/VR Experience</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>3D Interactive Learning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Multi-Language Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Personal Mentor</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Weekly Progress Reports</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
              >
                Choose Premium
              </button>
            </div>

            {/* Elite Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Elite Plan</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">₹6,000</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>1-on-1 Sessions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Exam Preparation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Career Counseling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 Support</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold"
              >
                Choose Elite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Students & Parents Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from our learning community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The AR/VR technology made chemistry so easy to understand. I could actually see the molecular structures!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-gray-600 text-sm">Class 10 Student</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "My daughter's grades improved dramatically. The Kannada support helped her understand concepts better."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-gray-600 text-sm">Parent</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Physics became my favorite subject after joining V.18. The 3D simulations are incredible!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Arjun Patil</div>
                  <div className="text-gray-600 text-sm">PUC 2 Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join Karnataka's most innovative tuition center and experience the future of education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-gray-300">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-gray-300">info@v18premium.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold mb-2">Our Locations</div>
                    <div className="text-gray-300 space-y-1">
                      <div>📍 Jamkandi - Main Branch</div>
                      <div>📍 Athani - Branch Office</div>
                      <div>📍 Harugeri - Learning Center</div>
                      <div>📍 Badami - New Branch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Book Your Free Demo</h3>
              <p className="text-gray-300 mb-6">
                Experience our AR/VR technology firsthand. No commitment required!
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg mb-4"
              >
                Schedule Free Demo
              </button>
              <div className="text-center text-gray-400 text-sm">
                <Headphones className="w-4 h-4 inline mr-2" />
                Free consultation • No hidden charges • Instant confirmation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">V.18 Premium Tuition</h3>
                  <p className="text-xs text-gray-400">AR/VR Learning Excellence</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming education through immersive technology and personalized learning experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Class 8-10 (SSLC)</li>
                <li>PUC 1 & 2 (Science)</li>
                <li>Competitive Exam Prep</li>
                <li>Language Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📞 +91 98765 43210</li>
                <li>✉️ info@v18premium.com</li>
                <li>📍 Jamkandi, Karnataka</li>
                <li>🕒 Mon-Sat: 9AM-8PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 V.18 Premium Tuition. All rights reserved. | Pioneering AR/VR Education in Karnataka</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </div>
  );
}

export default App;