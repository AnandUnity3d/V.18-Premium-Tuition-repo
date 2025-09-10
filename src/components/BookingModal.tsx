import React, { useState } from 'react';
import { X, Calendar, MapPin, User, Phone, Mail, GraduationCap, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  class: string;
  medium: string;
  subjects: string[];
  visitDate: string;
  visitTime: string;
  location: string;
  address: string;
  additionalInfo: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    class: '',
    medium: '',
    subjects: [],
    visitDate: '',
    visitTime: '',
    location: '',
    address: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const locations = [
    'Jamkhandi',
    'Athani',
    'Mudhol',
    'Badami',
    'Guledaguda',
    'Haveri'
  ];

  const subjects = [
    'Mathematics',
    'Science (Physics, Chemistry, Biology)',
    'Social Science',
    'English',
    'Kannada',
    'Hindi'
  ];

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      // Here you would normally send the data to your backend
      console.log('Booking data:', formData);
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setFormData({
          studentName: '',
          parentName: '',
          phone: '',
          email: '',
          class: '',
          medium: '',
          subjects: [],
          visitDate: '',
          visitTime: '',
          location: '',
          address: '',
          additionalInfo: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Book Free Demo Class</h2>
              <p className="text-gray-600 mt-1">Experience AR/VR learning firsthand</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Student Information */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Student Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter student's full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter parent's name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter 10-digit mobile number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-green-600" />
              Academic Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class *
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Class</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medium *
                </label>
                <select
                  name="medium"
                  value={formData.medium}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Medium</option>
                  <option value="Kannada">Kannada Medium</option>
                  <option value="English">English Medium</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subjects of Interest
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {subjects.map((subject) => (
                  <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.subjects.includes(subject)}
                      onChange={() => handleSubjectChange(subject)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">{subject}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Visit Details */}
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-purple-600" />
              Visit Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Visit Date *
                </label>
                <input
                  type="date"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  name="visitTime"
                  value={formData.visitTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Time Slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orange-600" />
              Location Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nearest Location *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select Nearest Location</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter complete address with landmarks"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any specific requirements or questions..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              * Required fields
            </p>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <Clock className="w-4 h-4" />
                    <span>Book Free Demo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              <p className="font-medium">Demo class booked successfully!</p>
              <p className="text-sm">We'll contact you soon to confirm the details.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              <p className="font-medium">Booking failed!</p>
              <p className="text-sm">Please try again or contact us directly.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingModal;