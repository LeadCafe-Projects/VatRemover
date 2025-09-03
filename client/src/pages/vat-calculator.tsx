import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { LeftSidebarAd, RightSidebarAd, BelowContentAd, MobileAd } from "@/components/AdSense";
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

  // Optimized SA VAT calculation (15% rate)
  const calculateVAT = useCallback((inclusiveAmount: number): VATCalculation => {
    if (!inclusiveAmount || inclusiveAmount < 0 || inclusiveAmount > 999999999) {
      return { inclusiveAmount: 0, exclusiveAmount: 0, vatAmount: 0 };
    }

    const exclusiveAmount = inclusiveAmount / 1.15; // SA VAT formula
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

  // Real-time calculation effect
  useEffect(() => {
    const cleanedAmount = amount.replace(/,/g, '');
    
    if (!cleanedAmount) {
      setCalculations({ inclusiveAmount: 0, exclusiveAmount: 0, vatAmount: 0 });
      return;
    }
    
    const numericAmount = parseFloat(cleanedAmount);
    if (!isNaN(numericAmount)) {
      setCalculations(calculateVAT(numericAmount));
    }
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

  const resetCalculator = useCallback(() => {
    setAmount("");
    setCalculations({ inclusiveAmount: 0, exclusiveAmount: 0, vatAmount: 0 });
    setCopySuccess(false);
  }, []);

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
          <main className="flex-1 max-w-3xl" role="main" itemScope itemType="https://schema.org/WebApplication">
            {/* Optimized Header Section */}
            <header className="text-center mb-8">
              <h1 className="text-gray-900 mb-4 max-w-2xl mx-auto" 
                  itemProp="name" 
                  style={{ fontWeight: '600', fontSize: '30px', lineHeight: '1.2', fontFamily: 'Inter, sans-serif' }}>
                South African VAT Calculator - Remove 15% VAT Instantly
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto" 
                 itemProp="description" 
                 style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.5' }}>
                Free tool to remove 15% VAT. A professional calculator for South African businesses, accountants, and consumers.
              </p>
              <ShareButtons variant="compact" className="justify-center" />
            </header>

            {/* Calculator Card */}
            <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-5 mb-6 mobile-card-margin sm:mx-0" itemScope itemType="https://schema.org/Calculator">
              <CardContent className="p-0">
                {/* Input Section */}
                <div className="mb-5">
                  <Label htmlFor="vatInclusiveAmount" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2" style={{ fontSize: '15px', fontWeight: '500' }}>
                    <Calculator className="w-4 h-4 text-blue-600" />
                    Amount Including VAT (ZAR)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium" style={{ fontSize: '16px' }}>
                      R
                    </span>
                    <Input
                      id="vatInclusiveAmount"
                      type="text"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => {
                        // Allow digits, commas, and decimal points only
                        const value = e.target.value.replace(/[^0-9,\.]/g, '');
                        setAmount(value);
                      }}
                      className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      style={{ fontSize: '16px', fontWeight: '400' }}
                      step="0.01"
                      min="0"
                      itemProp="input"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1" style={{ fontSize: '13px' }}>
                    <InfoIcon className="w-3 h-3" />
                    Enter the amount that includes 15% South African VAT (e.g., 14,192.39 or 1000)
                  </p>
                </div>

                {/* Results Section */}
                <div className="space-y-3 mb-5">
                  {/* Amount Including VAT */}
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-blue-800 mb-1" style={{ fontSize: '14px', fontWeight: '500' }}>Amount Including VAT</p>
                        <p className="text-xl font-bold text-blue-900" itemProp="result" style={{ fontSize: '20px', fontWeight: '700' }}>
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
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-green-800 mb-1" style={{ fontSize: '14px', fontWeight: '500' }}>Amount Excluding VAT</p>
                        <p className="text-xl font-bold text-green-900" itemProp="result" style={{ fontSize: '20px', fontWeight: '700' }}>
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
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-purple-800 mb-1" style={{ fontSize: '14px', fontWeight: '500' }}>VAT Amount (15%)</p>
                        <p className="text-xl font-bold text-purple-900" itemProp="result" style={{ fontSize: '20px', fontWeight: '700' }}>
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
                <div className="flex gap-3">
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
                    Real-world scenarios and practical examples. From small businesses to retail - see VAT removal in action.
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
            
            {/* Below Content Ad - Mobile */}
            <div className="lg:hidden mb-6">
              <MobileAd />
            </div>
            
            {/* Below Content Ad - Desktop */}
            <div className="hidden lg:block mb-8">
              <BelowContentAd />
            </div>
            
          </main>
          
          {/* Right Sidebar Ad - Desktop Only */}
          <div className="w-80 flex-shrink-0">
            <RightSidebarAd />
          </div>
        </div>
        
        {/* Mobile Layout - Clean and Compact */}
        <div className="lg:hidden max-w-3xl mx-auto px-4">
          <main role="main" itemScope itemType="https://schema.org/WebApplication">
            {/* Optimized Header Section */}
            <header className="text-center mb-8">
              <h1 className="text-gray-900 mb-4 max-w-2xl mx-auto" 
                  itemProp="name" 
                  style={{ fontWeight: '600', fontSize: '30px', lineHeight: '1.2', fontFamily: 'Inter, sans-serif' }}>
                South African VAT Calculator - Remove 15% VAT Instantly
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto" 
                 itemProp="description" 
                 style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.5' }}>
                Free tool to remove 15% VAT. A professional calculator for South African businesses, accountants, and consumers.
              </p>
              <ShareButtons variant="compact" className="justify-center" />
            </header>

            {/* Calculator Card */}
            <Card className="bg-white rounded-lg shadow-md border border-gray-200 p-5 mb-6" itemScope itemType="https://schema.org/Calculator">
              <CardContent className="p-0">
                {/* Input Section */}
                <div className="mb-5">
                  <Label htmlFor="vatInclusiveAmountMobile" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2" style={{ fontSize: '15px', fontWeight: '500' }}>
                    <Calculator className="w-4 h-4 text-blue-600" />
                    Amount Including VAT (ZAR)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium" style={{ fontSize: '16px' }}>
                      R
                    </span>
                    <Input
                      id="vatInclusiveAmountMobile"
                      type="text"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9,\.]/g, '');
                        setAmount(value);
                      }}
                      className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      style={{ fontSize: '16px', fontWeight: '400' }}
                    />
                  </div>
                </div>

                {/* Results Section */}
                {calculations.inclusiveAmount > 0 && (
                  <div className="grid gap-4">
                    {/* Inclusive Amount */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-blue-700 font-medium text-sm">Amount Including VAT</Label>
                          <p className="text-2xl font-bold text-blue-800">R {calculations.inclusiveAmount.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(calculations.inclusiveAmount.toFixed(2), "Amount Including VAT")}
                          className="text-blue-700 border-blue-300 hover:bg-blue-100"
                        >
                          {copySuccess ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Exclusive Amount */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-green-700 font-medium text-sm">Amount Excluding VAT</Label>
                          <p className="text-2xl font-bold text-green-800">R {calculations.exclusiveAmount.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(calculations.exclusiveAmount.toFixed(2), "Amount Excluding VAT")}
                          className="text-green-700 border-green-300 hover:bg-green-100"
                        >
                          {copySuccess ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* VAT Amount */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-amber-700 font-medium text-sm">VAT Amount (15%)</Label>
                          <p className="text-2xl font-bold text-amber-800">R {calculations.vatAmount.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(calculations.vatAmount.toFixed(2), "VAT Amount")}
                          className="text-amber-700 border-amber-300 hover:bg-amber-100"
                        >
                          {copySuccess ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Reset Button */}
                    <Button
                      variant="outline"
                      onClick={resetCalculator}
                      className="w-full mt-2 text-gray-600 border-gray-300 hover:bg-gray-50"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Reset Calculator
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Mobile Ad */}
            <div className="mb-6">
              <MobileAd />
            </div>
            
            {/* Mobile content sections would go here */}
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}