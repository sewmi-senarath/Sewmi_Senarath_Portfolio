import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Github, Linkedin } from 'lucide-react';

// Madison-inspired social links with orange accents
const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/sewmi-senarath',
    color: 'hover:text-gray-800',
    bgColor: 'hover:bg-orange-100'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sewmi-senarath/',
    color: 'hover:text-orange-600',
    bgColor: 'hover:bg-orange-50'
  }
];

const SocialLinks = () => {
  return (
    <Card className="bg-gradient-to-bl from-orange-50 via-white to-orange-50 border-orange-200">
      <CardHeader>
        <CardTitle className="text-black flex items-center">
          <Globe className="w-5 h-5 mr-2 text-orange-500" />
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
              className={`p-3 rounded-lg bg-orange-300 text-gray-700 ${social.color} ${social.bgColor} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-orange-200 hover:border-orange-300`}
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