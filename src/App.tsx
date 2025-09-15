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
  TrendingUp,
  Target,
  Zap,
  Globe,
  Headphones,
  Shield,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Calendar,
  FileText,
  UserCheck
} from 'lucide-react';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">V.18 Premium Tuition</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">AR/VR Learning for Students</p>
                <p className="text-xs text-gray-600 sm:hidden">AR/VR Learning</p>
              </div>
            </div>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-blue-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Book Free Demo</span>
              <span className="sm:hidden">Demo</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Karnataka's First <span className="text-blue-600">Tech-Enabled</span> Tuition Center
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience immersive 3D learning for Classes 8–12 in both local languages and English. 
              Quality education at affordable prices with cutting-edge AR/VR technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Free Demo
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-base sm:text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Card */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 lg:p-12 text-white text-center shadow-2xl">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-float">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Experience AR/VR Learning</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              See how complex concepts become simple with our immersive 3D technology. 
              Book a free demo and witness the future of education.
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Watch Demo Now
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose V.18 Premium Tuition?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary learning experience that makes education engaging, effective, and affordable
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Globe,
                title: 'Immersive 3D Learning',
                description: 'Experience subjects like never before with cutting-edge AR/VR technology that brings concepts to life.'
              },
              {
                icon: Users,
                title: 'Bilingual Education',
                description: 'Learn in both local languages and English, ensuring comfort and comprehensive understanding.'
              },
              {
                icon: Target,
                title: 'Affordable Excellence',
                description: 'Premium quality education at prices that every family can afford without compromising on quality.'
              },
              {
                icon: Award,
                title: 'Expert Faculty',
                description: 'Highly qualified teachers trained in modern pedagogical methods and technology integration.'
              },
              {
                icon: Zap,
                title: 'Interactive Sessions',
                description: 'Engaging, hands-on learning experiences that keep students motivated and focused.'
              },
              {
                icon: Shield,
                title: 'Proven Results',
                description: 'Track record of improved academic performance and higher exam scores across all subjects.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Programs</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive courses designed for different academic levels with personalized attention
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Classes 8-10',
                subtitle: 'Foundation Building',
                features: ['Interactive 3D Models', 'Bilingual Content', 'Regular Assessments', 'Doubt Clearing Sessions'],
                price: '₹2,999/month',
                popular: false
              },
              {
                title: 'PUC 1 & 2',
                subtitle: 'Advanced Learning',
                features: ['AR/VR Experiments', 'Competitive Exam Prep', 'Career Guidance', 'Mock Tests'],
                price: '₹3,999/month',
                popular: true
              },
              {
                title: 'Crash Courses',
                subtitle: 'Exam Preparation',
                features: ['Intensive Revision', 'Previous Year Papers', 'Time Management', 'Strategy Sessions'],
                price: '₹1,999/month',
                popular: false
              }
            ].map((program, index) => (
              <div key={index} className={`relative bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${program.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{program.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{program.subtitle}</p>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">{program.price}</div>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-600">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-colors ${
                    program.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Our Impact</h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that speak for our commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '500+', label: 'Happy Students', icon: Users },
              { number: '95%', label: 'Success Rate', icon: TrendingUp },
              { number: '50+', label: 'Expert Teachers', icon: Award },
              { number: '4', label: 'Branches', icon: MapPin }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-float-delayed">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base lg:text-lg text-blue-100">{stat.label}</div>
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

      {/* Contact Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Ready to transform your child's learning experience? Get in touch with us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Get in Touch</h3>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-600 text-sm sm:text-base">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm sm:text-base">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base break-all">info@v18premiumtuition.com</p>
                  <p className="text-gray-600 text-sm sm:text-base break-all">admissions@v18premiumtuition.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Address</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    V.18 Premium Tuition Center<br />
                    123, Education Street<br />
                    Bangalore Rural, Karnataka 560001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Office Hours</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600 text-sm sm:text-base">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none"
                    placeholder="Your message or inquiry"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base"
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
          <div className="text-center">
            <div className="flex justify-center items-center mb-4 sm:mb-6">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-2 sm:mr-3" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">V.18 Premium Tuition</h3>
                <p className="text-xs sm:text-sm text-gray-400">AR/VR Learning for Students</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Transforming education through technology. Making quality learning accessible and affordable for every student in Karnataka.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>📞 +91 98765 43210</span>
              <span className="break-all">✉️ info@v18premiumtuition.com</span>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-xs sm:text-sm text-gray-500">
              <p>&copy; 2024 V.18 Premium Tuition. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}

export default App;