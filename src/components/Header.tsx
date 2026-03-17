import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import cfcLogo from '@/assets/cfc-logo.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Who We Are', path: '/who-we-are' },
  { label: 'Work For Us', path: '/work-for-us' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/95 backdrop-blur-md py-3 shadow-sm' : 'bg-secondary py-4'}`}>
      <div className="container-max px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={cfcLogo} alt="Commercial Fence Corporation" className="h-12 w-auto" />
          <div className="hidden sm:flex flex-col">
            <span className="text-base font-serif font-[800] tracking-tight leading-none text-secondary-foreground">COMMERCIAL FENCE</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Corporation</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`label-text text-[11px] transition-colors duration-200 hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-secondary-foreground'}`}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:2068767433" className="flex items-center gap-2 label-text text-[11px] text-secondary-foreground hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            (206) 767-7433
          </a>
          <Link to="/contact" className="px-6 py-2.5 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-lg hover:brightness-95 transition-all duration-200">
            Get A Quote
          </Link>
        </div>

        <button className="lg:hidden text-secondary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-t border-secondary-foreground/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block label-text text-sm ${location.pathname === item.path ? 'text-primary' : 'text-secondary-foreground'}`}
                >
                  {item.label}
                </Link>
              ))}
              <a href="tel:2068767433" className="block label-text text-sm text-secondary-foreground">
                (206) 767-7433
              </a>
              <Link to="/contact" className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-lg">
                Get A Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
