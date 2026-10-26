import React from 'react';
import { MessageSquareQuote, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/portfolioData';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquareQuote size={16} />
            <span>รีวิว</span>
          </div>
          <h2 className="section-title">คนที่เคยทำงานด้วยพูดว่า...</h2>
          <p className="section-desc">ความประทับใจจริงจากลูกค้า อาจารย์ และเพื่อนร่วมชั้นที่เคยร่วมงานกัน</p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div key={index} className="testimonial-card glass-panel">
              <Quote className="quote-icon" size={32} />

              <p className="testimonial-quote">
                "{item.quote}"
              </p>

              <div className="testimonial-author">
                <div className="author-avatar-initial">
                  {item.initial}
                </div>
                <div className="author-info">
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
