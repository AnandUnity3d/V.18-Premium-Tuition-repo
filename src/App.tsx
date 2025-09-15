import { useState } from 'react';
import { 
  Menu, X, Play, Users, Award, TrendingUp, Phone, Mail, MapPin, 
  Calendar, FileText, UserCheck, Clock, Star, CheckCircle, ArrowRight, Building
} from 'lucide-react';
import BookingModal from './components/BookingModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAdmissionsPopupOpen, setIsAdmissionsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-600">V.18 Premium Tuition</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#features" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Features</a>
                <a href="#programs" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Programs</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Book Demo
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#features" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Features</a>
              <a href="#programs" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Programs</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Contact</a>
              <button
                onClick={() => {
                  setIsBookingModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium"
              >
                Book Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Karnataka's First <span className="text-blue-600">AR/VR Learning</span> Experience
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Immersive 3D education for Classes 8–12 in both local languages and English at affordable prices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Free Demo
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-base sm:text-lg flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students using VR technology"
                  className="rounded-2xl shadow-3xl animate-float"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full animate-float-delayed opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200 rounded-full animate-float opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Users, number: '500+', label: 'Students Enrolled' },
              { icon: Award, number: '95%', label: 'Success Rate' },
              { icon: TrendingUp, number: '40%', label: 'Grade Improvement' },
              { icon: MapPin, number: '4', label: 'Branches' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <stat.icon className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
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

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Can't find a branch near you? We're expanding rapidly!
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request New Branch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Revolutionizing Education with <span className="text-blue-600">Technology</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                V.18 Premium Tuition is Karnataka's pioneering tech-enabled learning center, combining traditional teaching excellence with cutting-edge AR/VR technology to create an immersive educational experience.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  'Interactive 3D learning modules',
                  'Bilingual instruction (Kannada & English)',
                  'Personalized learning paths',
                  'Expert faculty with tech training'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8471916/pexels-photo-8471916.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern classroom with technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose V.18?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of education with our innovative approach to learning
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Play,
                title: 'AR/VR Learning',
                description: 'Immersive 3D experiences that make complex concepts easy to understand and remember.'
              },
              {
                icon: Users,
                title: 'Expert Faculty',
                description: 'Highly qualified teachers trained in both traditional and modern teaching methodologies.'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: '95% success rate with significant grade improvements across all subjects.'
              },
              {
                icon: Clock,
                title: 'Flexible Timings',
                description: 'Multiple batch options to accommodate different schedules and learning preferences.'
              },
              {
                icon: FileText,
                title: 'Comprehensive Materials',
                description: 'Complete study materials, practice tests, and progress tracking systems.'
              },
              {
                icon: TrendingUp,
                title: 'Performance Analytics',
                description: 'Detailed progress reports and personalized improvement recommendations.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Programs</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive courses designed for academic excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                class: 'Class 8',
                subjects: ['Mathematics', 'Science', 'Social Studies', 'Languages'],
                price: '₹3,000/month',
                features: ['Foundation building', 'Interactive sessions', 'Regular assessments']
              },
              {
                class: 'Class 9',
                subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
                price: '₹3,500/month',
                features: ['Concept clarity', 'Practical learning', 'Exam preparation']
              },
              {
                class: 'Class 10',
                subjects: ['All SSLC Subjects', 'Board Exam Prep', 'Career Guidance'],
                price: '₹4,000/month',
                features: ['Board exam focus', 'Mock tests', 'Performance analysis']
              },
              {
                class: 'PUC 1',
                subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
                price: '₹4,500/month',
                features: ['Stream-specific focus', 'Advanced concepts', 'Competitive prep']
              },
              {
                class: 'PUC 2',
                subjects: ['All PUC Subjects', 'Competitive Exams', 'Career Counseling'],
                price: '₹5,000/month',
                features: ['Final exam prep', 'Entrance coaching', 'Future planning']
              }
            ].map((program, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{program.class}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3 sm:mb-4">{program.price}</div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {program.subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base"
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions & Offers */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Admissions Open!</h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90">
              Limited seats available. Secure your spot today!
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {[
                { title: 'Early Bird Discount', description: '20% off on first month', icon: Award },
                { title: 'Free Demo Class', description: 'Experience AR/VR learning', icon: Play },
                { title: 'Study Materials', description: 'Complimentary books & resources', icon: FileText }
              ].map((offer, index) => (
                <div key={index} className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
                  <offer.icon className="w-8 h-8 sm:w-12 sm:h-12 text-white mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-sm sm:text-base opacity-90">{offer.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setIsAdmissionsPopupOpen(true)}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Get In Touch</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your learning experience? Contact us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+91 98765 43210</p>
                  <p className="text-sm sm:text-base text-gray-600">+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600">info@v18tuition.com</p>
                  <p className="text-sm sm:text-base text-gray-600">admissions@v18tuition.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Main Office</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Main Road, Jamkandi<br />
                    Karnataka, India - 587301
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base sm:text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">V.18 Premium Tuition</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Karnataka's first AR/VR enabled learning center, transforming education through technology.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">i</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Class 8</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Class 9</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Class 10</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">PUC 1</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">PUC 2</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programs</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Main Road, Jamkandi</li>
                <li>Karnataka, India - 587301</li>
                <li>+91 98765 43210</li>
                <li>info@v18tuition.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm sm:text-base">
              © 2024 V.18 Premium Tuition. All rights reserved.
            </p>
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