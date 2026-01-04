import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import founderImage from '../img/founder.jpeg';
import girlImage from '../img/girl.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-10 w-28 h-28 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Navigation */}
      <Header/>

      {/* Banner Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="SWDF Foundation Medical Team Providing Healthcare"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 via-transparent to-blue-900/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Banner Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Healing Communities
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium drop-shadow-lg max-w-2xl mx-auto">
              Bringing hope, health, and healing to every corner of India
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">🏥 Free Medical Care</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">❤️ Community Support</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">🌟 Hope & Healing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Floating Medical Icons */}
          <div className="absolute -top-16 left-1/4 animate-float">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🏥</span>
            </div>
          </div>
          <div className="absolute top-8 right-1/4 animate-float animation-delay-1000">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">💊</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/3 animate-float animation-delay-2000">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">❤️</span>
            </div>
          </div>
          <div className="absolute top-20 right-1/3 animate-float animation-delay-3000">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg">🩺</span>
            </div>
          </div>
          <div className="absolute -bottom-10 right-1/3 animate-float animation-delay-4000">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">🌟</span>
            </div>
          </div>

          {/* Hero Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 animate-fadeInUp">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
                SWDF
              </span>
              <br />
              <span className="text-gray-900 text-4xl md:text-6xl font-bold">Foundation</span>
            </h1>
            <span className="inline-block bg-gradient-to-r from-red-100 to-red-200 text-red-700 px-8 py-3 rounded-full text-lg font-bold mb-6 animate-pulse shadow-lg">
              🏥 25+ Years of Medical Excellence
            </span>
          </div>



          <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Transforming lives through <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded-lg">free medical care</span>,
            health education, and compassionate support for underserved communities across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/donate" className="group relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-800 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-red-500/50">
              <span className="relative z-10 flex items-center">
                💝 Donate Now
                <span className="ml-2 animate-bounce">❤️</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            <Link to="/volunteer" className="group relative overflow-hidden bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-gray-900 px-12 py-5 rounded-2xl font-bold text-xl border-3 border-red-300 hover:border-red-500 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/30">
              <span className="relative z-10 flex items-center">
                👨‍⚕️ Join Medical Team
                <span className="ml-2 group-hover:animate-pulse">✨</span>
              </span>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl font-bold text-red-600 mb-2">100,000+</div>
              <div className="text-gray-700 font-medium">Lives Saved</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Medical Camps</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="text-3xl font-bold text-green-600 mb-2">25</div>
              <div className="text-gray-700 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Impact</span> in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming lives through healthcare across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group relative bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-16 h-16 bg-red-200 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <div className="text-5xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-300">100,000+</div>
              <div className="text-gray-700 font-semibold text-lg">Patients Treated</div>
              <div className="text-gray-500 text-sm mt-2">Across 25 states</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <div className="text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-700 font-semibold text-lg">Medical Volunteers</div>
              <div className="text-gray-500 text-sm mt-2">Dedicated professionals</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚐</span>
              </div>
              <div className="text-5xl font-bold text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-700 font-semibold text-lg">Mobile Clinics</div>
              <div className="text-gray-500 text-sm mt-2">Fully equipped units</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎆</span>
              </div>
              <div className="text-5xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300">25</div>
              <div className="text-gray-700 font-semibold text-lg">Years of Service</div>
              <div className="text-gray-500 text-sm mt-2">Since 1999</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Mission</span> & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by compassion and driven by results, we work tirelessly to create a healthier India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group bg-white rounded-2xl p-10 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-4xl text-red-600">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To provide accessible, quality healthcare to underserved communities through free medical camps,
                  mobile clinics, health education, and emergency medical services. We believe healthcare is a
                  <span className="font-semibold text-red-600"> fundamental human right</span>.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-10 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-4xl text-blue-600">🌟</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A world where every individual has access to quality healthcare regardless of their economic status.
                  We envision <span className="font-semibold text-blue-600">healthy communities</span> where preventive care
                  and medical support are available to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              🏥 Comprehensive Healthcare
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Medical <span className="text-red-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions tailored for underserved communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl text-red-600">🏥</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">Free Medical Camps</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive health checkups and treatment for underserved communities with state-of-the-art facilities.</p>
              
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  General health screenings
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Specialist consultations
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Free medicines distribution
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Health awareness programs
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link to="/services" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl text-blue-600">🚑</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Emergency Care</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">24/7 emergency medical services and ambulance support for critical situations and life-threatening emergencies.</p>
              
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  24/7 emergency hotline
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Mobile ambulance service
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Critical care support
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Hospital referral system
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl text-green-600">👶</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Maternal Health</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Specialized care for pregnant women and newborn babies with comprehensive maternal and child healthcare programs.</p>
              
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Prenatal care programs
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Safe delivery services
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Neonatal care
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Postnatal support
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link to="/services" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "The mobile clinic saved my daughter's life when she had a high fever. The doctors were
                professional and caring. We're forever grateful to SWDF Foundation."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Priya Kumar"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-gray-900 font-medium">Priya Kumar</p>
                  <p className="text-gray-500 text-sm">Mother, Rural Village</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "As a diabetic patient, I couldn't afford regular checkups. The free medical camp provided 
                me with medicines and taught me how to manage my condition."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">RS</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Rajesh Singh</p>
                  <p className="text-gray-500 text-sm">Patient, Urban Slum</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "The maternal health program helped me have a safe delivery. The doctors and nurses 
                provided excellent care throughout my pregnancy."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">SM</span>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Sunita Mishra</p>
                  <p className="text-gray-500 text-sm">Mother, Remote Village</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Medical Team</h2>
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
              <p className="text-red-600 font-medium mb-2">Pediatric Specialist</p>
              <p className="text-gray-600 text-sm">MBBS, MD Pediatrics - 15 years experience</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-green-600">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Vikram Rao</h3>
              <p className="text-red-600 font-medium mb-2">Emergency Medicine</p>
              <p className="text-gray-600 text-sm">Emergency Medicine Specialist - 12 years experience</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-purple-600">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Kavita Patel</h3>
              <p className="text-red-600 font-medium mb-2">Maternal Health</p>
              <p className="text-gray-600 text-sm">Gynecologist & Obstetrician - 18 years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full animate-float animation-delay-1000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-white text-sm font-semibold mr-2">✨</span>
            <span className="text-white text-sm font-semibold">Together We Can Save Lives</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Save Lives</span>
            <span className="block text-yellow-300">Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your support helps us provide <span className="font-semibold text-white">life-saving medical care</span> to those who need it most. 
            Every donation directly impacts patient care and brings hope to families across India.
          </p>
          
          {/* Impact Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">₹1,000</div>
              <div className="text-red-100">Treats 10 Patients</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">₹5,000</div>
              <div className="text-red-100">Funds Mobile Clinic</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">₹25,000</div>
              <div className="text-red-100">Saves a Life</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/donate" className="group relative overflow-hidden bg-white text-red-600 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white hover:shadow-opacity-25">
              <span className="relative z-10 flex items-center justify-center">
                💝 Donate Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link to="/volunteer" className="group relative overflow-hidden bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-red-600">
              <span className="relative z-10 flex items-center justify-center">
                👨‍⚕️ Join Medical Team
              </span>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-red-100 text-sm mb-4">Trusted by 100,000+ patients across India</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="flex items-center">
                <span className="text-yellow-300 mr-2">⭐</span>
                <span className="text-white text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-300 mr-2">🏆</span>
                <span className="text-white text-sm">Award Winning</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-300 mr-2">🔒</span>
                <span className="text-white text-sm">100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
