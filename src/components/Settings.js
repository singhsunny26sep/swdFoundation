import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Settings() {
  const [settings, setSettings] = useState({
    organizationName: 'SWDF Foundation',
    email: 'admin@swdfoundation.org',
    phone: '+91 98765 43210',
    address: '123 Health Street, Care City, New Delhi 110001',
    emergencyContact: '+91 98765 43211',
    donationTracking: true,
    volunteerNotifications: true,
    patientUpdates: true,
    monthlyReports: true,
    smsAlerts: false,
    autoBackup: true,
    publicProfile: true,
    dataPrivacy: true
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSave = () => {
    // Here you would typically save to backend
    alert('Settings saved successfully!');
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
              <span className="text-xl font-bold text-gray-900">SWDF Foundation</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</Link>
              <Link to="/products" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Products</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Gallery</Link>
              <Link to="/volunteer" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Volunteer</Link>
              <Link to="/donate" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">Donate</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</Link>
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

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Foundation Settings</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Manage your organization settings, notification preferences, and system configurations.
          </p>
        </div>
      </section>

      {/* Settings Form */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          
          {/* Organization Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Organization Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                <input
                  type="text"
                  name="organizationName"
                  value={settings.organizationName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Email</label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                <input
                  type="tel"
                  name="emergencyContact"
                  value={settings.emergencyContact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                name="address"
                value={settings.address}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>
          </section>

          {/* Notification Settings */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Donation Tracking</span>
                <input
                  type="checkbox"
                  name="donationTracking"
                  checked={settings.donationTracking}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </label>
              
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Volunteer Notifications</span>
                <input
                  type="checkbox"
                  name="volunteerNotifications"
                  checked={settings.volunteerNotifications}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </label>
              
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Patient Care Updates</span>
                <input
                  type="checkbox"
                  name="patientUpdates"
                  checked={settings.patientUpdates}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </label>
              
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Monthly Reports</span>
                <input
                  type="checkbox"
                  name="monthlyReports"
                  checked={settings.monthlyReports}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </label>
              
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">SMS Alerts</span>
                <input
                  type="checkbox"
                  name="smsAlerts"
                  checked={settings.smsAlerts}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </label>
            </div>
          </section>

          {/* System Settings */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">System Settings</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-gray-700 font-medium">Automatic Data Backup</span>
                  <p className="text-sm text-gray-500">Automatically backup patient and donation data</p>
                </div>
                <input
                  type="checkbox"
                  name="autoBackup"
                  checked={settings.autoBackup}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </label>
              
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-gray-700 font-medium">Public Profile</span>
                  <p className="text-sm text-gray-500">Allow public viewing of organization profile</p>
                </div>
                <input
                  type="checkbox"
                  name="publicProfile"
                  checked={settings.publicProfile}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </label>
              
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-gray-700 font-medium">Data Privacy Compliance</span>
                  <p className="text-sm text-gray-500">Enable HIPAA and patient privacy compliance</p>
                </div>
                <input
                  type="checkbox"
                  name="dataPrivacy"
                  checked={settings.dataPrivacy}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
              </label>
            </div>
          </section>

          {/* Security Settings */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Two-Factor Authentication</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500">
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                  <input
                    type="number"
                    defaultValue="30"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password Requirements</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500">
                    <option>Strong (12+ characters)</option>
                    <option>Medium (8+ characters)</option>
                    <option>Basic (6+ characters)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Access Log Retention (days)</label>
                  <input
                    type="number"
                    defaultValue="90"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Save Settings
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Settings;