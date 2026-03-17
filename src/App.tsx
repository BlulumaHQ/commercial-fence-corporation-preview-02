import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhoWeAre from "./pages/WhoWeAre";
import WorkForUs from "./pages/WorkForUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Home | Commercial Fence Corporation</title>
          <meta name="description" content="Commercial Fence Corporation — Washington's premier commercial fencing partner. Specializing in industrial projects, public works, chain link, ornamental, automated gates and access controls. Trusted by the Seattle Seahawks and Washington State DOT." />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/work-for-us" element={<WorkForUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
