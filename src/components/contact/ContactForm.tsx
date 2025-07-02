import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Send, 
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Attempting to send email with data:', formData);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init("kL_O9F90-dLeK16aj");
      
      // Send email using your service ID and template ID
      const result = await emailjs.send(
        "service_2ofnsuw",
        "template_rq2naxl",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "sewmisenarath@gmail.com",
          reply_to: formData.email
        }
      );
      
      console.log('Email sent successfully:', result);
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
        className: "bg-green-500/20 border-green-500/30 text-green-400"
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl text-white flex items-center">
          <MessageCircle className="w-6 h-6 mr-3 text-blue-400" />
          Send a Message
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {isSuccess && (
          <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
            <p className="text-green-400 font-medium">
              Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-300">
              Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
              placeholder="What's this about?"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 resize-none"
              placeholder="Tell me about your project, internship opportunity, or just say hello!"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
