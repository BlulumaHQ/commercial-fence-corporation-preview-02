import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-secondary">
        <div className="relative text-center">
          <span className="label-text text-[11px] text-primary mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif font-[800] text-secondary-foreground">Contact Us</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-[800] mb-6">Start Your Project</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">Discuss your industrial fencing requirements with our expert team. We provide detailed estimates and technical consultations for projects of any scale.</p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: 'Call Us', value: '(206) 767-7433', href: 'tel:2068767433' },
                  { icon: Mail, label: 'Email Us', value: 'info@fenceitall.com', href: 'mailto:info@fenceitall.com' },
                  { icon: MapPin, label: 'Office', value: 'Puyallup, Washington' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center card-shadow">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="label-text text-[10px] text-muted-foreground">{item.label}</p>
                      {'href' in item && item.href ? (
                        <a href={item.href} className="text-lg font-bold hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-lg font-bold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 md:p-12 rounded-2xl elevated-shadow">
              <h3 className="text-2xl font-serif font-[800] mb-6">Request A Free Estimate</h3>
              <form action="https://formspree.io/f/mbdabbql" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="label-text text-[11px]">Full Name</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="label-text text-[11px]">Company</label>
                    <input type="text" name="company" className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="label-text text-[11px]">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="label-text text-[11px]">Phone Number</label>
                  <input type="tel" name="phone" className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="label-text text-[11px]">Project Details</label>
                  <textarea name="message" rows={4} required className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none resize-none" />
                </div>
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded-lg hover:brightness-95 transition-all"
                >
                  Submit Request
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86234.2!2d-122.3!3d47.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490f72f95d3d4a7%3A0x6e3c3a6f0b4d5e0f!2sPuyallup%2C%20WA!5e0!3m2!1sen!1sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Commercial Fence Corporation - Puyallup, WA"
        />
      </section>
    </div>
  );
};

export default Contact;
