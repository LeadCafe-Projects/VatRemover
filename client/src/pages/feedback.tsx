import { Link } from "wouter";
import { ArrowLeft, MessageSquare, Send, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SidebarAd } from "@/components/AdSense";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

export default function Feedback() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your feedback. We'll get back to you soon.",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              <div className="bg-white rounded-2xl p-6 mb-8">
                <header className="text-center">
                  <Link href="/">
                    <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Calculator
                    </Button>
                  </Link>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Feedback & Contact
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">
                    Share your thoughts and suggestions
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Help us improve the VAT calculator experience
                  </p>
                </header>

                {/* Hero Summary Card - Purple Background */}
                <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl shadow-lg border-0 p-4 sm:p-6 lg:p-8 mobile-card-margin sm:mx-0">
                  <CardContent className="p-0">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                      <p className="text-purple-100 text-lg">
                        Your feedback helps us make the VAT calculator better for everyone. Share bugs, suggestions, or success stories.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mobile-card-margin sm:mx-0">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Send us a Message</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-4">
                        Thank you for your feedback. We'll review your message and get back to you soon.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Your Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Brief description of your message"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full resize-none"
                          placeholder="Tell us about your experience, suggestions for improvement, or any issues you've encountered..."
                        />
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Privacy & Security</p>
                            <p className="text-xs text-gray-600 mt-1">
                              Your information is encrypted and sent securely. We'll only use your email to respond to your message.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 mt-6 mobile-card-margin sm:mx-0">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl text-gray-900">Other Ways to Reach Us</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Direct Email</p>
                        <p className="text-gray-600 text-sm">josh@leadcafe.co.za</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Response Time</p>
                        <p className="text-gray-600 text-sm">We typically respond within 24-48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Support Types</p>
                        <p className="text-gray-600 text-sm">Bug reports, feature requests, general feedback</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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