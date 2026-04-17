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

      {/* Our Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="text-red-600 font-semibold">"A glimpse of our purpose"</span>
                </p>
                <p>
                  The vision of Swa. Wamanrao Deshmukh Education & Welfare Foundation's centers on ensuring access to 
                  essential necessities for the needy and underprivileged worldwide. We try to spread awareness and draw 
                  support to address these critical requirements, seeking to create a more fair future where every individual has 
                  the potential to succeed.
                </p>
                <p>
                  Our objective is to cultivate dignity, security, and hope for all, generating a global movement of empathy 
                  and collaborative action.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl p-8 border border-red-100">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 italic">"A more fair future where every individual has the potential to succeed"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">💪</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 italic">"Ensuring essential services and opportunities for all"</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The foundation is committed to improving the lives of the less fortunate by 
                  providing comprehensive healthcare, quality education, and robust community 
                  support.
                </p>
                <p>
                  Their mission is to ensure that everyone, regardless of their socio-economic 
                  status, has access to essential services and opportunities for a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Healthcare</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Guarantee that the underprivileged have access to essential healthcare services</li>
                <li>• Provide free or subsidized treatment to those who cannot afford it</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Opportunities</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Provide educational support to empower youth</li>
                <li>• Help them become independent and self-sufficient</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empower Women</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Organizing health camps for women</li>
                <li>• Providing expectant women with guidance on their wellbeing</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rural Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Improve living conditions and sustainability in rural areas</li>
                <li>• Improving the quality of life for rural citizens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Initiatives */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Healthcare Initiatives</h2>
          <p className="text-red-100 text-center mb-12 text-lg">SWA Wamanrao Deshmukh Education and Welfare Foundation's Daughter Branch</p>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bapji Jeevandeep Multispecialty Charitable Hospital</h3>
                <p className="text-red-600 font-semibold">Accessible & Affordable Healthcare</p>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  The foundation treats over <span className="text-red-600 font-bold">10,000 patients indoors</span> and{" "}
                  <span className="text-red-600 font-bold">100,000 patients outdoors</span> annually.
                </p>
                <p>
                  They focus on providing accessible and affordable healthcare to those in need, ensuring that 
                  even the most marginalized communities receive proper medical attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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