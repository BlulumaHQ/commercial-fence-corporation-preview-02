import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const sourceImages = {
  project1: 'https://static.wixstatic.com/media/cdfdd0_cff2c56210964bb18f0758a2da0ac894.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_cff2c56210964bb18f0758a2da0ac894.jpg',
  project5: 'https://static.wixstatic.com/media/cdfdd0_646d966107914d6aa6079fbd8b0aee81.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_avif,quality_auto/cdfdd0_646d966107914d6aa6079fbd8b0aee81.jpg',
};

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={sourceImages.project5} className="w-full h-full object-cover" alt="About us" />
        </div>
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative text-center">
          <span className="label-text text-[11px] text-primary mb-4 block">About Us</span>
          <h1 className="text-5xl md:text-7xl font-serif font-[800] text-secondary-foreground">Who We Are</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-text text-[11px] text-primary mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-[800] mb-8 leading-tight">"A Small Company Doing Really Big Things"</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Commercial Fence Corporation provides subcontracting and contracting services for chain link, wood, ornamental iron, and vinyl fence, as well as gate operator systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our projects range from major sports facilities (Virginia Mason Athletic Complex — the Seahawks training facility), baseball backstops and fields, to schools and universities, to correctional facilities and prisons, as well as many projects for the Washington State DOT, including the Alaskan Way Viaduct/Seattle Tunnel and the 520 floating bridge.
              </p>
              <div className="space-y-4 mt-8">
                {['25+ Years of Industry Experience', 'Washington State DOT Certified', 'Trusted by the Seattle Seahawks', 'Bonded, Licensed & Insured'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden card-shadow">
              <img src={sourceImages.project1} className="w-full h-full object-cover" alt="Commercial Fence project" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-[800] mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-secondary-foreground/60 mb-10 max-w-2xl mx-auto">Contact our team for a detailed estimate on your commercial or industrial fencing project.</p>
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
      </section>
    </div>
  );
};

export default WhoWeAre;
