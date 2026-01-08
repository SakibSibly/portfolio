'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">About Me</h2>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-8 items-start mb-6">
              {/* Profile Photo */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-primary/20 bg-secondary/50">
                  <Image
                    src="/profile.jpg"
                    alt="Nazmus Sakib Sibly"
                    width={192}
                    height={192}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Bio Text */}
              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="text-primary font-semibold">Competitive Programmer</span> and <span className="text-primary font-semibold">Motivated Learner</span> currently pursuing my B.Sc (Eng.) in Computer Science and Engineering at Jashore University of Science and Technology with a CGPA of 3.82/4.00.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  With over <span className="text-primary font-semibold">600+ problems solved</span> across platforms like Codeforces and Leetcode, I specialize in algorithmic problem-solving and building efficient, scalable web applications. I've competed in prestigious contests including <a href="https://drive.google.com/file/d/1nreNAwOoj6mG5eQQH8Owl8z5OiYOz2-I/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">ICPC Asia Dhaka Regional 2024</a> (71st among 300+ teams) and various national-level programming competitions.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  My expertise spans full-stack development with modern technologies including React.js, Django, FastAPI, and Laravel. I'm particularly interested in machine learning applications, having worked on projects involving BERT LLM models for fake news detection and automated document generation systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
