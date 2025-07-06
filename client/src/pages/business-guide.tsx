import { Link } from "wouter";
import { ArrowLeft, Building, FileText, Calculator, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarAd } from "@/components/AdSense";
import Footer from "@/components/Footer";

export default function BusinessGuide() {
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
              <div className="bg-white rounded-2xl p-6 mb-8">
                <header className="text-center">
                  <Link href="/" onClick={handleBackClick}>
                    <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Calculator
                    </Button>
                  </Link>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Business VAT Guide
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">
                    Professional VAT management for businesses
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Invoicing, compliance, reconciliation, and strategic planning
                  </p>
                </header>

                {/* Hero Summary Card - Purple Background */}
                <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl shadow-lg border-0 p-4 sm:p-6 lg:p-8 mobile-card-margin sm:mx-0">
                  <CardContent className="p-0">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-bold mb-4">Complete Business Solution</h2>
                      <p className="text-purple-100 text-lg">
                        Streamline your VAT processes with professional tools and strategies for South African businesses of all sizes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business Applications */}
              <div className="space-y-6">
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Invoice Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        Ensure accurate VAT calculations on all business invoices and maintain compliance with SARS requirements.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Outgoing Invoices</p>
                            <p className="text-gray-600 text-sm">Calculate correct VAT amounts when billing clients</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Incoming Invoices</p>
                            <p className="text-gray-600 text-sm">Verify supplier VAT calculations and extract net amounts</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Quote Preparation</p>
                            <p className="text-gray-600 text-sm">Present clear pricing with VAT-inclusive and exclusive amounts</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">SARS Compliance</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        Stay compliant with South African Revenue Service requirements and maintain accurate VAT records.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <p className="text-yellow-800 font-semibold mb-2">VAT Registration Threshold</p>
                          <p className="text-yellow-700 text-sm">Businesses with annual taxable supplies exceeding R1 million must register for VAT</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-blue-800 font-semibold">VAT Returns</p>
                            <p className="text-blue-700 text-sm">Submit monthly or bi-monthly returns to SARS</p>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <p className="text-green-800 font-semibold">Record Keeping</p>
                            <p className="text-green-700 text-sm">Maintain detailed VAT transaction records</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Financial Reconciliation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        Streamline month-end processes with accurate VAT separation and financial reporting.
                      </p>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <p className="font-semibold text-gray-900">Extract VAT</p>
                            <p className="text-gray-600 text-sm">From all transactions</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-green-600 font-bold">2</span>
                            </div>
                            <p className="font-semibold text-gray-900">Reconcile Books</p>
                            <p className="text-gray-600 text-sm">Match net amounts</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-purple-600 font-bold">3</span>
                            </div>
                            <p className="font-semibold text-gray-900">Generate Reports</p>
                            <p className="text-gray-600 text-sm">For management</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Strategic Planning</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        Make informed business decisions by understanding the true cost impact of VAT on your operations.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Pricing Strategy</p>
                            <p className="text-gray-600 text-sm">Set competitive prices while maintaining margins</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Cash Flow Management</p>
                            <p className="text-gray-600 text-sm">Plan for VAT payments and refunds</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Budget Planning</p>
                            <p className="text-gray-600 text-sm">Account for VAT in expense forecasting</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business Benefits */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mt-8 mobile-card-margin sm:mx-0">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl text-gray-900">Key Business Benefits</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Time Savings</p>
                          <p className="text-gray-600 text-sm">Instant calculations reduce manual work</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Accuracy</p>
                          <p className="text-gray-600 text-sm">Eliminate calculation errors</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Compliance</p>
                          <p className="text-gray-600 text-sm">Meet SARS requirements consistently</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Transparency</p>
                          <p className="text-gray-600 text-sm">Clear VAT breakdown for clients</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Professionalism</p>
                          <p className="text-gray-600 text-sm">Accurate quotes and invoices</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Scalability</p>
                          <p className="text-gray-600 text-sm">Grows with your business needs</p>
                        </div>
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