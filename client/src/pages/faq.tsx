import { Link } from "wouter";
import { ArrowLeft, HelpCircle, ChevronDown, Calculator, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import { LeftSidebarAd, RightSidebarAd, BelowContentAd } from "@/components/AdSense";

export default function FAQ() {
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen py-4 sm:py-8">
        <div className="max-w-4xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          
          {/* Left Sidebar Ad */}
          <div className="w-80 flex-shrink-0 hidden lg:block mr-8">
            <LeftSidebarAd />
          </div>
          
          {/* Main Content Area - Centered */}
          <main className="max-w-3xl mx-auto" role="main" itemScope itemType="https://schema.org/FAQPage">
            
            {/* Header Section - White Background */}
            <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg">
              <header className="text-center">
                <Link href="/" onClick={handleBackClick}>
                  <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  Common questions about VAT calculations and South African tax requirements
                </p>
                <p className="text-sm text-gray-500">
                  Comprehensive answers to help you understand 15% VAT removal and compliance
                </p>
              </header>
            </div>

            {/* Quick Navigation */}
            <section className="mb-8">
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h2 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Quick Navigation
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="text-sm">
                    <a href="#basic-calculations" className="text-orange-800 hover:text-orange-900 font-medium">• Basic VAT Calculations</a><br/>
                    <a href="#business-applications" className="text-orange-800 hover:text-orange-900 font-medium">• Business Applications</a><br/>
                    <a href="#compliance-legal" className="text-orange-800 hover:text-orange-900 font-medium">• Compliance & Legal</a>
                  </div>
                  <div className="text-sm">
                    <a href="#technical-usage" className="text-orange-800 hover:text-orange-900 font-medium">• Technical Usage</a><br/>
                    <a href="#troubleshooting" className="text-orange-800 hover:text-orange-900 font-medium">• Troubleshooting</a><br/>
                    <a href="#advanced-scenarios" className="text-orange-800 hover:text-orange-900 font-medium">• Advanced Scenarios</a>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Sections */}
            <article className="space-y-8">
              
              {/* Basic VAT Calculations */}
              <section id="basic-calculations">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-orange-600" />
                  Basic VAT Calculations
                </h2>
                
                <div className="space-y-4">
                  <Card className="border-gray-200" itemScope itemType="https://schema.org/Question">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between" itemProp="name">
                            What is a VAT remover and how does it work?
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent itemScope itemType="https://schema.org/Answer">
                          <div className="text-gray-700 space-y-3" itemProp="text">
                            <p>
                              A <strong>VAT remover</strong> is a tool that helps you subtract Value-Added Tax from a total price to determine the original net amount before tax was added. It calculates the base price of goods or services excluding the 15% South African VAT.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 mb-2">How it works:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>You enter the VAT-inclusive amount (total price)</li>
                                <li>The tool divides by 1.15 to remove 15% VAT</li>
                                <li>It shows you the net amount and VAT portion separately</li>
                                <li>Formula: Net Amount = Gross Amount ÷ 1.15</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  <Card className="border-gray-200" itemScope itemType="https://schema.org/Question">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between" itemProp="name">
                            Why is the VAT rate 15% in South Africa?
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent itemScope itemType="https://schema.org/Answer">
                          <div className="text-gray-700 space-y-3" itemProp="text">
                            <p>
                              South Africa's VAT rate was increased from 14% to <strong>15% on April 1, 2018</strong>, as announced by then-Finance Minister Malusi Gigaba. This increase was implemented to help address the country's fiscal challenges and increase government revenue.
                            </p>
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                              <h4 className="font-semibold text-blue-900 mb-2">VAT Rate History:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                                <li><strong>1991-2018:</strong> 14% VAT rate</li>
                                <li><strong>April 2018-Present:</strong> 15% VAT rate</li>
                                <li><strong>Reason:</strong> Revenue generation for fiscal consolidation</li>
                                <li><strong>Impact:</strong> Generated approximately R22.9 billion in additional revenue (2018/19)</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  <Card className="border-gray-200" itemScope itemType="https://schema.org/Question">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between" itemProp="name">
                            Is this calculator accurate for all South African VAT calculations?
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent itemScope itemType="https://schema.org/Answer">
                          <div className="text-gray-700 space-y-3" itemProp="text">
                            <p>
                              Yes, this calculator is <strong>100% accurate</strong> for standard South African VAT calculations at the current 15% rate. It uses the precise mathematical formula required by SARS and is suitable for all standard VAT-inclusive transactions.
                            </p>
                            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                              <h4 className="font-semibold text-green-900 mb-2">Accuracy Assurance:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-green-800">
                                <li>Uses SARS-compliant calculation methods</li>
                                <li>Accurate to 2 decimal places (cents)</li>
                                <li>Handles all positive numerical inputs</li>
                                <li>Suitable for business and personal use</li>
                              </ul>
                            </div>
                            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                              <h4 className="font-semibold text-yellow-900 mb-2">Special Cases:</h4>
                              <p className="text-yellow-800 text-sm">
                                Note that some items may be zero-rated or VAT-exempt (e.g., basic foodstuffs, exports). 
                                This calculator applies to standard VAT-inclusive transactions only.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                </div>
              </section>

              {/* Business Applications */}
              <section id="business-applications">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-orange-600" />
                  Business Applications
                </h2>
                
                <div className="space-y-4">
                  <Card className="border-gray-200" itemScope itemType="https://schema.org/Question">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between" itemProp="name">
                            Can I use this tool for business invoicing and accounting?
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent itemScope itemType="https://schema.org/Answer">
                          <div className="text-gray-700 space-y-3" itemProp="text">
                            <p>
                              Absolutely. This VAT removal tool is <strong>perfect for professional business use</strong> including invoicing, accounting, financial reporting, and tax compliance. Many businesses use it daily for various financial operations.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                <h4 className="font-semibold text-blue-900 mb-2">Business Uses:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                                  <li>Preparing VAT-exclusive quotes</li>
                                  <li>Invoice verification and reconciliation</li>
                                  <li>Financial statement preparation</li>
                                  <li>Budget planning and analysis</li>
                                </ul>
                              </div>
                              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                <h4 className="font-semibold text-green-900 mb-2">Professional Benefits:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-green-800">
                                  <li>SARS-compliant calculations</li>
                                  <li>Time-saving for repetitive tasks</li>
                                  <li>Error reduction in manual calculations</li>
                                  <li>Copy-to-clipboard functionality</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  <Card className="border-gray-200" itemScope itemType="https://schema.org/Question">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between" itemProp="name">
                            When should I quote prices excluding VAT vs including VAT?
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent itemScope itemType="https://schema.org/Answer">
                          <div className="text-gray-700 space-y-3" itemProp="text">
                            <p>
                              The choice between VAT-inclusive and VAT-exclusive pricing depends on your target market and industry standards. Here's when to use each approach:
                            </p>
                            <div className="space-y-4">
                              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                <h4 className="font-semibold text-blue-900 mb-2">Quote Excluding VAT When:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                                  <li>Selling to VAT-registered businesses (B2B)</li>
                                  <li>Clients can claim VAT back</li>
                                  <li>Professional services sector</li>
                                  <li>Government and corporate contracts</li>
                                  <li>Export transactions (zero-rated)</li>
                                </ul>
                              </div>
                              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                <h4 className="font-semibold text-green-900 mb-2">Quote Including VAT When:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-green-800">
                                  <li>Selling to consumers (B2C)</li>
                                  <li>Retail and e-commerce</li>
                                  <li>Final price transparency needed</li>
                                  <li>Small individual transactions</li>
                                  <li>Non-VAT registered clients</li>
                                </ul>
                              </div>
                            </div>
                            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                              <h4 className="font-semibold text-yellow-900 mb-2">💡 Best Practice:</h4>
                              <p className="text-yellow-800 text-sm">
                                Always clearly state whether your quote is VAT-inclusive or exclusive. Show both amounts when possible to avoid confusion and build trust with clients.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                </div>
              </section>

              {/* Compliance & Legal */}
              <section id="compliance-legal">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                  Compliance & Legal Questions
                </h2>
                
                <div className="space-y-4">
                  <Card className="border-gray-200" itemScope itemType="https://schema.org/Question">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between" itemProp="name">
                            What items are exempt from VAT in South Africa?
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent itemScope itemType="https://schema.org/Answer">
                          <div className="text-gray-700 space-y-3" itemProp="text">
                            <p>
                              Several essential items are either <strong>zero-rated or VAT-exempt</strong> in South Africa. Understanding these helps determine when VAT removal calculations apply.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                <h4 className="font-semibold text-green-900 mb-2">Zero-Rated Items (0% VAT):</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-green-800">
                                  <li>Basic foodstuffs (bread, milk, rice, etc.)</li>
                                  <li>Exports to other countries</li>
                                  <li>International transport services</li>
                                  <li>Certain agricultural products</li>
                                  <li>Fuel levy components</li>
                                </ul>
                              </div>
                              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                <h4 className="font-semibold text-blue-900 mb-2">VAT-Exempt Items:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                                  <li>Financial services (banking, insurance)</li>
                                  <li>Educational services</li>
                                  <li>Medical and dental services</li>
                                  <li>Residential rental accommodation</li>
                                  <li>Public transport services</li>
                                </ul>
                              </div>
                            </div>
                            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                              <h4 className="font-semibold text-red-900 mb-2">⚠️ Important Note:</h4>
                              <p className="text-red-800 text-sm">
                                This calculator should only be used for standard 15% VAT-inclusive items. 
                                Zero-rated and exempt items require different treatment for tax purposes.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  <Card className="border-gray-200" itemScope itemType="https://schema.org/Question">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between" itemProp="name">
                            Do I need to be VAT registered to use this calculator?
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent itemScope itemType="https://schema.org/Answer">
                          <div className="text-gray-700 space-y-3" itemProp="text">
                            <p>
                              <strong>No, you do not need to be VAT registered</strong> to use this calculator. It's useful for anyone who needs to understand VAT components in pricing, regardless of their registration status.
                            </p>
                            <div className="space-y-4">
                              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                <h4 className="font-semibold text-blue-900 mb-2">Non-VAT Registered Users:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                                  <li>Understand pricing from suppliers</li>
                                  <li>Compare costs effectively</li>
                                  <li>Verify receipt accuracy</li>
                                  <li>Budget for true product costs</li>
                                  <li>Prepare for potential VAT registration</li>
                                </ul>
                              </div>
                              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                <h4 className="font-semibold text-green-900 mb-2">VAT Registered Users:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-green-800">
                                  <li>Calculate input VAT claims</li>
                                  <li>Prepare accurate invoices</li>
                                  <li>Reconcile VAT accounts</li>
                                  <li>Verify supplier charges</li>
                                  <li>Complete VAT returns accurately</li>
                                </ul>
                              </div>
                            </div>
                            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                              <h4 className="font-semibold text-yellow-900 mb-2">VAT Registration Threshold:</h4>
                              <p className="text-yellow-800 text-sm">
                                Businesses with annual turnover exceeding R1 million must register for VAT. 
                                Voluntary registration is available for smaller businesses.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                </div>
              </section>

              {/* Technical Usage */}
              <section id="technical-usage">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-orange-600" />
                  Technical Usage
                </h2>
                
                <div className="space-y-4">
                  <Card className="border-gray-200" itemScope itemType="https://schema.org/Question">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between" itemProp="name">
                            How do I copy the calculated results for use in other applications?
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent itemScope itemType="https://schema.org/Answer">
                          <div className="text-gray-700 space-y-3" itemProp="text">
                            <p>
                              Each calculated result has a dedicated <strong>copy button</strong> that instantly copies the value to your clipboard. The copied numbers are properly formatted and ready to paste into any application.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 mb-2">Copy Process:</h4>
                              <ol className="list-decimal list-inside space-y-1 text-sm">
                                <li>Enter your VAT-inclusive amount</li>
                                <li>Click the copy button next to any result</li>
                                <li>The value is copied with 2 decimal places</li>
                                <li>Paste directly into spreadsheets, documents, or invoices</li>
                                <li>No manual formatting required</li>
                              </ol>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                              <h4 className="font-semibold text-blue-900 mb-2">Compatible Applications:</h4>
                              <div className="grid md:grid-cols-2 gap-2 text-sm text-blue-800">
                                <ul className="list-disc list-inside space-y-1">
                                  <li>Microsoft Excel</li>
                                  <li>Google Sheets</li>
                                  <li>Accounting software</li>
                                  <li>Word processors</li>
                                </ul>
                                <ul className="list-disc list-inside space-y-1">
                                  <li>Invoice templates</li>
                                  <li>Email applications</li>
                                  <li>Text editors</li>
                                  <li>Web forms</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>

                  <Card className="border-gray-200" itemScope itemType="https://schema.org/Question">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between" itemProp="name">
                            Does the calculator work on mobile devices and tablets?
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent itemScope itemType="https://schema.org/Answer">
                          <div className="text-gray-700 space-y-3" itemProp="text">
                            <p>
                              Yes, the calculator is <strong>fully optimized for mobile devices and tablets</strong>. It works seamlessly across all modern smartphones, tablets, and desktop computers with responsive design.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                <h4 className="font-semibold text-green-900 mb-2">Mobile Features:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-green-800">
                                  <li>Touch-friendly interface</li>
                                  <li>Optimized keyboard input</li>
                                  <li>Easy-to-tap copy buttons</li>
                                  <li>Readable text sizing</li>
                                  <li>Smooth scrolling experience</li>
                                </ul>
                              </div>
                              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                <h4 className="font-semibold text-blue-900 mb-2">Device Compatibility:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                                  <li>iOS (iPhone/iPad)</li>
                                  <li>Android smartphones/tablets</li>
                                  <li>Windows tablets</li>
                                  <li>Desktop computers</li>
                                  <li>All modern web browsers</li>
                                </ul>
                              </div>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                              <h4 className="font-semibold text-purple-900 mb-2">📱 Mobile Tip:</h4>
                              <p className="text-purple-800 text-sm">
                                Add the calculator to your home screen for quick access. It works offline once loaded, 
                                making it perfect for field work and remote locations.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                </div>
              </section>

              {/* Need More Help */}
              <section>
                <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-6 border border-orange-200">
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-orange-900 mb-3">Need More Help?</h2>
                    <p className="text-orange-800 mb-4">
                      Can't find the answer you're looking for? Explore our comprehensive guides or get in touch.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Link href="/how-to-use" onClick={handleBackClick}>
                        <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                          How to Use Guide
                        </Button>
                      </Link>
                      <Link href="/examples" onClick={handleBackClick}>
                        <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                          Real Examples
                        </Button>
                      </Link>
                      <Link href="/business-guide" onClick={handleBackClick}>
                        <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                          Business Guide
                        </Button>
                      </Link>
                      <Link href="/feedback" onClick={handleBackClick}>
                        <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* Sharing module */}
            <section className="mt-8 mb-8">
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