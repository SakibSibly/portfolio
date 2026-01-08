'use client'

import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

const education = [
  {
    degree: 'B.Sc (Eng.) in Computer Science and Engineering',
    institution: 'Jashore University of Science and Technology',
    year: '2021 - Present',
    cgpa: '3.82/4.00',
    link: 'https://just.edu.bd',
  },
  {
    degree: 'Higher Secondary School Certificate',
    institution: 'Govt. Science College',
    year: '2018 - 2020',
    cgpa: '5.00/5.00',
    link: 'https://www.gsctd.edu.bd/',
  },
]

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                  {edu.link ? (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      {edu.institution}
                    </a>
                  ) : (
                    <p className="text-sm text-primary font-medium">{edu.institution}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <FiAward className="text-primary" size={18} />
                  <span className="text-sm font-bold text-primary">CGPA {edu.cgpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
