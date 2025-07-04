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
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 742888200',
    href: 'tel:+94742888200',
    color: 'text-orange-600',
    bgColor: 'bg-orange-600/10'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '266/2, Mabima, Heiyanthuduwa, Kelaniya',
    href: '#',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  }
];

export const socialLinks = [
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