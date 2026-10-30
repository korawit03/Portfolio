import React, { useState } from 'react';
import { Mail, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import confetti from 'canvas-confetti';
import { personalData } from '../../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'say-hi',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', purpose: 'say-hi', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={16} />
            <span>ติดต่อ</span>
          </div>
          <h2 className="section-title">คุยกันได้เลย</h2>
          <p className="section-desc">
            ไม่ว่าจะมีโปรเจกต์, คำถาม, หรือแค่อยากทักทาย — ส่งข้อความมาได้เลยครับ
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information & Channels */}
          <div className="contact-info-panel glass-panel">
            <h3 className="contact-panel-title">ช่องทางติดต่อโดยตรง</h3>
            <p className="contact-panel-desc">
              พร้อมตอบกลับภายใน 24 ชั่วโมง สามารถส่งอีเมลหรือทักทายผ่านทางช่องทางโซเชียลมีเดียได้เลยครับ
            </p>

            <div className="contact-links-list">
              <a href={`mailto:${personalData.contact.email}`} className="contact-link-item">
                <div className="contact-icon-circle">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-link-label">อีเมล</div>
                  <div className="contact-link-val">{personalData.contact.email}</div>
                </div>
              </a>

              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <div className="contact-icon-circle">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-val">github.com/korawit03</div>
                </div>
              </a>

            </div>

            <div className="contact-status-card">
              <div className="pulse-indicator"></div>
              <span>เปิดรับการแลกเปลี่ยนความรู้ & พูดคุยโปรเจกต์</span>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-panel glass-panel">
            {isSubmitted ? (
              <div className="form-success-message">
                <div className="success-icon-wrap">
                  <CheckCircle size={48} color="#10b981" />
                </div>
                <h3>ขอบคุณสำหรับข้อความครับ!</h3>
                <p>ข้อความของคุณถูกส่งเรียบร้อยแล้ว ผมจะติดต่อกลับโดยเร็วที่สุดครับ</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">ชื่อ *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="เช่น สมชาย ใจดี"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">อีเมล *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="purpose">ฉันต้องการ...</label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                  >
                    <option value="say-hi">ทักทาย / แลกเปลี่ยนมุมมอง</option>
                    <option value="consult">ปรึกษา / สอบถามทั่วไป</option>
                    <option value="project-talk">พูดคุยแลกเปลี่ยนเรื่องโปรเจกต์</option>
                    <option value="internship">ติดต่อโอกาสฝึกงาน / ร่วมงาน</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">ข้อความ *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="รายละเอียดโปรเจกต์ หรือสิ่งที่คุณต้องการให้ผมช่วย..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <Send size={18} />
                  <span>ส่งข้อความ</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
