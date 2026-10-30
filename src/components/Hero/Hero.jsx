import React from 'react';
import { ArrowDown, Download, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-badge">
            <span className="status-dot"></span>
            <span>{personalData.status}</span>
          </div>

          <h2 className="hero-greeting">
            สวัสดีครับ, <span className="greeting-sub">ยินดีที่ได้รู้จัก</span>
          </h2>

          <h1 className="hero-title">
            ผม <span className="gradient-text">{personalData.name}</span> <br />
            {personalData.role}
          </h1>

          <p className="hero-subtitle">
            {personalData.subtitle}
          </p>

          <div className="learning-chip">
            <Sparkles size={16} className="text-accent" />
            <span>กำลังเรียนรู้ & อัปเดตสแตกสม่ำเสมอ</span>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <FolderGit2 size={18} />
              <span>ดูผลงาน</span>
            </a>

            <a
              href={personalData.contact.cvLink}
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                alert('กำลังเตรียมไฟล์ CV สำหรับดาวน์โหลดครับ!');
              }}
            >
              <Download size={18} />
              <span>ดาวน์โหลด CV</span>
            </a>

            <a href="#contact" className="hero-link-contact">
              ติดต่อฉัน →
            </a>
          </div>
        </div>

        {/* Hero Interactive Avatar Card */}
        <div className="hero-visual">
          <div className="avatar-glass-card">
            <div className="avatar-circle">
              {personalData.profileImage ? (
                <img
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="avatar-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
              ) : null}
              <span
                className="avatar-letter"
                style={{ display: personalData.profileImage ? 'none' : 'flex' }}
              >
                {personalData.avatarInitials}
              </span>
            </div>

            <div className="avatar-floating-badge badge-top-right">
              <CheckCircle2 size={16} color="#10b981" />
              <span>ทล.บ. คอมพิวเตอร์ ปี 2</span>
            </div>

            <div className="avatar-floating-badge badge-bottom-left">
              <span className="badge-pulse"></span>
              <span>กำลังศึกษา & พัฒนาโปรเจกต์</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator" aria-label="เลื่อนลงเพื่อดูเพิ่มเติม">
        <span className="scroll-text">เลื่อนดูเพิ่ม</span>
        <ArrowDown size={18} className="scroll-arrow" />
      </a>
    </section>
  );
}
