import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              V.18 Premium Tuition - Technology Demo
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
            {/* Video placeholder with play button */}
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
              <img
                src="/src/cc.jpeg"
                alt="Technology Demo Preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-2xl">
                  <Play className="w-12 h-12 text-blue-600 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Uncomment below for actual video playback */}
            {/*
            <video
              controls
              autoPlay
              className="w-full h-full"
              poster="/src/cc.jpeg"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Experience immersive 3D learning with AR/VR technology designed for Classes 8-12
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}