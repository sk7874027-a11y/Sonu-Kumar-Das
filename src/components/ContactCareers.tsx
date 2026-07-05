import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Briefcase, ArrowRight } from 'lucide-react';

export default function ContactCareers() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'School ERP',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', company: '', email: '', phone: '', service: 'School ERP', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const jobs = [
    { title: "Frontend Developer (React/Angular)", type: "Full-time" },
    { title: "CRM Implementation Specialist", type: "Full-time" },
    { title: "UI/UX Designer", type: "Contract" }
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-50/50 border-t border-black/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900">Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Great Together.</span></h2>
          <p className="text-neutral-600 text-lg">Whether you're looking to upgrade your business technology or join a team of forward-thinking tech professionals, we want to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Ready to Elevate Your Business?</h3>
              <p className="text-neutral-600 mb-8">Fill out the form below, and our solutions team will reach out for a consultation.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                    <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors shadow-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">Company / Institution Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors shadow-sm" placeholder="Acme Corp" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors shadow-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors shadow-sm" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">Service Required</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none shadow-sm">
                    <option value="School ERP">School ERP</option>
                    <option value="CRM">Custom CRM</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none shadow-sm" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-[0_8px_20px_rgba(249,115,22,0.25)] transition-all flex items-center justify-center gap-2">
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-black/5 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center"><MapPin size={18} className="text-orange-500"/></div>
                  <span className="text-sm text-neutral-600">Bhubaneswar, Odisha, India</span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center"><Mail size={18} className="text-orange-500"/></div>
                  <a href="mailto:hello@elevatesolutions.com" className="text-sm text-neutral-600 hover:text-orange-600 transition-colors">hello@elevatesolutions.com</a>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center"><Phone size={18} className="text-orange-500"/></div>
                  <a href="tel:+917064137497" className="text-sm text-neutral-600 hover:text-orange-600 transition-colors">+91 70641 37497</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Careers Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Join Elevate Solutions</h3>
              <p className="text-neutral-600 leading-relaxed">
                We are always on the lookout for passionate developers, strategic thinkers, and tech innovators. If you thrive in a dynamic environment and want to build solutions that make a real-world impact, we’d love to meet you.
              </p>
            </div>

            <h4 className="text-lg font-semibold text-neutral-900 mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-orange-500" />
              Current Openings
            </h4>

            <div className="space-y-4 flex-grow">
              {jobs.map((job, index) => (
                <div key={index} className="group bg-white border border-black/5 rounded-2xl p-6 hover:bg-black/[0.02] hover:border-black/10 transition-all cursor-pointer shadow-sm hover:shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-neutral-900 group-hover:text-orange-600 transition-colors">{job.title}</h5>
                      <span className="text-sm text-neutral-500">{job.type} • Bhubaneswar (On-site / Hybrid)</span>
                    </div>
                    <ArrowRight size={20} className="text-neutral-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-2xl border border-orange-500/20 text-center">
              <p className="text-neutral-700 text-sm mb-4">Don't see a role that fits? Send us your resume anyway.</p>
              <a href="mailto:careers@elevatesolutions.com" className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-neutral-900 font-medium rounded-full hover:bg-neutral-50 transition-colors shadow-sm">
                careers@elevatesolutions.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
