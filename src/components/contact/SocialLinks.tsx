
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import { socialLinks } from '@/data/contactData';

const SocialLinks = () => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Globe className="w-5 h-5 mr-2 text-blue-400" />
          Connect Online
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg bg-slate-700 text-gray-400 ${social.color} ${social.bgColor} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              title={social.name}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
