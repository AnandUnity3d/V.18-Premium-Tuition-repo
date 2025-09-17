import React, { useState } from 'react';
import { 
  Play, 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  BookOpen, 
  Zap, 
  Target, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  Clock,
  TrendingUp,
  Info,
  X
} from 'lucide-react';
import VideoModal from './components/VideoModal';
import BookingModal from './components/BookingModal';

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showBranchesInfo, setShowBranchesInfo] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">V.18 Premium Tuition</h1>
                <p className="text-sm text-gray-600">Tech-Enabled Learning</p>
              </div>
            </div>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Karnataka's First
                <span className="block text-yellow-300">Tech-Enabled</span>
                Tuition Center
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Experience immersive 3D learning for Classes 8–12 in both local languages and English. 
                Quality education at affordable prices with cutting-edge AR/VR technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo Video
                </button>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Book Free Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 animate-float">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-blue-900" />
                    </div>
                    <h3 className="font-bold text-lg">500+</h3>
                    <p className="text-blue-200">Happy Students</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-blue-900" />
                    </div>
                    <h3 className="font-bold text-lg">95%</h3>
                    <p className="text-blue-200">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-8 h-8 text-blue-900" />
                    </div>
                    <h3 className="font-bold text-lg">4</h3>
                    <p className="text-blue-200">Locations</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-8 h-8 text-blue-900" />
                    </div>
                    <h3 className="font-bold text-lg">3D</h3>
                    <p className="text-blue-200">AR/VR Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose V.18 Premium Tuition?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary learning experience combining traditional teaching excellence with modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3D Immersive Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience complex concepts through AR/VR technology. Make abstract topics tangible and memorable with interactive 3D visualizations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bilingual Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn in your comfort language - Kannada or English. Our expert faculty ensures concepts are crystal clear in both languages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Affordable Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium quality education at prices that don't burden families. Making advanced learning accessible to every student.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Small Batch Sizes</h3>
              <p className="text-gray-600 leading-relaxed">
                Maximum 15 students per batch ensures personalized attention and better learning outcomes for every student.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Faculty</h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced teachers trained in both traditional methods and modern technology integration for optimal learning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                95% success rate with students consistently achieving top grades and gaining admission to premier institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real students who transformed their academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Exam-Ready Without Pressure</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "The 3D learning made chemistry so easy to understand. I scored 95% in Class 12 boards!"
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">- Priya, Class 12</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Concept Clarity Achieved</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Physics concepts that seemed impossible became crystal clear with AR demonstrations."
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">- Arjun, Class 11</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Confidence Boosted</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "From struggling with math to loving it! The interactive approach changed everything."
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">- Sneha, Class 10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Branches
              </h2>
              <p className="text-xl text-gray-600">
                Conveniently located across Karnataka for easy access
              </p>
            </div>

            {/* Info Button */}
            <button
              onClick={() => setShowBranchesInfo(!showBranchesInfo)}
              className="absolute top-0 right-0 w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors group"
              title="Branch Information"
            >
              <Info className="w-4 h-4 text-blue-600" />
            </button>

            {/* Info Panel */}
            {showBranchesInfo && (
              <div className="absolute top-10 right-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-900">Branch Information</h4>
                  <button
                    onClick={() => setShowBranchesInfo(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• All branches follow the same curriculum and teaching standards</p>
                  <p>• Each location has full AR/VR equipment setup</p>
                  <p>• Bilingual instruction available at all centers</p>
                  <p>• Experienced faculty at every branch</p>
                  <p>• Same affordable pricing across all locations</p>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jamkhandi</h3>
                <p className="text-gray-600 mb-4">Main Branch</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    9 AM - 8 PM
                  </p>
                  <p className="flex items-center justify-center">
                    <Users className="w-4 h-4 mr-1" />
                    200+ Students
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Athani</h3>
                <p className="text-gray-600 mb-4">Branch</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    9 AM - 8 PM
                  </p>
                  <p className="flex items-center justify-center">
                    <Users className="w-4 h-4 mr-1" />
                    150+ Students
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Harugeri</h3>
                <p className="text-gray-600 mb-4">Branch</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    9 AM - 8 PM
                  </p>
                  <p className="flex items-center justify-center">
                    <Users className="w-4 h-4 mr-1" />
                    100+ Students
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Badami</h3>
                <p className="text-gray-600 mb-4">Branch</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    9 AM - 8 PM
                  </p>
                  <p className="flex items-center justify-center">
                    <Users className="w-4 h-4 mr-1" />
                    80+ Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of students who have already discovered the power of 3D learning. 
            Book your free demo today and see the difference technology makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Demo
            </button>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">V.18 Premium Tuition</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Karnataka's first tech-enabled tuition center, making quality education accessible through innovative AR/VR learning.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 98765 43210
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  v18premiumtuition@gmail.com
                </p>
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Jamkhandi, Karnataka
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer transition-colors">About Us</p>
                <p className="hover:text-white cursor-pointer transition-colors">Courses</p>
                <p className="hover:text-white cursor-pointer transition-colors">Branches</p>
                <p className="hover:text-white cursor-pointer transition-colors">Contact</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 V.18 Premium Tuition. All rights reserved.</p>
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
    </div>
  );
}

export default App;