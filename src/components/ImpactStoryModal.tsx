//import { useState } from 'react';
import { X, Play, Users, Zap, Leaf, Award } from 'lucide-react';

type ImpactStoryModalProps = {
  isOpen: boolean;
  onClose: () => void;  // function with no arguments and no return value
};

const ImpactStoryModal = ({ isOpen, onClose } : ImpactStoryModalProps) => {
  const impactStats = [
    { icon: Users, label: 'Lives Impacted', value: '5M+', description: 'Kenyans benefit from our services' },
    { icon: Zap, label: 'Clean Energy', value: '100MW', description: 'Renewable capacity installed' },
    { icon: Leaf, label: 'CO2 Reduced', value: '50,000', description: 'Tons of carbon emissions saved' },
    { icon: Award, label: 'Communities', value: '200+', description: 'Rural areas electrified' }
  ];

  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl max-h-[80vh] overflow-y-auto m-4 z-10">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-blue-600">Our Impact Story</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-black transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Video Section */}
          <div className="relative bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">Powering Kenya's Future</h3>
              <p className="text-gray-600">Watch our 3-minute impact video</p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Story Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transforming Communities</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                For over two decades, TotalEnergies has been at the forefront of Kenya's energy transformation. 
                From providing reliable fuel services to pioneering renewable energy solutions, we've helped 
                power the dreams and ambitions of millions of Kenyans.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Future</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our commitment goes beyond energy provision. We're building a sustainable future through 
                clean energy initiatives, community development programs, and environmental conservation efforts 
                that benefit all Kenyans.
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium">
              Download Full Report
            </button>
            <button 
              onClick={onClose}
              className="border border-gray-300 hover:bg-gray-50 px-6 py-2 text-black rounded-lg font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ImpactStoryModal;