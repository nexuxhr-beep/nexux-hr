import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { label } from 'framer-motion/client';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', subject: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-bg gradient-mesh">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-300/15 rounded-full blur-3xl animate-float-delay" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-700 mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                Let's Start a{' '}
                <span className="text-gradient">Conversation</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Have a question, need a demo, or ready to get started? We'd love to hear from you.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Whether you want to schedule a demo, discuss enterprise pricing, or just ask a question — our team at <span className="font-semibold text-red-600">NexuxLabs</span> is ready to help.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red-50">
                      <Mail className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-sm text-gray-600 mt-1">support@nexuxhr.com</p>

                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red-50">
                      <Phone className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-sm text-gray-600 mt-1">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-600">Mon-Fri, 9am-6pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                      <MapPin className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Birtamode,
                        Jhapa<br />
                        Nepal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-10">
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[{ label: "facebook", href: "https://www.facebook.com/people/Nexux-HR/61590411146271/?mibextid=wwXIfr&rdid=rvVEWIuOjV1wH3t4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DsRqRDtbE%2F%3Fmibextid%3DwwXIfr" }, {
                      label: "Instagram", href: "https://www.instagram.com/nexuxhr?igsh=MWZodzVmdWhqdzBlOQ%3D%3D&utm_source=qr"
                    }, { label: "LinkedIn", href: "www.linkedin.com/company/nexux-hr" }].map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        className="rounded-xl bg-gray-100 px-4 py-2.5 text-xs font-semibold text-gray-600 transition-all hover:bg-red-50 hover:text-red-700"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="glass-card rounded-3xl p-8 sm:p-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 mb-6">
                        <CheckCircle2 className="h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                      <p className="mt-2 text-gray-600">We'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="demo">Book a Demo</option>
                          <option value="pricing">Pricing Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="gradient-primary inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-xl shadow-red-500/25 transition-all hover:shadow-2xl hover:-translate-y-0.5"
                      >
                        <Send className="h-5 w-5" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
