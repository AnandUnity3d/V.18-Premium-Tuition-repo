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
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">V.18 Premium Tuition - AR/VR Technology Demo</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="relative aspect-video bg-gray-900">
          {/* Video placeholder with play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/src/cc.jpeg"
              alt="Technology Demo Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all transform hover:scale-110">
                <Play className="w-12 h-12 text-blue-600 ml-1" />
              </button>
            </div>
          </div>
          
          {/* You can replace this with an actual video element when you have a video file */}
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
        
        <div className="p-4 bg-gray-50">
          <p className="text-gray-600 text-sm">
            Experience our revolutionary AR/VR learning technology that makes complex concepts easy to understand through immersive 3D visualization.
          </p>
        </div>
      </div>
    </div>
  );
}