'use client'

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    window.location.href = '/landing'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent mx-auto mb-4"></div>
        <p>Redirecting to Digital Menu...</p>
      </div>
    </div>
  )
}