import React, { useState } from 'react';
import { 
  Play, 
  Calendar, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Clock,
  X,
  Calculator,
  Microscope,
  BookOpen,
  Star,
  GraduationCap,
  Building
} from 'lucide-react';
import VideoModal from './components/VideoModal';
import BookingModal from './components/BookingModal';

interface Teacher {
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  rating: number;
  specialization: string;
  icon: React.ReactNode;
}

interface BranchDetails {
  name: string;
  address: string;
  phone: string;
  established: string;
  facilities: string[];
  teachers: Teacher[];
}

const branchDetails: Record<string, BranchDetails> = {
  jamkandi: {
    name: "Jamkandi Branch",
    address: "Near Bus Stand, Main Road, Jamkandi - 587301",
    phone: "+91 98765 43210",
    established: "2020",
    facilities: ["Smart Classrooms", "VR Lab", "AR Learning Zone", "Digital Library", "Science Lab"],
    teachers: [
      {
        name: "Dr. Rajesh Kumar",
        subject: "Mathematics",
        qualification: "Ph.D Mathematics, M.Sc, B.Ed",
        experience: "15 years",
        rating: 4.9,
        specialization: "Advanced Calculus, Algebra, Geometry",
        icon: <Calculator className="w-5 h-5 text-blue-600" />
      },
      {
        name: "Dr. Priya Sharma",
        subject: "Science",
        qualification: "Ph.D Physics, M.Sc Chemistry",
        experience: "12 years",
        rating: 4.8,
        specialization: "Physics, Chemistry, Lab Experiments",
        icon: <Microscope className="w-5 h-5 text-green-600" />
      },
      {
        name: "Ms. Kavitha Nair",
        subject: "English",
        qualification: "M.A English Literature, B.Ed",
        experience: "10 years",
        rating: 4.7,
        specialization: "Grammar, Literature, Communication Skills",
        icon: <BookOpen className="w-5 h-5 text-purple-600" />
      }
    ]
  },
  athani: {
    name: "Athani Branch",
    address: "College Road, Near Government Hospital, Athani - 591304",
    phone: "+91 98765 43211",
    established: "2021",
    facilities: ["Interactive Boards", "VR Headsets", "Computer Lab", "Study Hall", "Physics Lab"],
    teachers: [
      {
        name: "Prof. Suresh Gowda",
        subject: "Mathematics",
        qualification: "M.Sc Mathematics, M.Ed",
        experience: "18 years",
        rating: 4.9,
        specialization: "Trigonometry, Statistics, Coordinate Geometry",
        icon: <Calculator className="w-5 h-5 text-blue-600" />
      },
      {
        name: "Dr. Meera Rao",
        subject: "Science",
        qualification: "Ph.D Biology, M.Sc Botany",
        experience: "13 years",
        rating: 4.8,
        specialization: "Biology, Botany, Environmental Science",
        icon: <Microscope className="w-5 h-5 text-green-600" />
      },
      {
        name: "Mr. Arun Joshi",
        subject: "English",
        qualification: "M.A English, PGDTE",
        experience: "11 years",
        rating: 4.7,
        specialization: "Creative Writing, Public Speaking, Essay Writing",
        icon: <BookOpen className="w-5 h-5 text-purple-600" />
      }
    ]
  },
  harugeri: {
    name: "Harugeri Branch",
    address: "Market Road, Harugeri Village, Jamkandi Taluk - 587312",
    phone: "+91 98765 43212",
    established: "2022",
    facilities: ["3D Learning Pods", "AR Glasses", "Mini Auditorium", "Chemistry Lab", "Library"],
    teachers: [
      {
        name: "Dr. Manjunath Bhat",
        subject: "Mathematics",
        qualification: "Ph.D Applied Mathematics, M.Sc",
        experience: "16 years",
        rating: 4.9,
        specialization: "Applied Mathematics, Differential Equations",
        icon: <Calculator className="w-5 h-5 text-blue-600" />
      },
      {
        name: "Ms. Sunita Desai",
        subject: "Science",
        qualification: "M.Sc Chemistry & Physics, B.Ed",
        experience: "14 years",
        rating: 4.8,
        specialization: "Organic Chemistry, Thermodynamics",
        icon: <Microscope className="w-5 h-5 text-green-600" />
      },
      {
        name: "Dr. Pooja Kulkarni",
        subject: "English",
        qualification: "Ph.D English Literature, M.A",
        experience: "9 years",
        rating: 4.8,
        specialization: "Modern Literature, Poetry, Critical Analysis",
        icon: <BookOpen className="w-5 h-5 text-purple-600" />
      }
    ]
  },
  badami: {
    name: "Badami Branch",
    address: "Station Road, Near Railway Station, Badami - 587201",
    phone: "+91 98765 43213",
    established: "2023",
    facilities: ["Holographic Displays", "VR Simulation Room", "Digital Whiteboard", "Biology Lab", "Reading Room"],
    teachers: [
      {
        name: "Prof. Ramesh Hegde",
        subject: "Mathematics",
        qualification: "M.Sc Mathematics, Ph.D (Pursuing)",
        experience: "20 years",
        rating: 4.9,
        specialization: "Number Theory, Mathematical Modeling",
        icon: <Calculator className="w-5 h-5 text-blue-600" />
      },
      {
        name: "Dr. Lakshmi Patil",
        subject: "Science",
        qualification: "Ph.D Chemistry, M.Sc",
        experience: "12 years",
        rating: 4.8,
        specialization: "Inorganic Chemistry, Physical Chemistry",
        icon: <Microscope className="w-5 h-5 text-green-600" />
      },
      {
        name: "Ms. Anita Shetty",
        subject: "English",
        qualification: "M.A English, CELTA Certified",
        experience: "8 years",
        rating: 4.7,
        specialization: "Spoken English, Business Communication",
        icon: <BookOpen className="w-5 h-5 text-purple-600" />
      }
    ]
  }
};

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const locations = [
    { id: 'jamkandi', name: 'Jamkandi', students: '500+' },
    { id: 'athani', name: 'Athani', students: '300+' },
    { id: 'harugeri', name: 'Harugeri', students: '200+' },
    { id: 'badami', name: 'Badami', students: '150+' }
  ];

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

  const BranchDetailsModal = () => {
    if (!selectedBranch) return null;
    
    const branch = branchDetails[selectedBranch];
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Building className="w-6 h-6 mr-2 text-blue-600" />
                  {branch.name}
                </h2>
                <p className="text-gray-600 mt-1">Established {branch.established}</p>
              </div>
              <button
                onClick={() => setSelectedBranch(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Branch Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{branch.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-500 mr-3" />
                  <p className="text-gray-700">{branch.phone}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Facilities:</h3>
                <div className="flex flex-wrap gap-2">
                  {branch.facilities.map((facility, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Teachers Section */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                Our Expert Teachers
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {branch.teachers.map((teacher, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      {teacher.icon}
                      <h4 className="font-semibold text-gray-900 ml-2">{teacher.name}</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium text-blue-600">{teacher.subject}</p>
                      <p className="text-gray-600">{teacher.qualification}</p>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-gray-600">{teacher.experience} experience</span>
                      </div>
                      <div className="flex items-center">
                        {renderStars(teacher.rating)}
                        <span className="ml-2 text-gray-600">{teacher.rating}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{teacher.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedBranch(null);
                  setIsBookingModalOpen(true);
                }}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Book Free Demo at {branch.name}
              </button>
              <button
                onClick={() => setSelectedBranch(null)}
                className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              V.18 Premium Tuition
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Karnataka's First Tech-Enabled Learning Center
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto opacity-80 animate-fade-in">
              Experience immersive 3D learning for Classes 8–12 in both local languages and English at affordable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose V.18 Premium Tuition?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary learning experience with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AR/VR Learning</h3>
              <p className="text-gray-600">
                Immersive 3D visualization makes complex concepts easy to understand and remember
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-float-delayed">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Teachers</h3>
              <p className="text-gray-600">
                Qualified educators with years of experience in both traditional and modern teaching methods
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multiple Locations</h3>
              <p className="text-gray-600">
                Convenient branches across Karnataka with the same quality education standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Branches
            </h2>
            <p className="text-xl text-gray-600">
              Click on any branch to see our expert teachers and facilities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {locations.map((location) => (
              <div
                key={location.id}
                onClick={() => setSelectedBranch(location.id)}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{location.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{location.students} students</p>
                  <p className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    View Details →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-blue-200">Branches</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Expert Teachers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are already experiencing the future of education
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Calendar className="w-5 h-5 mr-2 inline" />
            Book Your Free Demo Today
          </button>
        </div>
      </section>

      {/* Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <BranchDetailsModal />
    </div>
  );
}