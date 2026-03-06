import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [climateData, setClimateData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/climate-data`)
        setClimateData(response.data)
      } catch (error) {
        console.error('Error fetching climate data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Climate Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Global Temperature Increase</h3>
            <p className="text-3xl font-bold text-red-600">
              {climateData?.data?.globalTemperatureIncrease}°C
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">CO2 Levels (ppm)</h3>
            <p className="text-3xl font-bold text-orange-600">
              {climateData?.data?.co2Levels}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Year</h3>
            <p className="text-3xl font-bold text-blue-600">
              {climateData?.data?.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}