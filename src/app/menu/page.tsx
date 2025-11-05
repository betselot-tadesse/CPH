'use client'
export const dynamic = 'force-dynamic';


import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { translations, menuItems } from '@/lib/translations'
import { Phone, ArrowLeft, Hotel, Utensils, Star } from 'lucide-react'

const typeIcons = {
  'vegetarian': '🌱',
  'non-vegetarian': '🍗',
  'fish': '🐟'
}

const typeColors = {
  'vegetarian': 'bg-green-100 text-green-800 border-green-200',
  'non-vegetarian': 'bg-red-100 text-red-800 border-red-200',
  'fish': 'bg-blue-100 text-blue-800 border-blue-200'
}

const countryFlags = {
  'tasteOfIndia': '🇮🇳',
  'arabianTaste': '🇸🇦',
  'italianTaste': '🇮🇹'
}

export default function MenuPage() {
  const searchParams = useSearchParams()
  const [lang, setLang] = useState('en')
  const [isLoading, setIsLoading] = useState(true)
  const t = translations[lang as keyof typeof translations]

  useEffect(() => {
    const langParam = searchParams.get('lang')
    if (langParam && translations[langParam as keyof typeof translations]) {
      setLang(langParam)
    }
    setIsLoading(false)
  }, [searchParams])

  const handleBackToLanding = () => {
    window.location.href = '/landing'
  }

  const MenuItemCard = ({ item, category }: { 
    item: any, 
    category: string 
  }) => (
    <Card className="hover:shadow-lg transition-all duration-300 bg-white border-amber-100 hover:border-amber-300 transform hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{typeIcons[item.type as keyof typeof typeIcons]}</span>
              <h4 className="font-semibold text-gray-900">{item.name[lang as keyof typeof item.name]}</h4>
            </div>
            <p className="text-sm text-gray-600 italic mb-2">
              {t.servedWith}: {item.servedWith[lang as keyof typeof item.servedWith]}
            </p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-amber-700">{item.price} {t.price}</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Badge className={`${typeColors[item.type as keyof typeof typeColors]} border text-xs`}>
            {item.type === 'vegetarian' ? 'Vegetarian' : 
             item.type === 'non-vegetarian' ? 'Non-Vegetarian' : 'Fish'}
          </Badge>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="w-3 h-3 mr-1" />
                {t.callToOrder}
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
              <DialogHeader>
                <DialogTitle className="text-amber-900">
                  {t.callToOrder} {item.name[lang as keyof typeof item.name]}
                </DialogTitle>
                <DialogDescription>
                  Order directly from our restaurant and enjoy in-room delivery — no delivery charge!
                </DialogDescription>
              </DialogHeader>
              <div className="text-center py-6 bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg">
                <div className="mb-4">
                  <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-amber-800 mb-2">Call us at:</p>
                  <p className="text-3xl font-bold text-amber-900">722</p>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>🏨 Crystal Plaza Hotel, {t.location}</p>
                  <p>🕐 {t.roomService}</p>
                  <p>🚚 Free in-room delivery</p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                {t.orderNow}
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent mx-auto mb-4"></div>
          <p>Loading menu...</p>
        </div>
      </div>
    )
  }

  const isRTL = lang === 'ar'

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/crystal-plaza-logo.svg" 
                alt="Crystal Plaza Hotel Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">{t.hotelName}</h1>
              <p className="text-yellow-400 text-sm">{t.digitalMenu}</p>
            </div>
          </div>
          
          <Button
            onClick={handleBackToLanding}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 border-white/30 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToLanguage}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Menu Categories */}
        <div className="space-y-8">
          {/* Starters */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-yellow-500" />
              {t.categories.starters}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.starters.map((item) => (
                <MenuItemCard key={item.id} item={item} category="starters" />
              ))}
            </div>
          </section>

          {/* Soup */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-yellow-500" />
              {t.categories.soup}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.soup.map((item) => (
                <MenuItemCard key={item.id} item={item} category="soup" />
              ))}
            </div>
          </section>

          {/* Salads */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-yellow-500" />
              {t.categories.salads}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.salads.map((item) => (
                <MenuItemCard key={item.id} item={item} category="salads" />
              ))}
            </div>
          </section>

          {/* Sandwiches */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-yellow-500" />
              {t.categories.sandwiches}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.sandwiches.map((item) => (
                <MenuItemCard key={item.id} item={item} category="sandwiches" />
              ))}
            </div>
          </section>

          {/* Main Course */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-yellow-500" />
              {t.categories.mainCourse}
            </h2>
            
            <Tabs defaultValue="tasteOfIndia" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-blue-100 border border-blue-200">
                <TabsTrigger 
                  value="tasteOfIndia"
                  className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  🇮🇳 {t.mainCourseCategories.tasteOfIndia}
                </TabsTrigger>
                <TabsTrigger 
                  value="arabianTaste"
                  className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  🇸🇦 {t.mainCourseCategories.arabianTaste}
                </TabsTrigger>
                <TabsTrigger 
                  value="italianTaste"
                  className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  🇮🇹 {t.mainCourseCategories.italianTaste}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tasteOfIndia" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuItems.mainCourse.tasteOfIndia.map((item) => (
                    <MenuItemCard key={item.id} item={item} category="mainCourse" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="arabianTaste" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuItems.mainCourse.arabianTaste.map((item) => (
                    <MenuItemCard key={item.id} item={item} category="mainCourse" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="italianTaste" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuItems.mainCourse.italianTaste.map((item) => (
                    <MenuItemCard key={item.id} item={item} category="mainCourse" />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Dessert */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-yellow-500" />
              {t.categories.dessert}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.dessert.map((item) => (
                <MenuItemCard key={item.id} item={item} category="dessert" />
              ))}
            </div>
          </section>

          {/* Hot Beverages */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-yellow-500" />
              {t.categories.hotBeverages}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.hotBeverages.map((item) => (
                <MenuItemCard key={item.id} item={item} category="hotBeverages" />
              ))}
            </div>
          </section>

          {/* Cold Beverages */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-yellow-500" />
              {t.categories.coldBeverages}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.coldBeverages.map((item) => (
                <MenuItemCard key={item.id} item={item} category="coldBeverages" />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Hotel className="w-5 h-5 text-yellow-400" />
            <span className="text-lg font-semibold">{t.hotelName}</span>
            <Hotel className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-blue-200 mb-2">{t.location}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-blue-300">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              {t.contact}
            </span>
            <span>•</span>
            <span>{t.roomService}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}