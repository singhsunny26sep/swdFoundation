import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function News() {
  const newsItems = [
    {
      id: 1,
      title: "Rotary projects around the globe - May 2026",
      category: "Global Impact",
      date: "May 2026",
      excerpt: "Discover how Rotary clubs worldwide are making a difference in their communities through innovative service projects. From clean water initiatives in Africa to literacy programs in Asia, our members are transforming lives every day.",
      content: "This month's highlights include the completion of a major water purification project in Kenya, the opening of a new school in Bangladesh, and the expansion of mobile health clinics in rural India. These projects demonstrate the power of Rotary's global network to address critical community needs.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "World Cup mania envelops Rotary",
      category: "Community Events",
      date: "June 2026",
      excerpt: "Rotary members around the world are using the excitement of the World Cup to engage communities and raise funds for polio eradication. Watch parties, charity matches, and fundraising campaigns are bringing people together for a common cause.",
      content: "Rotary clubs have organized over 500 watch parties across 50 countries, raising awareness and funds for the End Polio campaign. Special events include charity football matches featuring Rotary members and local celebrities, with all proceeds going towards polio vaccination programs.",
      color: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      title: "Care close to home: Local health initiatives",
      category: "Healthcare",
      date: "May 2026",
      excerpt: "How Rotary clubs are bringing healthcare directly to underserved communities through local initiatives and partnerships with healthcare providers.",
      content: "This month's feature explores how Rotary clubs are addressing healthcare disparities in their local communities. From free health screenings to mental health support programs, members are working with healthcare professionals to provide accessible care to those who need it most.",
      color: "bg-red-100 text-red-600"
    },
    {
      id: 4,
      title: "Youth Leadership Academy graduates 1,000 students",
      category: "Education",
      date: "May 2026",
      excerpt: "The Rotary Youth Leadership Academy has reached a milestone with over 1,000 graduates who are now leading change in their communities.",
      content: "The Youth Leadership Academy continues to empower young leaders with skills in communication, project management, and community organizing. This year's graduates have already launched 50 community service projects across 30 countries.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 5,
      title: "Clean water project transforms village in Guatemala",
      category: "Water & Sanitation",
      date: "June 2026",
      excerpt: "A Rotary water project has brought clean, safe drinking water to a remote village in Guatemala for the first time in the village's history.",
      content: "The $50,000 project, funded by Rotary clubs in the US and Guatemala, built a water filtration system and piped clean water to 200 homes. The project also included hygiene education programs that have reduced waterborne illness by 80%.",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      id: 6,
      title: "Rotary Peace Fellows share their journey",
      category: "Peace Building",
      date: "June 2026",
      excerpt: "Current and former Rotary Peace Fellows discuss how the program has shaped their careers in conflict resolution and peacebuilding.",
      content: "The Rotary Peace Centers have trained over 1,400 peace professionals from 115 countries. Recent graduates are working with the UN, NGOs, and governments worldwide to promote peace and resolve conflicts in some of the world's most challenging regions.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const featuredNews = newsItems[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
              Latest Updates
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              News & <span className="text-red-600">Features</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay informed about Rotary's global impact, inspiring stories, and upcoming events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-red-100 to-blue-100 h-64 flex items-center justify-center">
                <span className="text-8xl">🌍</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${featuredNews.color}`}>
                    {featuredNews.category}
                  </span>
                  <span className="text-gray-500 text-sm">{featuredNews.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredNews.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{featuredNews.excerpt}</p>
                <button className="text-red-600 font-semibold hover:text-red-700">
                  Read Full Article →
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Featured Categories</h3>
              <div className="space-y-4">
                <Link to="/services" className="block bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-xl text-red-600">📰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">All News & Features</h4>
                      <p className="text-sm text-gray-600">Browse the complete collection</p>
                    </div>
                  </div>
                </Link>
                <Link to="/services" className="block bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl text-blue-600">🎙️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Rotary Voices Podcast</h4>
                      <p className="text-sm text-gray-600">Listen to inspiring conversations</p>
                    </div>
                  </div>
                </Link>
                <Link to="/services" className="block bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xl text-green-600">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Social Media</h4>
                      <p className="text-sm text-gray-600">Follow us on all platforms</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Latest Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-red-100 to-blue-100 h-48 flex items-center justify-center">
                  <span className="text-6xl">
                    {news.id === 1 ? '🌍' : news.id === 2 ? '⚽' : news.id === 3 ? '🏥' : news.id === 4 ? '🎓' : news.id === 5 ? '💧' : '🕊️'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${news.color}`}>
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{news.excerpt}</p>
                  <button className="text-red-600 font-semibold hover:text-red-700 text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Stay Connected</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-gray-600 mb-4">Get the latest news and updates delivered to your inbox monthly</p>
              <Link to="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors">
                Subscribe
              </Link>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600 mb-4">Follow us on Twitter, Facebook, Instagram, and LinkedIn</p>
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors">
                Follow Us
              </Link>
            </div>
            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <div className="text-4xl mb-4">🎙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Podcast</h3>
              <p className="text-gray-600 mb-4">Listen to Rotary Voices for inspiring stories and interviews</p>
              <Link to="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors">
                Listen Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default News;
