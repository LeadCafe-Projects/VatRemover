import { Link } from "wouter";
import { ArrowLeft, MessageSquare, Send, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // In a real app, you would send this data to your backend
    alert('Thank you for your feedback! We will review your message and respond if necessary.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: '',
      message: ''
    });
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
        <div className="max-w-4xl mx-auto mobile-padding sm:px-4" style={{ boxSizing: 'border-box' }}>
          
          {/* Main Content Area - Centered */}
          <main className="max-w-3xl mx-auto" role="main" itemScope itemType="https://schema.org/ContactPage">
            
            {/* Header Section - White Background */}
            <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-lg">
              <header className="text-center">
                <Link href="/" onClick={handleBackClick}>
                  <Button variant="ghost" className="mb-4 text-gray-700 hover:bg-gray-100 border border-gray-300">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Calculator
                  </Button>
                </Link>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" itemProp="name">
                  Feedback & Contact
                </h1>
                <p className="text-lg text-gray-600 mb-2" itemProp="description">
                  Share your thoughts and suggestions
                </p>
                <p className="text-sm text-gray-500">
                  Help us improve the VAT calculator experience
                </p>
              </header>
            </div>

            {/* Main Content */}
            <article className="space-y-8">
              
              {/* Get in Touch Section */}
              <section>
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-green-900 flex items-center gap-2">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Get in Touch
                    </CardTitle>
                    <CardDescription className="text-green-800">
                      Your feedback helps us make the VAT calculator better for everyone
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-green-800">
                        Share bugs, suggestions, or success stories. We read every message and use your feedback to improve our service.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Contact Form */}
              <section>
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-green-500" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                          Category *
                        </Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select feedback category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bug">Bug Report</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                            <SelectItem value="improvement">Improvement Suggestion</SelectItem>
                            <SelectItem value="question">Question</SelectItem>
                            <SelectItem value="compliment">Compliment</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us about your experience, suggestions, or any issues you've encountered..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-vertical"
                        />
                        <p className="text-xs text-gray-500">
                          Please provide as much detail as possible to help us understand your feedback.
                        </p>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </section>

              {/* Alternative Contact Methods */}
              <section>
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Alternative Contact Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Email</h4>
                          <p className="text-sm text-gray-600">
                            For detailed technical issues or business inquiries
                          </p>
                          <p className="text-sm text-blue-600 font-medium">
                            support@vatremover.co.za
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">WhatsApp</h4>
                          <p className="text-sm text-gray-600">
                            Quick questions and support
                          </p>
                          <p className="text-sm text-green-600 font-medium">
                            Available during business hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Response Time */}
              <section>
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-blue-900">
                      Response Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-blue-800">
                        We typically respond to feedback within 24-48 hours during business days.
                      </p>
                      <p className="text-sm text-blue-700">
                        For urgent technical issues, please use our direct email contact for faster assistance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

            </article>
          </main>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}