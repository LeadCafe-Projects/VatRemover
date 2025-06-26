import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { TopBannerAd, SidebarAd, MobileAd } from "@/components/AdSense";
import ShareButtons from "@/components/ShareButtons";
import { 
  Calculator, 
  Copy, 
  Receipt, 
  Percent, 
  MinusCircle, 
  RefreshCw, 
  InfoIcon,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  Bookmark
} from "lucide-react";

interface VATCalculation {
  inclusiveAmount: number;
  exclusiveAmount: number;
  vatAmount: number;
}

export default function VATCalculator() {
  const [inputValue, setInputValue] = useState("");
  const [calculations, setCalculations] = useState<VATCalculation>({
    inclusiveAmount: 0,
    exclusiveAmount: 0,
    vatAmount: 0
  });
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const { toast } = useToast();

  // Calculate VAT when input changes
  useEffect(() => {
    const calculateVAT = (inclusiveAmount: number): VATCalculation => {
      const amount = inclusiveAmount || 0;
      const exclusiveAmount = amount / 1.15;
      const vatAmount = amount - exclusiveAmount;
      
      return {
        inclusiveAmount: amount,
        exclusiveAmount: exclusiveAmount,
        vatAmount: vatAmount
      };
    };

    const numericValue = parseFloat(inputValue.replace(/[^\d.]/g, '')) || 0;
    setCalculations(calculateVAT(numericValue));
  }, [inputValue]);

  // Format currency in South African Rand
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-ZA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Copy to clipboard functionality
  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
        duration: 2000,
      });
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 3000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  // Copy all results
  const copyAllResults = async () => {
    const allResults = `Amount Including VAT: R${formatCurrency(calculations.inclusiveAmount)}
VAT Amount (15%): R${formatCurrency(calculations.vatAmount)}
Amount Excluding VAT: R${formatCurrency(calculations.exclusiveAmount)}`;
    
    await copyToClipboard(allResults, "All results");
  };

  // Clear calculator
  const clearCalculator = () => {
    setInputValue("");
    setCalculations({
      inclusiveAmount: 0,
      exclusiveAmount: 0,
      vatAmount: 0
    });
  };

  // Add to bookmarks functionality
  const addToBookmarks = () => {
    const pageTitle = "SA VAT Calculator - Remove 15% VAT Instantly";
    const pageUrl = window.location.href;

    // Check if the browser supports adding bookmarks
    if ((window as any).sidebar && (window as any).sidebar.addPanel) {
      // Firefox
      (window as any).sidebar.addPanel(pageTitle, pageUrl, '');
    } else if ((window as any).external && ('AddFavorite' in (window as any).external)) {
      // Internet Explorer
      (window as any).external.AddFavorite(pageUrl, pageTitle);
    } else {
      // Modern browsers - show instructions
      toast({
        title: "Add to Bookmarks",
        description: `Press Ctrl+D (Windows) or Cmd+D (Mac) to bookmark this page`,
        duration: 5000,
      });
    }
  };

  // Handle input change with validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    setInputValue(value);
  };

  // Handle input blur for formatting
  const handleInputBlur = () => {
    const numericValue = parseFloat(inputValue) || 0;
    if (numericValue > 0) {
      setInputValue(numericValue.toFixed(2));
    }
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      <div className="min-h-screen py-4 sm:py-8">
        <div className="max-w-7xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            
            {/* Left Sidebar AdSense Zone */}
            <div className="hidden lg:block lg:w-64 flex-shrink-0">
              <SidebarAd />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 max-w-2xl mx-auto lg:mx-0 min-w-0">
              {/* Header Section */}
              <header className="text-center mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  South African VAT Calculator - Remove 15% VAT Instantly
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  Free online tool to quickly remove 15% VAT from any amount
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Professional VAT removal calculator for South African businesses, accountants, and consumers
                </p>
                <ShareButtons variant="compact" className="justify-center" />
              </header>

              {/* Calculator Card */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 mobile-card-margin sm:mx-0">
                <CardContent className="p-0">
                  {/* Input Section */}
                  <div className="mb-6 sm:mb-8">
                    <Label htmlFor="vatInclusiveAmount" className="block text-sm font-semibold text-gray-700 mb-3">
                      <Calculator className="inline w-4 h-4 mr-2 text-primary" />
                      Amount Including VAT (ZAR)
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg font-medium">
                        R
                      </span>
                      <Input
                        id="vatInclusiveAmount"
                        type="text"
                        placeholder="0.00"
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyPress={handleKeyPress}
                        className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-3 sm:py-4 text-lg sm:text-xl font-semibold border-2 border-gray-200 rounded-xl input-focus transition-all duration-200"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      <InfoIcon className="inline w-3 h-3 mr-1" />
                      Enter the total amount that includes 15% VAT
                    </p>
                  </div>

                  {/* Results Section */}
                  <div className="space-y-3 sm:space-y-4" id="resultsSection">
                    {/* Original Amount */}
                    <div className="vat-blue border rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-1">
                            <Receipt className="text-blue-600 w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-blue-800">Amount Including VAT</span>
                          </div>
                          <div className="text-lg sm:text-2xl font-bold text-blue-900 break-all">
                            R {formatCurrency(calculations.inclusiveAmount)}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 group flex-shrink-0"
                          onClick={() => copyToClipboard(calculations.inclusiveAmount.toFixed(2), "Amount including VAT")}
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        </Button>
                      </div>
                    </div>

                    {/* VAT Amount */}
                    <div className="vat-amber border rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-1">
                            <Percent className="text-amber-600 w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-amber-800">VAT Amount (15%)</span>
                          </div>
                          <div className="text-lg sm:text-2xl font-bold text-amber-900 break-all">
                            R {formatCurrency(calculations.vatAmount)}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="ml-2 p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200 group flex-shrink-0"
                          onClick={() => copyToClipboard(calculations.vatAmount.toFixed(2), "VAT amount")}
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        </Button>
                      </div>
                    </div>

                    {/* Exclusive Amount */}
                    <div className="vat-green border rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-1">
                            <MinusCircle className="text-green-600 w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-green-800">Amount Excluding VAT</span>
                          </div>
                          <div className="text-lg sm:text-2xl font-bold text-green-900 break-all">
                            R {formatCurrency(calculations.exclusiveAmount)}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="ml-2 p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 group flex-shrink-0"
                          onClick={() => copyToClipboard(calculations.exclusiveAmount.toFixed(2), "Amount excluding VAT")}
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <Button
                      className="flex-1 bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                      onClick={copyAllResults}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy All Results
                    </Button>
                    <Button
                      variant="secondary"
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                      onClick={clearCalculator}
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Clear
                    </Button>
                  </div>

                  {/* Copy Success Message */}
                  {showCopySuccess && (
                    <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg text-green-800 text-sm">
                      <CheckCircle className="inline w-4 h-4 mr-2" />
                      Copied to clipboard successfully!
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Share Section - Main */}
              <div className="mobile-card-margin sm:mx-0 mb-6 sm:mb-8">
                <ShareButtons />
              </div>

              {/* Information Section */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 mobile-card-margin sm:mx-0">
                <CardContent className="p-0">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    <InfoIcon className="inline w-5 h-5 text-primary mr-2" />
                    How to Use This VAT Calculator
                  </h2>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-primary text-white text-sm font-bold rounded-full mt-0.5 flex-shrink-0">
                        1
                      </span>
                      <p className="text-sm sm:text-base">Enter the total amount that includes 15% VAT in the input field above</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-primary text-white text-sm font-bold rounded-full mt-0.5 flex-shrink-0">
                        2
                      </span>
                      <p className="text-sm sm:text-base">The calculator will instantly show you three values: the original amount, the VAT portion, and the amount excluding VAT</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 bg-primary text-white text-sm font-bold rounded-full mt-0.5 flex-shrink-0">
                        3
                      </span>
                      <p className="text-sm sm:text-base">Click the copy button next to any result to copy it to your clipboard</p>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Lightbulb className="inline w-4 h-4 mr-2" />
                      Quick Tip
                    </h3>
                    <p className="text-blue-800 text-xs sm:text-sm">
                      South African VAT is calculated at 15%. To remove VAT from an inclusive amount, divide by 1.15, then subtract from the original to get the VAT portion.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile AdSense Zone */}
              <div className="lg:hidden mb-6 sm:mb-8 mobile-card-margin sm:mx-0">
                <MobileAd />
              </div>
            </div>

            {/* Right Sidebar AdSense Zone */}
            <div className="hidden lg:block lg:w-64 flex-shrink-0">
              <SidebarAd />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom AdSense Zone */}
      <div className="w-full bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto mobile-padding sm:px-4 py-4">
          <TopBannerAd />
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto mobile-padding sm:px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            15% VAT Remover - Instantly Remove VAT from Any Total
          </h2>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is VAT and Why Use a VAT Remover?</h3>
            <p className="text-gray-700 mb-4">
              Value-Added Tax (VAT) is a consumption tax applied to the sale of goods and services in South Africa. Introduced in 1991, the current standard VAT rate stands at <strong>15%</strong>, as regulated by the South African Revenue Service (SARS). This tax applies to most everyday purchases and business transactions, though some items are either zero-rated or VAT-exempt.
            </p>
            <p className="text-gray-700 mb-4">
              A <strong>VAT remover</strong> helps you work backwards from a total amount that includes VAT to determine the original price before tax. This process, known as <strong>removing VAT</strong>, is essential for individuals and businesses who need clarity on the net price of a product or service.
            </p>
            <p className="text-gray-700 mb-6">
              Our <strong>VAT removal tool</strong> is designed to do just that: quickly and accurately calculate the amount before VAT - especially relevant when <strong>removing VAT in South Africa</strong> at the 15% rate.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Calculate the Amount Before VAT</h3>
            <p className="text-gray-700 mb-3">To remove 15% VAT from any total, use this simple formula:</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-900 font-semibold text-center">
                Amount excluding VAT = Total (including VAT) ÷ 1.15
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="font-semibold text-gray-900 mb-2">Example:</p>
              <p className="text-gray-700">
                If your total is <strong>R1,150</strong> and you want to know the price before tax:<br />
                R1,150 ÷ 1.15 = <strong>R1,000</strong> (net amount)<br />
                R1,150 – R1,000 = <strong>R150</strong> (VAT portion)
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              This reverse VAT calculation is what our <strong>VAT remover tool</strong> automates - instantly providing accurate results without the manual maths.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use a VAT Removal Tool?</h3>
            <p className="text-gray-700 mb-6">
              <strong>Removing VAT</strong> is essential in many everyday scenarios, whether for personal clarity or professional use. Here are just a few examples of when a <strong>VAT removal tool</strong> becomes invaluable:
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Business Invoicing</h3>
                <p className="text-green-800 text-sm">
                  Companies often need to display VAT-exclusive pricing on quotes or invoices - particularly for VAT-exempt clients or international transactions. A <strong>VAT remover</strong> provides a quick breakdown of the base price.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Freelancer Quoting</h3>
                <p className="text-blue-800 text-sm">
                  Service providers may want to quote clients a net price, then show VAT as a separate line item. This <strong>VAT removal tool</strong> ensures that figures stay accurate and professional.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Financial Reconciliation</h3>
                <p className="text-purple-800 text-sm">
                  Accountants and bookkeepers use <strong>VAT removers</strong> to separate the tax component from gross figures when preparing financial reports or calculating tax liabilities.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Retail and Consumer Checks</h3>
                <p className="text-amber-800 text-sm">
                  Consumers may use the tool to verify VAT charges on receipts or invoices - making sure 15% has been properly applied and not overcharged.
                </p>
              </div>
            </div>

            {/* AdSense Banner - Above Real-Life Examples */}
            <div className="w-full bg-gray-100 border border-gray-200 rounded-lg p-4 mb-6">
              <TopBannerAd />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Real-Life Examples of Removing VAT in South Africa</h3>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Example 1: Small Business Reconciliation</h4>
                <p className="text-gray-700 mb-2">
                  An entrepreneur receives a total supplier invoice of R2,875. To reconcile costs before VAT:
                </p>
                <p className="text-gray-700">
                  <strong>Calculation:</strong> R2,875 ÷ 1.15 = R2,500<br />
                  <strong>VAT removed:</strong> R375
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Example 2: Freelancer Pricing a Project</h4>
                <p className="text-gray-700">
                  A designer wants to quote R1,500 before VAT but needs to check the full price for the client:<br />
                  R1,500 × 1.15 = R1,725 (total inclusive price)
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Example 3: Shopper Reviewing a Bill</h4>
                <p className="text-gray-700">
                  A customer is charged R230 for an item and wants to confirm the VAT portion:<br />
                  R230 ÷ 1.15 = R200 (net price)<br />
                  R30 = VAT
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FAQs – VAT Remover & Reverse VAT Calculations</h3>

            <div className="space-y-4 mb-8">
              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">What is a VAT remover?</summary>
                <p className="text-gray-700 mt-2">
                  A <strong>VAT remover</strong> is a tool that helps you subtract VAT from a total price. It calculates the original net amount before tax was added.
                </p>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">How does a VAT removal tool work?</summary>
                <p className="text-gray-700 mt-2">
                  It uses a fixed formula: <strong>Net Price = Gross Price ÷ 1.15</strong>. You enter the VAT-inclusive amount, and the tool instantly returns the net amount and VAT portion.
                </p>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">Why would I need to remove VAT?</summary>
                <p className="text-gray-700 mt-2">
                  <strong>Removing VAT</strong> is important when preparing VAT-exempt quotes, checking receipts, handling bookkeeping, or understanding true costs.
                </p>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">Is this tool accurate for removing VAT in South Africa?</summary>
                <p className="text-gray-700 mt-2">
                  Yes. It is specifically designed for the South African 15% VAT rate and is accurate for all standard VAT-inclusive calculations.
                </p>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">Can I use this for personal or business purposes?</summary>
                <p className="text-gray-700 mt-2">
                  Absolutely. This <strong>VAT removal tool</strong> is suitable for anyone needing to reverse-calculate VAT - whether for business operations, accounting, or everyday spending.
                </p>
              </details>
            </div>

            {/* AdSense Banner - Between FAQ and Final Thoughts */}
            <div className="w-full bg-gray-100 border border-gray-200 rounded-lg p-4 mb-6">
              <TopBannerAd />
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
              <h2 className="text-xl font-bold text-primary mb-3">Final Thoughts</h2>
              <p className="text-gray-700 mb-3">
                Whether you're an accountant, business owner, freelancer, or consumer, this <strong>VAT remover</strong> provides a fast, reliable way to calculate the amount before VAT.
              </p>
              <p className="text-gray-700 mb-3">
                It's a simple but powerful solution for <strong>removing VAT in South Africa</strong> - no spreadsheets, no guesswork, just instant clarity.
              </p>
              <p className="text-primary font-semibold mb-4">
                Try the tool now, and if you find it useful, bookmark it or share it with someone who needs it.
              </p>
              
              {/* Inline Share Buttons */}
              <ShareButtons variant="compact" className="justify-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Share Section */}
          <div className="mb-6">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Found this useful?</h3>
              <p className="text-gray-300 text-sm mb-3">Share with colleagues and friends who need VAT calculations</p>
              <ShareButtons variant="compact" className="justify-center text-white" />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-3">
              © {new Date().getFullYear()} SA VAT Calculator - Simple, accurate VAT calculations for South African businesses.
            </p>
            <div className="text-sm">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-400 hover:text-white underline transition-colors duration-200">
                    Disclaimer
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center text-amber-600">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Important Disclaimer
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h3 className="font-semibold text-amber-800 mb-2">Use at Your Own Risk</h3>
                      <p className="text-amber-700">
                        The calculations and information provided by this VAT calculator are for guidance purposes only and should not be considered as professional financial, tax, or legal advice.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <p>
                        <strong>No Liability:</strong> We expressly disclaim all responsibility and liability for any errors, omissions, or inaccuracies in the calculations provided by this tool. Users assume full responsibility for verifying all calculations and their accuracy.
                      </p>
                      
                      <p>
                        <strong>Professional Consultation:</strong> Users are strongly advised to consult with qualified tax professionals, chartered accountants, or legal advisors for specific VAT-related matters, complex calculations, or any questions regarding South African tax legislation.
                      </p>
                      
                      <p>
                        <strong>Regulatory Changes:</strong> VAT rates and regulations may change. This calculator is based on the current standard VAT rate of 15% and may not reflect future legislative changes or special circumstances that may apply to specific transactions or businesses.
                      </p>
                      
                      <p>
                        <strong>Business Decisions:</strong> Any business or financial decisions made based on calculations from this tool are made entirely at the user's own risk. We accept no responsibility for any consequences arising from the use of this calculator.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                      <p className="text-blue-800 text-center font-medium">
                        By using this calculator, you acknowledge and agree to these terms and conditions.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
