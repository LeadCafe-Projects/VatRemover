import { Link } from "wouter";
import { ArrowLeft, Calculator, ShoppingCart, Building, Car, Home, TrendingUp, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { SidebarAd } from "@/components/AdSense";
import Footer from "@/components/Footer";

export default function Examples() {
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen py-4 sm:py-8">
        <div className="max-w-7xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            
            {/* Left Sidebar AdSense Zone */}
            {/* <aside className="hidden lg:block lg:w-64 flex-shrink-0" aria-label="Advertisement">
              <SidebarAd />
            </aside> */}

            {/* Main Content Area */}
            <main className="flex-1 max-w-2xl mx-auto lg:mx-0 min-w-0" role="main">
              {/* Header Section - White Background */}
              <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg">
                <header className="text-center">
                  <Link href="/" onClick={handleBackClick}>
                    <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Calculator
                    </Button>
                  </Link>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Real-Life Examples
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">
                    Practical VAT calculations you'll use daily
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    See how VAT removal works in common scenarios
                  </p>
                </header>

                {/* Hero Summary Card - Green Background */}
                <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mobile-card-margin sm:mx-0">
                  <CardContent className="p-0">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-bold mb-4 text-green-900">Practical Applications</h2>
                      <p className="text-green-700 text-lg">
                        Real-world examples showing how to remove 15% VAT from everyday purchases and business transactions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Example Categories */}
              <div className="space-y-6">
                {/* Retail & Shopping */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Retail & Shopping</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Electronics Purchase</p>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">R11,500</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">New laptop with VAT included</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R10,000</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R1,500</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Groceries</p>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">R575</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Weekly shopping with VAT</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R500</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R75</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Clothing & Accessories</p>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">R2,300</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Designer outfit with VAT</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R2,000</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R300</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Expenses */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Building className="w-5 h-5 text-green-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Business Expenses</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Office Supplies</p>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">R1,725</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Monthly stationery and equipment</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R1,500</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R225</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Professional Services</p>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">R5,750</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Legal consultation fees</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R5,000</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R750</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Equipment Rental</p>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">R2,875</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Monthly IT equipment lease</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R2,500</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R375</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Automotive */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Car className="w-5 h-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Automotive</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Vehicle Service</p>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-800">R1,150</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Full car service with VAT</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R1,000</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R150</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Fuel Purchase</p>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-800">R920</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Tank full of petrol</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R800</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R120</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Home & Property */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Home className="w-5 h-5 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Home & Property</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Home Renovations</p>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">R34,500</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Bathroom upgrade with VAT</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R30,000</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R4,500</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-gray-900">Appliances</p>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">R8,625</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">New washing machine</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-green-700 font-medium">VAT-Exclusive</p>
                            <p className="text-green-900 text-lg font-bold">R7,500</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-yellow-700 font-medium">VAT Amount</p>
                            <p className="text-yellow-900 text-lg font-bold">R1,125</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Reference */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mt-8 mobile-card-margin sm:mx-0">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl text-gray-900">Quick Reference Formula</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <p className="text-2xl font-bold text-gray-900 mb-2">VAT-Exclusive Amount = Total ÷ 1.15</p>
                      <p className="text-gray-600">VAT Amount = VAT-Exclusive Amount × 0.15</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 font-semibold">R1,150</p>
                        <p className="text-blue-600 text-sm">becomes</p>
                        <p className="text-blue-900 font-bold">R1,000 + R150</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-800 font-semibold">R5,750</p>
                        <p className="text-green-600 text-sm">becomes</p>
                        <p className="text-green-900 font-bold">R5,000 + R750</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-purple-800 font-semibold">R11,500</p>
                        <p className="text-purple-600 text-sm">becomes</p>
                        <p className="text-purple-900 font-bold">R10,000 + R1,500</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </main>

            {/* Right Sidebar AdSense Zone */}
            {/* <aside className="hidden lg:block lg:w-64 flex-shrink-0" aria-label="Advertisement">
              <SidebarAd />
            </aside> */}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}