import React, { useState } from 'react';
import { Play, Users, Award, MapPin, Phone, Mail, Calendar, BookOpen, User, X, Calculator, Microscope, Star } from 'lucide-react';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';

interface Branch {
  name: string;
  address: string;
  phone: string;
  status: string;
}

interface Teacher {
  name: string;
  subject: string;
  experience: string;
  qualification: string;
  specialization: string;
  rating: number;
  icon: React.ReactNode;
  color: string;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  const getBranchDetails = (branchName: string) => {
    const branchData: { [key: string]: any } = {
      'Jamkhandi': {
        fullAddress: 'Main Road, Near Bus Stand, Jamkhandi - 587301, Karnataka',
        establishedYear: '2020',
        studentCount: '450+',
        facilities: ['Smart Classrooms', 'VR Lab', 'AR Learning Zone', 'Digital Library', 'Science Lab'],
        teachers: [
          {
            name: 'Dr. Rajesh Kumar',
            subject: 'Mathematics',
            experience: '12 years',
            qualification: 'Ph.D in Mathematics, IIT Delhi',
            specialization: 'Calculus, Algebra, Geometry',
            rating: 4.9,
            icon: <Calculator className="w-5 h-5" />,
            color: 'from-blue-500 to-blue-600'
          },
          {
            name: 'Prof. Priya Sharma',
            subject: 'Science',
            experience: '10 years',
            qualification: 'M.Sc Physics, Gold Medalist',
            specialization: 'Quantum Physics, Thermodynamics',
            rating: 4.8,
            icon: <Microscope className="w-5 h-5" />,
            color: 'from-green-500 to-green-600'
          },
          {
            name: 'Ms. Anita Reddy',
            subject: 'English',
            experience: '8 years',
            qualification: 'M.A English Literature',
            specialization: 'Grammar, Literature, Communication',
            rating: 4.7,
            icon: <BookOpen className="w-5 h-5" />,
            color: 'from-purple-500 to-purple-600'
          }
        ]
      },
      'Athani': {
        fullAddress: 'Education Street, Near Government College, Athani - 591304, Karnataka',
        establishedYear: '2021',
        studentCount: '320+',
        facilities: ['Smart Classrooms', 'Computer Lab', 'AR Learning Zone', 'Library'],
        teachers: [
          {
            name: 'Mr. Suresh Patil',
            subject: 'Mathematics',
            experience: '15 years',
            qualification: 'M.Sc Mathematics, B.Ed',
            specialization: 'Trigonometry, Statistics, Probability',
            rating: 4.8,
            icon: <Calculator className="w-5 h-5" />,
            color: 'from-blue-500 to-blue-600'
          },
          {
            name: 'Dr. Kavitha Nair',
            subject: 'Science',
            experience: '11 years',
            qualification: 'Ph.D Chemistry, NET Qualified',
            specialization: 'Organic Chemistry, Biochemistry',
            rating: 4.9,
            icon: <Microscope className="w-5 h-5" />,
            color: 'from-green-500 to-green-600'
          },
          {
            name: 'Mr. Ravi Kumar',
            subject: 'English',
            experience: '9 years',
            qualification: 'M.A English, TESOL Certified',
            specialization: 'Spoken English, Creative Writing',
            rating: 4.7,
            icon: <BookOpen className="w-5 h-5" />,
            color: 'from-purple-500 to-purple-600'
          }
        ]
      },
      'Harugeri': {
        fullAddress: 'School Road, Harugeri Village, Harugeri - 591126, Karnataka',
        establishedYear: '2022',
        studentCount: '280+',
        facilities: ['Smart Classrooms', 'VR Lab', 'Digital Library', 'Science Lab'],
        teachers: [
          {
            name: 'Mrs. Lakshmi Devi',
            subject: 'Mathematics',
            experience: '13 years',
            qualification: 'M.Sc Mathematics, M.Ed',
            specialization: 'Coordinate Geometry, Calculus',
            rating: 4.8,
            icon: <Calculator className="w-5 h-5" />,
            color: 'from-blue-500 to-blue-600'
          },
          {
            name: 'Mr. Prakash Joshi',
            subject: 'Science',
            experience: '14 years',
            qualification: 'M.Sc Biology, Ph.D pursuing',
            specialization: 'Molecular Biology, Genetics',
            rating: 4.9,
            icon: <Microscope className="w-5 h-5" />,
            color: 'from-green-500 to-green-600'
          },
          {
            name: 'Ms. Deepa Singh',
            subject: 'English',
            experience: '10 years',
            qualification: 'M.A English Literature, B.Ed',
            specialization: 'Poetry, Drama, Essay Writing',
            rating: 4.8,
            icon: <BookOpen className="w-5 h-5" />,
            color: 'from-purple-500 to-purple-600'
          }
        ]
      },
      'Badami': {
        fullAddress: 'Heritage Lane, Near Badami Fort, Badami - 587201, Karnataka',
        establishedYear: '2023',
        studentCount: '200+',
        facilities: ['Smart Classrooms', 'AR Learning Zone', 'Computer Lab', 'Library'],
        teachers: [
          {
            name: 'Dr. Manjunath Gowda',
            subject: 'Mathematics',
            experience: '16 years',
            qualification: 'Ph.D Mathematics, IISc Bangalore',
            specialization: 'Advanced Calculus, Linear Algebra',
            rating: 4.9,
            icon: <Calculator className="w-5 h-5" />,
            color: 'from-blue-500 to-blue-600'
          },
          {
            name: 'Mrs. Sunita Rao',
            subject: 'Science',
            experience: '12 years',
            qualification: 'M.Sc Physics, M.Phil',
            specialization: 'Mechanics, Optics, Electronics',
            rating: 4.8,
            icon: <Microscope className="w-5 h-5" />,
            color: 'from-green-500 to-green-600'
          },
          {
            name: 'Mr. Arun Kulkarni',
            subject: 'English',
            experience: '11 years',
            qualification: 'M.A English, Cambridge Certified',
            specialization: 'Business English, Public Speaking',
            rating: 4.7,
            icon: <BookOpen className="w-5 h-5" />,
            color: 'from-purple-500 to-purple-600'
          }
        ]
      }
    };
    return branchData[branchName] || null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">V.18 Premium Tuition</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Tech-Enabled Learning</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#branches" className="text-gray-700 hover:text-blue-600 transition-colors">Branches</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Book Demo
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Karnataka's First
                <span className="block text-blue-600">Tech-Enabled Tuition</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Experience immersive 3D learning for Classes 8–12 in both local languages and English. 
                Quality education at affordable prices with cutting-edge AR/VR technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg font-semibold shadow-lg"
                >
                  Book Free Demo
                </button>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 border-2 border-blue-600 flex items-center justify-center space-x-2 text-base sm:text-lg font-semibold"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Students using VR technology for learning"
                  className="rounded-2xl shadow-3xl w-full h-64 sm:h-80 lg:h-96 object-cover animate-float"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-200 rounded-full animate-float-delayed opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-indigo-200 rounded-full animate-float opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose V.18 Premium Tuition?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary learning experience combining traditional teaching with cutting-edge technology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: '3D Immersive Learning',
                description: 'Complex concepts made simple through AR/VR technology and interactive 3D models'
              },
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                title: 'Bilingual Education',
                description: 'Learn in both local languages (Kannada/Hindi) and English for better understanding'
              },
              {
                icon: <BookOpen className="w-8 h-8 text-purple-600" />,
                title: 'Classes 8-12',
                description: 'Comprehensive curriculum covering all subjects for secondary and higher secondary'
              },
              {
                icon: <MapPin className="w-8 h-8 text-red-600" />,
                title: 'Multiple Locations',
                description: 'Conveniently located branches across Karnataka for easy accessibility'
              },
              {
                icon: <Award className="w-8 h-8 text-yellow-600" />,
                title: 'Affordable Pricing',
                description: 'Premium quality education at prices that every family can afford'
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-600" />,
                title: 'Expert Teachers',
                description: 'Qualified and experienced educators trained in modern teaching methodologies'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 group animate-fade-in">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '1000+', label: 'Happy Students' },
              { number: '50+', label: 'Expert Teachers' },
              { number: '4', label: 'Branch Locations' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base lg:text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section id="branches" className="py-12 sm:py-16 lg:py-20 bg-white">
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
                name: 'Jamkhandi',
                address: 'Main Road, Jamkhandi',
                phone: '+91 98765 43210',
                status: 'Open'
              },
              {
                name: 'Athani',
                address: 'Education Street, Athani',
                phone: '+91 98765 43211',
                status: 'Coming Soon'
              },
              {
                name: 'Harugeri',
                address: 'School Road, Harugeri',
                phone: '+91 98765 43212',
                status: 'Coming Soon'
              },
              {
                name: 'Badami',
                address: 'Heritage Lane, Badami',
                phone: '+91 98765 43213',
                status: 'Coming Soon'
              }
            ].map((branch, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedBranch(branch)}
                className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{branch.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">{branch.address}</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">{branch.phone}</p>
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

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Get In Touch</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your child's learning experience? Contact us today!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center p-6 sm:p-8 bg-white rounded-xl shadow-md">
              <Phone className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm sm:text-base text-gray-600">+91 98765 43210</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-white rounded-xl shadow-md">
              <Mail className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm sm:text-base text-gray-600">v18premiumtuition@gmail.com</p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-white rounded-xl shadow-md">
              <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sm sm:text-base text-gray-600">Main Road, Jamkhandi</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg font-semibold shadow-lg"
            >
              Book Your Free Demo Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">V.18 Premium Tuition</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Tech-Enabled Learning</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-4 max-w-md">
                Karnataka's first tech-enabled tuition center offering immersive 3D learning 
                experiences for students in Classes 8-12.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#features" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#branches" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">Branches</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="text-sm sm:text-base text-gray-300">+91 98765 43210</li>
                <li className="text-sm sm:text-base text-gray-300">v18premiumtuition@gmail.com</li>
                <li className="text-sm sm:text-base text-gray-300">Main Road, Jamkhandi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2024 V.18 Premium Tuition. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Branch Details Modal */}
      {selectedBranch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedBranch.name} Branch</h2>
                <button
                  onClick={() => setSelectedBranch(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {(() => {
                const branchDetails = getBranchDetails(selectedBranch.name);
                if (!branchDetails) return null;

                return (
                  <div className="space-y-6">
                    {/* Branch Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Branch Information</h3>
                        <div className="space-y-2">
                          <p className="text-gray-600"><strong>Address:</strong> {branchDetails.fullAddress}</p>
                          <p className="text-gray-600"><strong>Phone:</strong> {selectedBranch.phone}</p>
                          <p className="text-gray-600"><strong>Established:</strong> {branchDetails.establishedYear}</p>
                          <p className="text-gray-600"><strong>Students:</strong> {branchDetails.studentCount}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Facilities</h3>
                        <div className="flex flex-wrap gap-2">
                          {branchDetails.facilities.map((facility: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {facility}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Teachers */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Expert Teachers</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {branchDetails.teachers.map((teacher: Teacher, index: number) => (
                          <div key={index} className={`bg-gradient-to-br ${teacher.color} p-4 rounded-lg text-white`}>
                            <div className="flex items-center mb-3">
                              {teacher.icon}
                              <span className="ml-2 font-semibold">{teacher.subject}</span>
                            </div>
                            <h4 className="font-bold text-lg mb-2">{teacher.name}</h4>
                            <div className="space-y-1 text-sm opacity-90">
                              <p><strong>Experience:</strong> {teacher.experience}</p>
                              <p><strong>Qualification:</strong> {teacher.qualification}</p>
                              <p><strong>Specialization:</strong> {teacher.specialization}</p>
                              <div className="flex items-center mt-2">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="ml-1 font-semibold">{teacher.rating}/5</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="text-center pt-4">
                      <button
                        onClick={() => {
                          setSelectedBranch(null);
                          setIsBookingOpen(true);
                        }}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Book Free Demo at {selectedBranch.name}
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
}