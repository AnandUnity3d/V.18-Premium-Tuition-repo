import React, { useState } from 'react';
import { 
  Play, 
  BookOpen, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Star,
  X,
  User,
  GraduationCap
} from 'lucide-react';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';

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
    address: "Main Road, Near Bus Stand",
    phone: "+91 8123144616",
    teachers: [
      {
        name: "Dr. Priya Sharma",
        subject: "Physics & Mathematics",
        experience: "8 years",
        qualification: "M.Sc Physics, B.Ed",
        rating: 4.8
      },
      {
        name: "Prof. Rajesh Kumar",
        subject: "Chemistry & Biology",
        experience: "12 years",
        qualification: "M.Sc Chemistry, Ph.D",
        rating: 4.9
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
        experience: "9 years",
        qualification: "M.Sc Biology, Ph.D",
        rating: 4.9
      },
      {
        name: "Ms. Deepa Joshi",
        subject: "Hindi & Social Science",
        experience: "7 years",
        qualification: "M.A Hindi, B.Ed",
        rating: 4.6
      }
    ]
  },
  {
    name: "Harugeri",
    address: "Market Street, Harugeri",
    phone: "+91 7654321098",
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
        subject: "English & Computer Science",
        experience: "8 years",
        qualification: "MCA, B.Ed",
        rating: 4.7
      }
    ]
  },
  {
    name: "Badami",
    address: "Station Road, Badami",
    phone: "+91 6543210987",
    teachers: [
      {
        name: "Ms. Lakshmi Nair",
        subject: "Mathematics & Computer Science",
        experience: "9 years",
        qualification: "M.Sc Mathematics, MCA",
        rating: 4.8
      },
      {
        name: "Dr. Ramesh Hegde",
        subject: "Physics & Chemistry",
        experience: "13 years",
        qualification: "M.Sc Physics, Ph.D",
        rating: 4.9
      },
      {
        name: "Ms. Pooja Shetty",
        subject: "Biology & Social Science",
        experience: "6 years",
        qualification: "M.Sc Biology, B.Ed",
        rating: 4.6
      }
    ]
  }
];

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const openLocationModal = (location: Location) => {
    setSelectedLocation(location);
  };

  const closeLocationModal = () => {
    setSelectedLocation(null);
  };

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
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">V.18 Premium Tuition</h1>
                <p className="text-sm text-gray-600">Tech-Enabled Learning</p>
              </div>
            </div>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Karnataka's First
                <span className="text-blue-600 block">AR/VR Learning</span>
                Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Immersive 3D education for Classes 8–12 in both local languages and English. 
                Making complex concepts simple through cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                >
                  Book Free Demo
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors font-semibold text-lg"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-3xl animate-float">
                <img
                  src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="VR Learning Experience"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold">85% Better Understanding</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full animate-progress-bar"></div>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose V.18 Premium Tuition?</h3>
            <p className="text-xl text-gray-600">Revolutionary learning experience with proven results</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">3D Interactive Learning</h4>
              <p className="text-gray-600">Complex concepts visualized in 3D for better understanding and retention</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Expert Teachers</h4>
              <p className="text-gray-600">Qualified educators with years of experience in tech-enabled teaching</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Affordable Pricing</h4>
              <p className="text-gray-600">Premium education technology at prices accessible to all families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h3>
            <p className="text-xl text-gray-600">Find the nearest V.18 Premium Tuition center</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                onClick={() => openLocationModal(location)}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105"
              >
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-lg">{location.name}</h4>
                </div>
                <p className="text-gray-600 text-sm mb-2">{location.address}</p>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span>3 Expert Teachers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h3>
          <p className="text-xl mb-8">Book your free demo today and experience the future of education</p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Book Free Demo Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">V.18 Premium Tuition</span>
              </div>
              <p className="text-gray-400">
                Karnataka's first tech-enabled tuition center offering immersive 3D learning experience.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 8123144616</li>
                <li>anandbiradar002@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Classes</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Class 8 - 10 (CBSE/State Board)</li>
                <li>Class 11 - 12 (Science/Commerce)</li>
                <li>Competitive Exam Prep</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 V.18 Premium Tuition. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Location Details Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedLocation.name} Branch
                </h2>
                <button
                  onClick={closeLocationModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{selectedLocation.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{selectedLocation.phone}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Our Expert Teachers</h3>
              <div className="space-y-4">
                {selectedLocation.teachers.map((teacher, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{teacher.name}</h4>
                        <p className="text-blue-600 font-medium">{teacher.subject}</p>
                        <p className="text-gray-600 text-sm">{teacher.qualification}</p>
                        <div className="flex items-center mt-2 space-x-4">
                          <span className="text-sm text-gray-500">{teacher.experience} experience</span>
                          <div className="flex items-center space-x-1">
                            {renderStars(teacher.rating)}
                            <span className="text-sm text-gray-600 ml-1">{teacher.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t">
                <button
                  onClick={() => {
                    closeLocationModal();
                    setIsBookingModalOpen(true);
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Book Demo at {selectedLocation.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
}