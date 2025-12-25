import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import founderImage from '../img/founder.jpeg';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">SWDF Foundation</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Founded in 1999, SWDF Foundation has been dedicated to providing accessible, 
            quality healthcare to underserved communities through comprehensive medical services and health programs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SWDF Foundation began with a simple mission: to ensure that no one should suffer or die 
                  due to lack of access to medical care. What started as a small group of dedicated doctors and 
                  volunteers has grown into a comprehensive healthcare organization.
                </p>
                <p>
                  Our founder, Dr. Sanjay Gupta, witnessed the devastating effects of healthcare inequality while 
                  working in rural areas. This experience inspired him to create an organization that could provide 
                  free, quality medical care to those who need it most.
                </p>
                <p>
                  Today, we operate 50+ mobile clinics, conduct regular health camps, and provide emergency medical 
                  services across 20 states in India. Our team of 500+ medical professionals and volunteers has 
                  touched over 100,000 lives.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={founderImage}
                alt="SWDF Foundation Medical Team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Healing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-red-600">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600">
                Every patient deserves dignity, respect, and compassionate medical care regardless of their ability to pay.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-blue-600">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medical Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of medical care and continuously strive for excellence in all our services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-green-600">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600">
                We believe in creating lasting health improvements that uplift entire communities and break cycles of poverty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Medical Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-28 h-28 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img
                  src={founderImage}
                  alt="Dr. Sanjay Gupta - Chief Medical Officer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sanjay Gupta</h3>
              <p className="text-red-600 font-medium mb-2">Chief Medical Officer</p>
              <p className="text-gray-600 text-sm">25+ years in emergency medicine and public health</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-blue-600">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Meera Sharma</h3>
              <p className="text-red-600 font-medium mb-2">Director of Pediatrics</p>
              <p className="text-gray-600 text-sm">MBBS, MD Pediatrics - 15 years pediatric care experience</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-green-600">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Vikram Rao</h3>
              <p className="text-red-600 font-medium mb-2">Emergency Medicine Director</p>
              <p className="text-gray-600 text-sm">Emergency Medicine Specialist - 12 years trauma care</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-purple-600">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Kavita Patel</h3>
              <p className="text-red-600 font-medium mb-2">Maternal Health Director</p>
              <p className="text-gray-600 text-sm">Gynecologist & Obstetrician - 18 years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Medical Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100,000+</div>
              <div className="text-gray-600 font-medium">Patients Treated</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Medical Volunteers</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Mobile Clinics</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600 font-medium">Awards Received</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Medical Mission</h2>
          <p className="text-red-100 mb-8 text-lg">
            Be part of a dedicated team that's saving lives and improving community health. 
            Your medical expertise can make a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Medical Team
            </Link>
            <Link to="/donate" className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors">
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;