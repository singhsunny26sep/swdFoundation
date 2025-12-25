import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Services() {
  const services = [
    {
      id: 1,
      name: "Free Medical Camps",
      description: "Comprehensive health checkups and treatment for underserved communities",
      price: "Free",
      icon: "🏥",
      features: [
        "General health screenings",
        "Specialist consultations",
        "Free medicines distribution",
        "Health awareness programs",
        "Preventive care services"
      ]
    },
    {
      id: 2,
      name: "Emergency Medical Care",
      description: "24/7 emergency medical services and ambulance support",
      price: "Subsidized",
      icon: "🚑",
      features: [
        "24/7 emergency hotline",
        "Mobile ambulance service",
        "Critical care support",
        "Hospital referral system",
        "Emergency surgery support"
      ]
    },
    {
      id: 3,
      name: "Maternal Health Program",
      description: "Specialized care for pregnant women and newborn babies",
      price: "Free",
      icon: "👶",
      features: [
        "Prenatal care programs",
        "Safe delivery services",
        "Neonatal care",
        "Postnatal support",
        "Family planning guidance"
      ]
    },
    {
      id: 4,
      name: "Pediatric Care",
      description: "Comprehensive healthcare services for children and adolescents",
      price: "Free",
      icon: "🧒",
      features: [
        "Childhood vaccinations",
        "Growth monitoring",
        "Nutritional counseling",
        "Developmental assessments",
        "School health programs"
      ]
    },
    {
      id: 5,
      name: "Mobile Health Clinics",
      description: "Bringing healthcare directly to remote and rural areas",
      price: "Free",
      icon: "🚐",
      features: [
        "Fully equipped medical vans",
        "Portable diagnostic equipment",
        "Telemedicine capabilities",
        "Rural area coverage",
        "Community health workers"
      ]
    },
    {
      id: 6,
      name: "Health Education",
      description: "Community health education and awareness programs",
      price: "Free",
      icon: "📚",
      features: [
        "Disease prevention workshops",
        "Nutrition education",
        "Hygiene promotion",
        "Mental health awareness",
        "Lifestyle modification programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Medical Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive healthcare services provided free of cost to underserved communities. 
            Our medical team is dedicated to ensuring quality healthcare reaches everyone.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-red-600">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-red-600 mb-4">{service.price}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-900 font-medium mb-2">What's Included:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors text-center block">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Medical Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">1️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration</h3>
              <p className="text-gray-600">Patient registration and medical history collection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">2️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600">Comprehensive medical examination and diagnosis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">3️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Treatment</h3>
              <p className="text-gray-600">Free treatment, medicines, and medical procedures</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">4️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-up</h3>
              <p className="text-gray-600">Regular follow-up care and health monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">100,000+</div>
              <div className="text-gray-600 font-medium">Patients Treated</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Medical Camps</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Mobile Clinics</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Medical Assistance?</h2>
            <p className="text-gray-600 mb-6">Contact us today to learn more about our free medical services and how we can help you and your family.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
              <Link to="/volunteer" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
                Join Our Team
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

export default Services;