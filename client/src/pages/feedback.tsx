import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, MessageSquare, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import { LeftSidebarAd } from "@/components/AdSense";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Try server-side API first (for full-stack deployments)
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          toast({
            title: "Feedback Submitted",
            description: "Thank you for your feedback! We'll get back to you soon.",
          });
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            category: '',
            message: ''
          });
          return;
        }
      }
    } catch (serverError) {
      console.log('Server API not available, using email fallback...');
    }

    // Fallback to email client (for static deployments)
    const emailSubject = `VAT Calculator Feedback: ${formData.category}`;
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.category}\n\nMessage:\n${formData.message}\n\n---\nSent from VAT Calculator feedback form`;
    
    const mailtoLink = `mailto:josh@leadcafe.co.za?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the feedback pre-filled.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

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
          <main className="flex-1 max-w-4xl mx-auto" role="main" itemScope itemType="https://schema.org/ContactPage">
            
            {/* Header Section - White Background like other pages */}
            <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg">
              <header className="text-center">
                <Link href="/" onClick={handleBackClick}>
                  <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" itemProp="headline">
                  Contact & Feedback
                </h1>
                <p className="text-lg text-gray-600 mb-2" itemProp="description">
                  Have a question, suggestion, or need help? We'd love to hear from you!
                </p>
                <p className="text-sm text-gray-500">
                  Quick response times and professional support for all VAT calculator inquiries
                </p>
              </header>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-orange-600" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="business">Business Inquiry</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your question or feedback..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <MessageSquare className="mr-2 h-4 w-4 animate-pulse" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-orange-600" />
                      Other Ways to Reach Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600">josh@leadcafe.co.za</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-semibold">Response Time</p>
                        <p className="text-gray-600">We typically respond within 24-48 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <Link href="/faq" className="text-orange-600 hover:text-orange-700 font-medium">
                          Visit our FAQ page →
                        </Link>
                        <p className="text-sm text-gray-600">Find answers to common questions about VAT calculations and our tool.</p>
                      </div>
                      <div>
                        <Link href="/how-to-use" className="text-orange-600 hover:text-orange-700 font-medium">
                          How to Use Guide →
                        </Link>
                        <p className="text-sm text-gray-600">Step-by-step instructions for getting the most out of our calculator.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Share Module Only */}
            <section className="mt-12">
              <ShareButtons variant="full" className="justify-center" />
            </section>
            
          </main>
        </div>
        
        {/* Mobile Layout - Clean and Compact */}
        <div className="lg:hidden max-w-4xl mx-auto px-4">
          <main role="main" itemScope itemType="https://schema.org/ContactPage">
            {/* Header Section - White Background */}
            <div className="bg-white rounded-2xl p-4 mb-6 border border-gray-200 shadow-lg">
              <header className="text-center">
                <Link href="/" onClick={handleBackClick}>
                  <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">
                  Feedback & Contact
                </h1>
                <p className="text-base text-gray-600 mb-2" itemProp="description">
                  Help us improve the VAT calculator
                </p>
                <p className="text-sm text-gray-500">
                  Share your suggestions or report issues with our South African VAT removal tool
                </p>
              </header>
            </div>
            
            {/* Mobile content would be rendered here */}
            <section className="mt-6 mb-4">
              <ShareButtons className="justify-center" />
            </section>
          </main>
        </div>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}