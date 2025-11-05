'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = '/landing'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 to-amber-800">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Redirecting to Digital Menu...</p>
      </div>
    </div>
  )
}