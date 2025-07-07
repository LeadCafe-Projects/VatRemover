import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
// import { TopBannerAd, SidebarAd, MobileAd } from "@/components/AdSense";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import { 
  Calculator, 
  Copy, 
  CheckCircle2, 
  RefreshCw,
  InfoIcon,
  ExternalLink,
  Book,
  FileText,
  HelpCircle
} from "lucide-react";

interface VATCalculation {
  inclusiveAmount: number;
  exclusiveAmount: number;
  vatAmount: number;
}

export default function VATCalculator() {
  const [amount, setAmount] = useState("");
  const [calculations, setCalculations] = useState<VATCalculation>({
    inclusiveAmount: 0,
    exclusiveAmount: 0,
    vatAmount: 0,
  });
  const [copySuccess, setCopySuccess] = useState(false);
  const { toast } = useToast();

  const calculateVAT = useCallback((inclusiveAmount: number): VATCalculation => {
    // Input validation and sanitization
    if (!inclusiveAmount || inclusiveAmount < 0 || inclusiveAmount > 999999999) {
      return {
        inclusiveAmount: 0,
        exclusiveAmount: 0,
        vatAmount: 0,
      };
    }

    const exclusiveAmount = inclusiveAmount / 1.15;
    const vatAmount = inclusiveAmount - exclusiveAmount;
    
    return {
      inclusiveAmount,
      exclusiveAmount: Math.round(exclusiveAmount * 100) / 100,
      vatAmount: Math.round(vatAmount * 100) / 100,
    };
  }, []);

  const handleTeaserClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Remove commas and parse the number to handle formats like "1,000.00", "1,000", "1000"
    const cleanedAmount = amount.replace(/,/g, '');
    const numericAmount = parseFloat(cleanedAmount) || 0;
    setCalculations(calculateVAT(numericAmount));
  }, [amount, calculateVAT]);

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
        <div className="max-w-4xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          
          {/* Main Content Area - Centered */}
          <main className="max-w-3xl mx-auto" role="main" itemScope itemType="https://schema.org/WebApplication">
            {/* Header Section */}
            <header className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" itemProp="name">
                South African VAT Calculator - Remove 15% VAT Instantly
              </h1>
              <p className="text-lg text-gray-600 mb-2" itemProp="description">
                Free online tool to quickly remove 15% VAT from any amount
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Professional VAT removal calculator for South African businesses, accountants, and consumers
              </p>
              <ShareButtons variant="compact" className="justify-center" />
            </header>

            {/* Calculator Card */}
            <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6 mobile-card-margin sm:mx-0" itemScope itemType="https://schema.org/Calculator">
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
                      placeholder="14,192.39"
                      value={amount}
                      onChange={(e) => {
                        // Allow digits, commas, and decimal points only
                        const value = e.target.value.replace(/[^0-9,\.]/g, '');
                        setAmount(value);
                      }}
                      className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2 sm:py-3 text-lg sm:text-xl font-semibold border-2 border-gray-200 rounded-xl input-focus transition-all duration-200"
                      step="0.01"
                      min="0"
                      itemProp="input"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    <InfoIcon className="inline w-3 h-3 mr-1" />
                    Enter the amount that includes 15% South African VAT (supports formats: 1,000.00, 1,000, 1000)
                  </p>
                </div>

                {/* Results Section */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5">
                  {/* Amount Including VAT */}
                  <div className="bg-blue-50 rounded-xl p-3 sm:p-4 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-blue-800 mb-1">Amount Including VAT</p>
                        <p className="text-lg sm:text-xl font-bold text-blue-900" itemProp="result">
                          R {formatCurrency(calculations.inclusiveAmount)}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(formatCurrency(calculations.inclusiveAmount), "Amount Including VAT")}
                        className="border-blue-300 text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                      >
                        {copySuccess ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* Amount Excluding VAT */}
                  <div className="bg-green-50 rounded-xl p-3 sm:p-4 border border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-green-800 mb-1">Amount Excluding VAT</p>
                        <p className="text-lg sm:text-xl font-bold text-green-900" itemProp="result">
                          R {formatCurrency(calculations.exclusiveAmount)}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(formatCurrency(calculations.exclusiveAmount), "Amount Excluding VAT")}
                        className="border-green-300 text-green-700 hover:bg-green-100 transition-colors duration-200"
                      >
                        {copySuccess ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* VAT Amount */}
                  <div className="bg-purple-50 rounded-xl p-3 sm:p-4 border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-purple-800 mb-1">VAT Amount (15%)</p>
                        <p className="text-lg sm:text-xl font-bold text-purple-900" itemProp="result">
                          R {formatCurrency(calculations.vatAmount)}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(formatCurrency(calculations.vatAmount), "VAT Amount")}
                        className="border-purple-300 text-purple-700 hover:bg-purple-100 transition-colors duration-200"
                      >
                        {copySuccess ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 sm:gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <InfoIcon className="w-4 h-4 mr-2" />
                        How It Works
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md mx-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-gray-900">How VAT Removal Works</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-sm text-gray-600">
                        <p>
                          To remove 15% South African VAT from any amount, we use a simple mathematical formula:
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4">
                          <p className="font-mono text-center font-semibold">
                            Amount Excluding VAT = Total ÷ 1.15
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="font-semibold">Example:</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Total (including VAT): R1,150</li>
                            <li>Amount excluding VAT: R1,150 ÷ 1.15 = R1,000</li>
                            <li>VAT portion: R1,150 - R1,000 = R150</li>
                          </ul>
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Got it</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    variant="outline"
                    className="flex-1 border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                    onClick={resetCalculator}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Content Teasers Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" aria-label="Explore VAT Calculator Resources">
              <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Book className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">How to Use</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">
                    Step-by-step guide to mastering VAT calculations. Learn real-time calculation techniques and copy functionality.
                  </p>
                  <Link href="/how-to-use" onClick={handleTeaserClick}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Read Guide
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Examples</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">
                    Real-world scenarios and practical examples. From small business to retail - see VAT removal in action.
                  </p>
                  <Link href="/examples" onClick={handleTeaserClick}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      View Examples
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Business Guide</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">
                    Professional business applications. Invoicing, compliance, accounting, and VAT management strategies.
                  </p>
                  <Link href="/business-guide" onClick={handleTeaserClick}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Business Guide
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">FAQ</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">
                    Find answers to common VAT questions. Search through 12+ FAQ's about calculations and compliance.
                  </p>
                  <Link href="/faq" onClick={handleTeaserClick}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      View FAQ
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </section>

            {/* Sharing module without redundant heading */}
            <section className="mb-8">
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