import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import founderImage from '../img/girl.jpg';
import girlImage from '../img/girl.jpg';
import logoImage from '../img/logo.jpeg';

function Home() {
  const facilities = [
    {
      id: 1,
      category: "Study",
      name: "Education Support Program",
      description: "Providing educational resources and support to underprivileged children",
      icon: "📚",
      services: [
        "Free school supplies",
        "Tutoring programs",
        "Scholarship assistance",
        "Digital learning tools",
        "Career counseling"
      ],
      stats: "5,000+ Students Helped"
    },
    {
      id: 2,
      category: "Health",
      name: "Comprehensive Healthcare",
      description: "Complete medical care and health services for communities",
      icon: "🏥",
      services: [
        "Free medical camps",
        "Emergency care",
        "Maternal health",
        "Pediatric services",
        "Mobile clinics"
      ],
      stats: "100,000+ Patients Treated"
    },
    {
      id: 3,
      category: "Extra Facilities",
      name: "Community Development",
      description: "Additional support services for holistic community development",
      icon: "🌟",
      services: [
        "Skill development workshops",
        "Women empowerment programs",
        "Environmental initiatives",
        "Disaster relief support",
        "Cultural activities"
      ],
      stats: "50+ Community Projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                  Trusted NGO Since 1999
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Transforming Communities Through<br />
                  <span className="text-red-600">Comprehensive Care</span>
                </h1>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                SWDF Foundation delivers essential facilities in education, healthcare, and community development
                to uplift underserved communities and build sustainable futures across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/donate" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                  Donate Today
                </Link>
                <Link to="/services" className="bg-white border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 text-center">
                  Our Programs
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">5,000+</div>
                  <div className="text-sm text-gray-600">Lives Changed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">25+</div>
                  <div className="text-sm text-gray-600">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">50+</div>
                  <div className="text-sm text-gray-600">Communities</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 shadow-2xl">
                <img src={founderImage} alt="SWDF Foundation" className="w-full h-96 object-cover rounded-xl shadow-lg" />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-red-600">25+</div>
                  <div className="text-sm text-gray-600">Years of Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive facilities across three critical areas to create lasting impact
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div key={facility.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-red-600">{facility.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">{facility.category}</h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{facility.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{facility.description}</p>
                  <div className="text-2xl font-bold text-red-600 mb-4">{facility.stats}</div>
                </div>

                <div className="space-y-2 mb-6">
                  {facility.services.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>
                      {service}
                    </div>
                  ))}
                </div>

                <Link to="/services" className="block text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-red-100 max-w-2xl mx-auto">
              Every number represents a life changed, a community strengthened, and hope restored
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2">5,000+</div>
              <div className="text-red-100">Students Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2">100,000+</div>
              <div className="text-red-100">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-red-100">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2">25</div>
              <div className="text-red-100">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven approach ensures sustainable impact and measurable results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assess Needs</h3>
              <p className="text-gray-600 text-sm">We identify community needs through comprehensive surveys and local partnerships</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Develop Programs</h3>
              <p className="text-gray-600 text-sm">Customized solutions designed to address specific challenges and opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Implement & Monitor</h3>
              <p className="text-gray-600 text-sm">We execute programs with continuous monitoring and quality assurance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600 font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scale Impact</h3>
              <p className="text-gray-600 text-sm">Successful programs are scaled to reach more communities and create greater change</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real lives transformed through our comprehensive facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <img src={girlImage} alt="Priya Sharma" className="w-16 h-16 rounded-full object-cover" />
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "SWDF's education program gave me the tools I needed to succeed. Their tutoring and school supplies
                helped me excel academically and pursue my dream of becoming a healthcare professional."
              </blockquote>
              <div className="font-semibold text-gray-900">Priya Sharma</div>
              <div className="text-red-600 text-sm">Medical Student & Program Beneficiary</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <img src={founderImage} alt="Community Leader" className="w-16 h-16 rounded-full object-cover" />
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Before SWDF's mobile health clinic, our village had no access to quality healthcare.
                Now, regular check-ups and emergency care have improved the health of our entire community."
              </blockquote>
              <div className="font-semibold text-gray-900">Rajesh Kumar</div>
              <div className="text-red-600 text-sm">Village Health Committee Member</div>
            </div>
          </div>
        </div>
      </section>


      {/* Take Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-red-100 mb-12 max-w-2xl mx-auto">
            Join thousands of supporters who are helping us create lasting change in communities across India
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-red-600">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Give Monthly</h3>
              <p className="text-gray-600 text-sm mb-4">Sustainable support that allows us to plan and execute long-term programs</p>
              <Link to="/donate" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 inline-block text-sm">
                Start Giving
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-red-600">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Volunteer</h3>
              <p className="text-gray-600 text-sm mb-4">Share your skills and time to directly impact lives in your community</p>
              <Link to="/volunteer" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 inline-block text-sm">
                Get Started
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-red-600">📢</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Advocate</h3>
              <p className="text-gray-600 text-sm mb-4">Amplify our mission by sharing our work with your network</p>
              <Link to="/contact" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 inline-block text-sm">
                Learn More
              </Link>
            </div>
          </div>
          <div className="border-t border-red-500 pt-8">
            <p className="text-red-100 mb-4">Trusted by communities for 25+ years</p>
            <div className="flex justify-center space-x-8 text-sm text-red-200">
              <span>• 100% of donations go to programs</span>
              <span>• Transparent reporting</span>
              <span>• 4.9/5 beneficiary satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
