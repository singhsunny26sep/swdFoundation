import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Dashboard() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">NGO Facilities Dashboard</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive overview of our services in education, healthcare, and community development.
            Empowering communities through multiple facilities and support programs.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div key={facility.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">{facility.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-1">{facility.category}</h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h4>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <p className="text-lg font-bold text-green-600 mb-4">{facility.stats}</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-gray-900 font-medium mb-2">Services Provided:</h5>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {facility.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/services" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-center block">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Overall Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Students Educated</div>
            </div>
            <div className="text-center bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">100,000+</div>
              <div className="text-gray-600 font-medium">Patients Treated</div>
            </div>
            <div className="text-center bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Community Projects</div>
            </div>
            <div className="text-center bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Be part of our efforts to provide comprehensive facilities in study, health, and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/volunteer" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Volunteer With Us
              </Link>
              <Link to="/donate" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Dashboard;