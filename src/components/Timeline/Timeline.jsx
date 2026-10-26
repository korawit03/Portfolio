import React from 'react';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';
import { timelineData } from '../../data/portfolioData';
import './Timeline.css';

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={16} />
            <span>การศึกษา & ประสบการณ์</span>
          </div>
          <h2 className="section-title">เส้นทางที่ผ่านมา</h2>
          <p className="section-desc">บันทึกก้าวการเรียนรู้และการพัฒนาทักษะวิชาชีพในแต่ละช่วงเวลา</p>
        </div>

        {/* Timeline Path */}
        <div className="timeline-tree">
          {timelineData.map((item, index) => {
            const isEducation = item.type === 'education';

            return (
              <div key={index} className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-node">
                    {isEducation ? <GraduationCap size={18} /> : <Briefcase size={18} />}
                  </div>
                  <div className="timeline-line"></div>
                </div>

                <div className="timeline-content glass-panel">
                  <div className="timeline-meta">
                    <span className="timeline-period">
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    <span className="timeline-tag">
                      <Award size={13} />
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-institution">{item.institution}</div>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
