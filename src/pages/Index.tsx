import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Building2, HardHat, ChevronRight, Phone, Mail, MapPin, Fence, Lock, Wrench } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import servicesGates from '@/assets/services-gates.jpg';
import servicesPublicWorks from '@/assets/services-public-works.jpg';

const ease = [0.25, 0.1, 0.25, 1] as const;

const sourceImages = {
  chainLink: 'https://static.wixstatic.com/media/cdfdd0_1b8c45092ea6409dace6a141ab0e29eb.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_1b8c45092ea6409dace6a141ab0e29eb.jpg',
  huskyBallpark: 'https://static.wixstatic.com/media/cdfdd0_4dd513d032bb4fae8bc01c879341ea28.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_4dd513d032bb4fae8bc01c879341ea28.jpg',
  backstop: 'https://static.wixstatic.com/media/cdfdd0_cb78081f0ae3479eac9ace5e49e19e9b.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_cb78081f0ae3479eac9ace5e49e19e9b.jpg',
  project1: 'https://static.wixstatic.com/media/cdfdd0_cff2c56210964bb18f0758a2da0ac894.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_cff2c56210964bb18f0758a2da0ac894.jpg',
  project2: 'https://static.wixstatic.com/media/cdfdd0_5fd20672401b407eb0990ffcd12af504.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_5fd20672401b407eb0990ffcd12af504.jpg',
  project3: 'https://static.wixstatic.com/media/cdfdd0_ee5cc7d55e4045a2a1599a13a3798fc6.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_ee5cc7d55e4045a2a1599a13a3798fc6.jpg',
  project4: 'https://static.wixstatic.com/media/cdfdd0_79fcc6694f9c450cb1b5b79d9ebc86d5.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_79fcc6694f9c450cb1b5b79d9ebc86d5.jpg',
  project5: 'https://static.wixstatic.com/media/cdfdd0_646d966107914d6aa6079fbd8b0aee81.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_646d966107914d6aa6079fbd8b0aee81.jpg',
  project6: 'https://static.wixstatic.com/media/cdfdd0_e73aaa45424643c384e60dec1c7739f3.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_e73aaa45424643c384e60dec1c7739f3.jpg',
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-svh flex items-center pt-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-30">
          <img src={heroBg} className="w-full h-full object-cover" alt="Industrial fencing installation" loading="eager" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        <div className="relative container-max px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 label-text text-[11px] mb-8">
              Industrial & Public Works
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-[800] text-secondary-foreground leading-[0.9] mb-8">
              A small company doing{' '}
              <span className="text-primary">really big things.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/70 mb-10 leading-relaxed max-w-2xl">
              Specializing in high-security industrial projects, public works, and automated access controls for Washington's most critical infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded-lg hover:brightness-95 transition-all duration-200 w-full sm:w-auto"
                >
                  Request Commercial Quote
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent border-2 border-secondary-foreground text-secondary-foreground font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-secondary-foreground hover:text-secondary transition-all duration-200 w-full sm:w-auto"
                >
                  View Our Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-muted py-12 border-b border-border">
        <div className="container-max px-6 md:px-12">
          <p className="label-text text-[10px] text-muted-foreground mb-8 text-center tracking-[0.3em]">Trusted By Industry Leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-50">
            {['Washington State DOT', 'Seattle Seahawks', 'University of Washington', 'Alaskan Way Viaduct'].map((name) => (
              <div key={name} className="text-center font-serif font-[800] text-lg md:text-xl">{name}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="label-text text-[11px] text-primary mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-serif font-[800] mb-6 leading-tight">Comprehensive Security Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">From correctional facilities to major sports stadiums, we provide the perimeter security required for high-stakes environments.</p>
            </div>
            <Link to="/projects" className="hidden md:block px-6 py-3 border-2 border-foreground text-foreground font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-foreground hover:text-background transition-all">
              All Projects
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Industrial Chain Link', desc: 'High-grade security fencing for warehouses, manufacturing hubs, and logistics centers.', img: sourceImages.chainLink, icon: Shield },
              { title: 'Automated Access', desc: 'State-of-the-art gate operator systems and integrated access control for secure entry.', img: servicesGates, icon: Building2 },
              { title: 'Public Works', desc: 'Specialized subcontracting for DOT projects, bridges, and municipal infrastructure.', img: servicesPublicWorks, icon: HardHat },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <card.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-2xl font-serif font-[800] leading-tight">{card.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Services List */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="label-text text-[11px] text-primary mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-[800] mb-6 leading-tight">Full Range of Fencing Solutions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Fence, label: 'Chain Link Fence' },
              { icon: Wrench, label: 'Wood Fence' },
              { icon: Shield, label: 'Ornamental Metal Fence' },
              { icon: Building2, label: 'Architectural Wire Fence' },
              { icon: HardHat, label: 'Athletic Fields & Backstops' },
              { icon: Lock, label: 'Automated Entry Systems & Gates' },
              { icon: Shield, label: 'High Security Fencing' },
              { icon: HardHat, label: 'Vinyl Fence' },
            ].map((service) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-card p-6 rounded-xl card-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-sm">{service.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-text text-[11px] text-primary mb-4 block">Proven Track Record</span>
              <h2 className="text-4xl md:text-5xl font-serif font-[800] mb-8 leading-tight">Proven Expertise in the Pacific Northwest</h2>
              <div className="space-y-8">
                {[
                  { label: 'Major Infrastructure', text: 'Key partner for the 520 Floating Bridge and Seattle Tunnel projects.' },
                  { label: 'Elite Athletics', text: 'Contracted for the Virginia Mason Athletic Complex (Seahawks Training).' },
                  { label: 'Public Safety', text: 'Specialized security for correctional facilities and prisons.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-sm text-primary mb-1 font-sans">{item.label}</h4>
                      <p className="text-secondary-foreground/60 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded-lg hover:brightness-95 transition-all"
                  >
                    Request Commercial Quote
                  </motion.button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img src={sourceImages.project1} className="w-full h-full object-cover" alt="Project site" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-5xl font-serif font-[800] text-primary">25+</p>
                <p className="label-text text-xs">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Preview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <span className="label-text text-[11px] text-primary mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-serif font-[800] mb-6 leading-tight">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From major sports facilities to correctional institutions, our portfolio spans Washington's most demanding projects.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: sourceImages.huskyBallpark, label: 'UW Husky Ballpark' },
              { img: sourceImages.backstop, label: 'Athletic Backstop' },
              { img: sourceImages.project3, label: 'Security Installation' },
            ].map((project) => (
              <motion.div
                key={project.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden card-shadow"
              >
                <img src={project.img} alt={project.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-secondary-foreground font-serif font-[800] text-xl">{project.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm rounded-lg hover:brightness-95 transition-all inline-block">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-muted" id="contact">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="label-text text-[11px] text-primary mb-4 block">Get Started</span>
              <h2 className="text-4xl md:text-5xl font-serif font-[800] mb-8 leading-tight">Start Your Project</h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">Discuss your industrial fencing requirements with our expert team. We provide detailed estimates and technical consultations.</p>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Call Us', value: '(206) 767-7433', href: 'tel:2068767433' },
                  { icon: Mail, label: 'Email Us', value: 'info@fenceitall.com', href: 'mailto:info@fenceitall.com' },
                  { icon: MapPin, label: 'Office', value: 'Puyallup, Washington', href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center card-shadow">
                      <item.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="label-text text-[10px] text-muted-foreground">{item.label}</p>
                      {item.href ? (
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

export default HomePage;
