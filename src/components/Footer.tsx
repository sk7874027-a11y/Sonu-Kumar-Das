import ElevateLogo from './ElevateLogo';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center h-10">
            <ElevateLogo className="scale-90 origin-left" />
          </div>
          
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Elevate Solutions. All Rights Reserved.
          </div>
          
          <div className="flex gap-6 text-sm text-neutral-600 font-medium">
            <a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
