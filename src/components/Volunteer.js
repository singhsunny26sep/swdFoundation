import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Volunteer() {
  const [volunteerData, setVolunteerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    occupation: '',
    education: '',
    experience: '',
    interests: [],
    availability: '',
    motivation: '',
    emergencyContact: '',
    emergencyPhone: '',
    healthConditions: '',
    preferredRole: ''
  });

  const volunteerRoles = [
    { id: 'teaching', label: 'Teaching & Education', icon: '📚' },
    { id: 'healthcare', label: 'Healthcare Support', icon: '🏥' },
    { id: 'events', label: 'Event Organization', icon: '🎉' },
    { id: 'administrative', label: 'Administrative Support', icon: '📋' },
    { id: 'fundraising', label: 'Fundraising', icon: '💰' },
    { id: 'media', label: 'Media & Communications', icon: '📱' },
    { id: 'logistics', label: 'Logistics & Operations', icon: '🚚' },
    { id: 'counseling', label: 'Counseling & Support', icon: '💬' }
  ];

  const availabilityOptions = [
    'Weekdays (9 AM - 5 PM)',
    'Weekends',
    'Evenings (6 PM - 9 PM)',
    'Flexible',
    'Project-based'
  ];

  const handleChange = (e) => {
    setVolunteerData({
      ...volunteerData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestChange = (roleId) => {
    const interests = volunteerData.interests.includes(roleId)
      ? volunteerData.interests.filter(id => id !== roleId)
      : [...volunteerData.interests, roleId];
    
    setVolunteerData({
      ...volunteerData,
      interests
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your interest in volunteering! We will contact you within 48 hours to discuss next steps.');
    setVolunteerData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      occupation: '',
      education: '',
      experience: '',
      interests: [],
      availability: '',
      motivation: '',
      emergencyContact: '',
      emergencyPhone: '',
      healthConditions: '',
      preferredRole: ''
    });
  };

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
              <h1 className="text-2xl font-bold text-gray-900">SWDF Foundation</h1>
            </div>
            <div className="hidden md:flex space-x-8">
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-red-600">Volunteer</span> Team
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Be part of a movement that creates lasting change. Your time, skills, and passion 
            can transform lives and build stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#volunteer-form" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Apply Now
            </a>
            <Link to="/contact" className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Volunteer Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600 font-medium">Active Volunteers</div>
            </div>
            <div className="text-center bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">50,000+</div>
              <div className="text-gray-600 font-medium">Hours Contributed</div>
            </div>
            <div className="text-center bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600 font-medium">States Covered</div>
            </div>
            <div className="text-center bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerRoles.map((role) => (
              <div key={role.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-4xl mb-4">{role.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.label}</h3>
                  <p className="text-gray-600 text-sm">
                    {role.id === 'teaching' && 'Help children learn and grow through educational activities and mentoring'}
                    {role.id === 'healthcare' && 'Support medical camps and health awareness programs'}
                    {role.id === 'events' && 'Organize fundraising events and community gatherings'}
                    {role.id === 'administrative' && 'Assist with office work, data entry, and coordination'}
                    {role.id === 'fundraising' && 'Help raise awareness and funds for our programs'}
                    {role.id === 'media' && 'Create content, manage social media, and handle communications'}
                    {role.id === 'logistics' && 'Support program delivery and operational activities'}
                    {role.id === 'counseling' && 'Provide emotional support and guidance to community members'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Volunteers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Volunteering with SWDF Foundation has been the most rewarding experience of my life. 
                Seeing the direct impact of our work on children's education is truly inspiring."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold">AS</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Anjali Sharma</p>
                  <p className="text-gray-600 text-sm">Teaching Volunteer, 2 years</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The organization is well-structured and the team is incredibly supportive. 
                I've gained valuable skills while making a real difference in the community."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">RK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rohit Kumar</p>
                  <p className="text-gray-600 text-sm">Event Coordinator, 1 year</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 mb-4 italic">
                "SWDF Foundation welcomed me with open arms. The training programs and ongoing 
                support have helped me grow both personally and professionally."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">MP</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Patel</p>
                  <p className="text-gray-600 text-sm">Healthcare Volunteer, 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section id="volunteer-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Volunteer Application</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={volunteerData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={volunteerData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={volunteerData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={volunteerData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={volunteerData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Role *</label>
                    <select
                      name="preferredRole"
                      value={volunteerData.preferredRole}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    >
                      <option value="">Select a role</option>
                      {volunteerRoles.map((role) => (
                        <option key={role.id} value={role.id}>{role.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Address Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      name="address"
                      value={volunteerData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="Enter your street address"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={volunteerData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={volunteerData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                        placeholder="Enter your state"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={volunteerData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                        placeholder="Enter your ZIP code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                    <input
                      type="text"
                      name="occupation"
                      value={volunteerData.occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="Enter your occupation"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
                    <select
                      name="education"
                      value={volunteerData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Postgraduate</option>
                      <option value="professional">Professional Degree</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience</label>
                  <textarea
                    name="experience"
                    value={volunteerData.experience}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    placeholder="Describe any relevant volunteer or work experience..."
                  />
                </div>
              </div>

              {/* Volunteer Preferences */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Volunteer Preferences</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Areas of Interest (Select all that apply)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {volunteerRoles.map((role) => (
                        <label key={role.id} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={volunteerData.interests.includes(role.id)}
                            onChange={() => handleInterestChange(role.id)}
                            className="mr-2 rounded border-gray-300 text-red-600 focus:ring-red-500"
                          />
                          <span className="text-sm text-gray-700">{role.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
                    <select
                      name="availability"
                      value={volunteerData.availability}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    >
                      <option value="">Select your availability</option>
                      {availabilityOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Motivation and Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to volunteer with us? *</label>
                    <textarea
                      name="motivation"
                      value={volunteerData.motivation}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="Tell us about your motivation to volunteer..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name</label>
                      <input
                        type="text"
                        name="emergencyContact"
                        value={volunteerData.emergencyContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                        placeholder="Enter emergency contact name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone</label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={volunteerData.emergencyPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                        placeholder="Enter emergency contact phone"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Health Conditions or Special Needs</label>
                    <textarea
                      name="healthConditions"
                      value={volunteerData.healthConditions}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      placeholder="Please describe any health conditions or special needs we should be aware of..."
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 mr-3 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-sm text-red-800">
                    I agree to the terms and conditions of volunteering with SWDF Foundation. 
                    I understand that I will be required to attend orientation and training sessions. 
                    I consent to background checks if required for my volunteer role.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Volunteer;