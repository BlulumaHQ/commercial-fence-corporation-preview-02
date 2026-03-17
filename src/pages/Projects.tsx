import { motion } from 'framer-motion';

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
  heroWide: 'https://static.wixstatic.com/media/cdfdd0_48b486ff4394440b9b5217467416fa9c.jpg/v1/fill/w_1920,h_800,al_c,q_85,enc_avif,quality_auto/cdfdd0_48b486ff4394440b9b5217467416fa9c.jpg',
};

const projects = [
  { title: 'Veterans Drive', img: sourceImages.chainLink, category: 'Public Works' },
  { title: 'UW Husky Ballpark', img: sourceImages.huskyBallpark, category: 'Athletic Facilities' },
  { title: 'Athletic Backstop Installation', img: sourceImages.backstop, category: 'Athletic Facilities' },
  { title: '520 Floating Bridge', img: sourceImages.project1, category: 'DOT Infrastructure' },
  { title: 'Security Perimeter', img: sourceImages.project2, category: 'High Security' },
  { title: 'Commercial Fencing', img: sourceImages.project3, category: 'Commercial' },
  { title: 'Correctional Facility', img: sourceImages.project4, category: 'High Security' },
  { title: 'Industrial Complex', img: sourceImages.project5, category: 'Industrial' },
  { title: 'Municipal Infrastructure', img: sourceImages.project6, category: 'Public Works' },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={sourceImages.heroWide} className="w-full h-full object-cover" alt="Projects" />
        </div>
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative text-center">
          <span className="label-text text-[11px] text-primary mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-serif font-[800] text-secondary-foreground">Projects</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="label-text text-[10px] text-primary mb-1 block">{project.category}</span>
                  <p className="text-secondary-foreground font-serif font-[800] text-xl">{project.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
