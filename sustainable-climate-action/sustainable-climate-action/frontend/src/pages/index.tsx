import React, { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [carbonForm, setCarbonForm] = useState({ energyUsage: '', transportMode: 'car', diet: 'meat' })
  const [carbonResult, setCarbonResult] = useState<null | { totalDailyCO2e: string; yearlyEstimate: string }>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleCarbonCalc = (e: React.FormEvent) => {
    e.preventDefault()
    const energy = parseFloat(carbonForm.energyUsage) || 0
    const transport = carbonForm.transportMode === 'car' ? 2.3 : carbonForm.transportMode === 'bus' ? 0.09 : 0.12
    const diet = carbonForm.diet === 'meat' ? 6.5 : carbonForm.diet === 'vegetarian' ? 3.5 : 2.0
    const total = energy * 0.92 + transport + diet
    setCarbonResult({
      totalDailyCO2e: total.toFixed(2),
      yearlyEstimate: (total * 365).toFixed(2)
    })
  }

  return (
    <>
      <Head>
        <title>Sustainable Climate Action</title>
        <meta name="description" content="Join the global movement for sustainable development and climate action." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌍</text></svg>" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                <span className="text-xl font-bold text-green-700">Climate Action</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-gray-600 hover:text-green-600 font-medium transition">Features</a>
                <a href="#stats" className="text-gray-600 hover:text-green-600 font-medium transition">Stats</a>
                <a href="#calculator" className="text-gray-600 hover:text-green-600 font-medium transition">Calculator</a>
                <a href="#about" className="text-gray-600 hover:text-green-600 font-medium transition">About</a>
                <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium">Join Now</a>
              </div>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded text-gray-600">
                {menuOpen ? '✕' : '☰'}
              </button>
            </div>
            {menuOpen && (
              <div className="md:hidden pb-4 flex flex-col gap-3">
                <a href="#features" className="text-gray-600 hover:text-green-600">Features</a>
                <a href="#stats" className="text-gray-600 hover:text-green-600">Stats</a>
                <a href="#calculator" className="text-gray-600 hover:text-green-600">Calculator</a>
                <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
                <a href="#contact" className="text-green-600 font-semibold">Join Now</a>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              🌱 Act Now for a Sustainable Future
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Take Action for<br />
              <span className="text-green-600">Our Planet</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join the global movement for sustainable development and climate action. Learn, track, and make a real difference today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#calculator" className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg text-lg">
                Calculate My Footprint
              </a>
              <a href="#about" className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold border-2 border-green-600 hover:bg-green-50 transition text-lg">
                Learn More
              </a>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: '1.1°C', label: 'Temp Rise' },
                { value: '421ppm', label: 'CO₂ Levels' },
                { value: '8B+', label: 'People Affected' },
                { value: '2030', label: 'Action Deadline' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
              <p className="text-xl text-gray-500 max-w-xl mx-auto">Tools, data, and community to drive real climate impact</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '📊', title: 'Live Data Dashboard', desc: 'Real-time global climate statistics, CO₂ levels, temperature trends, and emissions monitoring with interactive visualizations.' },
                { icon: '🧮', title: 'Carbon Calculator', desc: 'Track your personal carbon footprint based on energy use, transportation, and diet. Get personalized reduction tips.' },
                { icon: '👥', title: 'Community Platform', desc: 'Connect with climate advocates, join local initiatives, share progress, and compete on sustainability leaderboards.' },
                { icon: '📚', title: 'Educational Resources', desc: 'Access curated climate science articles, sustainability guides, video tutorials, and research papers.' },
                { icon: '🗺️', title: 'Interactive Maps', desc: 'Explore climate impact zones, find local green businesses, NGOs, and sustainability events near you.' },
                { icon: '🏆', title: 'Action Challenges', desc: 'Participate in monthly challenges, earn badges, and track your real-world impact on the environment.' },
              ].map((f) => (
                <div key={f.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition border border-gray-100">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-24 bg-green-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Climate Reality</h2>
              <p className="text-green-200 text-xl">Data that demands action</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { value: '421 ppm', label: 'Atmospheric CO₂', sub: 'Highest in 800,000 years', icon: '🌡️' },
                { value: '+1.1°C', label: 'Global Temp Rise', sub: 'Since pre-industrial levels', icon: '🔥' },
                { value: '3.7mm/yr', label: 'Sea Level Rise', sub: 'Average annual increase', icon: '🌊' },
                { value: '13%', label: 'Arctic Ice Loss', sub: 'Per decade since 1979', icon: '🧊' },
                { value: '1M+', label: 'Species at Risk', sub: 'Due to climate change', icon: '🦋' },
                { value: '$23T', label: 'Economic Risk', sub: 'By 2100 without action', icon: '💸' },
              ].map((s) => (
                <div key={s.label} className="bg-green-600 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <div className="text-4xl font-extrabold mb-1">{s.value}</div>
                  <div className="font-semibold text-lg mb-1">{s.label}</div>
                  <div className="text-green-200 text-sm">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Carbon Calculator */}
        <section id="calculator" className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Carbon Footprint Calculator</h2>
              <p className="text-xl text-gray-500">Estimate your daily CO₂ emissions and learn how to reduce them</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Daily Energy Usage (kWh)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 10"
                    value={carbonForm.energyUsage}
                    onChange={(e) => setCarbonForm({ ...carbonForm, energyUsage: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Transport Mode
                  </label>
                  <select
                    value={carbonForm.transportMode}
                    onChange={(e) => setCarbonForm({ ...carbonForm, transportMode: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="car">🚗 Car</option>
                    <option value="bus">🚌 Bus/Public Transit</option>
                    <option value="bike">🚲 Bike/Walk</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Diet Type
                  </label>
                  <select
                    value={carbonForm.diet}
                    onChange={(e) => setCarbonForm({ ...carbonForm, diet: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="meat">🥩 Meat-based</option>
                    <option value="vegetarian">🥗 Vegetarian</option>
                    <option value="vegan">🌱 Vegan</option>
                  </select>
                </div>
                <button
                  onClick={handleCarbonCalc}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition text-lg"
                >
                  Calculate My Footprint
                </button>
              </div>

              {carbonResult && (
                <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Your Carbon Footprint</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-extrabold text-green-600">{carbonResult.totalDailyCO2e}</div>
                      <div className="text-gray-600 text-sm mt-1">kg CO₂e / day</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-3xl font-extrabold text-orange-500">{carbonResult.yearlyEstimate}</div>
                      <div className="text-gray-600 text-sm mt-1">kg CO₂e / year</div>
                    </div>
                  </div>
                  <p className="text-green-700 text-sm mt-4">
                    💡 The average person emits ~4,000 kg CO₂e/year. Switch to renewable energy, public transit, and a plant-based diet to reduce your impact!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe every individual has the power to make a difference. Our platform combines cutting-edge data science with community-driven action to create measurable climate impact.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  From tracking your carbon footprint to connecting with local sustainability initiatives, we provide the tools you need to live more sustainably and inspire others.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  {[{ v: '50K+', l: 'Members' }, { v: '120+', l: 'Countries' }, { v: '2M+', l: 'Tonnes Saved' }].map((s) => (
                    <div key={s.l}>
                      <div className="text-3xl font-extrabold text-green-600">{s.v}</div>
                      <div className="text-gray-500 text-sm">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-10 text-center">
                <div className="text-8xl mb-6">🌍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Planet Needs You</h3>
                <p className="text-gray-600 mb-6">Join thousands of climate advocates making a real difference every day.</p>
                <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-semibold">
                  Join the Movement
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SDG Goals Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Aligned with UN SDGs</h2>
            <p className="text-gray-500 text-xl mb-12">Supporting the United Nations Sustainable Development Goals</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { n: 'SDG 7', t: 'Clean Energy', c: 'bg-yellow-400' },
                { n: 'SDG 11', t: 'Sustainable Cities', c: 'bg-orange-400' },
                { n: 'SDG 12', t: 'Responsible Consumption', c: 'bg-amber-600' },
                { n: 'SDG 13', t: 'Climate Action', c: 'bg-green-600' },
                { n: 'SDG 14', t: 'Life Below Water', c: 'bg-blue-500' },
                { n: 'SDG 15', t: 'Life on Land', c: 'bg-green-500' },
              ].map((sdg) => (
                <div key={sdg.n} className={`${sdg.c} text-white rounded-xl px-6 py-4 text-center min-w-32`}>
                  <div className="font-bold text-lg">{sdg.n}</div>
                  <div className="text-sm opacity-90">{sdg.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🌍</span>
                  <span className="text-xl font-bold text-green-400">Climate Action</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Empowering individuals and communities to take meaningful action on climate change through education, tools, and community.
                </p>
                <p className="text-gray-400">📧 hello@sustainableclimate.dev</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Platform</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-green-400 transition">Features</a></li>
                  <li><a href="#calculator" className="hover:text-green-400 transition">Calculator</a></li>
                  <li><a href="#stats" className="hover:text-green-400 transition">Climate Data</a></li>
                  <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="https://www.ipcc.ch" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">IPCC Reports</a></li>
                  <li><a href="https://sdgs.un.org" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">UN SDGs</a></li>
                  <li><a href="https://climate.nasa.gov" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">NASA Climate</a></li>
                  <li><a href="https://www.unep.org" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">UNEP</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>© 2026 Sustainable Climate Action. All rights reserved. | Built with 💚 for our planet</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
