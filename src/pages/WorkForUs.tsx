import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HardHat, Shield, DollarSign, Users } from 'lucide-react';

const WorkForUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-secondary">
        <div className="relative text-center px-6">
          <span className="label-text text-[11px] text-primary mb-4 block">Careers</span>
          <h1 className="text-5xl md:text-7xl font-serif font-[800] text-secondary-foreground mb-4">Work For Us</h1>
          <p className="text-lg text-secondary-foreground/60 max-w-xl mx-auto">Join Washington's premier commercial fencing team and build critical infrastructure.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-[800] mb-6 leading-tight">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We're always looking for skilled, dedicated individuals to join our growing team.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: DollarSign, title: 'Competitive Pay', desc: 'Industry-leading wages for skilled tradespeople.' },
              { icon: Shield, title: 'Benefits Package', desc: 'Health, dental, and retirement options available.' },
              { icon: HardHat, title: 'Major Projects', desc: 'Work on landmark infrastructure across Washington.' },
              { icon: Users, title: 'Team Culture', desc: 'Small company feel with big project opportunities.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl card-shadow text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-[800] mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-2xl elevated-shadow">
            <h3 className="text-2xl font-serif font-[800] mb-2 text-center">Apply Now</h3>
            <p className="text-muted-foreground text-center mb-8">Send us your information and we'll be in touch.</p>
            <form action="https://formspree.io/f/mbdabbql" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="label-text text-[11px]">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="label-text text-[11px]">Phone</label>
                  <input type="tel" name="phone" className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="label-text text-[11px]">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="label-text text-[11px]">Experience & Skills</label>
                <textarea name="message" rows={4} required className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary transition-all outline-none resize-none" placeholder="Tell us about your relevant experience..." />
              </div>
              <input type="hidden" name="_subject" value="Job Application - Commercial Fence Corporation" />
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded-lg hover:brightness-95 transition-all"
              >
                Submit Application
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl font-serif font-[800] mb-6">Have Questions?</h2>
          <p className="text-lg text-secondary-foreground/60 mb-10">Reach out to us directly — we'd love to hear from you.</p>
          <Link to="/contact">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded-lg hover:brightness-95 transition-all"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WorkForUs;
