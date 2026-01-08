'use client'

import { motion } from 'framer-motion'
import { FiAward, FiCode, FiExternalLink } from 'react-icons/fi'

const achievements = [
  {
    type: 'International',
    title: 'ICPC Asia Dhaka Regional Contest 2024',
    result: '71th among 300+ teams',
    icon: FiAward,
    links: [
      { label: 'ICPC Profile', url: 'https://icpc.global/ICPCID/VG98KSOVFBU7' },
      { label: 'Standings', url: 'https://icpc.global/regionals/finder/Dhaka-2025/standings' },
      { label: 'Certificate', url: 'https://drive.google.com/file/d/1nreNAwOoj6mG5eQQH8Owl8z5OiYOz2-I/view?usp=drive_link' },
    ],
  },
  {
    type: 'National',
    title: 'Khulna Regional Inter University Programming Contest 2024 (KRIUPC)',
    result: '22th position',
    icon: FiAward,
    links: [
      { label: 'Standings', url: 'https://toph.co/c/khulna-regional-inter-university-kriupc/standings' },
    ],
  },
  {
    type: 'National',
    title: 'KU CSE Fest 2022',
    result: '29th position',
    icon: FiAward,
    links: [
      { label: 'Standings', url: 'https://toph.co/contests/training/tkl9pz3/standings' },
    ],
  },
  {
    type: 'National',
    title: 'KUET Inter University Programming Contest 2025',
    result: '134th position',
    icon: FiAward,
    links: [
      { label: 'Standings', url: 'https://bapsoj.org/contests/miaki-presents-kuet-iupc-onsite-2025/standings' },
    ],
  },
  {
    type: 'Hackathon',
    title: 'BUET Inter University Hackathon 2024 (AI & API)',
    result: 'Participant',
    icon: FiCode,
  },
]

const onlineProfiles = [
  {
    platform: 'Codeforces',
    handle: 'SakibSibly',
    link: 'https://codeforces.com/profile/SakibSibly',
  },
  {
    platform: 'Leetcode',
    handle: 'SakibSibly',
    link: 'https://leetcode.com/SakibSibly',
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          Programming Contests Achievements & Awards
        </h2>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {achievement.type}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground mt-1 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-2">{achievement.result}</p>
                    {achievement.links && (
                      <div className="flex flex-wrap gap-2">
                        {achievement.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                          >
                            <FiExternalLink size={12} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Online Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-primary">Online Problem Solving Activities</h3>
          <div className="space-y-3 mb-4">
            {onlineProfiles.map((profile, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span className="text-sm text-foreground">
                  {profile.platform} Handle -{' '}
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    {profile.handle}
                  </a>
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Solved around <span className="text-primary font-semibold">600+ mathematical, algorithmic, and data-structure based problems</span> in different online judges
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
