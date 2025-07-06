import { Link } from "wouter";
import { ArrowLeft, Calculator, Copy, Share2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AdSense, { SidebarAd } from "@/components/AdSense";

export default function HowToUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Calculator
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">How to Use</h1>
              <p className="text-gray-600">VAT Calculator Guide</p>
            </div>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Master VAT Calculations in 3 Simple Steps</h2>
                <p className="text-blue-100 text-lg">
                  Learn how to efficiently remove 15% South African VAT from any amount using our professional calculator.
                </p>
              </div>
            </div>

            {/* Step-by-Step Guide */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center">1</Badge>
                    <CardTitle className="text-xl">Enter Your VAT-Inclusive Amount</CardTitle>
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