import ContactInfo from './contact/ContactInfo';
import SocialLinks from './contact/SocialLinks';
import ContactForm from './contact/ContactForm';
import CallToAction from './contact/CallToAction';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-orange-50 transition-all duration-700 ease-in-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black transition-all duration-500">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 transition-all duration-500"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss internship opportunities, collaborate on projects, or just have a chat about technology? 
            I'd love to hear from you!
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

        {/* Call to Action */}
        <div className="mt-16">
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default Contact;