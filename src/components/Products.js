import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Products() {
  const products = [
    {
      id: 1,
      name: "Portable Medical Kit",
      description: "Complete first aid kit for emergency medical situations",
      price: "₹2,500",
      icon: "🏥",
      features: ["Bandages & Dressings", "Antiseptic Solutions", "Pain Relievers", "Emergency Medicines", "Medical Instruments"]
    },
    {
      id: 2,
      name: "Digital Stethoscope",
      description: "Advanced digital stethoscope for accurate diagnosis",
      price: "₹8,500",
      icon: "🔊",
      features: ["High-Quality Audio", "Bluetooth Connectivity", "Multiple Frequencies", "Recording Capability", "Noise Reduction"]
    },
    {
      id: 3,
      name: "Portable Ultrasound",
      description: "Mobile ultrasound machine for diagnostic imaging",
      price: "₹1,25,000",
      icon: "🖥️",
      features: ["Compact Design", "High-Resolution Imaging", "Battery Powered", "Wireless Connectivity", "Easy Operation"]
    },
    {
      id: 4,
      name: "Medical Supplies Bundle",
      description: "Essential medical supplies for mobile clinics",
      price: "₹15,000",
      icon: "📦",
      features: ["Syringes & Needles", "Medical Gloves", "Disinfectants", "Bandages", "Basic Medications"]
    },
    {
      id: 5,
      name: "Portable Oxygen Concentrator",
      description: "Emergency oxygen supply for critical patients",
      price: "₹45,000",
      icon: "🫁",
      features: ["Portable Design", "Long Battery Life", "High Oxygen Purity", "User-Friendly", "Safety Alarms"]
    },
    {
      id: 6,
      name: "Mobile Medical Cart",
      description: "Comprehensive mobile medical station for camps",
      price: "₹35,000",
      icon: "🚐",
      features: ["Multiple Compartments", "Easy Mobility", "Secure Storage", "Medical Equipment Slots", "Emergency Supplies"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SWDF Foundation</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</Link>
              <Link to="/products" className="text-red-600 font-medium">Products</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Gallery</Link>
              <Link to="/volunteer" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Volunteer</Link>
              <Link to="/donate" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">Donate</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Medical Equipment & Supplies</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            High-quality medical equipment and supplies to support our mission of providing 
            accessible healthcare to underserved communities across India.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-red-600">{product.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-900 font-medium mb-2">Key Features:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors text-center block">
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Equipment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnostic Equipment</h3>
              <p className="text-gray-600">Advanced diagnostic tools for accurate medical assessment and treatment planning.</p>
            </div>
            
            <div className="text-center bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl mb-4">🚑</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Equipment</h3>
              <p className="text-gray-600">Life-saving emergency medical equipment for critical care situations.</p>
            </div>
            
            <div className="text-center bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Solutions</h3>
              <p className="text-gray-600">Portable medical equipment designed for mobile clinics and remote areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Support & Training</h2>
            <p className="text-gray-600 mb-6">We provide comprehensive training and support for all medical equipment to ensure optimal usage and patient safety.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Training Services:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Equipment operation training</li>
                  <li>• Safety protocols education</li>
                  <li>• Maintenance workshops</li>
                  <li>• Troubleshooting guides</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Support Services:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 24/7 technical support</li>
                  <li>• Regular maintenance checks</li>
                  <li>• Equipment calibration</li>
                  <li>• Replacement parts service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Need Medical Equipment?</h2>
            <p className="text-red-100 mb-6 text-lg">
              Contact our medical equipment specialists to learn more about our products and how they can support your healthcare initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Specialists
              </Link>
              <Link to="/services" className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Products;