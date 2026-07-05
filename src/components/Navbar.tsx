import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import ElevateLogo from './ElevateLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { 
      name: 'Products', 
      href: '#products',
      dropdown: [
        { title: 'School ERP', desc: 'Complete school management solution.' },
        { title: 'Other ERPs', desc: 'Manage various business operations.' },
        { title: 'CRM', desc: 'Customer relationship management.' }
      ]
    },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center group h-[79px] w-[143px]">
            <ElevateLogo className="transition-transform group-hover:scale-[1.02] origin-left w-full h-full" />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1 py-4">
                    {link.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute top-[80%] right-0 mt-2 w-72 bg-white border border-black/5 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                    <div className="p-2">
                      <div className="px-3 py-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">Our Products</div>
                      {link.dropdown.map((item, idx) => (
                        <a key={idx} href="#products" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors group/item">
                          <div className="font-semibold text-neutral-900 text-sm group-hover/item:text-orange-600 transition-colors">{item.title}</div>
                          <div className="text-xs text-neutral-500 mt-0.5">{item.desc}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={link.name} href={link.href} className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                  {link.name}
                </a>
              )
            ))}
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
              Contact
            </a>
          </nav>

          <button className="md:hidden text-neutral-900 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-black/5 py-4 px-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="flex flex-col gap-2 py-2">
                <div className="text-neutral-900 font-medium">{link.name}</div>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-orange-500/20 mt-1">
                  {link.dropdown.map((item, idx) => (
                    <a key={idx} href="#products" className="flex flex-col gap-0.5" onClick={() => setIsOpen(false)}>
                      <span className="text-sm font-semibold text-neutral-800">{item.title}</span>
                      <span className="text-xs text-neutral-500">{item.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-neutral-600 hover:text-neutral-900 py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            )
          ))}
        </motion.div>
      )}
    </header>
  );
}
