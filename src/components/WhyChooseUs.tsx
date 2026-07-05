import { motion } from 'motion/react';
import { Settings, GitMerge, Headset } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Settings size={28} className="text-white" />,
      title: "Tailored Solutions",
      description: "We don't believe in one-size-fits-all. Every ERP, CRM, and website is customized to your specific operational needs."
    },
    {
      icon: <GitMerge size={28} className="text-white" />,
      title: "Seamless Integration",
      description: "We ensure our software integrates smoothly into your existing workflows with minimal disruption."
    },
    {
      icon: <Headset size={28} className="text-white" />,
      title: "Dedicated Support",
      description: "From initial deployment to ongoing maintenance, our team is committed to your long-term success."
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-[#fffaf7]/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Elevate</span> Advantage</h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                Partnering with us means choosing a team dedicated to understanding your unique challenges and delivering technology that drives real, measurable results.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:text-orange-600 transition-colors group">
                Let's discuss your project 
                <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-orange-500/10">→</span>
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-black/5 hover:border-black/10 transition-colors shadow-sm"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
