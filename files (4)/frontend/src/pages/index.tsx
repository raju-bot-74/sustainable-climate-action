import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">🌍 Climate Action</h1>
          <div className="space-x-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-green-600">Dashboard</Link>
            <Link href="/resources" className="text-gray-600 hover:text-green-600">Resources</Link>
            <Link href="/community" className="text-gray-600 hover:text-green-600">Community</Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600">About</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Take Action for Our Planet
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join the global movement for sustainable development and climate action. Learn, track, and make a difference.
        </p>
        <div className="space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '📊 Data Dashboard', desc: 'Real-time climate statistics' },
              { title: '🧮 Carbon Calculator', desc: 'Track your footprint' },
              { title: '👥 Community', desc: 'Connect with others' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 border rounded-lg hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Sustainable Climate Action. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}