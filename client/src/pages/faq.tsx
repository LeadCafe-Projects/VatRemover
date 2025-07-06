import { Link } from "wouter";
import { ArrowLeft, HelpCircle, Search, Calculator, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdSense, { SidebarAd } from "@/components/AdSense";
import { useState } from "react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      id: "what-is-vat",
      question: "What is VAT and why do I need to remove it?",
      answer: "Value-Added Tax (VAT) is a consumption tax applied to goods and services in South Africa at a rate of 15%. You need to remove VAT to determine the actual cost of goods/services before tax, which is essential for accounting, budgeting, and financial analysis.",
      category: "basics",
      keywords: ["vat", "tax", "15%", "south africa"]
    },
    {
      id: "how-calculate-vat",
      question: "How do I calculate VAT-exclusive amounts?",
      answer: "To remove VAT from a VAT-inclusive amount, divide by 1.15. For example: R1,150 ÷ 1.15 = R1,000 (VAT-exclusive). The VAT portion is R150 (R1,150 - R1,000).",
      category: "calculation",
      keywords: ["calculate", "formula", "divide", "1.15"]
    },
    {
      id: "vat-registration",
      question: "When must a business register for VAT?",
      answer: "Businesses must register for VAT when their taxable supplies exceed R1 million in any 12-month period. Registration must be done within 21 days of exceeding this threshold.",
      category: "compliance",
      keywords: ["registration", "threshold", "million", "21 days"]
    },
    {
      id: "vat-invoice-requirements",
      question: "What must be included on a VAT invoice?",
      answer: "A valid VAT invoice must include: supplier's VAT number, invoice number and date, customer details, description of goods/services, VAT-exclusive amount, VAT amount, and total amount including VAT.",
      category: "compliance",
      keywords: ["invoice", "requirements", "vat number", "documentation"]
    },
    {
      id: "input-vs-output-vat",
      question: "What's the difference between input and output VAT?",
      answer: "Output VAT is the tax you charge customers on your sales. Input VAT is the tax you pay on business purchases. You pay SARS the difference (output VAT minus input VAT).",
      category: "basics",
      keywords: ["input", "output", "difference", "sars"]
    },
    {
      id: "vat-exempt-supplies",
      question: "Which supplies are exempt from VAT?",
      answer: "Common VAT-exempt supplies include: basic food items, prescription medicines, educational services, residential rent, and certain financial services. These don't attract VAT.",
      category: "compliance",
      keywords: ["exempt", "food", "medicine", "education", "rent"]
    },
    {
      id: "zero-rated-supplies",
      question: "What are zero-rated supplies?",
      answer: "Zero-rated supplies are taxable at 0% VAT. These include exports, certain food items, and illuminating paraffin. You can claim input VAT on expenses related to zero-rated supplies.",
      category: "compliance",
      keywords: ["zero-rated", "exports", "0%", "paraffin"]
    },
    {
      id: "vat-return-deadline",
      question: "When are VAT returns due?",
      answer: "VAT returns must be submitted by the 25th of the month following the end of the VAT period. For example, January's VAT return is due by February 25th.",
      category: "compliance",
      keywords: ["return", "deadline", "25th", "month"]
    },
    {
      id: "record-keeping",
      question: "How long must I keep VAT records?",
      answer: "VAT records must be kept for 5 years from the date of the last entry. This includes all invoices, receipts, and supporting documentation.",
      category: "compliance",
      keywords: ["records", "5 years", "invoices", "documentation"]
    },
    {
      id: "calculator-accuracy",
      question: "How accurate is this VAT calculator?",
      answer: "Our calculator uses the standard formula (amount ÷ 1.15) and rounds to 2 decimal places for practical use. Results are accurate for general business purposes but always verify critical calculations.",
      category: "calculator",
      keywords: ["accuracy", "formula", "decimal", "rounding"]
    },
    {
      id: "bulk-calculations",
      question: "Can I perform multiple VAT calculations?",
      answer: "Yes, you can use the calculator repeatedly for different amounts. Each calculation is independent and results update instantly as you type new values.",
      category: "calculator",
      keywords: ["multiple", "bulk", "repeated", "instant"]
    },
    {
      id: "mobile-calculator",
      question: "Does the calculator work on mobile devices?",
      answer: "Yes, the calculator is fully responsive and works on smartphones and tablets. All features including copy and share functions are available on mobile.",
      category: "calculator",
      keywords: ["mobile", "smartphone", "tablet", "responsive"]
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories = [
    { id: "basics", name: "VAT Basics", color: "bg-blue-100 text-blue-800" },
    { id: "calculation", name: "Calculations", color: "bg-green-100 text-green-800" },
    { id: "compliance", name: "Compliance", color: "bg-purple-100 text-purple-800" },
    { id: "calculator", name: "Calculator", color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Calculator
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">FAQ</h1>
              <p className="text-gray-600">Frequently Asked Questions</p>
            </div>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 mb-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Got Questions About VAT?</h2>
                <p className="text-orange-100 text-lg">
                  Find answers to common questions about VAT calculations, compliance, and using our calculator.
                </p>
              </div>
            </div>

            {/* Search */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search FAQ
                </CardTitle>
                <CardDescription>
                  Search through our frequently asked questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search for answers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                {searchTerm && (
                  <p className="mt-2 text-sm text-gray-600">
                    Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Browse by Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map(category => (
                  <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <Badge className={`${category.color} mb-2`}>
                        {faqs.filter(faq => faq.category === category.id).length}
                      </Badge>
                      <p className="font-medium">{category.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-2">
                          <Badge className={categories.find(c => c.id === faq.category)?.color}>
                            {categories.find(c => c.id === faq.category)?.name}
                          </Badge>
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-4 border-t">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFaqs.length === 0 && searchTerm && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No questions found matching "{searchTerm}"</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchTerm("")}
                      className="mt-4"
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Still Have Questions */}
            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <AlertCircle className="w-5 h-5" />
                  Still Have Questions?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  If you can't find the answer you're looking for, here are some additional resources:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border">
                    <h4 className="font-semibold mb-2">SARS Official Resources</h4>
                    <p className="text-sm text-gray-600">
                      Visit the South African Revenue Service website for official VAT guidance and regulations.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <h4 className="font-semibold mb-2">Professional Advice</h4>
                    <p className="text-sm text-gray-600">
                      Consult with a qualified tax professional or chartered accountant for specific business situations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AdSense */}
            <div className="my-8">
              <AdSense adSlot="1234567890" adFormat="auto" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <SidebarAd />
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/how-to-use">
                    <Button variant="outline" className="w-full justify-start">
                      How to Use Guide
                    </Button>
                  </Link>
                  <Link href="/examples">
                    <Button variant="outline" className="w-full justify-start">
                      Real Examples
                    </Button>
                  </Link>
                  <Link href="/business-guide">
                    <Button variant="outline" className="w-full justify-start">
                      Business Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">VAT calculation formula</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Registration requirements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Invoice requirements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Return deadlines</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}