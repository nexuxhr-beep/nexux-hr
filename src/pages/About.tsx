import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Shield, Lightbulb, Users, ArrowRight, CheckCircle2, Zap, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const values = [
  { icon: Heart, title: 'People First', desc: 'We believe technology should serve people, not the other way around. Every feature we build starts with empathy.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We push boundaries and embrace new ideas. Our team constantly explores better ways to solve HR challenges.' },
  { icon: Shield, title: 'Trust & Security', desc: 'Your data is sacred. We maintain the highest security standards and complete transparency in everything we do.' },
  { icon: Users, title: 'Collaboration', desc: 'Great products come from diverse teams working together. We foster an inclusive environment where every voice matters.' },
  { icon: Zap, title: 'Simplicity', desc: 'Complex problems deserve simple solutions. We cut through complexity to deliver intuitive experiences.' },
  { icon: Globe, title: 'Global Mindset', desc: 'We build for the world. Our platform supports diverse workforces across regions, languages, and cultures.' },
];

const milestones = [
  { year: '2023', title: 'Founded', desc: 'HRFlow was born at NexuxLabs from a simple idea: HR should be easy.' },
  { year: '2024', title: 'Seed Funding', desc: 'Raised $5M to build the future of HR management.' },
  { year: '2025', title: 'Beta Launch', desc: '100+ companies joined our beta program.' },
  { year: '2026', title: 'Public Launch', desc: 'Launching to the world — and this is just the beginning.' },
];

export default function About() {
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
                About HRFlow
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                We're on a Mission to{' '}
                <span className="text-gradient">Humanize HR</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We believe that managing people shouldn't be complicated. HRFlow was built by{' '}
                <span className="font-semibold text-red-600">NexuxLabs</span>{' '}
                to give HR teams superpowers — so they can focus on what really matters: their people.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <AnimatedSection direction="right">
              <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-700 mb-4">
                Our Story
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Born From Frustration,{' '}
                <span className="text-gradient">Built With Purpose</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                At <span className="font-semibold text-gray-900">NexuxLabs</span>, our team spent years wrestling with clunky HR systems that made simple tasks feel impossible. Spreadsheets for attendance, separate tools for payroll, another system for recruitment — it was chaos.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                So we decided to build what we always wished existed: a single, beautiful, powerful platform that brings all of HR together. HRFlow is the result of countless hours of research, design, and engineering — built by people who truly understand HR challenges.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Today, we're preparing to launch HRFlow to the world, and we couldn't be more excited. Join us on this journey to transform how companies manage their most important asset — their people.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-3xl blur-2xl" />
                <div className="relative glass-card rounded-3xl p-8">
                  <div className="space-y-6">
                    {milestones.map((m, i) => (
                      <motion.div
                        key={m.year}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white text-sm font-bold shadow-lg shadow-red-500/20">
                            {m.year.slice(2)}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{m.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{m.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 gradient-bg gradient-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-10 h-full"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 mb-6 shadow-lg shadow-red-500/20">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                  To empower organizations of all sizes with intelligent, intuitive HR tools that free people professionals to focus on what matters most — building thriving workplaces where every person can do their best work.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-10 h-full"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-800 mb-6 shadow-lg shadow-red-500/20">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                  A world where HR technology is a strategic advantage, not an administrative burden. We envision every company — from 10 employees to 10,000 — having access to world-class HR tools that were once reserved for Fortune 500 companies.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-700 mb-4">
                Why HRFlow
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Built Different,{' '}
                <span className="text-gradient">Built Better</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Here's what sets us apart from every other HR platform on the market.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Modern Design', desc: 'A beautiful interface that your team will actually enjoy using — no training needed.' },
              { title: 'Lightning Fast', desc: 'Built with modern tech for blazing performance. No more waiting for pages to load.' },
              { title: 'AI-Powered Insights', desc: 'Smart analytics that predict trends and help you make data-driven decisions.' },
              { title: 'Enterprise Security', desc: 'SOC 2 compliant, encrypted, and regularly audited. Your data is safe with us.' },
              { title: 'Scales With You', desc: 'From startup to enterprise, HRFlow grows with your team. No migration needed.' },
              { title: 'World-Class Support', desc: 'Real humans, real fast. Our support team has a 98% satisfaction rating.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="flex items-start gap-4 glass-card rounded-2xl p-6">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-red-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NexuxLabs Section */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-900/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-800/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-medium uppercase tracking-widest text-red-400 mb-4">Powered By</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              NexuxLabs
            </h2>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              NexuxHR was started in process early 2025 as randomly, when NexuxLabs started the project was major highlight for NexuxLabs and started to working on it on the end of 2025
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {[
                { label: 'Founded', value: '2025' },
                { label: 'Products', value: '2' },
                { label: 'Team Members', value: '15+' },
                { label: 'Countries', value: '1' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 gradient-bg gradient-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-700 mb-4">
                Our Values
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                The Principles That{' '}
                <span className="text-gradient">Guide Us</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="glass-card rounded-2xl p-8 h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100">
                    <value.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed text-sm">{value.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
              Join Us in Transforming HR
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Be among the first to experience HRFlow. Sign up for early access and help shape the future of HR management.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-red-700 shadow-xl transition-all hover:bg-gray-50 hover:-translate-y-1"
              >
                Get Early Access
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
