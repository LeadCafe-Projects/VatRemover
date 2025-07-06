import { Link } from "wouter";
import { ArrowLeft, Building2, Users, FileText, TrendingUp, Shield, Calculator, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdSense, { SidebarAd } from "@/components/AdSense";

export default function BusinessGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
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
              <h1 className="text-2xl font-bold text-gray-900">Business Guide</h1>
              <p className="text-gray-600">VAT Management for Businesses</p>
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 mb-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Complete Business VAT Guide</h2>
                <p className="text-purple-100 text-lg">
                  Master VAT management for your South African business with professional strategies and best practices.
                </p>
              </div>
            </div>

            {/* Tabs for Different Business Aspects */}
            <Tabs defaultValue="invoicing" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="invoicing">Invoicing</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="reconciliation">Reconciliation</TabsTrigger>
                <TabsTrigger value="strategy">Strategy</TabsTrigger>
              </TabsList>

              <TabsContent value="invoicing" className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Professional Invoicing with VAT
                    </CardTitle>
                    <CardDescription>
                      Create clear, compliant invoices that properly display VAT components
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Legal Requirement:</strong> All VAT-registered businesses must clearly separate VAT on invoices
                        </AlertDescription>
                      </Alert>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold mb-3">Invoice Structure Best Practices:</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-white rounded border">
                            <span className="text-gray-700">Service/Product Description</span>
                            <span className="font-medium">Clear itemization</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded border">
                            <span className="text-gray-700">Subtotal (VAT Exclusive)</span>
                            <span className="font-medium text-green-600">R 10,000.00</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded border">
                            <span className="text-gray-700">VAT (15%)</span>
                            <span className="font-medium text-blue-600">R 1,500.00</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-100 rounded border-2 border-gray-300">
                            <span className="text-gray-900 font-semibold">Total Amount Due</span>
                            <span className="font-bold text-lg">R 11,500.00</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h5 className="font-semibold text-green-800 mb-2">✓ Do Include</h5>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• VAT registration number</li>
                            <li>• Clear VAT breakdown</li>
                            <li>• Invoice date and number</li>
                            <li>• Payment terms</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <h5 className="font-semibold text-red-800 mb-2">✗ Avoid</h5>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• Bundled VAT-inclusive totals</li>
                            <li>• Unclear descriptions</li>
                            <li>• Missing VAT details</li>
                            <li>• Incorrect calculations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-purple-600" />
                      Quote Preparation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        When preparing quotes, always clarify whether prices are inclusive or exclusive of VAT:
                      </p>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h5 className="font-semibold mb-2">Professional Quote Format:</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Consulting Services</span>
                            <span>R 8,695.65</span>
                          </div>
                          <div className="flex justify-between">
                            <span>VAT (15%)</span>
                            <span>R 1,304.35</span>
                          </div>
                          <div className="border-t pt-2 font-semibold flex justify-between">
                            <span>Total Quote</span>
                            <span>R 10,000.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="compliance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      VAT Compliance Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-green-800 mb-3">Mandatory VAT Registration</h4>
                        <p className="text-green-700 mb-3">
                          Businesses with taxable supplies exceeding R1 million in 12 months must register for VAT.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Apply within 21 days of exceeding threshold</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Effective date: 1st of month following registration</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Display VAT number on all tax invoices</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">VAT Returns</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li>• Due by 25th of following month</li>
                              <li>• Electronic submission via eFiling</li>
                              <li>• Include output and input VAT</li>
                              <li>• Maintain supporting documentation</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Record Keeping</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li>• Keep records for 5 years</li>
                              <li>• Maintain VAT invoices</li>
                              <li>• Document all transactions</li>
                              <li>• Regular reconciliation</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reconciliation" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      VAT Reconciliation Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="font-semibold mb-3">Monthly Reconciliation Steps:</h4>
                        <div className="space-y-3">
                          <div className="flex gap-3">
                            <Badge className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</Badge>
                            <div>
                              <p className="font-medium">Calculate Output VAT</p>
                              <p className="text-sm text-gray-600">VAT charged on sales and services</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Badge className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</Badge>
                            <div>
                              <p className="font-medium">Calculate Input VAT</p>
                              <p className="text-sm text-gray-600">VAT paid on business expenses</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Badge className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</Badge>
                            <div>
                              <p className="font-medium">Determine Net VAT</p>
                              <p className="text-sm text-gray-600">Output VAT minus Input VAT</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold mb-3">Example Reconciliation:</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-white rounded border">
                            <span>Sales (VAT Inclusive)</span>
                            <span className="font-medium">R 115,000.00</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded border">
                            <span>Output VAT (15%)</span>
                            <span className="font-medium text-green-600">R 15,000.00</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded border">
                            <span>Expenses (VAT Inclusive)</span>
                            <span className="font-medium">R 34,500.00</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-red-50 rounded border">
                            <span>Input VAT (15%)</span>
                            <span className="font-medium text-red-600">R 4,500.00</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-100 rounded border-2 border-blue-300">
                            <span className="font-semibold">Net VAT Payable</span>
                            <span className="font-bold text-blue-600">R 10,500.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="strategy" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Strategic VAT Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h4 className="font-semibold text-purple-800 mb-3">Cash Flow Benefits</h4>
                          <ul className="space-y-2 text-sm text-purple-700">
                            <li>• Collect VAT from customers</li>
                            <li>• Claim input VAT on expenses</li>
                            <li>• Improve working capital</li>
                            <li>• Strategic purchase timing</li>
                          </ul>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6">
                          <h4 className="font-semibold text-green-800 mb-3">Pricing Strategy</h4>
                          <ul className="space-y-2 text-sm text-green-700">
                            <li>• Clear VAT communication</li>
                            <li>• Competitive positioning</li>
                            <li>• Transparent quotations</li>
                            <li>• Customer education</li>
                          </ul>
                        </div>
                      </div>

                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Pro Tip:</strong> Use VAT calculations to optimize cash flow by timing large purchases strategically within your VAT period.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Common Business Scenarios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h5 className="font-semibold mb-2">Export Sales</h5>
                        <p className="text-sm text-gray-600">
                          Zero-rated supplies - no VAT charged but input VAT can be claimed
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h5 className="font-semibold mb-2">Mixed Supplies</h5>
                        <p className="text-sm text-gray-600">
                          Combination of taxable and exempt supplies requiring apportionment
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h5 className="font-semibold mb-2">Capital Goods</h5>
                        <p className="text-sm text-gray-600">
                          Special rules for assets over R50,000 including adjustment provisions
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

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
                  <CardTitle className="text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/how-to-use">
                    <Button variant="outline" className="w-full justify-start">
                      How to Use Guide
                    </Button>
                  </Link>
                  <Link href="/examples">
                    <Button variant="outline" className="w-full justify-start">
                      Real Examples
                    </Button>
                  </Link>
                  <Link href="/faq">
                    <Button variant="outline" className="w-full justify-start">
                      FAQ
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Professional Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Need professional VAT consulting or bookkeeping assistance?
                  </p>
                  <Button className="w-full" variant="outline">
                    Contact Our Partners
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}