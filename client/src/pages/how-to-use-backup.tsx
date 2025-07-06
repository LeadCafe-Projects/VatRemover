import { Link } from "wouter";
import { ArrowLeft, Calculator, Copy, Share2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AdSense, { SidebarAd } from "@/components/AdSense";

export default function HowToUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800">
      <div className="min-h-screen py-4 sm:py-8">
        <div className="max-w-7xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            
            {/* Left Sidebar AdSense Zone */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0" aria-label="Advertisement">
              <SidebarAd />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 max-w-2xl mx-auto lg:mx-0 min-w-0" role="main">
              {/* Header Section */}
              <header className="text-center mb-8">
                <Link href="/">
                  <Button variant="ghost" className="mb-4 text-white hover:bg-white/20 border border-white/30">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  How to Use VAT Calculator
                </h1>
                <p className="text-lg text-pink-100 mb-2">
                  Master VAT calculations in 3 simple steps
                </p>
                <p className="text-sm text-pink-200 mb-4">
                  Complete guide to removing 15% South African VAT
                </p>
              </header>

              {/* Hero Summary Card */}
              <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl shadow-lg border-0 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 mobile-card-margin sm:mx-0">
                <CardContent className="p-0">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Quick Start Guide</h2>
                    <p className="text-pink-100 text-lg">
                      Learn how to efficiently remove 15% South African VAT from any amount using our professional calculator.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Step-by-Step Guide */}
              <div className="space-y-6">
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</Badge>
                      <CardTitle className="text-xl text-gray-900">Enter Your VAT-Inclusive Amount</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calculator className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Input Field</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Simply type the total amount that includes VAT into the calculator input field. The amount can be any value - from small purchases to large business transactions.
                    </p>
                    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Example:</p>
                      <p className="font-mono text-lg">R 1,150.00</p>
                      <p className="text-sm text-gray-500 mt-1">VAT-inclusive amount</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center">2</Badge>
                    <CardTitle className="text-xl">Instant VAT Calculation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Automatic Processing</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The calculator automatically processes your input and displays two key results:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-gray-600">VAT-Exclusive Amount</p>
                        <p className="text-xl font-bold text-gray-900">R 1,000.00</p>
                        <p className="text-sm text-gray-500">Base amount without VAT</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                        <p className="text-sm font-medium text-gray-600">VAT Amount</p>
                        <p className="text-xl font-bold text-gray-900">R 150.00</p>
                        <p className="text-sm text-gray-500">15% tax portion</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center">3</Badge>
                    <CardTitle className="text-xl">Copy & Share Results</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Copy className="w-5 h-5 text-purple-600" />
                          <span className="font-medium">Copy to Clipboard</span>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Click the copy button to instantly copy results to your clipboard for use in invoices, quotes, or financial records.
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Share2 className="w-5 h-5 text-purple-600" />
                          <span className="font-medium">Share Results</span>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Use the share functionality to send calculations via WhatsApp, email, or other platforms for team collaboration.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tips Section */}
            <Card className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl text-amber-800">Pro Tips for VAT Calculations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Badge className="bg-amber-100 text-amber-800 text-xs px-2 py-1">TIP</Badge>
                    <p className="text-gray-700">
                      <strong>Real-time updates:</strong> The calculator updates instantly as you type, no need to press enter or calculate.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-amber-100 text-amber-800 text-xs px-2 py-1">TIP</Badge>
                    <p className="text-gray-700">
                      <strong>Decimal precision:</strong> Results are rounded to 2 decimal places for practical use in financial documents.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Badge className="bg-amber-100 text-amber-800 text-xs px-2 py-1">TIP</Badge>
                    <p className="text-gray-700">
                      <strong>Mobile friendly:</strong> The calculator works perfectly on phones and tablets for on-the-go calculations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AdSense */}
            <div className="my-8">
              <AdSense adSlot="1234567890" adFormat="auto" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <SidebarAd />
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/examples">
                    <Button variant="outline" className="w-full justify-start">
                      Real-Life Examples
                    </Button>
                  </Link>
                  <Link href="/business-guide">
                    <Button variant="outline" className="w-full justify-start">
                      Business Guide
                    </Button>
                  </Link>
                  <Link href="/faq">
                    <Button variant="outline" className="w-full justify-start">
                      FAQ
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}