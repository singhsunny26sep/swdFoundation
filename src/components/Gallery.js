import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'medical', name: 'Medical Camps' },
    { id: 'education', name: 'Education Programs' },
    { id: 'community', name: 'Community Events' },
    { id: 'volunteers', name: 'Our Volunteers' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/api/placeholder/400/300',
      title: 'Free Medical Camp - Rural Village',
      category: 'medical',
      description: 'Our medical team providing free healthcare services to underserved communities in rural areas.',
      location: 'Rajasthan, India',
      date: 'March 2024'
    },
    {
      id: 2,
      src: '/api/placeholder/400/300',
      title: 'Children Education Program',
      category: 'education',
      description: 'Teaching children in remote villages with our innovative learning programs.',
      location: 'Uttar Pradesh, India',
      date: 'February 2024'
    },
    {
      id: 3,
      src: '/api/placeholder/400/300',
      title: 'Mobile Health Clinic',
      category: 'medical',
      description: 'Our state-of-the-art mobile clinic bringing healthcare directly to remote areas.',
      location: 'Madhya Pradesh, India',
      date: 'April 2024'
    },
    {
      id: 4,
      src: '/api/placeholder/400/300',
      title: 'Community Health Awareness',
      category: 'community',
      description: 'Health education session for women in rural communities.',
      location: 'Bihar, India',
      date: 'January 2024'
    },
    {
      id: 5,
      src: '/api/placeholder/400/300',
      title: 'Volunteer Training Program',
      category: 'volunteers',
      description: 'Training session for new medical volunteers joining our mission.',
      location: 'New Delhi, India',
      date: 'May 2024'
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      title: 'Maternal Health Program',
      category: 'medical',
      description: 'Providing prenatal care and support to expecting mothers.',
      location: 'Maharashtra, India',
      date: 'March 2024'
    },
    {
      id: 7,
      src: '/api/placeholder/400/300',
      title: 'School Supply Distribution',
      category: 'education',
      description: 'Distributing educational materials to underprivileged children.',
      location: 'West Bengal, India',
      date: 'April 2024'
    },
    {
      id: 8,
      src: '/api/placeholder/400/300',
      title: 'Medical Equipment Donation',
      category: 'facilities',
      description: 'Donation of modern medical equipment to local health centers.',
      location: 'Tamil Nadu, India',
      date: 'February 2024'
    },
    {
      id: 9,
      src: '/api/placeholder/400/300',
      title: 'Emergency Response Team',
      category: 'volunteers',
      description: 'Our dedicated emergency response volunteers ready to help in crisis situations.',
      location: 'Gujarat, India',
      date: 'May 2024'
    },
    {
      id: 10,
      src: '/api/placeholder/400/300',
      title: 'Village Health Checkup',
      category: 'medical',
      description: 'Comprehensive health screening for entire village populations.',
      location: 'Odisha, India',
      date: 'January 2024'
    },
    {
      id: 11,
      src: '/api/placeholder/400/300',
      title: 'Digital Learning Center',
      category: 'education',
      description: 'Modern computer lab set up in rural schools for digital education.',
      location: 'Karnataka, India',
      date: 'April 2024'
    },
    {
      id: 12,
      src: '/api/placeholder/400/300',
      title: 'Annual Fundraising Event',
      category: 'community',
      description: 'Community members coming together to support our mission.',
      location: 'Punjab, India',
      date: 'December 2023'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Discover the impact of our work through images from medical camps, education programs, 
            community events, and the lives we've touched across India.
          </p>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Photos Captured</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Medical Camps</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Communities Served</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{image.description}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{image.location}</span>
                    <span>{image.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Impact Through Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Stories</h3>
              <p className="text-gray-600">
                Every photo tells a story of hope, healing, and transformation in the communities we serve.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Impact</h3>
              <p className="text-gray-600">
                See exactly how your contributions make a difference in the lives of those in need.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Connection</h3>
              <p className="text-gray-600">
                Connect with the people and places that make our mission possible through visual stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Be Part of Our Story</h2>
          <p className="text-red-100 mb-8 text-lg">
            Join us in creating more stories of hope and healing. Your support helps us reach more communities and save more lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Our Mission
            </Link>
            <Link to="/donate" className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors">
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>📍 {selectedImage.location}</span>
                <span>📅 {selectedImage.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Gallery;