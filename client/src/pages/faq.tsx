import { Link } from "wouter";
import { ArrowLeft, HelpCircle, ChevronDown, Calculator, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarAd } from "@/components/AdSense";
import Footer from "@/components/Footer";

export default function FAQ() {
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
                    Frequently Asked Questions
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">
                    Find answers to common VAT questions
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    12+ frequently asked questions about calculations and compliance
                  </p>
                </header>

                {/* Hero Summary Card - Purple Background */}
                <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl shadow-lg border-0 p-4 sm:p-6 lg:p-8 mobile-card-margin sm:mx-0">
                  <CardContent className="p-0">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-bold mb-4">Quick Answers</h2>
                      <p className="text-purple-100 text-lg">
                        Everything you need to know about VAT calculations, South African tax requirements, and using our calculator effectively.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Categories */}
              <div className="space-y-6">
                {/* Basic Calculator Questions */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Calculator Usage</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-4">
                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">How accurate is the VAT calculator?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            Our calculator is 100% accurate for standard 15% VAT calculations in South Africa. It uses the precise formula: Amount ÷ 1.15 to extract VAT-exclusive amounts. Results are calculated to 2 decimal places for financial precision.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">Can I use this for business purposes?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            Absolutely! Our calculator is designed for professional use including invoice preparation, expense reconciliation, financial reporting, and SARS compliance. Many businesses rely on it for daily VAT calculations.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">Does the calculator work on mobile devices?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            Yes! The calculator is fully responsive and optimized for mobile devices, tablets, and desktops. You can access it anywhere with an internet connection for on-the-go VAT calculations.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </CardContent>
                </Card>

                {/* VAT Knowledge Questions */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-green-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">VAT Knowledge</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-4">
                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">What is the current VAT rate in South Africa?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            The current standard VAT rate in South Africa is 15%. This rate has been in effect since April 1, 2018, when it was increased from the previous rate of 14%.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">When do I need to register for VAT?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            You must register for VAT if your annual taxable supplies exceed R1 million over any 12-month period. You can also voluntarily register if your annual taxable supplies exceed R50,000. Registration must be done within 21 business days of becoming liable.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">What items are VAT exempt in South Africa?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            Key VAT-exempt items include basic foodstuffs (brown bread, mealie meal, etc.), medical services, educational services, municipal services, and certain financial services. A comprehensive list is available from SARS.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">How often must I submit VAT returns?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            VAT returns are typically submitted monthly, with payment due by the 25th of the following month. Some smaller businesses may qualify for bi-monthly submissions. Returns must be submitted even if no VAT is payable.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </CardContent>
                </Card>

                {/* Technical & Support Questions */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Technical Support</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-4">
                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">Is my data safe when using the calculator?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            Yes, your privacy is protected. All calculations are performed locally in your browser - no financial data is transmitted or stored on our servers. Your calculations remain completely private.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">Why doesn't the copy function work on my device?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            The copy function requires a modern browser and HTTPS connection. If it's not working, try updating your browser or manually selecting and copying the values. Some older browsers may not support automatic clipboard access.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">Can I bookmark or save the calculator?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            Absolutely! You can bookmark this page for quick access. The calculator works offline once loaded, so you can use it even without an internet connection. Consider adding it to your home screen on mobile devices.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-900 text-left">What happens if VAT rates change in the future?</span>
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                          <p className="text-gray-700">
                            We monitor VAT rate changes closely and update the calculator immediately when official rate changes are announced by SARS. Users will see a notification if any updates affect their calculations.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Need More Help */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mt-8 mobile-card-margin sm:mx-0">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Still Need Help?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      For specific VAT compliance questions or complex business scenarios, we recommend consulting with:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Qualified tax professionals or chartered accountants
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        SARS directly through their helpline: 0800 00 7277
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                        Official SARS website: www.sars.gov.za
                      </li>
                    </ul>
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