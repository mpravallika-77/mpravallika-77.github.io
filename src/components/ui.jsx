import React from 'react';

export function SectionCard({ title, subtitle, children }) {
  return (
    <section className="glass-card section-card">
      <div className="section-head">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export function SkillBar({ name, value }) {
  return (
    <div className="skill-row">
      <div className="skill-head">
        <span>{name}</span>
        <strong>{value}%</strong>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function TimelineItem({ item }) {
  return (
    <article className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-body">
        <div className="timeline-head">
          <div>
            <h3>{item.role}</h3>
            <p>{item.company}</p>
          </div>
          <span>{item.period}</span>
        </div>
        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span>{project.tag}</span>
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      {project.link ? (
        <a href={project.link} target="_blank" rel="noreferrer">Open</a>
      ) : null}
    </article>
  );
}

export function ContactLink({ label, href, text }) {
  return (
    <a className="contact-link" href={href} target={href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'} rel="noreferrer">
      <span>{label}</span>
      <strong>{text || href.replace('mailto:', '').replace('tel:', '')}</strong>
    </a>
  );
}
