import { Link } from "wouter";
import { ArrowLeft, Building, FileText, Calculator, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";

export default function BusinessGuide() {
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen py-4 sm:py-8">
        <div className="max-w-4xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          
          {/* Main Content Area - Centered */}
          <main className="max-w-3xl mx-auto" role="main" itemScope itemType="https://schema.org/Guide">
            
            {/* Header Section - White Background */}
            <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg">
              <header className="text-center">
                <Link href="/" onClick={handleBackClick}>
                  <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" itemProp="name">
                  Business VAT Management Guide
                </h1>
                <p className="text-lg text-gray-600 mb-2" itemProp="description">
                  Professional strategies for VAT compliance, invoicing, and financial management
                </p>
                <p className="text-sm text-gray-500">
                  Comprehensive guide for South African businesses managing 15% VAT requirements
                </p>
              </header>
            </div>

            {/* Main Content */}
            <article className="space-y-8" itemProp="text">
              
              {/* Executive Summary */}
              <section>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h2 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Executive Summary
                  </h2>
                  <p className="text-purple-800 leading-relaxed">
                    Effective VAT management is crucial for South African businesses to maintain compliance, optimize cash flow, and ensure accurate financial reporting. This guide provides practical strategies for implementing professional VAT processes across invoicing, accounting, and business operations.
                  </p>
                </div>
              </section>

              {/* VAT Registration & Compliance */}
              <section itemScope itemType="https://schema.org/HowTo">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  VAT Registration & Compliance Framework
                </h2>
                
                <div className="space-y-6">
                  {/* Registration Requirements */}
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800 font-bold">1</Badge>
                        Registration Requirements & Thresholds
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-3">Mandatory Registration Criteria:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span><strong>Annual turnover exceeds R1 million</strong> - Mandatory registration within 21 days</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span><strong>Imports goods for business</strong> - Registration required regardless of turnover</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span><strong>Voluntary registration</strong> - Available for businesses with turnover below R1 million</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <h4 className="font-semibold text-yellow-900 mb-2">Strategic Considerations:</h4>
                          <p className="text-yellow-800 text-sm">
                            Voluntary VAT registration can benefit cash flow through input VAT claims, but increases administrative burden. 
                            Evaluate based on your supplier structure and client base.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Return Filing */}
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800 font-bold">2</Badge>
                        Return Filing & Payment Obligations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2">Filing Frequency</h4>
                            <ul className="space-y-1 text-sm text-blue-800">
                              <li>• <strong>Monthly:</strong> Turnover &gt; R30 million</li>
                              <li>• <strong>Bi-monthly:</strong> Turnover R1-30 million</li>
                              <li>• <strong>Category C:</strong> Special arrangements</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-2">Payment Terms</h4>
                            <ul className="space-y-1 text-sm text-green-800">
                              <li>• <strong>Due:</strong> 25th of following month/period</li>
                              <li>• <strong>Electronic filing:</strong> Mandatory</li>
                              <li>• <strong>Late penalties:</strong> 10% per month</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                          <h4 className="font-semibold text-red-900 mb-2">⚠️ Compliance Alert:</h4>
                          <p className="text-red-800 text-sm">
                            Non-compliance penalties can reach 200% of the VAT due. Maintain accurate records and ensure timely submissions to avoid costly penalties.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Professional Invoicing */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-purple-600" />
                  Professional Invoicing & Documentation
                </h2>
                
                <div className="space-y-6">
                  {/* Invoice Requirements */}
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">VAT Invoice Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Professional VAT invoices must contain specific information to be SARS-compliant and enable VAT claims.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Mandatory Elements:</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li>✓ Supplier VAT number</li>
                              <li>✓ Invoice number and date</li>
                              <li>✓ Customer details</li>
                              <li>✓ Description of goods/services</li>
                              <li>✓ VAT-exclusive amounts</li>
                              <li>✓ VAT rate and amount</li>
                              <li>✓ Total VAT-inclusive amount</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                            <h4 className="font-semibold text-purple-900 mb-3">Best Practices:</h4>
                            <ul className="space-y-1 text-sm text-purple-800">
                              <li>• Use sequential numbering system</li>
                              <li>• Include payment terms clearly</li>
                              <li>• Show VAT breakdown prominently</li>
                              <li>• Maintain electronic backups</li>
                              <li>• Issue within 21 days of supply</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pricing Strategies */}
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">Strategic Pricing & Quotations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <h4 className="font-semibold text-yellow-900 mb-2">💡 Professional Tip:</h4>
                          <p className="text-yellow-800 text-sm">
                            Always clarify whether quotes are VAT-inclusive or exclusive. This transparency prevents disputes and builds client trust.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h5 className="font-semibold text-blue-900 mb-2">B2B Quotes</h5>
                            <p className="text-sm text-blue-800">Usually VAT-exclusive for business clients who can claim VAT back</p>
                          </div>
                          
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <h5 className="font-semibold text-green-900 mb-2">B2C Quotes</h5>
                            <p className="text-sm text-green-800">Typically VAT-inclusive for consumers who cannot reclaim VAT</p>
                          </div>
                          
                          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                            <h5 className="font-semibold text-purple-900 mb-2">Mixed Clients</h5>
                            <p className="text-sm text-purple-800">Show both amounts clearly to accommodate different client types</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Financial Management */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-purple-600" />
                  Financial Management & Cash Flow
                </h2>
                
                <div className="space-y-6">
                  {/* VAT Cash Flow */}
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">VAT Cash Flow Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Effective VAT management significantly impacts business cash flow. Understanding timing and mechanisms is crucial for financial planning.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-2">Input VAT Benefits:</h4>
                            <ul className="space-y-1 text-sm text-green-800">
                              <li>• Claim VAT on business purchases immediately</li>
                              <li>• Improve cash flow through VAT refunds</li>
                              <li>• Reduce effective cost of capital expenditure</li>
                              <li>• Strategic timing of major purchases</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2">Output VAT Considerations:</h4>
                            <ul className="space-y-1 text-sm text-blue-800">
                              <li>• Set aside VAT collected for SARS payments</li>
                              <li>• Consider VAT implications in pricing strategies</li>
                              <li>• Plan for bi-monthly or monthly payment cycles</li>
                              <li>• Maintain separate VAT liability accounts</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <h4 className="font-semibold text-yellow-900 mb-2">Cash Flow Strategy:</h4>
                          <p className="text-yellow-800 text-sm">
                            Synchronize supplier payments with VAT return periods to maximize input VAT claims and optimize working capital.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Record Keeping */}
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">Professional Record Keeping</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Essential Records:</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li>• All VAT invoices (issued and received)</li>
                              <li>• Credit and debit notes</li>
                              <li>• Import/export documentation</li>
                              <li>• Bank statements and payment records</li>
                              <li>• Asset registers with VAT details</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Retention Requirements:</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li>• <strong>Minimum:</strong> 5 years from tax year end</li>
                              <li>• <strong>Format:</strong> Original or certified copies</li>
                              <li>• <strong>Access:</strong> Available for SARS inspection</li>
                              <li>• <strong>Digital:</strong> Acceptable if authenticated</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Technology Integration:</h4>
                          <p className="text-gray-700 text-sm">
                            Implement accounting software with VAT features for automated calculations, return preparation, and audit trails. 
                            This reduces errors and simplifies compliance management.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Industry-Specific Guidance */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry-Specific VAT Considerations</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">Professional Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Time-based billing with VAT clarity</li>
                        <li>• Disbursement handling procedures</li>
                        <li>• Cross-border service implications</li>
                        <li>• Retainer and advance payment treatment</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">Retail & E-commerce</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Point-of-sale VAT calculations</li>
                        <li>• Returns and refund procedures</li>
                        <li>• Online platform VAT compliance</li>
                        <li>• Mixed VAT rate product handling</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">Manufacturing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Raw material VAT optimization</li>
                        <li>• Work-in-progress valuations</li>
                        <li>• Export zero-rating procedures</li>
                        <li>• Capital equipment planning</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">Construction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Progress billing VAT treatment</li>
                        <li>• Material vs labor VAT handling</li>
                        <li>• Subcontractor VAT compliance</li>
                        <li>• Residential vs commercial rates</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Implementation Checklist */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Checklist</h2>
                
                <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 border border-purple-200">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-purple-900 mb-3">✅ Immediate Actions (Week 1)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-sm text-purple-800">
                          <li>□ Verify current VAT registration status</li>
                          <li>□ Review invoice templates for compliance</li>
                          <li>□ Audit current record keeping systems</li>
                        </ul>
                        <ul className="space-y-1 text-sm text-purple-800">
                          <li>□ Assess accounting software VAT features</li>
                          <li>□ Train staff on VAT requirements</li>
                          <li>□ Establish VAT return calendar</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-purple-900 mb-3">🔄 Ongoing Processes (Monthly)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-sm text-purple-800">
                          <li>□ Reconcile VAT accounts</li>
                          <li>□ Review supplier VAT numbers</li>
                          <li>□ Prepare VAT returns timeously</li>
                        </ul>
                        <ul className="space-y-1 text-sm text-purple-800">
                          <li>□ Monitor cash flow implications</li>
                          <li>□ Update price lists for VAT changes</li>
                          <li>□ Archive VAT documentation properly</li>
                        </ul>
                      </div>
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