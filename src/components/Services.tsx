import { motion } from 'motion/react';
import { GraduationCap, Users, Globe, Megaphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <GraduationCap size={32} className="text-orange-500" />,
      title: "School ERP Systems",
      subtitle: "Streamlined Administration for Educational Institutions",
      description: "Managing a school requires flawless coordination. Our School ERP centralizes daily administrative tasks, from attendance and admissions to timetable management and parent communication. Built with the needs of local educational institutions in mind, our system eliminates paperwork so your staff can focus entirely on student success."
    },
    {
      icon: <Users size={32} className="text-orange-500" />,
      title: "Custom CRM for Businesses",
      subtitle: "Strengthen Your Client Relationships",
      description: "Stop losing track of valuable leads. Our customized Customer Relationship Management (CRM) solutions are designed to align with your sales process. Track interactions, automate follow-ups, and gain actionable insights into your sales pipeline to drive revenue and foster long-term customer loyalty."
    },
    {
      icon: <Globe size={32} className="text-orange-500" />,
      title: "Website Development",
      subtitle: "High-Converting Digital Storefronts",
      description: "Your website is the face of your business. We design and develop responsive, fast, and visually striking websites tailored to your brand. From corporate landing pages to complex business portals, we ensure your digital presence captivates your audience and converts visitors into clients across all devices."
    },
    {
      icon: <Megaphone size={32} className="text-orange-500" />,
      title: "Digital Marketing",
      subtitle: "Data-Driven Growth Strategies",
      description: "Amplify your brand's voice and reach your target audience effectively. We provide comprehensive digital marketing services including SEO, social media management, targeted advertising, and content strategy to boost your online visibility and drive measurable business growth."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative border-y border-black/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900">Our Services</h2>
          <p className="text-neutral-600 text-lg">Comprehensive technology solutions designed to optimize your operations and accelerate growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-black/5 rounded-3xl p-8 hover:bg-[#fffaf7] transition-all hover:border-orange-500/30 flex flex-col h-full shadow-sm hover:shadow-[0_8px_30px_rgb(249,115,22,0.12)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{service.title}</h3>
              <h4 className="text-sm font-medium text-orange-600 mb-4">{service.subtitle}</h4>
              <p className="text-neutral-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
