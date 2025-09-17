import React, { useState } from 'react';
import { 
  Play, 
  Calendar, 
  Users, 
  Award, 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Star
} from 'lucide-react';
import VideoModal from './components/VideoModal';
import BookingModal from './components/BookingModal';

interface Teacher {
  name: string;
  subject: string;
  experience: string;
  qualification: string;
  rating: number;
}

interface Location {
  name: string;
  address: string;
  phone: string;
  teachers: Teacher[];
}

const locations: Location[] = [
  {
    name: "Jamkandi",
    address: "Main Road, Near Bus Stand, Jamkandi",
    phone: "+91 98765 43210",
    teachers: [
      {
        name: "Dr. Priya Sharma",
        subject: "Physics & Mathematics",
        experience: "8 years",
        qualification: "M.Sc Physics, B.Ed",
        rating: 4.9
      },
      {
        name: "Prof. Rajesh Kumar",
        subject: "Chemistry & Biology",
        experience: "12 years",
        qualification: "M.Sc Chemistry, Ph.D",
        rating: 4.8
      },
      {
        name: "Ms. Anita Patil",
        subject: "English & Social Science",
        experience: "6 years",
        qualification: "M.A English, B.Ed",
        rating: 4.7
      }
    ]
  },
  {
    name: "Athani",
    address: "College Road, Athani",
    phone: "+91 98765 43211",
    teachers: [
      {
        name: "Mr. Suresh Gowda",
        subject: "Mathematics & Physics",
        experience: "10 years",
        qualification: "M.Sc Mathematics, B.Ed",
        rating: 4.9
      },
      {
        name: "Dr. Kavitha Rao",
        subject: "Chemistry & Biology",
        experience: "9 years",
        qualification: "M.Sc Chemistry, Ph.D",
        rating: 4.8
      },
      {
        name: "Ms. Deepa Joshi",
        subject: "English & Hindi",
        experience: "7 years",
        qualification: "M.A English, B.Ed",
        rating: 4.6
      }
    ]
  },
  {
    name: "Harugeri",
    address: "Market Street, Harugeri",
    phone: "+91 98765 43212",
    teachers: [
      {
        name: "Prof. Manjunath Bhat",
        subject: "Physics & Mathematics",
        experience: "15 years",
        qualification: "M.Sc Physics, M.Ed",
        rating: 4.9
      },
      {
        name: "Dr. Sunita Desai",
        subject: "Chemistry & Biology",
        experience: "11 years",
        qualification: "M.Sc Chemistry, Ph.D",
        rating: 4.8
      },
      {
        name: "Mr. Arun Kulkarni",
        subject: "Social Science & English",
        experience: "8 years",
        qualification: "M.A History, B.Ed",
        rating: 4.7
      }
    ]
  },
  {
    name: "Badami",
    address: "Station Road, Badami",
    phone: "+91 98765 43213",
    teachers: [
      {
        name: "Ms. Lakshmi Nair",
        subject: "Mathematics & Physics",
        experience: "9 years",
        qualification: "M.Sc Mathematics, B.Ed",
        rating: 4.8
      },
      {
        name: "Dr. Ramesh Hegde",
        subject: "Chemistry & Biology",
        experience: "13 years",
        qualification: "M.Sc Chemistry, Ph.D",
        rating: 4.9
      },
      {
        name: "Ms. Pooja Shetty",
        subject: "English & Kannada",
        experience: "5 years",
        qualification: "M.A English, B.Ed",
        rating: 4.6
      }
    ]
  }
];

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  const toggleLocationDetails = (locationName: string) => {
    setExpandedLocation(expandedLocation === locationName ? null : locationName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
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
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Karnataka's First
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}AR/VR Learning{' '}
                </span>
                Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Immersive 3D education for Classes 8–12 in both local languages and English. 
                Make complex concepts simple with cutting-edge technology at affordable prices.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Play className="w-5 h-5" />
                  <span className="font-medium">Watch Demo</span>
                </button>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Book Free Demo</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 animate-float">
                <img
                  src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Students using VR technology"
                  className="rounded-2xl shadow-3xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float-delayed"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose V.18 Premium Tuition?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of education with our innovative approach to learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">3D Immersive Learning</h4>
              <p className="text-gray-600">
                Complex concepts become simple with our AR/VR technology. See molecules, explore history, and understand physics in 3D.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Local Language Support</h4>
              <p className="text-gray-600">
                Learn in Kannada, Hindi, or English. Our multilingual approach ensures every student understands perfectly.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Affordable Excellence</h4>
              <p className="text-gray-600">
                Premium technology-enabled education at prices that every family can afford. Quality education for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the nearest V.18 Premium Tuition center and meet our expert teachers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{location.name}</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600 flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gray-400" />
                      {location.address}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {location.phone}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleLocationDetails(location.name)}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm font-medium">View Teachers</span>
                    {expandedLocation === location.name ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Expanded Teacher Details */}
                {expandedLocation === location.name && (
                  <div className="border-t bg-gray-50 p-6 animate-fade-in">
                    <h5 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                      Our Expert Teachers
                    </h5>
                    <div className="space-y-4">
                      {location.teachers.map((teacher, teacherIndex) => (
                        <div key={teacherIndex} className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h6 className="font-semibold text-gray-900">{teacher.name}</h6>
                              <p className="text-sm text-blue-600 font-medium">{teacher.subject}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium text-gray-700">{teacher.rating}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-gray-600">
                              <span className="font-medium">Experience:</span> {teacher.experience}
                            </p>
                            <p className="text-xs text-gray-600">
                              <span className="font-medium">Qualification:</span> {teacher.qualification}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Students</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-blue-100">Locations</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Learning Experience?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of students who are already experiencing the future of education
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg"
          >
            Book Your Free Demo Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">V.18 Premium Tuition</h4>
              </div>
              <p className="text-gray-400">
                Karnataka's first tech-enabled tuition center offering immersive 3D learning experiences.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  v18premiumtuition@gmail.com
                </p>
                <p className="text-gray-400 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 98765 43210
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Classes Offered</h5>
              <div className="space-y-1">
                <p className="text-gray-400">Class 8 - 12</p>
                <p className="text-gray-400">All Subjects</p>
                <p className="text-gray-400">Local Languages + English</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 V.18 Premium Tuition. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}

export default App;