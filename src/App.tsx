import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ReactLenis } from "lenis/react";
import { Toaster } from "react-hot-toast";

// Analytics Utilities
import { initGA, initClarity, trackPageView } from "./utils/analytics";

// Shared Layout Components
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

// Page level Components
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { TreatmentDetail } from "./pages/TreatmentDetail";
import { Doctors } from "./pages/Doctors";
import { Gallery } from "./pages/Gallery";
import { Testimonials } from "./pages/Testimonials";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { BookAppointment } from "./pages/BookAppointment";

// Scroll To Top on Navigation Component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Analytics Router Observer
const AnalyticsObserver: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Initialize GA4 & Clarity once on mount
    initGA();
    initClarity();
  }, []);

  return (
    <HelmetProvider>
      <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
        <BrowserRouter>
          <ScrollToTop />
          <AnalyticsObserver />
          
          <div className="flex min-h-screen flex-col bg-background text-foreground antialiased font-sans">
            {/* Navigation Header */}
            <Navbar />
            
            {/* Main Page Layout */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<TreatmentDetail />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book" element={<BookAppointment />} />
                {/* Fallback to Home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            
            {/* Footer Location & Links */}
            <Footer />
            
            {/* Pop-up notifications (React Hot Toast) */}
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </BrowserRouter>
      </ReactLenis>
    </HelmetProvider>
  );
};

export default App;
