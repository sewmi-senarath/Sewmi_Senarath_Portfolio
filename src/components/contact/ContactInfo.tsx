
import { Card, CardContent } from '@/components/ui/card';
import { contactInfo } from '@/data/contactData';

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      {contactInfo.map((item, index) => (
        <Card
          key={index}
          className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group cursor-pointer"
        >
          <CardContent className="p-6">
            <a
              href={item.href}
              className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-300"
            >
              <div className={`p-3 rounded-lg ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-gray-300 text-sm break-all">
                  {item.value}
                </p>
              </div>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
