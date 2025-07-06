import { Link } from "wouter";
import { ArrowLeft, Calculator, Copy, Share2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarAd } from "@/components/AdSense";

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
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        In the main input field, type the total amount that includes 15% VAT. This is typically the price you see on receipts or invoices.
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-900 font-semibold">Example: R115.00</p>
                        <p className="text-blue-700 text-sm">This amount includes 15% South African VAT</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</Badge>
                      <CardTitle className="text-xl text-gray-900">View Instant Results</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        The calculator instantly shows three key results as you type:
                      </p>
                      <div className="space-y-3">
                        <div className="vat-blue border rounded-lg p-3">
                          <p className="font-semibold text-blue-900">Amount Including VAT: R115.00</p>
                          <p className="text-blue-700 text-sm">The original amount you entered</p>
                        </div>
                        <div className="vat-amber border rounded-lg p-3">
                          <p className="font-semibold text-amber-900">VAT Amount (15%): R15.00</p>
                          <p className="text-amber-700 text-sm">The VAT portion that was included</p>
                        </div>
                        <div className="vat-green border rounded-lg p-3">
                          <p className="font-semibold text-green-900">Amount Excluding VAT: R100.00</p>
                          <p className="text-green-700 text-sm">The net amount without VAT</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</Badge>
                      <CardTitle className="text-xl text-gray-900">Copy & Share Results</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        Use the copy buttons to quickly copy individual results to your clipboard, or share the calculator with others.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Amount
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share Calculator
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pro Tips Section */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mt-8 mobile-card-margin sm:mx-0">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl text-gray-900">Pro Tips for VAT Calculations</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Formula Understanding</p>
                        <p className="text-gray-600 text-sm">Amount excluding VAT = Total ÷ 1.15</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Business Applications</p>
                        <p className="text-gray-600 text-sm">Perfect for invoice reconciliation, expense tracking, and financial reporting</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Accuracy Guarantee</p>
                        <p className="text-gray-600 text-sm">Results are calculated to 2 decimal places for financial precision</p>
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
    </div>
  );
}