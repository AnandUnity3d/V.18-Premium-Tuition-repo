import React from 'react';
import { X, GraduationCap, Award, BookOpen, Users, Star } from 'lucide-react';

interface TeachersPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TeachersPage({ isOpen, onClose }: TeachersPageProps) {
  if (!isOpen) return null;

  const teachers = [
    {
      name: 'Dr. Priya Sharma',
      subject: 'Mathematics',
      experience: '15+ years',
      qualification: 'Ph.D. in Mathematics, IIT Graduate',
      specialization: 'Advanced Calculus, Algebra, Competitive Exams',
      achievements: [
        'Trained 500+ students for board exams',
        'Gold medalist in M.Sc Mathematics',
        '98% student success rate'
      ],
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Prof. Rajesh Kumar',
      subject: 'Physics & Chemistry',
      experience: '12+ years',
      qualification: 'M.Sc in Physics, B.Ed',
      specialization: 'Experimental Physics, Organic Chemistry, Lab Work',
      achievements: [
        'Former professor at prestigious college',
        'Published research papers in science education',
        'Expert in 3D visualization teaching'
      ],
      image: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Anita Reddy',
      subject: 'English & Communication',
      experience: '10+ years',
      qualification: 'M.A. in English, M.Ed',
      specialization: 'Grammar, Literature, Communication Skills',
      achievements: [
        'CELTA certified English trainer',
        'Helped 200+ students improve communication',
        'Specialized in exam-focused English'
      ],
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mr. Suresh Patil',
      subject: 'Biology',
      experience: '8+ years',
      qualification: 'M.Sc in Biotechnology',
      specialization: 'Human Anatomy, Botany, Zoology',
      achievements: [
        'Expert in AR/VR biology teaching',
        'Conducted 100+ interactive lab sessions',
        'Passionate about making biology fun'
      ],
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-6xl w-full mx-4 my-8 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-xl z-10">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-orange-500 mr-3" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Expert Teachers</h2>
              <p className="text-gray-600 text-sm">Meet the dedicated educators shaping futures</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Why Our Teachers Stand Out</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Highly Qualified</h4>
                  <p className="text-sm text-gray-600">Advanced degrees and certifications</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Tech-Savvy</h4>
                  <p className="text-sm text-gray-600">Experts in AR/VR teaching methods</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Results</h4>
                  <p className="text-sm text-gray-600">Track record of student success</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-48 h-64 md:h-auto">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                        <p className="text-orange-600 font-semibold text-lg">{teacher.subject}</p>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {teacher.experience}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center mb-1">
                          <GraduationCap className="w-4 h-4 text-gray-500 mr-2" />
                          <h4 className="font-semibold text-gray-900 text-sm">Qualification</h4>
                        </div>
                        <p className="text-gray-600 ml-6">{teacher.qualification}</p>
                      </div>

                      <div>
                        <div className="flex items-center mb-1">
                          <BookOpen className="w-4 h-4 text-gray-500 mr-2" />
                          <h4 className="font-semibold text-gray-900 text-sm">Specialization</h4>
                        </div>
                        <p className="text-gray-600 ml-6">{teacher.specialization}</p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Award className="w-4 h-4 text-gray-500 mr-2" />
                          <h4 className="font-semibold text-gray-900 text-sm">Key Achievements</h4>
                        </div>
                        <ul className="ml-6 space-y-1">
                          {teacher.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Learning Family</h3>
            <p className="text-gray-600 mb-4">
              Learn from the best teachers who combine traditional expertise with modern technology
            </p>
            <button
              onClick={onClose}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Book a Free Demo Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
