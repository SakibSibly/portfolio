'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiCode, FiDownload } from 'react-icons/fi'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center pt-20 pb-12 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Nazmus Sakib Sibly
          </h1>
          <p className="text-lg md:text-xl text-primary font-semibold mb-6">
            Competitive Programmer | Explorer
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <a href="mailto:sibly120@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FiMail size={16} />
              sibly120@gmail.com
            </a>
            <a href="tel:+8801729595483" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FiPhone size={16} />
              +880 1729 595483
            </a>
            <span className="flex items-center gap-2">
              <FiMapPin size={16} />
              Jashore, Bangladesh
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.a
              href="https://github.com/SakibSibly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-colors text-sm"
            >
              <FiGithub size={18} />
              <span className="text-foreground">SakibSibly</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/SakibSibly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-colors text-sm"
            >
              <FiLinkedin size={18} />
              <span className="text-foreground">SakibSibly</span>
            </motion.a>
            <motion.a
              href="https://codeforces.com/profile/SakibSibly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-colors text-sm"
            >
              <SiCodeforces size={18} />
              <span className="text-foreground">Codeforces</span>
            </motion.a>
            <motion.a
              href="https://leetcode.com/SakibSibly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-colors text-sm"
            >
              <SiLeetcode size={18} />
              <span className="text-foreground">Leetcode</span>
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <motion.a
              href="/resumes/Nazmus-Sakib-Sibly-Resume.pdf"
              download="Nazmus-Sakib-Sibly-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <FiDownload size={18} />
              Download Resume
            </motion.a>

            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm">
              <FiCode className="text-primary" size={20} />
              <span className="text-foreground font-medium">600+ Problems Solved Across Multiple Platforms</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
