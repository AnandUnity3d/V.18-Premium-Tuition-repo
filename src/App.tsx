import React, { useState } from 'react';
import { GraduationCap, Users, Smartphone, MapPin, Phone, Mail, BookOpen, Brain, Award, Star, ArrowRight, Play, CheckCircle, Zap, Heart, Eye, Atom, Target, Building, X } from 'lucide-react';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAdmissionsPopupOpen, setIsAdmissionsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">V.18 Premium Tuition</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">About</a>
              <a href="#programs" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Programs</a>
              <a href="#technology" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Technology</a>
              <a href="#admissions" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Admissions</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Contact</a>
            </nav>
            <button onClick={() => setIsBookingModalOpen(true)} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
              Book Free Demo
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium animate-pulse">Karnataka's First Premiun Tuition</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">Tech-Enabled Education</span> for every students
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform regular classroom subjects into fun, interactive experiences with smart visuals, simple explanations, and guidance from real teachers.
Designed for students of all classes are fully based on State Board, CBSE and ICSE syllabus.
              </p>
              <div className="flex items-center mb-8 space-x-6 animate-fade-in">
                <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer group">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="group-hover:scale-105 transition-transform">Real Teachers</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300 cursor-pointer group">
                  <Brain className="h-5 w-5 mr-2" />
                  <span className="group-hover:scale-105 transition-transform">Smart Classes</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300 cursor-pointer group">
                  <Smartphone className="h-5 w-5 mr-2" />
                  <span className="group-hover:scale-105 transition-transform">Mobile App</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setIsBookingModalOpen(true)} className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center group">
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-50 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center group">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  See Tech in Action
                </button>
              </div>
              <div className="mt-6 flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                <MapPin className="h-4 w-4 mr-2" />
                <span>First Branch: Jamkhandi, Karnataka</span>
              </div>
            </div>
            <div className="relative group">
              {/* Floating elements around the main image */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500/20 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-green-500/20 rounded-full animate-pulse delay-500"></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 group-hover:shadow-3xl">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Student wearing VR headset for immersive learning experience"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                
                {/* Interactive overlay elements */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-white text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span>VR Active</span>
                  </div>
                </div>
                
                {/* Floating VR elements */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="bg-blue-500/80 backdrop-blur-sm rounded-full p-3 animate-float">
                    <Atom className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute top-20 right-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                  <div className="bg-green-500/80 backdrop-blur-sm rounded-full p-2 animate-float-delayed">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300">Immersive VR Learning</h3>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-300">Step into science with our cutting-edge VR headsets - making learning unforgettable</p>
                  
                  {/* Progress bar animation */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    <div className="flex items-center text-sm text-white/80 mb-2">
                      <Zap className="h-4 w-4 mr-2" />
                      <span>Learning Progress</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full animate-progress-bar"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Eye className="h-6 w-6 text-white hover:text-orange-300 transition-colors" />
                </div>
              </div>
              
              {/* Interactive stats overlay */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                <div className="bg-white rounded-xl shadow-xl p-4 min-w-max">
                  <div className="flex items-center space-x-6 text-center">
                    <div className="group/stat hover:scale-110 transition-transform cursor-pointer">
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-xs text-gray-600">Immersive</div>
                    </div>
                    <div className="group/stat hover:scale-110 transition-transform cursor-pointer">
                      <div className="text-2xl font-bold text-green-600">3D</div>
                      <div className="text-xs text-gray-600">Visuals</div>
                    </div>
                    <div className="group/stat hover:scale-110 transition-transform cursor-pointer">
                      <div className="text-2xl font-bold text-orange-600">AR/VR</div>
                      <div className="text-xs text-gray-600">Tech</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About V.18</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At V.18, we believe that every student deserves access to world-class, future-ready education — no matter where they live. Developed by V.18, a leader in educational innovation and immersive technology, we deliver tech-enabled, interactive learning that makes every subject easy to understand, enjoyable, and effective for all types of learners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                To make learning simple, fun, and unforgettable for every learner through immersive 3D content, visual models, and guidance from experienced teachers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">3D Enabled Learning</h4>
                    <p className="text-gray-600">Interactive visualization for complex concepts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Local languages + English Support</h4>
                    <p className="text-gray-600">Bilingual education for better understanding</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Affordable & Scalable</h4>
                    <p className="text-gray-600">Community-based learning at tuition prices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Students engaged in modern technology-based learning"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="grid grid-cols-2 gap-4 text-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-300 mb-1">8-12</div>
                      <div className="text-white/90 text-sm">Classes Covered</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-300 mb-1">7</div>
                      <div className="text-white/90 text-sm">Core Subjects</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-300 mb-1">AR/VR</div>
                      <div className="text-white/90 text-sm">Technology</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-300 mb-1">24/7</div>
                      <div className="text-white/90 text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose V.18 Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why to Choose V.18 Premium Tuition?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our tech enabled learning approach perfect for every student
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Learning That's Easy and Fun</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>• No more mugging up or fear of exams</p>
                <p>• Deep understanding replaces rote memorization</p>
                <p>• Students build curiosity and real interest in subjects</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Designed for All Students</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <span className="text-lg mr-2">🧠</span>
                  <div>
                    <p className="font-semibold text-gray-800">Intelligent students:</p>
                    <p className="text-sm">Go beyond textbooks with visual and concept-based learning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-lg mr-2">📘</span>
                  <div>
                    <p className="font-semibold text-gray-800">Average students:</p>
                    <p className="text-sm">Build strong basics and boost confidence step-by-step</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-lg mr-2">📕</span>
                  <div>
                    <p className="font-semibold text-gray-800">Below-average students:</p>
                    <p className="text-sm">Simple explanations, friendly teachers, and engaging visuals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Real Teachers + Smart Technology</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>• Not just videos — real teachers explain using smart boards and 3D models</p>
                <p>• Interactive lessons keep students curious and involved</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Parents – Transparent Progress</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>• Regular progress updates and parent-teacher meets</p>
                <p>• Fee payment, test alerts, and performance tracking – all from your mobile</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Built for Big Dreams</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>• Affordable and focused tuition designed for rural and semi-urban families</p>
                <p>• Offline and online learning blended together for maximum benefit</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Exam-Ready Without Pressure</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>• Concept clarity first, then practice — so students enjoy learning and score better</p>
                <p>• No fear. No stress. Just happy learning.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Child's Learning Experience?
              </h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of students who are already experiencing the future of education
              </p>
              <button onClick={() => setIsBookingModalOpen(true)} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Book Free Demo Class
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-300">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-gray-300">Pass Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">100+</div>
              <div className="text-gray-300">AR/VR Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive curriculum for Classes 8, 9, 10, 11 & 12</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Class 8 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Class 8 students learning with AR technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Class 8</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Foundation building with concept clarity</p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects</h4>
                    <p className="text-gray-600">Science, Math, English</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AR Modules</h4>
                    <p className="text-gray-600">Cell structure, Friction, Light rays</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                    <p className="text-gray-600">Concept clarity + real-life examples</p>
                  </div>
                </div>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Class 9 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Class 9 students using VR for advanced learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Class 9</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Advanced concepts with visual learning</p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects</h4>
                    <p className="text-gray-600">Science, Math, English</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AR Modules</h4>
                    <p className="text-gray-600">Human tissues, Motion simulation, Atomic structures</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                    <p className="text-gray-600">Diagrams, numerical practice, memory tricks</p>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Class 10 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Class 10 students preparing for board exams with AR/VR"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Class 10</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Board exam preparation with excellence</p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects</h4>
                    <p className="text-gray-600">Science, Math, English</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AR Modules</h4>
                    <p className="text-gray-600">Heart & circulatory system, Ohm's law lab, Refraction</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                    <p className="text-gray-600">Board exam prep + doubt solving + writing practice</p>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
              {/* Class 11 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Class 9 students using VR for advanced learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Class 11</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Advanced concepts with visual learning</p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects</h4>
                    <p className="text-gray-600">Math, Chemistry, Physics, Biology</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AR Modules</h4>
                    <p className="text-gray-600">Human tissues, Motion simulation, Atomic structures</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                    <p className="text-gray-600">Diagrams, numerical practice, memory tricks</p>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>

           {/* Class 12 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Class 9 students using VR for advanced learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Class 12</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Advanced concepts with visual learning</p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects</h4>
                    <p className="text-gray-600">Math, Chemistry, Physics, Biology</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AR Modules</h4>
                    <p className="text-gray-600">Human tissues, Motion simulation, Atomic structures</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                    <p className="text-gray-600">Diagrams, numerical practice, memory tricks</p>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>


          {/* Programs Hero Image */}
          {/* <div className="mt-16 relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Students using AR technology for interactive learning with digital overlays"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/70 to-pink-600/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-4">Augmented Reality Learning</h3>
                <p className="text-xl text-white/90 mb-6">Watch molecules come alive, explore the human body in 3D, and interact with physics concepts through AR overlays</p>
                <div>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-colors font-medium">
                    Experience AR Demo
                  </button>
                </div>
              </div>
            </div>
          </div>*/}

          {/* Schedule */}
          <div className="mt-16 relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Classroom schedule and learning environment"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Schedule</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Weekday Tuition</h4>
                  <p className="text-white/80">Morning & Evening classes</p>
                </div>
                <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Holiday Courses</h4>
                  <p className="text-white/80">Intensive crash courses</p>
                </div>
                <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Weekend classes</h4>
                  <p className="text-white/80">Experiments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology: Learning Meets Innovation</h2>
            <p className="text-xl text-gray-600">Experience the future of education with our cutting-edge tools</p>
          </div>
          
          {/* Technology Hero Image */}
          <div className="mb-16 relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Advanced VR learning technology in classroom"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-orange-600/80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Play className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">See Our Technology in Action</h3>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">Watch how tech transforms traditional learning into an immersive, engaging experience</p>
              </div>
            </div>
          </div>

          { /*
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Class 8-10</h3>
              <p className="text-gray-600 mb-4">Foundation building with interactive 3D models and AR experiences</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Mathematics & Science</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />English & Kannada</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Social Studies</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">PUC 1</h3>
              <p className="text-gray-600 mb-4">Advanced learning with immersive VR technology for pre-university</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Physics, Chemistry, Biology</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Mathematics</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />English & Kannada</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">PUC 2</h3>
              <p className="text-gray-600 mb-4">Exam preparation with comprehensive VR simulations and practice</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Advanced PCM/PCB</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Competitive Exam Prep</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Career Guidance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AR/VR Learning</h3>
              <p className="text-gray-600 mb-4">Immersive technology making complex concepts simple and engaging</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />3D Molecular Models</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Virtual Lab Experiments</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Interactive Simulations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Language Support</h3>
              <p className="text-gray-600 mb-4">Learn in Kannada and English with culturally relevant content</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Bilingual Teaching</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Cultural Context</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Regional Examples</li>
              </ul>
            </div>
          </div> */}
          
          {/* Technology Tools Section */}
          <div className="mt-16 relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Technology tools and equipment"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Tools Include</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white">3D modules</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white">Real-time classroom projection</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white">Offline-accessible content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admissions</h2>
            <p className="text-xl text-gray-600">Join early and experience the future of tuition</p>
          </div>
          
          {/* Admissions Hero Image */}
          <div className="mb-12 relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Students joining V.18 tuition center"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/70 to-blue-600/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl mx-auto px-6">
                <h3 className="text-4xl font-bold mb-4">Join the Future of Learning</h3>
                <p className="text-xl text-white/90 mb-6">Be among the first students to experience tech enabled education in Karnataka</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setIsBookingModalOpen(true)} className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-colors font-medium">
                    Book Free Demo
                  </button>
                  <button
                    onClick={() => setIsAdmissionsPopupOpen(true)}
                    className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* <img 
                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Admission details and offers"
                  className="w-full h-full object-cover"
                /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-6">Admission Details</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-white">Open for Class 8–12</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-white">FREE Demo Class</span>
                    </div>
                    
                  </div> 
  
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

      {/* Branches */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Branches</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Quality education accessible across multiple locations in Karnataka
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                name: 'Jamkandi',
                address: 'Main Road, Jamkandi',
                phone: '+91 98765 43210',
                status: 'Open'
              },
              {
                name: 'Athani',
                address: 'Education Street, Athani',
                phone: '+91 98765 43211',
                status: 'Open'
              },
              {
                name: 'Harugeri',
                address: 'School Road, Harugeri',
                phone: '+91 98765 43212',
                status: 'Open'
              },
              {
                name: 'Badami',
                address: 'Heritage Lane, Badami',
                phone: '+91 98765 43213',
                status: 'Coming Soon'
              }
            ].map((branch, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{branch.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">{branch.address}</p>
                  <p className="text-sm text-gray-600 mb-3">{branch.phone}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                    branch.status === 'Open' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {branch.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Parents & Students Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our V.18 family</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"My son hated science. After joining V.18, he explains diagrams using AR – now he loves the subject!"</p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Parent testimonial"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Parent</div>
                  <div className="text-gray-600 text-sm">9th Standard</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"We tried online tuition but didn't work. This one is different. They show us real models in class."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Parent testimonial"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Parent</div>
                  <div className="text-gray-600 text-sm">10th Standard</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"Heart model 3D was amazing – it helped me write the answer in the exam properly."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Student testimonial"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Student</div>
                  <div className="text-gray-600 text-sm">Class 10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              FAQ – Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Got Questions? We Have Answers</h2>
            <p className="text-xl text-gray-600">Everything you need to know about V.18 Premium Tuition</p>
          </div>

          {/* FAQ Hero Image */}
          <div className="mb-16 relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-4">Clear Your Doubts</h3>
                <p className="text-xl text-white/90 mb-6">Get instant answers to common questions about our AR/VR learning programs</p>
                <div className="flex items-center justify-center space-x-8 text-white/80">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span>Academic Info</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="h-5 w-5 mr-2" />
                    <span>Technology Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Academic FAQ */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="relative h-48">
                  <img 
                    src="https://images.pexels.com/photos/8471777/pexels-photo-8471777.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Academic curriculum and syllabus information"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                        <span className="text-2xl">📚</span>
                      </div>
                      <h3 className="text-2xl font-bold">Academic</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="group">
                      <div className="flex items-start cursor-pointer">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                          <span className="text-green-600 font-bold text-sm">Q</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            Which syllabus do you follow?
                          </h4>
                          <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                <span className="text-white font-bold text-sm">A</span>
                              </div>
                              <p className="text-gray-700">We follow <strong>State Board, CBSE & ICSE Students</strong> for Classes 8–12.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="flex items-start cursor-pointer">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                          <span className="text-green-600 font-bold text-sm">Q</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            Are classes in Local languages or English?
                          </h4>
                          <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                <span className="text-white font-bold text-sm">A</span>
                              </div>
                              <p className="text-gray-700">We offer content and teaching in both <strong>Local languages and English medium</strong>.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology FAQ */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="relative h-48">
                  <img 
                    src="https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Technology-Enabled Teaching"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h3 className="text-2xl font-bold">Technology</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="group">
                      <div className="flex items-start cursor-pointer">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                          <span className="text-blue-600 font-bold text-sm">Q</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            What is AR/VR learning?
                          </h4>
                          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                <span className="text-white font-bold text-sm">A</span>
                              </div>
                              <p className="text-gray-700">Students experience <strong>3D models and simulations</strong> using phones or projectors, making complex topics like the heart, circuits, or reflection easier to understand.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="flex items-start cursor-pointer">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                          <span className="text-blue-600 font-bold text-sm">Q</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            Do students need special devices?
                          </h4>
                          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                <span className="text-white font-bold text-sm">A</span>
                              </div>
                              <p className="text-gray-700"><strong>No.</strong> We provide the devices at the center. <em>Optional:</em> students can access limited content via the app at home.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional FAQ CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">Our team is here to help you understand how visual learning can benefit your child</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us: +91 8123144616
                </button>
                <button onClick={() => setIsBookingModalOpen(true)} className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  Book Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Hero Image */}
          <div className="mb-16 relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="V.18 tuition center location and contact"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">Visit Our Head Brach</h2>
                <p className="text-xl text-white/90 mb-6">Experience visual learning firsthand at our Jamkhandi location</p>
                <div className="flex items-center justify-center text-white/80">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Near Govt High School, Jamkhandi, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
        
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">V.18 Premium Tuition </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-300">Near Govt High School, Jamkhandi, Karnataka</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+91 8123144616</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">anandbiradar002@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Contact form and communication"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Name</label>
                      <input type="text" className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-white/70" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Phone</label>
                      <input type="tel" className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-white/70" placeholder="Your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Class</label>
                      <select className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white">
                        <option className="text-gray-900">Select Class</option>
                        <option className="text-gray-900">Class 8</option>
                        <option className="text-gray-900">Class 9</option>
                        <option className="text-gray-900">Class 10</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Message</label>
                      <textarea rows={3} className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-white/70" placeholder="Your message"></textarea>
                    </div>
                    <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-xl font-bold">V.18 Premium Tuition</span>
              </div>
              <p className="text-gray-400">Next-Level Learning for State Board, CBSE and ICSE Students</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-orange-500 transition-colors">About</a></li>
                <li><a href="#programs" className="hover:text-orange-500 transition-colors">Programs</a></li>
                <li><a href="#technology" className="hover:text-orange-500 transition-colors">Technology</a></li>
                <li><a href="#admissions" className="hover:text-orange-500 transition-colors">Admissions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Class 8</li>
                <li>Class 9</li>
                <li>Class 10</li>
                <li>Class 11</li>
                <li>Class 12</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Jamkhandi, Karnataka</li>
                <li>+91 8123144616</li>
                <li>anandbiradar002@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 V.18 Premium Tuition. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />

      {/* Admissions Popup */}
      {isAdmissionsPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Visit Your Nearest Location</h2>
                <button
                  onClick={() => setIsAdmissionsPopupOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-600 mb-6 text-center">
                Visit any of our branches to complete your admission process
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: 'Jamkandi',
                    address: 'Main Road, Jamkandi',
                    phone: '+91 98765 43210',
                    status: 'Open'
                  },
                  {
                    name: 'Athani',
                    address: 'Education Street, Athani',
                    phone: '+91 98765 43211',
                    status: 'Open'
                  },
                  {
                    name: 'Harugeri',
                    address: 'School Road, Harugeri',
                    phone: '+91 98765 43212',
                    status: 'Open'
                  },
                  {
                    name: 'Badami',
                    address: 'Heritage Lane, Badami',
                    phone: '+91 98765 43213',
                    status: 'Coming Soon'
                  }
                ].map((branch, index) => (
                  <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Building className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{branch.name}</h3>
                      <p className="text-sm text-gray-600">{branch.address}</p>
                      <p className="text-sm text-gray-600">{branch.phone}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      branch.status === 'Open' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {branch.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
                <button
                  onClick={() => setIsAdmissionsPopupOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setIsAdmissionsPopupOpen(false);
                    setIsBookingModalOpen(true);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Book Demo First
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;