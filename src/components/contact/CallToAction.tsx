import { Badge } from '@/components/ui/badge';

const CallToAction = () => {
  return (
    <div className="text-center mt-16">
      <div className="inline-flex flex-col  items-center  p-5 bg-gradient-to-r from-white via-orange-50 to-white rounded-2xl border border-orange-200 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-black mb-2">
          Ready to Start Your Next Project?
        </h3>
        <p className="text-gray-600 mb-4 max-w-md">
          I would be pleased to discuss how I can contribute to your team and help bring ideas to life.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Badge className="bg-orange-600/20 text-orange-600 border-orange-800">
            Full-Stack Development
          </Badge>
          <Badge className="bg-orange-600/20 text-orange-700 border-orange-600/30">
            Mobile Apps
          </Badge>
          <Badge className="bg-orange-500/20 text-orange-600 border-orange-500/30">
            Team Leadership
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;