'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Fake News Detection',
    role: 'Full Stack Developer',
    description: 'AI-powered system to detect false and fraudulent news that works as rumors for targeted news using BERT LLM Model.',
    tech: ['Django', 'BERT LLM Model', 'ORM', 'Tailwind CSS'],
    github: 'https://github.com/SakibSibly/FakeNewsDetection',
    live: '',
  },
  {
    title: 'JUST CSE Club Website',
    role: 'Full Stack Developer',
    description: 'Comprehensive web interface for the CSE Club of JUST with features for club activities and event engagement.',
    tech: ['Django REST Framework', 'React.js', 'ORM', 'Tailwind CSS'],
    github: 'https://github.com/SakibSibly/just-cse-club-backend',
    githubClient: 'https://github.com/SakibSibly/just-cse-club-frontend',
    live: 'https://just-cse-club.vercel.app',
  },
  {
    title: 'Auto Docs Backend',
    role: 'Backend Developer',
    description: 'Automated document generation system for university administration, reducing manual effort for student and alumni documents.',
    tech: ['Django REST Framework', 'Swagger UI', 'PostgreSQL'],
    github: 'https://github.com/SakibSibly/auto-docs-server',
    live: 'https://auto-docs.onrender.com',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-xs text-primary font-medium mb-2">{project.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                    >
                      <FiGithub size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.githubClient && (
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                    >
                      <FiGithub size={16} />
                      <span>Client</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                    >
                      <FiExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
