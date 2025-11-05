'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Phone, Star, ChefHat, Utensils, Sparkles } from 'lucide-react'

interface MainCourseItem {
  name: string
  price: number
  servedWith: string
  type: 'vegetarian' | 'non-vegetarian' | 'fish'
  spicy?: boolean
}

interface CountrySection {
  country: string
  flag: string
  title: string
  description: string
  items: MainCourseItem[]
}

const mainCourseData: CountrySection[] = [
  {
    country: 'india',
    flag: '🇮🇳',
    title: 'Taste of India',
    description: 'Authentic Indian flavors with aromatic spices and traditional cooking methods',
    items: [
      { name: 'Chicken Biryani', price: 30, servedWith: 'raita and salad', type: 'non-vegetarian' },
      { name: 'Vegetable Biryani', price: 25, servedWith: 'raita', type: 'vegetarian' },
      { name: 'Paneer Tikka Masala (Rice)', price: 30, servedWith: 'basmati rice', type: 'vegetarian' },
      { name: 'Butter Chicken (Rice)', price: 30, servedWith: 'basmati rice', type: 'non-vegetarian' },
      { name: 'Chicken Tikka & Fries (Boneless)', price: 30, servedWith: 'French fries', type: 'non-vegetarian' },
      { name: 'Chapatti', price: 2, servedWith: 'butter', type: 'vegetarian' },
      { name: 'Paratha', price: 3, servedWith: 'curry or chutney', type: 'vegetarian' }
    ]
  },
  {
    country: 'arabia',
    flag: '🇸🇦',
    title: 'Arabian Taste',
    description: 'Traditional Arabic cuisine with rich flavors and aromatic spices',
    items: [
      { name: 'Grilled Chicken Rosemary Sauce (Rice)', price: 30, servedWith: 'rosemary sauce and rice', type: 'non-vegetarian' },
      { name: 'Chicken Wings Provencal & Rice', price: 30, servedWith: 'Provencal sauce and rice', type: 'non-vegetarian' },
      { name: 'Chicken Shish Taouk (Fries/Bread)', price: 35, servedWith: 'fries or Arabic bread', type: 'non-vegetarian' },
      { name: 'Mixed Grilled (Fries/Bread)', price: 45, servedWith: 'fries or Arabic bread and salad', type: 'non-vegetarian' },
      { name: 'Chicken Mandi', price: 30, servedWith: 'mandi rice and sauce', type: 'non-vegetarian' },
      { name: 'Grilled Hammour Filled (Fries)', price: 40, servedWith: 'French fries and tartar sauce', type: 'fish' }
    ]
  },
  {
    country: 'italy',
    flag: '🇮🇹',
    title: 'Italian Taste',
    description: 'Classic Italian dishes with authentic flavors and fresh ingredients',
    items: [
      { name: 'Spaghetti with Meat Balls', price: 25, servedWith: 'tomato sauce and parmesan', type: 'non-vegetarian' },
      { name: 'Pizza Margarita', price: 20, servedWith: 'mozzarella and tomato', type: 'vegetarian' },
      { name: 'Pizza Pepperoni', price: 25, servedWith: 'beef pepperoni and cheese', type: 'non-vegetarian' },
      { name: 'Chicken BBQ Pizza', price: 25, servedWith: 'BBQ sauce and cheese', type: 'non-vegetarian' },
      { name: 'Pasta Arrabbiata', price: 20, servedWith: 'spicy tomato sauce', type: 'vegetarian', spicy: true },
      { name: 'Pasta with Chicken Pesto Sauce', price: 25, servedWith: 'creamy pesto sauce', type: 'non-vegetarian' },
      { name: 'Alfredo Pasta', price: 22, servedWith: 'white creamy sauce and parmesan', type: 'vegetarian' }
    ]
  }
]

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

export default function MainCourseSection() {
  const [selectedCountry, setSelectedCountry] = useState('india')

  const MenuItemCard = ({ item, countryTitle }: { item: MainCourseItem; countryTitle: string }) => (
    <Card className="hover:shadow-lg transition-all duration-300 bg-white border-amber-100 hover:border-amber-300 transform hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{typeIcons[item.type]}</span>
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              {item.spicy && <span className="text-lg">🌶️</span>}
            </div>
            <p className="text-sm text-gray-600 italic mb-2">
              Served with: {item.servedWith}
            </p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-amber-700">{item.price} AED</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Badge className={`${typeColors[item.type]} border text-xs`}>
            {item.type === 'vegetarian' ? 'Vegetarian' : 
             item.type === 'non-vegetarian' ? 'Non-Vegetarian' : 'Fish'}
          </Badge>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="w-3 h-3 mr-1" />
                Order
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
              <DialogHeader>
                <DialogTitle className="text-amber-900">Order {item.name}</DialogTitle>
                <DialogDescription>
                  Order directly from our restaurant and enjoy in-room delivery — no delivery charge!
                </DialogDescription>
              </DialogHeader>
              <div className="text-center py-6 bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg">
                <div className="mb-4">
                  <Sparkles className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-amber-800 mb-2">Call us at:</p>
                  <p className="text-3xl font-bold text-amber-900">+971 6 123 4567</p>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>🏨 Crystal Plaza Hotel, Al Majaz – Sharjah</p>
                  <p>🕐 Room service available 24/7</p>
                  <p>🚚 Free in-room delivery</p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 py-12 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-4">
            <ChefHat className="w-6 h-6 text-amber-600" />
            <h1 className="text-3xl font-bold text-amber-900">Main Course</h1>
            <ChefHat className="w-6 h-6 text-amber-600" />
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience authentic flavors from around the world, carefully crafted by our expert chefs
          </p>
        </div>

        {/* Country Tabs */}
        <Tabs value={selectedCountry} onValueChange={setSelectedCountry} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 p-1 h-auto">
            {mainCourseData.map((section) => (
              <TabsTrigger
                key={section.country}
                value={section.country}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-amber-700 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 py-3 px-4 font-medium"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{section.flag}</span>
                  <span className="hidden sm:inline">{section.title}</span>
                  <span className="sm:hidden">{section.flag}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Country Content */}
          {mainCourseData.map((section) => (
            <TabsContent key={section.country} value={section.country} className="mt-8">
              <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-6 border-b border-amber-200">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl opacity-20 absolute right-8 top-4">
                      {section.flag}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{section.flag}</span>
                        <h2 className="text-2xl font-bold text-amber-900">{section.title}</h2>
                      </div>
                      <p className="text-gray-700">{section.description}</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map((item, index) => (
                      <div
                        key={`${section.country}-${index}`}
                        className="transform transition-all duration-500"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: 'fadeInUp 0.6s ease-out forwards'
                        }}
                      >
                        <MenuItemCard item={item} countryTitle={section.title} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto text-center mt-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Utensils className="w-5 h-5 text-amber-600" />
            <span className="text-lg font-semibold text-amber-900">Crystal Plaza Hotel Restaurant</span>
            <Utensils className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-gray-600 mb-2">Al Majaz – Sharjah</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +971 6 123 4567
            </span>
            <span>•</span>
            <span>24/7 Room Service</span>
            <span>•</span>
            <span>Free Delivery</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}