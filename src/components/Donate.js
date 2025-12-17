import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Donate() {
  const [donationAmount, setDonationAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [program, setProgram] = useState('general');
  const [showCustomAmount, setShowCustomAmount] = useState(false);

  const predefinedAmounts = ['500', '1000', '2500', '5000', '10000', '25000'];

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
    setShowCustomAmount(false);
  };

  const handleCustomAmount = () => {
    setShowCustomAmount(true);
    setDonationAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with payment gateway like Stripe, PayPal, etc.
    const finalAmount = showCustomAmount ? customAmount : donationAmount;
    alert(`Thank you for your generous donation of ₹${finalAmount}! Your contribution will help save lives. You will be redirected to the payment gateway.`);
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
            Save a <span className="text-red-600">Life Today</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Your donation directly supports free medical care, emergency services, and life-saving treatments 
            for patients who cannot afford healthcare. Every contribution makes a difference.
          </p>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Your Donation Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">₹500</div>
              <div className="text-gray-600 font-medium">Provides medicines for 5 patients</div>
            </div>
            <div className="text-center bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">₹1,000</div>
              <div className="text-gray-600 font-medium">Funds medical checkup for 10 families</div>
            </div>
            <div className="text-center bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">₹2,500</div>
              <div className="text-gray-600 font-medium">Supports emergency care for 1 patient</div>
            </div>
            <div className="text-center bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">₹5,000</div>
              <div className="text-gray-600 font-medium">Funds mobile clinic for 1 day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Make a Donation</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Donation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 px-4 rounded-lg border transition-colors ${
                      donationType === 'one-time'
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-4 rounded-lg border transition-colors ${
                      donationType === 'monthly'
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Medical Program</label>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                >
                  <option value="general">General Medical Fund</option>
                  <option value="emergency">Emergency Care</option>
                  <option value="maternal">Maternal Health</option>
                  <option value="pediatric">Pediatric Care</option>
                  <option value="mobile">Mobile Clinics</option>
                </select>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {donationType === 'monthly' ? 'Monthly Amount (₹)' : 'Donation Amount (₹)'}
                </label>
                
                {!showCustomAmount ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 px-4 rounded-lg border transition-colors ${
                          donationAmount === amount
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
                        }`}
                      >
                        ₹{amount}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={handleCustomAmount}
                      className="py-3 px-4 rounded-lg border border-dashed border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors"
                    >
                      Custom Amount
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700">₹</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter custom amount"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                      min="100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCustomAmount(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="Enter your address (optional)"
                />
              </div>

              {/* Tax Benefits */}
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Tax Benefits Available</h4>
                    <p className="text-red-700 text-sm">
                      SWDF Foundation is registered under Section 80G of the Income Tax Act. 
                      Donations are eligible for tax deduction of 50% of the amount donated.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
              >
                Donate ₹{(showCustomAmount ? customAmount : donationAmount) || '0'} {donationType === 'monthly' ? '/month' : ''}
              </button>
            </form>

            {/* Payment Methods */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm mb-4">Secure payment powered by</p>
              <div className="flex justify-center space-x-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Stripe</span>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">PayPal</span>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">UPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Volunteer</h3>
              <p className="text-gray-600 mb-4">Join our medical team and provide direct patient care</p>
              <Link to="/volunteer" className="text-blue-600 hover:text-blue-700 font-medium">
                Join Team →
              </Link>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-green-600">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hospital Partnership</h3>
              <p className="text-gray-600 mb-4">Partner with us for medical equipment and resources</p>
              <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium">
                Contact Us →
              </Link>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-red-600">📢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Spread Awareness</h3>
              <p className="text-gray-600 mb-4">Share our mission to help more patients receive care</p>
              <button className="text-red-600 hover:text-red-700 font-medium">
                Share Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Donate;