import React, { useState } from 'react';
import { 
  Play, 
  Users, 
  Award, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Headphones, 
  Shield, 
  Target,
  GraduationCap,
  User,
  Calendar
} from 'lucide-react';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdmissionsPopupOpen, setIsAdmissionsPopupOpen] = useState(false);

  const teachers = [
    {
      name: "Dr. Priya Sharma",
      subjects: "Mathematics & Physics",
      experience: "12 Years",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "Ph.D. in Mathematics, M.Sc. Physics",
      specialization: "Advanced Calculus & Quantum Physics",
      achievements: [
        "Published 15+ research papers",
        "Former ISRO scientist",
        "National Mathematics Olympiad mentor"
      ]
    },
    {
      name: "Prof. Rajesh Kumar",
      subjects: "Chemistry & Biology",
      experience: "15 Years",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "M.Sc. Chemistry, B.Sc. Biology",
      specialization: "Organic Chemistry & Molecular Biology",
      achievements: [
        "99% student success rate",
        "Chemistry Olympiad coach",
        "Medical entrance expert"
      ]
    },
    {
      name: "Mrs. Sunita Patil",
      subjects: "English & Literature",
      experience: "10 Years",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "M.A. English Literature, B.Ed.",
      specialization: "Creative Writing & Communication Skills",
      achievements: [
        "Published author",
        "Debate competition judge",
        "Language proficiency expert"
      ]
    },
    {
      name: "Mr. Arun Desai",
      subjects: "Computer Science & AR/VR",
      experience: "8 Years",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "M.Tech Computer Science, AR/VR Certified",
      specialization: "3D Programming & Virtual Reality",
      achievements: [
        "AR/VR technology pioneer",
        "Software development expert",
        "Tech innovation specialist"
      ]
    },
    {
      name: "Dr. Kavitha Reddy",
      subjects: "Social Studies & History",
      experience: "14 Years",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "Ph.D. History, M.A. Political Science",
      specialization: "Indian History & Civics",
      achievements: [
        "Historical research expert",
        "Cultural heritage specialist",
        "Competitive exam mentor"
      ]
    }
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">V.18 Premium Tuition</h1>
                <p className="text-xs text-gray-600">AR/VR Learning Excellence</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#teachers" className="text-gray-700 hover:text-blue-600 transition-colors">Teachers</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                Karnataka's First AR/VR Tuition Center
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Experience Learning in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> 3D Reality</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Revolutionary AR/VR technology meets traditional education. Classes 8-12 in Kannada & English at affordable prices. Transform your child's learning experience today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Book Free Demo
                </button>
                <button 
                  onClick={() => setIsAdmissionsPopupOpen(true)}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Apply Now
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-3xl">
                <img 
                  src="https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Students using AR/VR technology" 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Live AR Chemistry Class</p>
                        <p className="text-xs text-gray-600">Interactive 3D Molecular Structure</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">LIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float-delayed opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Branch Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose V.18 Premium Tuition?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the future of education with our cutting-edge AR/VR technology and expert teaching methodology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AR/VR Technology</h3>
              <p className="text-gray-600">Immersive 3D learning experiences that make complex concepts easy to understand and remember.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Teachers</h3>
              <p className="text-gray-600">Highly qualified educators with years of experience in both traditional and modern teaching methods.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bilingual Support</h3>
              <p className="text-gray-600">Classes available in both Kannada and English to ensure every student understands perfectly.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable Fees</h3>
              <p className="text-gray-600">Premium education at prices that won't burden your family's budget. Quality education for all.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Learning</h3>
              <p className="text-gray-600">Customized learning paths for each student based on their strengths and areas for improvement.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">95% success rate with students consistently achieving top grades in board examinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Teachers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of experienced educators combines traditional teaching excellence with cutting-edge AR/VR technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-4">
                  <div className="relative inline-block">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {teacher.experience}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-4">{teacher.name}</h3>
                  <p className="text-blue-600 font-medium">{teacher.subjects}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Qualifications:</p>
                    <p className="text-sm text-gray-600">{teacher.qualifications}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700">Specialization:</p>
                    <p className="text-sm text-gray-600">{teacher.specialization}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Achievements:</p>
                    <ul className="space-y-1">
                      {teacher.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Teaching Excellence at V.18</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>AR/VR Technology Certified</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Board Exam Specialists</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Bilingual Teaching Experts</span>
              </div>
            </div>
            <p className="text-blue-100">
              Our teachers undergo continuous training in the latest educational technologies and methodologies to provide the best learning experience for your child.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About V.18 Premium Tuition</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are Karnataka's pioneering educational institution that combines traditional teaching excellence with revolutionary AR/VR technology. Our mission is to make quality education accessible and engaging for every student.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovative Learning Methods</h4>
                    <p className="text-gray-600">3D visualization and interactive learning experiences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Comprehensive Coverage</h4>
                    <p className="text-gray-600">Classes 8-12 with complete syllabus coverage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Language Support</h4>
                    <p className="text-gray-600">Teaching in both Kannada and English</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Modern classroom with AR/VR technology" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Details</h2>
            <p className="text-lg text-gray-600">Join Karnataka's most innovative tuition center</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Classes Offered</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Class 8 - Foundation Building</li>
                <li>• Class 9 - Concept Strengthening</li>
                <li>• Class 10 - Board Exam Preparation</li>
                <li>• PUC 1 - Advanced Learning</li>
                <li>• PUC 2 - Competitive Exam Focus</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <Users className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Batch Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Small batch size (15-20 students)</li>
                <li>• Morning & Evening slots</li>
                <li>• Weekend special classes</li>
                <li>• One-on-one sessions available</li>
                <li>• Flexible timing options</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <Award className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fee Structure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Affordable monthly fees</li>
                <li>• No hidden charges</li>
                <li>• Scholarship for meritorious students</li>
                <li>• Flexible payment options</li>
                <li>• Family discount available</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Learning Experience?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of students who have already experienced the future of education with our AR/VR technology and expert teaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Book Free Demo
              </button>
              <button 
                onClick={() => setIsAdmissionsPopupOpen(true)}
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Branch Locations</h2>
            <p className="text-lg text-gray-600">Find the nearest V.18 Premium Tuition center</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Jamkandi", address: "Main Road, Near Bus Stand", phone: "+91 98765 43210" },
              { name: "Athani", address: "College Road, Athani", phone: "+91 98765 43211" },
              { name: "Harugeri", address: "Market Area, Harugeri", phone: "+91 98765 43212" },
              { name: "Badami", address: "Station Road, Badami", phone: "+91 98765 43213" }
            ].map((branch, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{branch.name}</h3>
                <p className="text-gray-600 mb-3">{branch.address}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="w-4 h-4 mr-2" />
                  {branch.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Ready to start your AR/VR learning journey?</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@v18tuition.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Main Branch</p>
                    <p className="text-gray-600">Jamkandi, Karnataka</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Hours</p>
                    <p className="text-gray-600">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select Class</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                    <option>PUC 1</option>
                    <option>PUC 2</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">V.18 Premium Tuition</h3>
                  <p className="text-sm text-gray-400">AR/VR Learning Excellence</p>
                </div>
              </div>
              <p className="text-gray-400">
                Karnataka's first tech-enabled tuition center offering immersive 3D learning experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#teachers" className="hover:text-white transition-colors">Teachers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Classes</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Class 8</li>
                <li>Class 9</li>
                <li>Class 10</li>
                <li>PUC 1</li>
                <li>PUC 2</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>+91 98765 43210</p>
                <p>info@v18tuition.com</p>
                <p>Jamkandi, Karnataka</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 V.18 Premium Tuition. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Admissions Popup */}
      {isAdmissionsPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Branch</h3>
              <p className="text-gray-600 mb-6">
                For admissions, please visit your nearest V.18 Premium Tuition branch with required documents.
              </p>
              <div className="space-y-3 mb-6">
                <div className="text-left p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Jamkandi Branch</p>
                  <p className="text-sm text-gray-600">Main Road, Near Bus Stand</p>
                </div>
                <div className="text-left p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Athani Branch</p>
                  <p className="text-sm text-gray-600">College Road, Athani</p>
                </div>
                <div className="text-left p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Harugeri Branch</p>
                  <p className="text-sm text-gray-600">Market Area, Harugeri</p>
                </div>
                <div className="text-left p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Badami Branch</p>
                  <p className="text-sm text-gray-600">Station Road, Badami</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsAdmissionsPopupOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setIsAdmissionsPopupOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Demo First
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}