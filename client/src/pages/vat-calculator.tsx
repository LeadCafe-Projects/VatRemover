import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { TopBannerAd, SidebarAd, MobileAd } from "@/components/AdSense";
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
  AlertTriangle
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
    <div className="bg-gray-50 min-h-screen">
      {/* Top AdSense Zone */}
      <div className="w-full bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <TopBannerAd />
        </div>
      </div>

      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Sidebar AdSense Zone */}
            <div className="hidden lg:block lg:w-64">
              <SidebarAd />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
              {/* Header Section */}
              <div className="text-center mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  South African VAT Calculator
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  Quickly remove 15% VAT from any amount
                </p>
                <p className="text-sm text-gray-500">
                  Enter the VAT-inclusive amount and get instant calculations
                </p>
              </div>

              {/* Calculator Card */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8 mb-8">
                <CardContent className="p-0">
                  {/* Input Section */}
                  <div className="mb-8">
                    <Label htmlFor="vatInclusiveAmount" className="block text-sm font-semibold text-gray-700 mb-3">
                      <Calculator className="inline w-4 h-4 mr-2 text-primary" />
                      Amount Including VAT (ZAR)
                    </Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg font-medium">
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
                        className="w-full pl-8 pr-4 py-4 text-xl font-semibold border-2 border-gray-200 rounded-xl input-focus transition-all duration-200"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      <InfoIcon className="inline w-3 h-3 mr-1" />
                      Enter the total amount that includes 15% VAT
                    </p>
                  </div>

                  {/* Results Section */}
                  <div className="space-y-4" id="resultsSection">
                    {/* Original Amount */}
                    <div className="vat-blue border rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <Receipt className="text-blue-600 w-4 h-4 mr-2" />
                            <span className="text-sm font-medium text-blue-800">Amount Including VAT</span>
                          </div>
                          <div className="text-2xl font-bold text-blue-900">
                            R {formatCurrency(calculations.inclusiveAmount)}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="ml-4 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 group"
                          onClick={() => copyToClipboard(calculations.inclusiveAmount.toFixed(2), "Amount including VAT")}
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        </Button>
                      </div>
                    </div>

                    {/* VAT Amount */}
                    <div className="vat-amber border rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <Percent className="text-amber-600 w-4 h-4 mr-2" />
                            <span className="text-sm font-medium text-amber-800">VAT Amount (15%)</span>
                          </div>
                          <div className="text-2xl font-bold text-amber-900">
                            R {formatCurrency(calculations.vatAmount)}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="ml-4 p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200 group"
                          onClick={() => copyToClipboard(calculations.vatAmount.toFixed(2), "VAT amount")}
                          title="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        </Button>
                      </div>
                    </div>

                    {/* Exclusive Amount */}
                    <div className="vat-green border rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <MinusCircle className="text-green-600 w-4 h-4 mr-2" />
                            <span className="text-sm font-medium text-green-800">Amount Excluding VAT</span>
                          </div>
                          <div className="text-2xl font-bold text-green-900">
                            R {formatCurrency(calculations.exclusiveAmount)}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="ml-4 p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 group"
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

              {/* Information Section */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:p-8 mb-8">
                <CardContent className="p-0">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    <InfoIcon className="inline w-5 h-5 text-primary mr-2" />
                    How to Use This VAT Calculator
                  </h2>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-white text-xs font-bold rounded-full mr-3 mt-0.5">
                        1
                      </span>
                      <p>Enter the total amount that includes 15% VAT in the input field above</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-white text-xs font-bold rounded-full mr-3 mt-0.5">
                        2
                      </span>
                      <p>The calculator will instantly show you three values: the original amount, the VAT portion, and the amount excluding VAT</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-white text-xs font-bold rounded-full mr-3 mt-0.5">
                        3
                      </span>
                      <p>Click the copy button next to any result to copy it to your clipboard</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      <Lightbulb className="inline w-4 h-4 mr-2" />
                      Quick Tip
                    </h3>
                    <p className="text-blue-800 text-sm">
                      South African VAT is calculated at 15%. To remove VAT from an inclusive amount, divide by 1.15, then subtract from the original to get the VAT portion.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile AdSense Zone */}
              <div className="lg:hidden mb-8">
                <MobileAd />
              </div>
            </div>

            {/* Right Sidebar AdSense Zone */}
            <div className="hidden lg:block lg:w-64">
              <SidebarAd />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom AdSense Zone */}
      <div className="w-full bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <TopBannerAd />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
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
      </footer>
    </div>
  );
}
