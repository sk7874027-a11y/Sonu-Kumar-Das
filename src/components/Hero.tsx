import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-orange-600 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          Next-Generation IT Solutions
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 max-w-5xl mx-auto leading-[1.1] tracking-tight text-neutral-900"
        >
          Elevate Your Operations.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Empower Your Growth.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We deliver smart, scalable IT solutions—from tailored CRM systems and comprehensive School ERPs to high-performance website development.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-2 group">
            Explore Our Services
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-black/5 border border-black/10 text-neutral-900 rounded-full font-medium hover:bg-black/10 transition-colors">
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
