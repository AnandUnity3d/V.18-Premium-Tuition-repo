import React from 'react';
import { X, BookOpen, Clock, Users, Award, CheckCircle } from 'lucide-react';

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseData: {
    class: string;
    title: string;
    subjects: string[];
    duration: string;
    batchSize: string;
    features: string[];
    description: string;
    highlights: string[];
  };
}

export default function CourseModal({ isOpen, onClose, courseData }: CourseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{courseData.title}</h2>
              <p className="text-blue-600 font-semibold">{courseData.class}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gray-600 leading-relaxed">{courseData.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Subjects Covered
                  </h3>
                  <ul className="space-y-2">
                    {courseData.subjects.map((subject, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-gray-900">Duration</span>
                    </div>
                    <p className="text-gray-600">{courseData.duration}</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-gray-900">Batch Size</span>
                    </div>
                    <p className="text-gray-600">{courseData.batchSize}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {courseData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Highlights</h3>
                  <ul className="space-y-2">
                    {courseData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose V.18 Premium Tuition?</h3>
              <p className="text-gray-600 mb-4">
                Experience the future of education with our immersive 3D learning technology, 
                expert faculty, and personalized attention in both local languages and English.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Free Demo
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}