/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ContactCareers from './components/ContactCareers';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-700 font-sans selection:bg-orange-500/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ContactCareers />
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
