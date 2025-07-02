
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin 
} from 'lucide-react';

export const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sewmisenarath@gmail.com',
    href: 'mailto:sewmisenarath@gmail.com',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 742888200',
    href: 'tel:+94742888200',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '266/2, Mabima, Heiyanthuduwa, Kelaniya',
    href: '#',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  }
];

export const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/sewmi-senarath',
    color: 'hover:text-gray-300',
    bgColor: 'hover:bg-gray-500/10'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sewmi-senarath/',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10'
  }
];
