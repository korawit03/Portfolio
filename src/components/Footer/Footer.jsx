import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-badge-small">N.</span>
            <span>Nattapol Portfolio</span>
          </div>
          <p className="footer-text">
            © 2026 Nattapol · สร้างด้วย HTML, CSS, React และกาแฟ ☕
          </p>
        </div>

        <div className="footer-right">
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="เลื่อนขึ้นบนสุด"
          >
            <span>กลับขึ้นด้านบน</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
