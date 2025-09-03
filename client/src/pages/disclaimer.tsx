import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen py-4 sm:py-8">
        <div className="max-w-4xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          
          {/* Main Content Area - Centered */}
          <main className="max-w-3xl mx-auto" role="main" itemScope itemType="https://schema.org/WebPage">
            
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
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" itemProp="name">
                  Disclaimer
                </h1>
                <p className="text-lg text-gray-600 mb-2" itemProp="description">
                  Important legal information and terms of use
                </p>
                <p className="text-sm text-gray-500">
                  Please read this disclaimer carefully before using our VAT calculator
                </p>
              </header>
            </div>

            {/* Main Content */}
            <article className="space-y-8">
              
              {/* Terms Section */}
              <section>
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-purple-900 flex items-center gap-2">
                      <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Terms & Conditions
                    </CardTitle>
                    <CardDescription className="text-purple-800">
                      By using this VAT calculator, you acknowledge and agree to the following terms and conditions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-purple-800">
                        This calculator is provided as-is for informational purposes. Your use indicates acceptance of these terms.
                      </p>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <ul className="list-disc list-inside space-y-2 text-sm text-purple-700">
                          <li>Use the calculator at your own discretion and risk</li>
                          <li>Results are estimates based on current 15% South African VAT rate</li>
                          <li>We recommend verifying calculations independently for important transactions</li>
                          <li>Always consult tax professionals for complex scenarios</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Use at Own Risk Section */}
              <section>
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6 text-yellow-500" />
                      Use at Your Own Risk
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <p className="text-yellow-800">
                        This VAT calculator is provided for informational purposes only. While we strive for accuracy, the results should not be considered professional advice.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Accuracy Disclaimer */}
              <section>
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                      <FileText className="w-6 h-6 text-blue-500" />
                      Accuracy & Reliability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        While we take every precaution to ensure the accuracy of our VAT calculations, we cannot guarantee that the results will be error-free or suitable for all purposes.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Results are based on the current South African VAT rate of 15%</li>
                        <li>Calculations are rounded to two decimal places</li>
                        <li>Always verify important calculations independently</li>
                        <li>Consult with tax professionals for complex scenarios</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Limitation of Liability */}
              <section>
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Limitation of Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        Under no circumstances shall we be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of this calculator.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">This includes but is not limited to:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          <li>Loss of profits or business opportunities</li>
                          <li>Incorrect tax calculations or filings</li>
                          <li>Penalties imposed by tax authorities</li>
                          <li>Any other financial losses</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Professional Advice */}
              <section>
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Professional Advice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        This calculator is not a substitute for professional tax advice. For complex tax situations, business decisions, or official compliance matters, please consult with qualified professionals.
                      </p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-blue-800 font-medium">
                          📞 For official VAT guidance, contact the South African Revenue Service (SARS) directly.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Changes to Terms */}
              <section>
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Changes to Terms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        We reserve the right to modify these terms and conditions at any time. Continued use of the calculator constitutes acceptance of any changes.
                      </p>
                      <p className="text-sm text-gray-500">
                        Last updated: January 2025
                      </p>
                    </div>
                  </CardContent>
                </Card>
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