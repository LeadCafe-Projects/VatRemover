import { Link } from "wouter";
import { ArrowLeft, Calculator, Copy, Share2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";

export default function HowToUse() {
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen py-4 sm:py-8">
        <div className="max-w-4xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          
          {/* Main Content Area - Centered */}
          <main className="max-w-3xl mx-auto" role="main" itemScope itemType="https://schema.org/HowTo">
            
            {/* Header Section - White Background */}
            <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg">
              <header className="text-center">
                <Link href="/" onClick={handleBackClick}>
                  <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" itemProp="name">
                  How to Use the VAT Calculator
                </h1>
                <p className="text-lg text-gray-600 mb-2" itemProp="description">
                  Master VAT removal calculations with our step-by-step guide
                </p>
                <p className="text-sm text-gray-500">
                  Complete tutorial for removing 15% South African VAT from any amount
                </p>
              </header>
            </div>

            {/* Main Content */}
            <article className="space-y-8" itemProp="instructions" itemScope itemType="https://schema.org/HowToDirection">
              
              {/* Quick Start Section */}
              <section>
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-900 flex items-center gap-2">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Quick Start Guide
                    </CardTitle>
                    <CardDescription className="text-blue-800">
                      Get started with VAT calculations in under 30 seconds
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                        <Badge variant="secondary" className="bg-blue-200 text-blue-800 font-bold min-w-[24px] h-6 flex items-center justify-center">1</Badge>
                        <div>
                          <h3 className="font-semibold text-blue-900" itemProp="name">Enter VAT-Inclusive Amount</h3>
                          <p className="text-blue-800 text-sm" itemProp="text">
                            Type the total amount that includes 15% VAT in the input field. The calculator accepts any positive number.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                        <Badge variant="secondary" className="bg-blue-200 text-blue-800 font-bold min-w-[24px] h-6 flex items-center justify-center">2</Badge>
                        <div>
                          <h3 className="font-semibold text-blue-900" itemProp="name">View Real-Time Results</h3>
                          <p className="text-blue-800 text-sm" itemProp="text">
                            Watch as the calculator instantly displays three key values: original amount, VAT-exclusive amount, and VAT portion.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                        <Badge variant="secondary" className="bg-blue-200 text-blue-800 font-bold min-w-[24px] h-6 flex items-center justify-center">3</Badge>
                        <div>
                          <h3 className="font-semibold text-blue-900" itemProp="name">Copy Results</h3>
                          <p className="text-blue-800 text-sm" itemProp="text">
                            Click the copy button next to any result to instantly copy it to your clipboard for use in invoices, spreadsheets, or documents.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Detailed Instructions */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Step-by-Step Instructions</h2>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">1</span>
                        Input Your VAT-Inclusive Amount
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Begin by entering the total amount that includes 15% South African VAT. This is typically the final price you see on receipts, invoices, or price tags.
                        </p>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Input Guidelines:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Enter numbers only (decimals are allowed)</li>
                            <li>Do not include the "R" currency symbol</li>
                            <li>Use decimal point (.) for cents, not comma</li>
                            <li>Examples: 1150, 1150.00, 299.99</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tip:</h4>
                          <p className="text-blue-800 text-sm">
                            The calculator updates results in real-time as you type, so you can see calculations change instantly without pressing any buttons.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 2 */}
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <span className="bg-gradient-to-br from-green-500 to-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">2</span>
                        Understanding Your Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          The calculator displays three color-coded results to help you understand the VAT breakdown:
                        </p>
                        
                        <div className="space-y-3">
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-1">📊 Amount Including VAT (Blue)</h4>
                            <p className="text-blue-800 text-sm">
                              This shows the original amount you entered - the total price including 15% VAT.
                            </p>
                          </div>
                          
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-1">💰 Amount Excluding VAT (Green)</h4>
                            <p className="text-green-800 text-sm">
                              This is the net price before VAT was added - the base cost of the item or service.
                            </p>
                          </div>
                          
                          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                            <h4 className="font-semibold text-purple-900 mb-1">📈 VAT Amount (Purple)</h4>
                            <p className="text-purple-800 text-sm">
                              This shows exactly how much VAT (15%) was included in the total price.
                            </p>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <h4 className="font-semibold text-yellow-900 mb-2">📋 Example Calculation:</h4>
                          <div className="text-yellow-800 text-sm space-y-1">
                            <p><strong>Input:</strong> R1,150.00 (including VAT)</p>
                            <p><strong>Amount Excluding VAT:</strong> R1,000.00</p>
                            <p><strong>VAT Amount:</strong> R150.00</p>
                            <p><strong>Formula:</strong> R1,150 ÷ 1.15 = R1,000</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 3 */}
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <span className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">3</span>
                        Copy and Share Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Each result has a copy button that allows you to quickly copy the calculated values for use in other applications.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <Copy className="w-4 h-4" />
                              Copy Functionality
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                              <li>Click any copy button</li>
                              <li>Value copies to clipboard</li>
                              <li>Paste into documents or spreadsheets</li>
                              <li>Numbers are formatted with decimals</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <Share2 className="w-4 h-4" />
                              Share Calculator
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                              <li>Share via WhatsApp, email, social media</li>
                              <li>Send calculator link to colleagues</li>
                              <li>Help others with VAT calculations</li>
                              <li>Bookmark for future use</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Best Practices
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-green-800">
                            <li>Double-check calculations for important transactions</li>
                            <li>Use the "Clear" button to reset for new calculations</li>
                            <li>Copy values immediately after calculation</li>
                            <li>Verify VAT rate is 15% for South African transactions</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Additional Features */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Features & Tips</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">Real-Time Calculations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">
                        The calculator updates instantly as you type, providing immediate feedback without waiting.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>No "Calculate" button needed</li>
                        <li>See results change as you type</li>
                        <li>Error handling for invalid inputs</li>
                        <li>Formatted currency display</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">Mobile Optimized</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">
                        Designed for perfect functionality on smartphones, tablets, and desktop computers.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Touch-friendly interface</li>
                        <li>Responsive design for all screens</li>
                        <li>Easy-to-tap copy buttons</li>
                        <li>Optimized keyboard input</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Common Use Cases */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Use Cases</h2>
                
                <div className="space-y-4">
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">🏢 Business Invoicing</h3>
                      <p className="text-gray-700 text-sm">
                        Calculate net prices for invoices, quotes, and financial reports. Perfect for separating VAT components in business transactions.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">📊 Accounting & Bookkeeping</h3>
                      <p className="text-gray-700 text-sm">
                        Reconcile accounts, verify VAT amounts, and prepare financial statements with accurate VAT-exclusive figures.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">🛒 Personal Shopping</h3>
                      <p className="text-gray-700 text-sm">
                        Understand the true cost of purchases, compare prices before VAT, and verify receipt accuracy.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </article>

            {/* Sharing module */}
            <section className="mb-8">
              <ShareButtons className="justify-center" />
            </section>
          </main>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}