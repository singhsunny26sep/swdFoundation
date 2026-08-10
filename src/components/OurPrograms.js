import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function OurPrograms() {
  const programs = [
    {
      id: 1,
      name: "Youth Programs",
      icon: "👦",
      description: "Empowering young leaders through education, leadership development, and community service opportunities",
      features: [
        "Interact Clubs for ages 12-18",
        "Rotaract Clubs for ages 18-30",
        "Leadership development workshops",
        "Community service projects",
        "Mentorship programs"
      ],
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      name: "Rotary Youth Leadership Awards (RYLA)",
      icon: "🏆",
      description: "Intensive leadership development program for young adults aged 18-30",
      features: [
        "Week-long leadership intensive",
        "Public speaking workshops",
        "Team building activities",
        "Community project planning",
        "Networking opportunities"
      ],
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 3,
      name: "Peace Fellowships",
      icon: "🕊️",
      description: "Advanced academic programs focused on peace building and conflict resolution",
      features: [
        "Rotary Peace Centers worldwide",
        "Master's degree in peace studies",
        "Professional development certificate",
        "Global peace network access",
        "Research opportunities"
      ],
      color: "bg-green-100 text-green-600"
    },
    {
      id: 4,
      name: "Rotary Community Corps",
      icon: "🤝",
      description: "Engaging non-Rotarians in community service and volunteer activities",
      features: [
        "Open to non-Rotary members",
        "Flexible volunteer opportunities",
        "Skill-based contributions",
        "Local community projects",
        "Leadership training"
      ],
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 5,
      name: "Grants",
      icon: "💰",
      description: "Funding support for local and international service projects",
      features: [
        "District Grants up to $5,000",
        "Global Grants for large projects",
        "Scholarship funding",
        "Community project grants",
        "Humanitarian grants"
      ],
      color: "bg-red-100 text-red-600"
    },
    {
      id: 6,
      name: "Youth Exchanges",
      icon: "✈️",
      description: "International cultural exchange programs for young people",
      features: [
        "Short-term exchanges (6 weeks)",
        "Long-term exchanges (1 year)",
        "Cultural immersion experiences",
        "Language learning opportunities",
        "Global friendship building"
      ],
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      id: 7,
      name: "Scholarships",
      icon: "📚",
      description: "Educational funding opportunities for students worldwide",
      features: [
        "Rotary Foundation Scholarships",
        "Ambassadorial Scholarships",
        "Graduate scholarships",
        "Vocational scholarships",
        "Research fellowships"
      ],
      color: "bg-teal-100 text-teal-600"
    },
    {
      id: 8,
      name: "Friendship Exchange",
      icon: "🌍",
      description: "Cultural exchange program where families host guests from other Rotary districts",
      features: [
        "Homestay experiences",
        "Cultural immersion",
        "International friendships",
        "Professional networking",
        "Service collaboration"
      ],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Programs</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting impact through leadership development, 
              education, and community service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${program.color}`}>
                    <span className="text-4xl">{program.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{program.description}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {program.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start text-gray-700 text-sm">
                      <span className="text-red-500 mr-2 flex-shrink-0">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="block text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Program Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our programs reach millions of people worldwide, creating measurable impact in communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="text-5xl font-bold text-red-600 mb-3">1.2M+</div>
              <div className="text-gray-700 font-medium">Rotary Members</div>
              <p className="text-gray-600 text-sm mt-2">Active volunteers worldwide</p>
            </div>
            <div className="text-center bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="text-5xl font-bold text-blue-600 mb-3">35,000+</div>
              <div className="text-gray-700 font-medium">Clubs Globally</div>
              <p className="text-gray-600 text-sm mt-2">Across 200+ countries</p>
            </div>
            <div className="text-center bg-green-50 rounded-xl p-8 border border-green-200">
              <div className="text-5xl font-bold text-green-600 mb-3">$273M</div>
              <div className="text-gray-700 font-medium">Annual Grants</div>
              <p className="text-gray-600 text-sm mt-2">Awarded in 2024-25</p>
            </div>
            <div className="text-center bg-purple-50 rounded-xl p-8 border border-purple-200">
              <div className="text-5xl font-bold text-purple-600 mb-3">3B+</div>
              <div className="text-gray-700 font-medium">Children Immunized</div>
              <p className="text-gray-600 text-sm mt-2">Against polio worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How Our Programs Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to implementation, our programs are designed for maximum sustainable impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-red-600 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Identify Needs</h3>
              <p className="text-gray-600">Assess community needs through surveys and local partnerships</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-red-600 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design Program</h3>
              <p className="text-gray-600">Create customized solutions addressing specific local challenges</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-red-600 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implement</h3>
              <p className="text-gray-600">Execute programs with local Rotary club support and monitoring</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-red-600 font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Measure Impact</h3>
              <p className="text-gray-600">Track results, gather feedback, and scale successful initiatives</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Involved?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join a Rotary club or contact us to learn how you can participate in our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Become a Volunteer
            </Link>
            <Link to="/contact" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OurPrograms;
