import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { TopBannerAd, SidebarAd, MobileAd } from "@/components/AdSense";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
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
  ArrowRight,
  Building,
  HelpCircle,
  AlertTriangle,
  X
} from "lucide-react";

interface VATCalculation {
  inclusiveAmount: number;
  exclusiveAmount: number;
  vatAmount: number;
}

export default function VATCalculator() {
  const [amount, setAmount] = useState<string>("");
  const [calculations, setCalculations] = useState<VATCalculation>({
    inclusiveAmount: 0,
    exclusiveAmount: 0,
    vatAmount: 0,
  });
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const { toast } = useToast();

  const handleTeaserClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateVAT = (inclusiveAmount: number): VATCalculation => {
    const exclusiveAmount = inclusiveAmount / 1.15;
    const vatAmount = inclusiveAmount - exclusiveAmount;
    
    return {
      inclusiveAmount,
      exclusiveAmount,
      vatAmount,
    };
  };

  useEffect(() => {
    const numericAmount = parseFloat(amount) || 0;
    setCalculations(calculateVAT(numericAmount));
  }, [amount]);

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('en-ZA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopySuccess(true);
      toast({
        title: "Copied to clipboard",
        description: `${label}: R ${value}`,
      });
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the value manually",
        variant: "destructive",
      });
    }
  };

  const resetCalculator = () => {
    setAmount("");
    setCalculations({ inclusiveAmount: 0, exclusiveAmount: 0, vatAmount: 0 });
  };

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
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
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6 mobile-card-margin sm:mx-0">
                <CardContent className="p-0">
                  {/* Input Section */}
                  <div className="mb-4 sm:mb-5">
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
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2 sm:py-3 text-lg sm:text-xl font-semibold border-2 border-gray-200 rounded-xl input-focus transition-all duration-200"
                        step="0.01"
                        min="0"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                      <InfoIcon className="inline w-3 h-3 mr-1" />
                      Enter the amount that includes 15% South African VAT
                    </p>
                  </div>

                  {/* Results Section */}
                  <div className="space-y-2 sm:space-y-3" id="resultsSection">
                    {/* Original Amount */}
                    <div className="vat-blue border rounded-lg p-2 sm:p-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-1">
                            <Receipt className="text-blue-600 w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-blue-800">Amount Including VAT</span>
                          </div>
                          <div className="text-base sm:text-xl font-bold text-blue-900 break-all">
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
                    <div className="vat-amber border rounded-lg p-2 sm:p-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-1">
                            <Percent className="text-amber-600 w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-amber-800">VAT Amount (15%)</span>
                          </div>
                          <div className="text-base sm:text-xl font-bold text-amber-900 break-all">
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
                    <div className="vat-green border rounded-lg p-2 sm:p-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-1">
                            <MinusCircle className="text-green-600 w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-green-800">Amount Excluding VAT</span>
                          </div>
                          <div className="text-base sm:text-xl font-bold text-green-900 break-all">
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
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button
                      className="flex-1 bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      onClick={() => copyToClipboard(`Including VAT: R ${formatCurrency(calculations.inclusiveAmount)}\nVAT Amount: R ${formatCurrency(calculations.vatAmount)}\nExcluding VAT: R ${formatCurrency(calculations.exclusiveAmount)}`, "All results")}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy All Results
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      onClick={resetCalculator}
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Clear
                    </Button>
                  </div>

                  {/* Success Message */}
                  {copySuccess && (
                    <div className="mt-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center">
                      <CheckCircle className="inline w-4 h-4 mr-2" />
                      Copied to clipboard successfully!
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Share Module */}
              <div className="mt-8 mb-8">
                <ShareButtons />
              </div>

              {/* Content Teasers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mobile-card-margin sm:mx-0">
                {/* How to Use Teaser */}
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <InfoIcon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">How to Use Guide</h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm">
                      Master VAT calculations in 3 simple steps. Learn the formula, understand the results, and use advanced features.
                    </p>
                    <Link href="/how-to-use" onClick={handleTeaserClick}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Learn How to Use
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Examples Teaser */}
                <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Real-Life Examples</h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm">
                      See how businesses use VAT calculations daily. From small business reconciliation to freelancer quotes.
                    </p>
                    <Link href="/examples" onClick={handleTeaserClick}>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        View Examples
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Business Guide Teaser */}
                <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <Building className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Business Guide</h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm">
                      Professional VAT management for businesses. Invoicing, compliance, reconciliation, and strategic planning.
                    </p>
                    <Link href="/business-guide" onClick={handleTeaserClick}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        Business Guide
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* FAQ Teaser */}
                <Card className="bg-gradient-to-br from-orange-50 to-red-100 border-orange-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">FAQ</h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm">
                      Find answers to common VAT questions. Search through 12+ FAQ's about calculations and compliance.
                    </p>
                    <Link href="/faq" onClick={handleTeaserClick}>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        Browse FAQ
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Mobile AdSense Zone */}
              <div className="lg:hidden mb-6 sm:mb-8 mobile-card-margin sm:mx-0">
                <MobileAd />
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