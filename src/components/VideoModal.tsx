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
      <div className="relative bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="relative aspect-video">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            poster="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              type="video/mp4"
            />
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Custom play button overlay for better UX */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-blue-600 bg-opacity-80 rounded-full p-4 animate-pulse">
              <Play className="w-12 h-12 text-white ml-1" />
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            V.18 Premium Tuition - AR/VR Learning Experience
          </h3>
          <p className="text-gray-600">
            Experience the future of education with our immersive 3D learning technology. 
            See how complex concepts become simple and engaging through virtual reality.
          </p>
        </div>
      </div>
    </div>
  );
}