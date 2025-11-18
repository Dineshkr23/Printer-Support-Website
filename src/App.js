import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import BlogPost from "./components/blog/BlogPost";
import TroubleshootingBlogPost from "./components/blog/TroubleshootingBlogPost";
import ChoosingPrinterBlogPost from "./components/blog/ChoosingPrinterBlogPost";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import ProductPage from "./components/ProductPage";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ThankYouPage from "./components/ThankYouPage";
import BlogPage from "./components/BlogPage";
import GenuineInkTonerPage from "./components/GenuineInkTonerPage";
import HighSpeedLaserPrinterPage from "./components/HighSpeedLaserPrinterPage";
import A4PrinterPaperPage from "./components/A4PrinterPaperPage";
import PhotoPrinterPage from "./components/PhotoPrinterPage";
import ColorLaserJetPage from "./components/ColorLaserJetPage";
import ThankYou2 from "./ThankYou2";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blog/top-5-printer-maintenance-tips"
            element={<BlogPost />}
          />
          <Route
            path="/blog/troubleshooting-common-printer-issues"
            element={<TroubleshootingBlogPost />}
          />
          <Route
            path="/blog/choosing-the-right-printer"
            element={<ChoosingPrinterBlogPost />}
          />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product/1" element={<ProductPage />} />
          <Route path="/terms-condition" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/product/3" element={<GenuineInkTonerPage />} />
          <Route path="/product/2" element={<HighSpeedLaserPrinterPage />} />
          <Route path="/product/4" element={<A4PrinterPaperPage />} />
          <Route path="/product/5" element={<PhotoPrinterPage />} />
          <Route path="/product/6" element={<ColorLaserJetPage />} />
          <Route path="/thankyou2" element={<ThankYou2 />} />
          <Route
            path="*"
            element={<h1 className="text-center mt-5">404 - Page Not Found</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
