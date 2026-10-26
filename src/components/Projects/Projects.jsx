import React, { useState } from 'react';
import { FolderGit2, Star, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { projectsData } from '../../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Web App', 'UI / React', 'Python', 'Fullstack'];

  const filteredProjects = projectsData.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={16} />
            <span>ผลงาน</span>
          </div>
          <h2 className="section-title">สิ่งที่เคยสร้าง</h2>
          <p className="section-desc">โปรเจกต์ที่ทำขึ้นจริงเพื่อแก้ไขปัญหาให้ผู้คน ชุมชน และธุรกิจ</p>
        </div>

        {/* Filter Categories */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`project-tab-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'ทั้งหมด' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-top-meta">
                <span className="project-category-tag">{project.category}</span>
                <div className="project-top-right">
                  {project.isFeatured && (
                    <span className="badge badge-featured">
                      <Star size={12} fill="currentColor" /> Featured
                    </span>
                  )}
                  <span className="project-year">{project.year}</span>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>

              {project.highlight && (
                <div className="project-highlight">
                  <span>{project.highlight}</span>
                </div>
              )}

              <p className="project-description">{project.description}</p>

              {/* Tech Stack Pills */}
              <div className="project-tech-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-card-footer">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub →</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-live"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo →</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
