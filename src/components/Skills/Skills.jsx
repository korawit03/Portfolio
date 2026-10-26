import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  FileCode2, 
  Atom, 
  Terminal, 
  GitBranch, 
  Server, 
  Database 
} from 'lucide-react';
import { FigmaIcon } from '../Icons';
import { skillsData } from '../../data/portfolioData';
import './Skills.css';

const iconMap = {
  Code2: Code2,
  FileCode2: FileCode2,
  Atom: Atom,
  Terminal: Terminal,
  GitBranch: GitBranch,
  Figma: FigmaIcon,
  Server: Server,
  Database: Database
};

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const filteredSkills = skillsData.filter((skill) => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={16} />
            <span>ทักษะ</span>
          </div>
          <h2 className="section-title">สิ่งที่ทำได้</h2>
          <p className="section-desc">ความเชี่ยวชาญ เทคโนโลยี และเครื่องมือที่เลือกใช้เพื่อส่งมอบผลงานคุณภาพ</p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            ทั้งหมด ({skillsData.length})
          </button>
          <button
            className={`filter-btn ${filter === 'expert' ? 'active' : ''}`}
            onClick={() => setFilter('expert')}
          >
            ถนัด
          </button>
          <button
            className={`filter-btn ${filter === 'proficient' ? 'active' : ''}`}
            onClick={() => setFilter('proficient')}
          >
            ใช้งานได้
          </button>
          <button
            className={`filter-btn ${filter === 'learning' ? 'active' : ''}`}
            onClick={() => setFilter('learning')}
          >
            กำลังเรียน
          </button>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const levelBadgeClass = 
              skill.category === 'expert' ? 'level-expert' :
              skill.category === 'proficient' ? 'level-proficient' : 'level-learning';

            return (
              <div key={index} className="skill-card glass-panel">
                <div className="skill-card-top">
                  <div className="skill-icon-wrap">
                    <IconComponent size={24} />
                  </div>
                  <span className={`skill-level-badge ${levelBadgeClass}`}>
                    {skill.level}
                  </span>
                </div>
                
                <h3 className="skill-name">{skill.name}</h3>

                {/* Micro Progress Bar */}
                <div className="skill-progress-bg">
                  <div 
                    className="skill-progress-bar"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
