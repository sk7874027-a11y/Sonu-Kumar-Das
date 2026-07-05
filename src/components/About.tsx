import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#fffaf7]/50">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900">Technology Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Your Success</span></h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              At Elevate Solutions, we believe that technology should simplify your workflow, not complicate it. Operating out of our Bhubaneswar headquarters, we partner with modern businesses and educational institutions to build customized digital infrastructure.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Whether you need to streamline daily school administration, manage customer relationships, or build a commanding online presence, our expert team provides the strategic technology you need to scale efficiently.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-black/10">
              <div>
                <div className="text-3xl font-display font-bold text-neutral-900 mb-1">10+</div>
                <div className="text-sm text-neutral-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-neutral-900 mb-1">99%</div>
                <div className="text-sm text-neutral-500">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-neutral-900 mb-1">24/7</div>
                <div className="text-sm text-neutral-500">Expert Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-600/20 rounded-3xl blur-2xl transform -rotate-6 scale-105"></div>
            <div className="relative bg-white border border-black/5 p-8 rounded-3xl shadow-xl space-y-6">
              {[
                { icon: <Target className="text-orange-500" />, title: "Precision Driven", desc: "Solutions engineered for exact business needs." },
                { icon: <Lightbulb className="text-orange-500" />, title: "Innovative Tech", desc: "Leveraging modern stacks for future-proof scale." },
                { icon: <TrendingUp className="text-orange-500" />, title: "Growth Focused", desc: "Tools designed to accelerate your revenue." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-black/[0.02] border border-black/5 hover:bg-black/[0.04] transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-neutral-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
