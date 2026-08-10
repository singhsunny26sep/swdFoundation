import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import founderImage from '../img/WhatsApp Image 2026-01-13 at 10.33.53 PM.jpeg';

function About() {
  const leaders = [
    {
      name: "Dr. Sanjay Gupta",
      role: "Founder & Chief Medical Officer",
      image: founderImage,
      bio: "25+ years in emergency medicine and public health. Founded SWDF with a vision to provide accessible healthcare to all."
    },
    {
      name: "Dr. Meera Sharma",
      role: "Director of Pediatrics",
      image: null,
      emoji: "👩‍⚕️",
      bio: "MBBS, MD Pediatrics - 15 years dedicated to child healthcare and development."
    },
    {
      name: "Dr. Vikram Rao",
      role: "Emergency Medicine Director",
      image: null,
      emoji: "👨‍⚕️",
      bio: "Emergency Medicine Specialist with 12 years of trauma care experience."
    },
    {
      name: "Dr. Kavita Patel",
      role: "Maternal Health Director",
      image: null,
      emoji: "👩‍⚕️",
      bio: "Gynecologist & Obstetrician with 18 years of experience in maternal care."
    }
  ];

  const structure = [
    {
      title: "Foundation Board",
      description: "Our governing body provides strategic direction and oversees all foundation operations ensuring transparency and accountability.",
      icon: "🏛️"
    },
    {
      title: "Medical Board",
      description: "Our expert medical team guides clinical protocols, quality standards, and healthcare delivery across all programs.",
      icon: "⚕️"
    },
    {
      title: "Finance & Audit Committee",
      description: "Ensures responsible financial management and provides annual audits for complete transparency.",
      icon: "📊"
    },
    {
      title: "Field Operations",
      description: "Our on-ground team manages mobile clinics, health camps, and community programs across India.",
      icon: "🏥"
    }
  ];

  const milestones = [
    { year: "1999", event: "SWDF Foundation established with a vision to provide accessible healthcare" },
    { year: "2002", event: "Launched first mobile health clinic program" },
    { year: "2005", event: "Reached 10,000 patients milestone" },
    { year: "2010", event: "Opened Bapji Jeevandeep Multispecialty Charitable Hospital" },
    { year: "2015", event: "Expanded to 50+ mobile clinics across 15 states" },
    { year: "2020", event: "Launched telehealth and digital health initiatives during pandemic" },
    { year: "2024", event: "Surpassed 100,000 patients treated annually" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                Trusted Healthcare Since 1999
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                About <span className="text-red-600">SWDF Foundation</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1999, SWDF Foundation has been dedicated to providing accessible, 
                quality healthcare to underserved communities through comprehensive medical services and health programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donate" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Support Our Work
                </Link>
                <Link to="/contact" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={founderImage}
                alt="SWDF Foundation"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-4">Our History</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            From humble beginnings to a nationwide healthcare impact
          </p>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 text-center md:text-right">
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <div className="text-3xl font-bold text-red-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 bg-red-600 rounded-full items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Structure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Structure</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A well-organized framework ensuring effective healthcare delivery and governance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {structure.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Leaders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to advancing healthcare for all
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-red-100"
                  />
                ) : (
                  <div className="w-28 h-28 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-5xl">{leader.emoji}</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-red-600 font-medium mb-3">{leader.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-center italic mb-4">
                "A more fair future where every individual has the potential to succeed"
              </p>
              <p className="text-gray-600 leading-relaxed">
                The vision of SWDF Foundation centers on ensuring access to essential necessities 
                for the needy and underprivileged worldwide. We strive to spread awareness and draw 
                support to address these critical requirements, seeking to create a more fair future 
                where every individual has the potential to succeed.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💪</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-center italic mb-4">
                "Ensuring essential services and opportunities for all"
              </p>
              <p className="text-gray-600 leading-relaxed">
                The foundation is committed to improving the lives of the less fortunate by 
                providing comprehensive healthcare, quality education, and robust community 
                support. Their mission is to ensure that everyone, regardless of their socio-economic 
                status, has access to essential services and opportunities for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Financials & Transparency</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of financial accountability and transparency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Goes to Programs</div>
              <p className="text-gray-500 text-sm mt-2">Directly to healthcare services</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10%</div>
              <div className="text-gray-600 font-medium">Administrative Costs</div>
              <p className="text-gray-500 text-sm mt-2">Operations & management</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5%</div>
              <div className="text-gray-600 font-medium">Fundraising</div>
              <p className="text-gray-500 text-sm mt-2">Awareness & donor engagement</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Audited Annually</div>
              <p className="text-gray-500 text-sm mt-2">By certified auditors</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Key Financial Metrics (2024-25)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">₹25 Crores</div>
                <div className="text-gray-600">Total Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">₹21 Crores</div>
                <div className="text-gray-600">Program Expenditure</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">₹2.5 Crores</div>
                <div className="text-gray-600">Reserve Fund</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborating with government bodies, NGOs, and corporate partners to amplify our impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Government Partnerships</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Working with Ministry of Health, state health departments, and local governing bodies to implement public health initiatives.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Partners</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collaborating with corporate entities through CSR initiatives to fund healthcare infrastructure and community programs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">NGO Alliances</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Partnering with national and international NGOs for knowledge sharing, resource mobilization, and joint program implementation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Networks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connected with 200+ hospitals and diagnostic centers for patient referrals and advanced medical care.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Institutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Partnerships with medical colleges and universities for research, training, and healthcare education programs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Organizations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collaborating with WHO, UNICEF, and Rotary International for global health initiatives and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Membership & Involvement</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to be part of our mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Individual Membership</h3>
              <p className="text-gray-700 mb-4">Join our network of healthcare professionals and volunteers</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>• Access to exclusive events</li>
                <li>• Monthly newsletter</li>
                <li>• Volunteer opportunities</li>
                <li>• Training workshops</li>
              </ul>
              <Link to="/volunteer" className="block text-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Join Now
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Membership</h3>
              <p className="text-gray-700 mb-4">Partner with us through CSR initiatives</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>• CSR partnership programs</li>
                <li>• Employee volunteering</li>
                <li>• Brand association benefits</li>
                <li>• Impact reporting</li>
              </ul>
              <Link to="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Partner With Us
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Membership</h3>
              <p className="text-gray-700 mb-4">Learn and grow through our programs</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>• Internship programs</li>
                <li>• Medical camps</li>
                <li>• Skill development</li>
                <li>• Certificate programs</li>
              </ul>
              <Link to="/volunteer" className="block text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build your career while making a real difference in communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Officers</h3>
              <p className="text-red-600 font-medium mb-3">Multiple Locations in India</p>
              <p className="text-gray-600 text-sm mb-4">Full-time positions for MBBS graduates and specialists across our hospitals and mobile clinics.</p>
              <Link to="/contact" className="text-red-600 font-semibold hover:text-red-700 text-sm">
                Apply Now →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pharmacy Staff</h3>
              <p className="text-red-600 font-medium mb-3">Healthcare Experience</p>
              <p className="text-gray-600 text-sm mb-4">Pharmacists and technicians needed for our hospital and medical camp operations.</p>
              <Link to="/contact" className="text-red-600 font-semibold hover:text-red-700 text-sm">
                Apply Now →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Program Managers</h3>
              <p className="text-red-600 font-medium mb-3">Field Operations</p>
              <p className="text-gray-600 text-sm mb-4">Coordinate community programs and ensure effective healthcare delivery across regions.</p>
              <Link to="/contact" className="text-red-600 font-semibold hover:text-red-700 text-sm">
                Apply Now →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finance & Admin</h3>
              <p className="text-red-600 font-medium mb-3">Head Office</p>
              <p className="text-gray-600 text-sm mb-4">Accounting, grants management, and administrative support roles available.</p>
              <Link to="/contact" className="text-red-600 font-semibold hover:text-red-700 text-sm">
                Apply Now →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Digital & Communications</h3>
              <p className="text-red-600 font-medium mb-3">Marketing & IT</p>
              <p className="text-gray-600 text-sm mb-4">Social media management, website development, and digital marketing roles.</p>
              <Link to="/contact" className="text-red-600 font-semibold hover:text-red-700 text-sm">
                Apply Now →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data & Monitoring</h3>
              <p className="text-red-600 font-medium mb-3">Impact Assessment</p>
              <p className="text-gray-600 text-sm mb-4">Help monitor and measure the impact of our healthcare programs across communities.</p>
              <Link to="/contact" className="text-red-600 font-semibold hover:text-red-700 text-sm">
                Apply Now →
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don't see the right position? Send us your resume for future opportunities.</p>
            <Link to="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Send General Application
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-red-100 mb-8 text-lg">
            Have questions about our foundation? We'd love to hear from you.
          </p>
          <Link to="/contact" className="inline-block bg-white hover:bg-gray-100 text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
