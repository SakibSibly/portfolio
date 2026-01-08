'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'
import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [cooldown, setCooldown] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')

  // Anti-spam: Cooldown timer
  const startCooldown = () => {
    setCooldown(60) // 60 seconds cooldown
    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Anti-spam: Check cooldown
    if (cooldown > 0) {
      setErrorMessage(`Please wait ${cooldown} seconds before sending another message`)
      return
    }

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields')
      return
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      // Replace these with your EmailJS credentials
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sakib',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      startCooldown() // Start cooldown after successful send
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact via email.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:sibly120@gmail.com"
                className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FiMail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">sibly120@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+8801729595483"
                className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FiPhone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground">+880 1729 595483</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FiMapPin className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Jashore, Bangladesh</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 text-foreground">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/SakibSibly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <FiGithub size={20} className="text-foreground" />
                </a>
                <a
                  href="https://linkedin.com/in/SakibSibly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <FiLinkedin size={20} className="text-foreground" />
                </a>
                <a
                  href="https://codeforces.com/profile/SakibSibly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <SiCodeforces size={20} className="text-foreground" />
                </a>
                <a
                  href="https://leetcode.com/SakibSibly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <SiLeetcode size={20} className="text-foreground" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Send a Message</h3>
            
            {status === 'success' && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/50 rounded-lg text-green-600 text-sm">
                ✓ Message sent successfully! I'll get back to you soon In-Sha-Allah in the email you provided.
              </div>
            )}
            
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-600 text-sm">
                {errorMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending' || cooldown > 0}
                className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' 
                  ? 'Sending...' 
                  : cooldown > 0 
                  ? `Wait ${cooldown}s` 
                  : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
