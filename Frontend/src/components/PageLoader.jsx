import { LucideLoader2 } from "lucide-react";
const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LucideLoader2 className="animate-spin size-10 text-primary" />
    </div>
  );
};

export default PageLoader;
