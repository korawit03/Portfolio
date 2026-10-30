import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, MessageSquare, Loader } from 'lucide-react';
import { GithubIcon } from '../Icons';
import confetti from 'canvas-confetti';
import { personalData } from '../../data/portfolioData';
import './Contact.css';

const WEB3FORMS_KEY = '831e8384-9a9a-42a7-aa8a-489260adc45a';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'say-hi',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    setError('');

    try {
      const purposeLabel = {
        'say-hi': 'ทักทาย / แลกเปลี่ยนมุมมอง',
        'consult': 'ปรึกษา / สอบถามทั่วไป',
        'project-talk': 'พูดคุยแลกเปลี่ยนเรื่องโปรเจกต์',
        'internship': 'ติดต่อโอกาสฝึกงาน / ร่วมงาน',
      }[formData.purpose] || formData.purpose;

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Portfolio] ${purposeLabel} — จาก ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: `วัตถุประสงค์: ${purposeLabel}\n\n${formData.message}`,
          botcheck: '',
        }),
      });

      const data = await res.json();
      if (data.success) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', purpose: 'say-hi', message: '' });
        }, 5000);
      } else {
        setError('ส่งไม่สำเร็จ กรุณาลองใหม่อีกครั้งครับ');
      }
    } catch {
      setError('เกิดข้อผิดพลาด กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตครับ');
    } finally {
      setIsLoading(false);
    }
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

                <button type="submit" className="btn btn-primary btn-submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader size={18} className="spin" />
                      <span>กำลังส่ง...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>ส่งข้อความ</span>
                    </>
                  )}
                </button>

                {error && (
                  <div className="form-error-msg">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
