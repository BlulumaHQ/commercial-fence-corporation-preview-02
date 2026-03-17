import { Link } from 'react-router-dom';
import cfcLogo from '@/assets/cfc-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="container-max px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 mb-6">
              <img src={cfcLogo} alt="Commercial Fence Corporation" className="h-14 w-auto" />
            </Link>
            <p className="text-secondary-foreground/60 max-w-xs leading-relaxed text-sm">
              Providing specialized industrial fencing and automated gate solutions for major public and private sector projects across Washington State since 1998.
            </p>
          </div>
          <div>
            <h4 className="label-text text-xs mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/60">
              <li><Link to="/projects" onClick={handleLinkClick} className="hover:text-secondary-foreground transition-colors">Projects</Link></li>
              <li><Link to="/who-we-are" onClick={handleLinkClick} className="hover:text-secondary-foreground transition-colors">Who We Are</Link></li>
              <li><Link to="/work-for-us" onClick={handleLinkClick} className="hover:text-secondary-foreground transition-colors">Work For Us</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick} className="hover:text-secondary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="label-text text-xs mb-6 text-primary">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/60">
              <li>Puyallup, WA</li>
              <li><a href="tel:2068767433" className="hover:text-secondary-foreground transition-colors">(206) 767-7433</a></li>
              <li><a href="mailto:info@fenceitall.com" className="hover:text-secondary-foreground transition-colors">info@fenceitall.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-secondary-foreground/40 uppercase tracking-widest">
            © {currentYear} Commercial Fence Corporation. All rights reserved. | Web Design by{' '}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Bluluma</a>
            {' '}| Powered by SwiftLift
          </p>
          <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-[10px] text-secondary-foreground/40 hover:text-primary uppercase tracking-widest transition-colors">
            bluluma.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
