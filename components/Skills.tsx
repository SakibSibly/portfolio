'use client'

import { motion } from 'framer-motion'
import { 
  SiC, SiCplusplus, SiPython, SiJavascript, SiPhp,
  SiHtml5, SiCss3, SiTailwindcss, SiReact,
  SiDjango, SiFastapi, SiLaravel,
  SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiDocker, SiLinux
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'PHP', icon: SiPhp },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'React.js', icon: SiReact },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Django', icon: SiDjango },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Laravel', icon: SiLaravel },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'NoSQL', icon: SiMongodb },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Linux', icon: SiLinux },
    ],
  },
]

const softSkills = [
  'Problem Solving',
  'Time Management',
  'Conversational English',
  'Self-Motivated',
  'Open Minded',
  'Team-Player',
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Skills & Technology</h2>
        
        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-4"
            >
              <h3 className="text-base font-semibold mb-3 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-md text-sm"
                    >
                      <Icon className="text-primary" size={14} />
                      <span className="text-foreground">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-primary">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
