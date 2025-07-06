import { Link } from "wouter";
import { ArrowLeft, Calculator, Copy, Share2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarAd } from "@/components/AdSense";
import Footer from "@/components/Footer";

export default function HowToUse() {
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen py-4 sm:py-8">
        <div className="max-w-7xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            
            {/* Left Sidebar AdSense Zone */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0" aria-label="Advertisement">
              <SidebarAd />
            </aside>

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
                    How to Use VAT Calculator
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">
                    Master VAT calculations in 3 simple steps
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Complete guide to removing 15% South African VAT
                  </p>
                </header>

                {/* Hero Summary Card - Blue Background */}
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mobile-card-margin sm:mx-0">
                  <CardContent className="p-0">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-bold mb-4 text-blue-900">Quick Start Guide</h2>
                      <p className="text-blue-700 text-lg">
                        Learn how to efficiently remove 15% South African VAT from any amount using our professional calculator.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="space-y-6">
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <CardTitle className="text-xl text-gray-900">Enter Your Amount</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        Input the VAT-inclusive amount in the calculator field. This is the total amount that includes 15% VAT.
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800 font-semibold mb-2">💡 Pro Tip:</p>
                        <p className="text-blue-700 text-sm">
                          You can enter amounts with or without commas. The calculator accepts formats like "1000", "1,000", or "1000.50".
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold">2</span>
                      </div>
                      <CardTitle className="text-xl text-gray-900">View Results Instantly</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        The calculator automatically shows both the VAT-exclusive amount and the VAT portion in real-time.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-green-800 font-semibold">VAT-Exclusive Amount</p>
                          <p className="text-green-700 text-sm">The net amount without VAT</p>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <p className="text-yellow-800 font-semibold">VAT Amount</p>
                          <p className="text-yellow-700 text-sm">The 15% VAT portion</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                      <CardTitle className="text-xl text-gray-900">Copy and Share</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        Use the copy buttons to quickly copy results to your clipboard, or share the calculator with others.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg">
                          <Copy className="w-4 h-4" />
                          <span className="text-sm font-medium">Copy Results</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg">
                          <Share2 className="w-4 h-4" />
                          <span className="text-sm font-medium">Share Calculator</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Tips */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mt-8 mobile-card-margin sm:mx-0">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl text-gray-900">Additional Tips</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Works Offline</p>
                        <p className="text-gray-600 text-sm">Calculator functions even without internet once loaded</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Mobile Optimized</p>
                        <p className="text-gray-600 text-sm">Fully responsive for smartphones and tablets</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Bookmark Ready</p>
                        <p className="text-gray-600 text-sm">Save to home screen for quick access</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Business Ready</p>
                        <p className="text-gray-600 text-sm">Perfect for professional invoicing and accounting</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </main>

            {/* Right Sidebar AdSense Zone */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0" aria-label="Advertisement">
              <SidebarAd />
            </aside>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}