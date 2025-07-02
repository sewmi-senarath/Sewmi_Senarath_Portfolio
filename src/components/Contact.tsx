
import ContactInfo from './contact/ContactInfo';
import SocialLinks from './contact/SocialLinks';
import ContactForm from './contact/ContactForm';
import CallToAction from './contact/CallToAction';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss internship opportunities, collaborate on projects, or just have a chat about technology? 
            I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <ContactInfo />
            <SocialLinks />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        <CallToAction />
      </div>
    </section>
  );
};

export default Contact;
