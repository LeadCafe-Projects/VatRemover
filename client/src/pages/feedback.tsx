import { Link } from "wouter";
import { ArrowLeft, MessageSquare, Send, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import { LeftSidebarAd, RightSidebarAd, BelowContentAd } from "@/components/AdSense";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.category || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Try server-side API first (for Replit deployment)
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.category,
          message: formData.message
        }),
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Left Sidebar Ad */}
          <div className="w-80 flex-shrink-0 hidden lg:block mr-8">
            <LeftSidebarAd />
          </div>
          
          {/* Header */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Calculator
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact & Feedback</h1>
            <p className="text-gray-600">
              Have a question, suggestion, or need help? We'd love to hear from you!
            </p>
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
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="question">General Question</SelectItem>
                        <SelectItem value="business">Business Inquiry</SelectItem>
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
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
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

          {/* Share Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Share VAT Calculator</h2>
            <p className="text-gray-600 mb-6">
              Help other South African businesses discover our free VAT calculator
            </p>
            <ShareButtons variant="full" />
          </div>
        </div>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}