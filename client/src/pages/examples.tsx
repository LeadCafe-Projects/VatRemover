import { Link } from "wouter";
import { ArrowLeft, Calculator, ShoppingCart, Building, Car, Home, TrendingUp, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import { LeftSidebarAd, RightSidebarAd, BelowContentAd } from "@/components/AdSense";

export default function Examples() {
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-4 sm:py-8">
        {/* Desktop Layout with Sidebars */}
        <div className="hidden lg:flex max-w-7xl mx-auto px-4 gap-8">
          {/* Left Sidebar Ad - Desktop Only */}
          <div className="w-80 flex-shrink-0">
            <LeftSidebarAd />
          </div>
          
          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl mx-auto" role="main" itemScope itemType="https://schema.org/Article">
            
            {/* Header Section - White Background */}
            <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg">
              <header className="text-center">
                <Link href="/" onClick={handleBackClick}>
                  <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" itemProp="headline">
                  Real-Life VAT Calculation Examples
                </h1>
                <p className="text-lg text-gray-600 mb-2" itemProp="description">
                  Practical scenarios showing VAT removal in action across different industries
                </p>
                <p className="text-sm text-gray-500">
                  Learn from real-world examples of 15% South African VAT calculations
                </p>
              </header>
            </div>

            {/* Main Content */}
            <article className="space-y-8" itemProp="articleBody">
              
              {/* Introduction */}
              <section>
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h2 className="text-xl font-bold text-green-900 mb-3">Understanding VAT Through Real Examples</h2>
                  <p className="text-green-800 leading-relaxed">
                    Value-Added Tax (VAT) removal is essential in many business and personal scenarios. These practical examples demonstrate how our calculator helps solve real-world problems across different sectors, from small business operations to large retail transactions.
                  </p>
                </div>
              </section>

              {/* Business Examples */}
              <section itemScope itemType="https://schema.org/ExampleOfWork">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Building className="w-6 h-6 text-green-600" />
                  Business & Professional Examples
                </h2>
                
                <div className="space-y-6">
                  {/* Example 1: Small Business */}
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">1</Badge>
                        Small Business Supplier Invoice
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Scenario:</h4>
                          <p className="text-gray-700 text-sm">
                            A small café receives a monthly coffee supplier invoice totaling <strong>R2,875</strong>. 
                            The owner needs to separate the VAT for bookkeeping and understand the net cost.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                            <div className="text-xs font-medium text-blue-800 mb-1">Total Invoice</div>
                            <div className="text-lg font-bold text-blue-900">R2,875.00</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                            <div className="text-xs font-medium text-green-800 mb-1">Net Amount</div>
                            <div className="text-lg font-bold text-green-900">R2,500.00</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                            <div className="text-xs font-medium text-purple-800 mb-1">VAT Amount</div>
                            <div className="text-lg font-bold text-purple-900">R375.00</div>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <h4 className="font-semibold text-yellow-900 mb-1">Business Impact:</h4>
                          <p className="text-yellow-800 text-sm">
                            The café can claim back the R375 VAT from SARS, effectively reducing their coffee cost to R2,500. 
                            This VAT refund helps improve cash flow and reduces operating expenses.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Example 2: Freelancer */}
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">2</Badge>
                        Freelancer Project Pricing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Scenario:</h4>
                          <p className="text-gray-700 text-sm">
                            A graphic designer wants to quote <strong>R1,500 excluding VAT</strong> for a logo design project. 
                            The client asks for the total price including VAT to budget properly.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                            <div className="text-xs font-medium text-green-800 mb-1">Net Quote</div>
                            <div className="text-lg font-bold text-green-900">R1,500.00</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                            <div className="text-xs font-medium text-purple-800 mb-1">VAT (15%)</div>
                            <div className="text-lg font-bold text-purple-900">R225.00</div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                            <div className="text-xs font-medium text-blue-800 mb-1">Total Price</div>
                            <div className="text-lg font-bold text-blue-900">R1,725.00</div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="font-semibold text-blue-900 mb-1">Professional Tip:</h4>
                          <p className="text-blue-800 text-sm">
                            Always clarify whether quotes are inclusive or exclusive of VAT. This transparency builds trust and prevents billing disputes later.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Example 3: Corporate Purchase */}
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">3</Badge>
                        Corporate Equipment Purchase
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Scenario:</h4>
                          <p className="text-gray-700 text-sm">
                            A company purchases office equipment for <strong>R23,000 including VAT</strong>. 
                            The finance team needs to separate the asset value from VAT for depreciation calculations.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                            <div className="text-xs font-medium text-blue-800 mb-1">Purchase Price</div>
                            <div className="text-lg font-bold text-blue-900">R23,000.00</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                            <div className="text-xs font-medium text-green-800 mb-1">Asset Value</div>
                            <div className="text-lg font-bold text-green-900">R20,000.00</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                            <div className="text-xs font-medium text-purple-800 mb-1">VAT Claimable</div>
                            <div className="text-lg font-bold text-purple-900">R3,000.00</div>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="font-semibold text-green-900 mb-1">Accounting Benefit:</h4>
                          <p className="text-green-800 text-sm">
                            The R20,000 asset value is used for depreciation, while the R3,000 VAT is claimed back, 
                            effectively reducing the net cost to the company.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Consumer Examples */}
              <section itemScope itemType="https://schema.org/ExampleOfWork">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                  Consumer & Retail Examples
                </h2>
                
                <div className="space-y-6">
                  {/* Example 4: Grocery Shopping */}
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">4</Badge>
                        Grocery Receipt Verification
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Scenario:</h4>
                          <p className="text-gray-700 text-sm">
                            A consumer receives a grocery receipt totaling <strong>R345</strong> and wants to understand 
                            how much VAT they paid and what the items cost before tax.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                            <div className="text-xs font-medium text-blue-800 mb-1">Receipt Total</div>
                            <div className="text-lg font-bold text-blue-900">R345.00</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                            <div className="text-xs font-medium text-green-800 mb-1">Pre-VAT Cost</div>
                            <div className="text-lg font-bold text-green-900">R300.00</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                            <div className="text-xs font-medium text-purple-800 mb-1">VAT Paid</div>
                            <div className="text-lg font-bold text-purple-900">R45.00</div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <h4 className="font-semibold text-purple-900 mb-1">Consumer Insight:</h4>
                          <p className="text-purple-800 text-sm">
                            Understanding VAT helps consumers compare true product costs and make informed purchasing decisions, 
                            especially when comparing prices between VAT-registered and non-registered suppliers.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Example 5: Electronics Purchase */}
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">5</Badge>
                        Electronics Store Purchase
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Scenario:</h4>
                          <p className="text-gray-700 text-sm">
                            A customer buys a laptop advertised at <strong>R11,500</strong>. They want to know if this price 
                            includes VAT and what the base price would be without tax.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                            <div className="text-xs font-medium text-blue-800 mb-1">Advertised Price</div>
                            <div className="text-lg font-bold text-blue-900">R11,500.00</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                            <div className="text-xs font-medium text-green-800 mb-1">Base Price</div>
                            <div className="text-lg font-bold text-green-900">R10,000.00</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                            <div className="text-xs font-medium text-purple-800 mb-1">VAT Component</div>
                            <div className="text-lg font-bold text-purple-900">R1,500.00</div>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <h4 className="font-semibold text-yellow-900 mb-1">Price Comparison Tip:</h4>
                          <p className="text-yellow-800 text-sm">
                            When comparing prices from different retailers, ensure you're comparing either all VAT-inclusive 
                            or all VAT-exclusive prices for accurate comparisons.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Property & Automotive Examples */}
              <section itemScope itemType="https://schema.org/ExampleOfWork">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Car className="w-6 h-6 text-green-600" />
                  Property & Automotive Examples
                </h2>
                
                <div className="space-y-6">
                  {/* Example 6: Car Purchase */}
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">6</Badge>
                        Vehicle Purchase Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Scenario:</h4>
                          <p className="text-gray-700 text-sm">
                            A business purchases a delivery vehicle for <strong>R345,000 including VAT</strong>. 
                            They need to understand the asset value for insurance and depreciation purposes.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                            <div className="text-xs font-medium text-blue-800 mb-1">Purchase Price</div>
                            <div className="text-lg font-bold text-blue-900">R345,000.00</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                            <div className="text-xs font-medium text-green-800 mb-1">Asset Value</div>
                            <div className="text-lg font-bold text-green-900">R300,000.00</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                            <div className="text-xs font-medium text-purple-800 mb-1">VAT Claimable</div>
                            <div className="text-lg font-bold text-purple-900">R45,000.00</div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="font-semibold text-blue-900 mb-1">Financial Advantage:</h4>
                          <p className="text-blue-800 text-sm">
                            The business can claim back R45,000 in VAT, reducing the effective vehicle cost to R300,000. 
                            This amount is used for asset registers and depreciation calculations.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Example 7: Home Renovation */}
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">7</Badge>
                        Home Renovation Project
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Scenario:</h4>
                          <p className="text-gray-700 text-sm">
                            A homeowner receives a renovation quote for <strong>R57,500</strong>. They want to understand 
                            the contractor's base rate and the VAT component for budgeting.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                            <div className="text-xs font-medium text-blue-800 mb-1">Quote Total</div>
                            <div className="text-lg font-bold text-blue-900">R57,500.00</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                            <div className="text-xs font-medium text-green-800 mb-1">Labour & Materials</div>
                            <div className="text-lg font-bold text-green-900">R50,000.00</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-200">
                            <div className="text-xs font-medium text-purple-800 mb-1">VAT Amount</div>
                            <div className="text-lg font-bold text-purple-900">R7,500.00</div>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="font-semibold text-green-900 mb-1">Budgeting Insight:</h4>
                          <p className="text-green-800 text-sm">
                            Understanding the VAT breakdown helps homeowners budget more accurately and compare quotes 
                            from different contractors on a like-for-like basis.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Key Takeaways */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Business Benefits
                      </h3>
                      <ul className="space-y-2 text-sm text-green-800">
                        <li>• Accurate pricing and quoting</li>
                        <li>• Proper VAT compliance and claims</li>
                        <li>• Clear financial reporting</li>
                        <li>• Better cash flow management</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                        <PieChart className="w-5 h-5" />
                        Consumer Advantages
                      </h3>
                      <ul className="space-y-2 text-sm text-green-800">
                        <li>• Transparent price understanding</li>
                        <li>• Accurate budget planning</li>
                        <li>• Informed purchasing decisions</li>
                        <li>• Receipt verification ability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* Sharing module */}
            <section className="mt-8 mb-4">
              <ShareButtons className="justify-center" />
            </section>
          </main>
        </div>
        
        {/* Mobile Layout - Clean and Compact */}
        <div className="lg:hidden max-w-4xl mx-auto px-4">
          <main role="main" itemScope itemType="https://schema.org/Article">
            {/* Header Section - White Background */}
            <div className="bg-white rounded-2xl p-4 mb-6 border border-gray-200 shadow-lg">
              <header className="text-center">
                <Link href="/" onClick={handleBackClick}>
                  <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4" itemProp="headline">
                  Real-Life VAT Calculation Examples
                </h1>
                <p className="text-base text-gray-600 mb-2" itemProp="description">
                  Practical scenarios showing VAT removal in action across different industries
                </p>
                <p className="text-sm text-gray-500">
                  Learn from real-world examples of 15% South African VAT calculations
                </p>
              </header>
            </div>
            {/* Main Content */}
            <article className="space-y-4">
              
              {/* Practical Examples Section */}
              <section>
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-green-900 flex items-center gap-2">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Business Invoice Example
                    </CardTitle>
                    <CardDescription className="text-green-800">
                      Professional invoicing with VAT breakdown
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Scenario: R2,300 Service Invoice</h4>
                        <div className="text-green-800 text-sm space-y-1">
                          <p><strong>Input:</strong> R2,300.00 (VAT inclusive)</p>
                          <p><strong>Amount Excluding VAT:</strong> R2,000.00</p>
                          <p><strong>VAT Amount:</strong> R300.00</p>
                          <p><strong>Use Case:</strong> Professional services billing</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Retail Example */}
              <section>
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <span className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                      Retail Purchase Example
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Scenario: R574.99 Electronics Purchase</h4>
                        <div className="text-blue-800 text-sm space-y-1">
                          <p><strong>Input:</strong> R574.99 (VAT inclusive)</p>
                          <p><strong>Amount Excluding VAT:</strong> R499.99</p>
                          <p><strong>VAT Amount:</strong> R75.00</p>
                          <p><strong>Use Case:</strong> Consumer verification</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Large Purchase Example */}
              <section>
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <span className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                      Large Purchase Example
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Scenario: R23,000 Equipment Purchase</h4>
                        <div className="text-purple-800 text-sm space-y-1">
                          <p><strong>Input:</strong> R23,000.00 (VAT inclusive)</p>
                          <p><strong>Amount Excluding VAT:</strong> R20,000.00</p>
                          <p><strong>VAT Amount:</strong> R3,000.00</p>
                          <p><strong>Use Case:</strong> Business equipment accounting</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </article>
            
            <section className="mt-6 mb-4">
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