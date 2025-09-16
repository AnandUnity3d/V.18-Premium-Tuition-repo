@@ .. @@
 import React from 'react';
 import { X, Play } from 'lucide-react';
+import videoFile from '../components/video.mp4';

 interface VideoModalProps {
   isOpen: boolean;
@@ .. @@
         <div className="relative aspect-video">
           <video
             className="w-full h-full object-cover"
             controls
             autoPlay
             poster="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           >
-            <source
-              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
-              type="video/mp4"
-            />
-            <source
-              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
-              type="video/mp4"
-            />
+            <source src={videoFile} type="video/mp4" />
             Your browser does not support the video tag.
           </video>