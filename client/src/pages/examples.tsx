import { Link } from "wouter";
import { ArrowLeft, Building, User, Calculator, TrendingUp, DollarSign, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AdSense, { SidebarAd } from "@/components/AdSense";

export default function Examples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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
              <h1 className="text-2xl font-bold text-gray-900">Real-Life Examples</h1>
              <p className="text-gray-600">VAT Removal in Practice</p>
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
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 mb-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Real-World VAT Removal Examples</h2>
                <p className="text-green-100 text-lg">
                  Discover how businesses and individuals use VAT calculations in everyday scenarios across South Africa.
                </p>
              </div>
            </div>

            {/* Business Examples */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Building className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-xl">Small Business Reconciliation</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">Business</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Scenario:</h4>
                    <p className="text-gray-700 mb-4">
                      Sarah runs a small consulting firm and receives a supplier invoice for office equipment totaling <strong>R2,875</strong>. 
                      She needs to separate the VAT component for her accounting records.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4 border">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-600">Original Amount</p>
                          <p className="text-2xl font-bold text-gray-900">R2,875.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">VAT-Exclusive</p>
                          <p className="text-2xl font-bold text-green-600">R2,500.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">VAT Amount</p>
                          <p className="text-2xl font-bold text-blue-600">R375.00</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-green-100 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Result:</strong> Sarah can now properly record R2,500 as expense and R375 as input VAT for her VAT return.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <User className="w-6 h-6 text-purple-600" />
                    <CardTitle className="text-xl">Freelancer Project Quoting</CardTitle>
                    <Badge className="bg-purple-100 text-purple-800">Freelancer</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Scenario:</h4>
                    <p className="text-gray-700 mb-4">
                      John is a freelance web developer quoting <strong>R23,000</strong> for a client project. 
                      The client asks for the breakdown to understand the VAT component.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4 border">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-600">Total Quote</p>
                          <p className="text-2xl font-bold text-gray-900">R23,000.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Service Fee</p>
                          <p className="text-2xl font-bold text-green-600">R20,000.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">VAT (15%)</p>
                          <p className="text-2xl font-bold text-purple-600">R3,000.00</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>Result:</strong> Clear breakdown helps client understand pricing and enables accurate budget planning.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-amber-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-amber-600" />
                    <CardTitle className="text-xl">Retail Business Analysis</CardTitle>
                    <Badge className="bg-amber-100 text-amber-800">Retail</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-amber-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Scenario:</h4>
                    <p className="text-gray-700 mb-4">
                      A retail store needs to analyze their daily sales of <strong>R5,750</strong> to determine 
                      actual revenue vs. VAT collected for government remittance.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4 border">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-600">Daily Sales</p>
                          <p className="text-2xl font-bold text-gray-900">R5,750.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Revenue</p>
                          <p className="text-2xl font-bold text-green-600">R5,000.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">VAT Collected</p>
                          <p className="text-2xl font-bold text-amber-600">R750.00</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                      <p className="text-sm text-amber-800">
                        <strong>Result:</strong> Store can accurately track R750 VAT liability and R5,000 actual sales revenue.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-red-600" />
                    <CardTitle className="text-xl">Contract Negotiation</CardTitle>
                    <Badge className="bg-red-100 text-red-800">Corporate</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Scenario:</h4>
                    <p className="text-gray-700 mb-4">
                      A company receives a service contract proposal for <strong>R115,000</strong> and needs to 
                      understand the net service cost for budget approval.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4 border">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-600">Contract Value</p>
                          <p className="text-2xl font-bold text-gray-900">R115,000.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Net Service Cost</p>
                          <p className="text-2xl font-bold text-green-600">R100,000.00</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">VAT Component</p>
                          <p className="text-2xl font-bold text-red-600">R15,000.00</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-red-100 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>Result:</strong> Clear understanding enables informed decision-making and accurate budget allocation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Industry Applications */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Industry Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Financial Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Client invoice processing</li>
                      <li>• Fee structure analysis</li>
                      <li>• Tax compliance reporting</li>
                      <li>• Financial statement preparation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building className="w-5 h-5 text-blue-600" />
                      Construction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Material cost breakdown</li>
                      <li>• Subcontractor billing</li>
                      <li>• Project budget analysis</li>
                      <li>• Client quotation preparation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-purple-600" />
                      Professional Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Consultation fee breakdown</li>
                      <li>• Service contract analysis</li>
                      <li>• Expense reconciliation</li>
                      <li>• Client billing transparency</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                      E-commerce
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Product pricing strategy</li>
                      <li>• Revenue analysis</li>
                      <li>• VAT compliance tracking</li>
                      <li>• Profit margin calculations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

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
                  <CardTitle className="text-lg">Related Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/how-to-use">
                    <Button variant="outline" className="w-full justify-start">
                      How to Use Guide
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