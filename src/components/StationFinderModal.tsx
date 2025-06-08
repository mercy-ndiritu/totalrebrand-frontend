import { useState } from 'react';
import { MapPin, Navigation, Clock, Star, X } from 'lucide-react';

type StationFinderModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const StationFinderModal = ({ isOpen, onClose }: StationFinderModalProps) => {
  const [searchLocation, setSearchLocation] = useState('');

  const nearbyStations = [
    {
      name: 'TotalEnergies Westlands',
      address: 'Westlands Road, Nairobi',
      distance: '1.2 km',
      services: ['Premium Fuel', 'Car Wash', 'Shop', '24/7'],
      rating: 4.8,
      isOpen: true
    },
    {
      name: 'TotalEnergies KICC',
      address: 'City Hall Way, Nairobi',
      distance: '2.5 km',
      services: ['Premium Fuel', 'ATM', 'Convenience Store'],
      rating: 4.6,
      isOpen: true
    },
    {
      name: 'TotalEnergies Karen',
      address: 'Karen Road, Nairobi',
      distance: '8.3 km',
      services: ['Premium Fuel', 'Car Wash', 'Restaurant', 'Parking'],
      rating: 4.9,
      isOpen: false
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Find Nearest Station</h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Search Section */}
          <div className="flex gap-3">
            <input
              placeholder="Enter your location or city..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm">
              <Navigation className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>

          {/* Quick Location Buttons */}
          <div className="flex flex-wrap gap-2 text-black">
            {['Nairobi CBD', 'Westlands', 'Karen', 'Mombasa', 'Kisumu', 'Eldoret'].map((city) => (
              <button
                key={city}
                onClick={() => setSearchLocation(city)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                {city}
              </button>
            ))}
          </div>

          {/* Stations List */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Nearby Stations</h3>
            {nearbyStations.map((station, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-gray-900 mb-1">{station.name}</h4>
                    <div className="flex items-center text-gray-600 mb-2 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{station.address}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-blue-600 font-semibold">{station.distance}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{station.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className={station.isOpen ? 'text-green-600' : 'text-red-600'}>
                          {station.isOpen ? 'Open Now' : 'Closed'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {station.services.map((service) => (
                    <span
                      key={service}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 text-white px-3 py-1.5 rounded-lg text-sm">
                    Get Directions
                  </button>
                  <button className="border border-gray-300  text-black hover:bg-gray-50 px-3 py-1.5 rounded-lg text-sm">
                    Call Station
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationFinderModal;