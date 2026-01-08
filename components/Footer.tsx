'use client'

import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground">Nazmus Sakib Sibly</h3>
            <p className="text-sm text-muted-foreground">
              Competitive Programmer | Motivated Learner
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Building solutions, solving problems.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition">About</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition">Skills</a></li>
              <li><a href="#achievements" className="text-muted-foreground hover:text-primary transition">Achievements</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/SakibSibly" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/SakibSibly" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:sibly120@gmail.com" className="text-muted-foreground hover:text-primary transition">
                <FiMail size={20} />
              </a>
              <a href="https://codeforces.com/profile/SakibSibly" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <SiCodeforces size={20} />
              </a>
              <a href="https://leetcode.com/SakibSibly" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <SiLeetcode size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Nazmus Sakib Sibly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
