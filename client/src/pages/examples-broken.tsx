import { Link } from "wouter";
import { ArrowLeft, Calculator, Receipt, TrendingUp, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarAd } from "@/components/AdSense";

export default function Examples() {
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
              {/* Header Section */}
              <header className="text-center mb-8">
                <Link href="/">
                  <Button variant="ghost" className="mb-4 text-white hover:bg-white/20 border border-white/30">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Real-Life VAT Examples
                </h1>
                <p className="text-lg text-pink-100 mb-2">
                  See how businesses use VAT calculations daily
                </p>
                <p className="text-sm text-pink-200 mb-4">
                  From small business reconciliation to freelancer quotes
                </p>
              </header>

              {/* Hero Summary Card */}
              <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl shadow-lg border-0 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 mobile-card-margin sm:mx-0">
                <CardContent className="p-0">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Practical Applications</h2>
                    <p className="text-pink-100 text-lg">
                      Discover how professionals across South Africa use our VAT calculator for accurate financial management and compliance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Examples */}
              <div className="space-y-6">
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Receipt className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Small Business Invoice Reconciliation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        <strong>Scenario:</strong> A small business owner receives a supplier invoice for R2,300 including VAT and needs to determine the net amount for accounting purposes.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="vat-blue border rounded-lg p-3">
                          <p className="text-sm text-blue-700">Total Invoice</p>
                          <p className="font-bold text-blue-900">R2,300.00</p>
                        </div>
                        <div className="vat-amber border rounded-lg p-3">
                          <p className="text-sm text-amber-700">VAT Amount</p>
                          <p className="font-bold text-amber-900">R300.00</p>
                        </div>
                        <div className="vat-green border rounded-lg p-3">
                          <p className="text-sm text-green-700">Net Amount</p>
                          <p className="font-bold text-green-900">R2,000.00</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-4">
                        This helps separate the VAT for expense tracking and tax submissions to SARS.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Freelancer Quote Preparation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        <strong>Scenario:</strong> A freelance graphic designer wants to quote R1,725 excluding VAT but needs to show the client the total including VAT.
                      </p>
                      <div className="space-y-3">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-blue-900 font-semibold">Process:</p>
                          <p className="text-blue-700">R1,725 + 15% VAT = R1,725 × 1.15 = R1,983.75</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="vat-green border rounded-lg p-3">
                            <p className="text-sm text-green-700">Base Quote</p>
                            <p className="font-bold text-green-900">R1,725.00</p>
                          </div>
                          <div className="vat-amber border rounded-lg p-3">
                            <p className="text-sm text-amber-700">VAT (15%)</p>
                            <p className="font-bold text-amber-900">R258.75</p>
                          </div>
                          <div className="vat-blue border rounded-lg p-3">
                            <p className="text-sm text-blue-700">Total Quote</p>
                            <p className="font-bold text-blue-900">R1,983.75</p>
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
                        <Building2 className="w-5 h-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Corporate Expense Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        <strong>Scenario:</strong> An employee submits multiple expense receipts totaling R5,750 including VAT for reimbursement processing.
                      </p>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="vat-blue border rounded-lg p-3">
                            <p className="text-sm text-blue-700">Total Expenses</p>
                            <p className="font-bold text-blue-900">R5,750.00</p>
                          </div>
                          <div className="vat-amber border rounded-lg p-3">
                            <p className="text-sm text-amber-700">VAT Portion</p>
                            <p className="font-bold text-amber-900">R750.00</p>
                          </div>
                          <div className="vat-green border rounded-lg p-3">
                            <p className="text-sm text-green-700">Net Expense</p>
                            <p className="font-bold text-green-900">R5,000.00</p>
                          </div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <p className="text-yellow-800 font-semibold">Corporate Benefit:</p>
                          <p className="text-yellow-700 text-sm">The R750 VAT can be claimed back from SARS, reducing the actual expense to R5,000.</p>
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
                      <CardTitle className="text-xl text-gray-900">Retail Price Analysis</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        <strong>Scenario:</strong> A retailer needs to understand the cost structure of a R299 product to set competitive pricing.
                      </p>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="vat-blue border rounded-lg p-3">
                            <p className="text-sm text-blue-700">Retail Price</p>
                            <p className="font-bold text-blue-900">R299.00</p>
                          </div>
                          <div className="vat-amber border rounded-lg p-3">
                            <p className="text-sm text-amber-700">VAT Component</p>
                            <p className="font-bold text-amber-900">R39.00</p>
                          </div>
                          <div className="vat-green border rounded-lg p-3">
                            <p className="text-sm text-green-700">Net Selling Price</p>
                            <p className="font-bold text-green-900">R260.00</p>
                          </div>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-green-800 font-semibold">Business Insight:</p>
                          <p className="text-green-700 text-sm">Understanding that R260 is the actual revenue helps with margin calculations and profitability analysis.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Reference */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mt-8 mobile-card-margin sm:mx-0">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl text-gray-900">Quick Reference Formula</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                    <p className="text-blue-900 font-bold text-lg mb-2">
                      Amount Excluding VAT = Total Amount ÷ 1.15
                    </p>
                    <p className="text-blue-700 text-sm">
                      This formula works for all VAT-inclusive amounts in South Africa's 15% VAT system
                    </p>
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