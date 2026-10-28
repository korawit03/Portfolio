import React from 'react';
import { UserCheck, Sparkles, Terminal, Camera, Music, Coffee } from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={16} />
            <span>เกี่ยวกับ</span>
          </div>
          <h2 className="section-title">ใครคือผม?</h2>
          <p className="section-desc">เบื้องหลังโค้ด แนวคิด และสิ่งที่ขับเคลื่อนการทำงานของผมในทุกๆ วัน</p>
        </div>

        <div className="about-grid">
          {/* Main Story Box */}
          <div className="about-story-card glass-panel">
            <div className="story-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="story-title">terminal.korawit</span>
            </div>

            <div className="story-content">
              {personalData.bio.map((paragraph, index) => {
                // Parse markdown-style **bold** text cleanly
                const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={index} className="story-paragraph">
                    {parts.map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return (
                          <strong key={i} className="highlight-text">
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }
                      return part;
                    })}
                  </p>
                );
              })}

              <div className="hobby-tags">
                <span className="hobby-chip"><Camera size={14} /> ถ่ายรูป</span>
                <span className="hobby-chip"><Music size={14} /> กีตาร์</span>
                <span className="hobby-chip"><Coffee size={14} /> กาแฟ & คาเฟ่</span>
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="about-stats-container">
            {personalData.stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-panel">
                <div className="stat-number gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
