'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { translations } from '@/lib/translations'
import { Globe, Hotel, Utensils } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', direction: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', direction: 'rtl' },
  { code: 'zh', name: '中文', flag: '🇨🇳', direction: 'ltr' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', direction: 'ltr' }
]

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLanguageSelect = (languageCode: string) => {
    setIsLoading(true)
    // Simulate loading and redirect
    setTimeout(() => {
      window.location.href = `/menu?lang=${languageCode}`
    }, 500)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with real food photography */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/food-background.jpg')",
            filter: 'brightness(0.9) contrast(1.1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/70 to-blue-900/70"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Hotel Logo */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white/30 backdrop-blur-sm rounded-full border-2 border-yellow-400/50 mb-6 overflow-hidden shadow-2xl">
            <img 
              src="/crystal-plaza-logo.png" 
              alt="Crystal Plaza Hotel Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Hotel Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Crystal Plaza Al Majaz Hotel
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Utensils className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl text-yellow-400 font-light">
              Food Menu
            </h2>
            <Utensils className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        {/* Language Selection */}
        <Card className="w-full max-w-2xl bg-white/25 backdrop-blur-md border-white/40 shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40">
                <Globe className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                  {translations.en.selectLanguage} / {translations.ar.selectLanguage} / {translations.zh.selectLanguage} / {translations.ru.selectLanguage}
                </h3>
                <Globe className="w-6 h-6 text-yellow-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languages.map((language) => (
                <Button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  disabled={isLoading}
                  className="h-20 bg-white/30 hover:bg-white/40 border border-white/40 hover:border-yellow-400/60 text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-xl"
                  style={{ direction: language.direction as 'ltr' | 'rtl' }}
                >
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <span className="text-3xl">{language.flag}</span>
                    <span className="font-medium drop-shadow-sm">{language.name}</span>
                  </div>
                </Button>
              ))}
            </div>

            {isLoading && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 text-yellow-400">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-yellow-400 border-t-transparent"></div>
                  <span>Loading menu...</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-white/60 text-sm">
          <p>Al Majaz – Sharjah</p>
          <p className="mt-1">4★ Hotel Excellence</p>
        </div>
      </div>
    </div>
  )
}