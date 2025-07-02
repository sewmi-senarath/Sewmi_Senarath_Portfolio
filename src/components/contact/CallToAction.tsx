
import { Badge } from '@/components/ui/badge';

const CallToAction = () => {
  return (
    <div className="text-center mt-16">
      <div className="inline-flex flex-col items-center justify-center p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white mb-2">
          Ready to Start Your Next Project?
        </h3>
        <p className="text-gray-300 mb-4 max-w-md">
          I would be pleased to discuss how I can contribute to your team and help bring ideas to life.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            Full-Stack Development
          </Badge>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            Mobile Apps
          </Badge>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
            Team Leadership
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
