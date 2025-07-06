import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarAd } from "@/components/AdSense";
import Footer from "@/components/Footer";

export default function Disclaimer() {
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
                    Disclaimer
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">
                    Important legal information and terms of use
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Please read this disclaimer carefully before using our VAT calculator
                  </p>
                </header>

                {/* Hero Summary Card - Purple Background */}
                <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl shadow-lg border-0 p-4 sm:p-6 lg:p-8 mobile-card-margin sm:mx-0">
                  <CardContent className="p-0">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
                      <p className="text-purple-100 text-lg">
                        By using this VAT calculator, you acknowledge and agree to the following terms and conditions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Disclaimer Content */}
              <div className="space-y-6">
                {/* Main Disclaimer */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Use at Your Own Risk</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <p className="text-amber-800 mb-4">
                        This VAT calculator is provided for informational purposes only. While we strive for accuracy, the results should not be considered professional financial or tax advice.
                      </p>
                      <div className="space-y-4 text-amber-700">
                        <p>
                          <strong>Accuracy:</strong> Calculations are based on the current South African VAT rate of 15%. Always verify results with official SARS guidelines or consult a qualified tax professional for critical financial decisions.
                        </p>
                        <p>
                          <strong>Regulatory Changes:</strong> VAT rates and regulations may change. This calculator is based on the current standard VAT rate of 15% and may not reflect future legislative changes.
                        </p>
                        <p>
                          <strong>Business Decisions:</strong> Any business or financial decisions made based on calculations from this tool are made entirely at your own risk.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Limitation of Liability */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-red-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Limitation of Liability</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="space-y-4 text-gray-700">
                        <p>
                          <strong>No Warranty:</strong> This calculator is provided "as is" without any warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose.
                        </p>
                        <p>
                          <strong>No Liability:</strong> In no event shall VAT Remover, its operators, or contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages arising from the use of this calculator.
                        </p>
                        <p>
                          <strong>Professional Advice:</strong> The calculator does not replace professional financial, accounting, or tax advice. For complex tax situations or business decisions, always consult with qualified professionals.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Data and Privacy */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Data & Privacy</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="space-y-4 text-gray-700">
                        <p>
                          <strong>Data Processing:</strong> All calculations are performed locally in your browser. No financial data is transmitted to or stored on our servers.
                        </p>
                        <p>
                          <strong>Privacy:</strong> We respect your privacy and do not collect, store, or share any calculation data you enter into the tool.
                        </p>
                        <p>
                          <strong>Cookies:</strong> This website may use cookies for basic functionality and analytics. No personal calculation data is stored in cookies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* SARS Information */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mobile-card-margin sm:mx-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">Official Resources</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        For official VAT information and requirements, always refer to the South African Revenue Service (SARS):
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900">SARS Website</p>
                            <p className="text-gray-600 text-sm">www.sars.gov.za - Official tax information and guidelines</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900">SARS Contact Centre</p>
                            <p className="text-gray-600 text-sm">0800 00 7277 - For VAT registration and compliance queries</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900">Professional Advice</p>
                            <p className="text-gray-600 text-sm">Consult qualified tax professionals for complex situations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Agreement */}
                <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mobile-card-margin sm:mx-0">
                  <CardContent className="p-4 sm:p-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                      <p className="text-blue-800 font-medium text-lg">
                        By using this calculator, you acknowledge that you have read, understood, and agree to all terms stated in this disclaimer.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
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