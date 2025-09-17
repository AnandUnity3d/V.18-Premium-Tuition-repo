import React, { useState } from 'react';
import { 
  Play, 
  Calendar, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star,
  X,
  User,
  GraduationCap
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
    address: "Near Bus Stand, Main Road, Jamkandi",
    phone: "+91 8123144616",
    teachers: [
      {
        name: "Dr. Priya Sharma",
        subject: "Physics & Mathematics",
        experience: "12 years",
        qualification: "Ph.D Physics, M.Sc Mathematics",
        rating: 4.9
      },
      {
        name: "Prof. Rajesh Kumar",
        subject: "Chemistry & Biology",
        experience: "15 years",
        qualification: "M.Sc Chemistry, B.Ed",
        rating: 4.8
      },
      {
        name: "Ms. Anita Patil",
        subject: "English & Social Science",
        experience: "8 years",
        qualification: "M.A English, B.Ed",
        rating: 4.7
      }
    ]
  },
  {
    name: "Athani",
    address: "College Road, Near SBI Bank, Athani",
    phone: "+91 9876543210",
    teachers: [
      {
        name: "Mr. Suresh Gowda",
        subject: "Mathematics & Physics",
        experience: "10 years",
        qualification: "M.Sc Mathematics, B.Ed",
        rating: 4.8
      },
      {
        name: "Dr. Kavitha Rao",
        subject: "Biology & Chemistry",
        experience: "14 years",
        qualification: "Ph.D Botany, M.Sc Chemistry",
        rating: 4.9
      },
      {
        name: "Ms. Deepa Joshi",
        subject: "English & Hindi",
        experience: "9 years",
        qualification: "M.A English, M.A Hindi",
        rating: 4.6
      }
    ]
  },
  {
    name: "Harugeri",
    address: "Market Road, Harugeri Village",
    phone: "+91 7654321098",
    teachers: [
      {
        name: "Prof. Manjunath Bhat",
        subject: "Physics & Mathematics",
        experience: "16 years",
        qualification: "M.Sc Physics, M.Ed",
        rating: 4.9
      },
      {
        name: "Dr. Sunita Desai",
        subject: "Chemistry & Biology",
        experience: "11 years",
        qualification: "Ph.D Chemistry, B.Ed",
        rating: 4.7
      },
      {
        name: "Mr. Arun Kulkarni",
        subject: "Social Science & English",
        experience: "7 years",
        qualification: "M.A History, B.Ed",
        rating: 4.6
      }
    ]
  },
  {
    name: "Badami",
    address: "Station Road, Near Fort, Badami",
    phone: "+91 9988776655",
    teachers: [
      {
        name: "Ms. Lakshmi Nair",
        subject: "Mathematics & Computer Science",
        experience: "13 years",
        qualification: "M.Sc Mathematics, MCA",
        rating: 4.8
      },
      {
        name: "Dr. Ramesh Hegde",
        subject: "Physics & Chemistry",
        experience: "18 years",
        qualification: "Ph.D Physics, M.Sc Chemistry",
        rating: 4.9
      },
      {
        name: "Ms. Pooja Shetty",
        subject: "Biology & English",
        experience: "6 years",
        qualification: "M.Sc Zoology, B.Ed",
        rating: 4.7
      }
    ]
  }
];

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Karnataka's First <span className="text-blue-600">Tech-Enabled</span> Tuition Center
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience immersive 3D learning for Classes 8–12 in both local languages and English at affordable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo Video</span>
              </button>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose V.18 Premium Tuition?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Revolutionary learning experience with cutting-edge technology and expert teachers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">3D Immersive Learning</h4>
              <p className="text-gray-600">
                Experience complex concepts through virtual reality and 3D visualizations
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Teachers</h4>
              <p className="text-gray-600">
                Highly qualified educators with years of experience in their subjects
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Flexible Timings</h4>
              <p className="text-gray-600">
                Multiple batch timings to suit your schedule and convenience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the nearest V.18 Premium Tuition center and meet our expert teachers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                onClick={() => setSelectedLocation(location)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900">{location.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">{location.address}</p>
                <div className="flex items-center mb-3">
                  <Phone className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-700">{location.phone}</span>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{location.teachers.length} Expert Teachers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have improved their grades with our innovative teaching methods
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
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
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">V.18 Premium Tuition</h4>
              </div>
              <p className="text-gray-400">
                Karnataka's first tech-enabled tuition center providing quality education with innovative teaching methods.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 8123144616</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>anandbiradar002@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Classes Offered</h5>
              <ul className="space-y-1 text-gray-400">
                <li>Class 8</li>
                <li>Class 9</li>
                <li>Class 10</li>
                <li>Class 11</li>
                <li>Class 12</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 V.18 Premium Tuition. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Teacher Details Popup */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                    {selectedLocation.name} Branch
                  </h2>
                  <p className="text-gray-600 mt-1">{selectedLocation.address}</p>
                </div>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Expert Teachers</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedLocation.teachers.map((teacher, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <User className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{teacher.name}</h4>
                          <p className="text-sm text-blue-600">{teacher.subject}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{teacher.experience} experience</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          <span>{teacher.qualification}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {renderStars(teacher.rating)}
                          </div>
                          <span>{teacher.rating}/5</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setSelectedLocation(null);
                    setIsBookingModalOpen(true);
                  }}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Book Demo at {selectedLocation.name}
                </button>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}

export default App;