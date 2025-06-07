import { useState } from 'react';
import { X, ArrowRight, MapPin, Clock, Phone } from 'lucide-react';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    locations?: string;
    availability?: string;
  };
}

const ServiceDetailModal = ({ isOpen, onClose, service }: ServiceDetailModalProps) => {
  if (!isOpen) return null;

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-lg">
          <h2 className="text-3xl font-bold text-blue-600">
            {service.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            {service.description}
          </p>

          {service.locations && service.availability && (
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 text-green-600" />
                <span>{service.locations}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5 text-green-600" />
                <span>{service.availability}</span>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-4">
              Contact our team to learn more about how {service.title.toLowerCase()} can benefit you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium">
                Request Information
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              onClick={onClose}
              className="border border-gray-300 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;