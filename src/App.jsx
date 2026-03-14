import React, { useEffect, useState } from 'react';
import { SectionCard, Tag, SkillBar, TimelineItem, ProjectCard, ContactLink } from './components/ui';

export default function App() {
  const [config, setConfig] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('./config.json')
      .then((res) => {
        if (!res.ok) throw new Error('Unable to load config.json');
        return res.json();
      })
      .then(setConfig)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div className="center-message">{error}</div>;
  if (!config) return <div className="center-message">Loading portfolio...</div>;

  const { profile, highlights, skills, experience, projects, education, contact, socials } = config;

  return (
    <div className="page-shell">
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />

      <header className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">Open to opportunities</span>
          <h1>{profile.name}</h1>
          <p className="subtitle">{profile.title}</p>
          <p className="summary">{profile.summary}</p>
          <div className="hero-tags">
            {profile.focusAreas.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-btn" href={`mailto:${contact.email}`}>Contact Me</a>
            <a className="secondary-btn" href={contact.resumeUrl} target="_blank" rel="noreferrer">View Resume</a>
          </div>
        </div>
        <div className="hero-panel glass-card">
          <div className="avatar-ring">
            <img src={profile.photo} alt={profile.name} />
          </div>
          <div className="info-grid">
            <div>
              <span>Location</span>
              <strong>{contact.location}</strong>
            </div>
            <div>
              <span>Experience</span>
              <strong>{profile.experience}</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>{contact.email}</strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>{contact.phone}</strong>
            </div>
          </div>
        </div>
      </header>

      <main className="container stack-xl">
        <SectionCard title="Why work with me" subtitle="A compact snapshot built from the resume config.">
          <div className="highlight-grid">
            {highlights.map((item) => (
              <div key={item.title} className="mini-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="two-col">
          <SectionCard title="Core skills" subtitle="Update the values in public/config.json to refresh this section.">
            <div className="skills-stack">
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} value={skill.level} />
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Links" subtitle="Social and professional profiles.">
            <div className="contact-list">
              {socials.map((item) => (
                <ContactLink key={item.label} label={item.label} href={item.url} />
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard title="Experience" subtitle="Role timeline pulled from config.json">
          <div className="timeline">
            {experience.map((item) => (
              <TimelineItem key={`${item.company}-${item.role}`} item={item} />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Featured work" subtitle="Use this section for projects, achievements, or key responsibilities.">
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </SectionCard>

        <div className="two-col">
          <SectionCard title="Education" subtitle="Academic background">
            <div className="edu-stack">
              {education.map((item) => (
                <div key={item.degree} className="mini-card">
                  <h3>{item.degree}</h3>
                  <p>{item.institute}</p>
                  <span>{item.year}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Get in touch" subtitle="Ready to use as your portfolio contact block.">
            <div className="contact-panel">
              <p>{contact.pitch}</p>
              <div className="contact-list">
                <ContactLink label="Email" href={`mailto:${contact.email}`} text={contact.email} />
                <ContactLink label="Phone" href={`tel:${contact.phone}`} text={contact.phone} />
                <ContactLink label="Location" href="#" text={contact.location} />
              </div>
            </div>
          </SectionCard>
        </div>
      </main>
    </div>
  );
}
