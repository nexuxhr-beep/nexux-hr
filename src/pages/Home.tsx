import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Users, Clock, CalendarDays, DollarSign,
  BarChart3, Star, CheckCircle2, Shield, Fingerprint
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const features = [
  { icon: Users, title: 'Employee Management', desc: 'Centralize all employee data, documents, and records in one secure platform.' },
  { icon: Clock, title: 'Attendance Tracking', desc: 'Automated time tracking with geolocation, biometric integration, and real-time reports.' },
  { icon: CalendarDays, title: 'Leave Management', desc: 'Streamlined leave requests, approvals, and balance tracking with calendar views.' },
  { icon: DollarSign, title: 'Payroll Processing', desc: 'Automated payroll calculations, tax compliance, and direct deposit integration.' },
  { icon: Fingerprint, title: 'Biometric Integration', desc: 'Secure biometric authentication for attendance and access control.' },
  { icon: BarChart3, title: 'Analytics & Reports', desc: 'Powerful insights with customizable dashboards and automated reporting.' },
];

const stats = [
  { number: '6', label: 'Core Modules' },
  { number: '99.9%', label: 'Uptime Target' },
  { number: '10x', label: 'Faster HR Ops' },
  { number: '1', label: 'Unified Platform' },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of People, TechVault',
    text: 'NexuxHR transformed our HR operations. What used to take days now takes minutes. The automation is incredible.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'HR Director, Nextera',
    text: 'The best HR platform we\'ve ever used. The interface is intuitive and the support team is world-class.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'COO, DataSync',
    text: 'We reduced HR admin time by 70% after switching to NexuxHR. It\'s been a game-changer for our growing team.',
    rating: 5,
  },
];

const plans = [
  { name: 'Free', price: 0, features: ['Up to 10 employees', 'Basic attendance', 'Leave management', 'Email support'], per: '/month' },
  { name: 'Business', price: 4, features: ['Up to 150 employees', 'Advanced analytics', 'Payroll processing', 'Priority support', 'API access'], popular: true, per: '/employee/month' },
  { name: 'Enterprise', price: 7, features: ['Up to 400 employees', 'Custom integrations', 'Dedicated manager', '24/7 phone support', 'SLA guarantee', 'On-premise option'], per: '/employee/month' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ─── SAAS HERO (2-COLUMN, NO IMAGE) ─── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_46%_at_50%_0%,rgba(59,130,246,0.16),transparent_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800f_1px,transparent_1px),linear-gradient(to_bottom,#8080800f_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_85%_60%_at_50%_0%,#000_55%,transparent_100%)]" />

        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-0 lg:pt-32">
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 shadow-sm"
            >
              Pre-launch access by NexuxLabs
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-7 max-w-xl text-[2.65rem] font-black leading-[1.03] tracking-tight text-gray-900 sm:text-6xl lg:text-[4.9rem]"
            >
              Smart HR Management
              <br className="hidden sm:block" />
              <span className="text-blue-600">for Modern Teams</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-gray-500 sm:text-xl"
            >
              Run employee operations, attendance, leave, payroll, biometric, and performance from a single workspace built for speed and clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/pricing"
                className="gradient-primary inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Join Waitlist
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-100 px-10 py-4 text-base font-bold text-gray-900 transition-all hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50"
              >
                Book Demo
              </Link>
            </motion.div>
          </div>

          {/* Right-side product system visualization (no image) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex min-h-[420px] items-center justify-center sm:min-h-[500px]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
              className="absolute h-[18rem] w-[18rem] rounded-full border border-blue-100 sm:h-[22rem] sm:w-[22rem]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
              className="absolute h-[13rem] w-[13rem] rounded-full border border-blue-200/80 sm:h-[16rem] sm:w-[16rem]"
            />

            <div className="absolute h-2.5 w-2.5 rounded-full bg-blue-500" />
            <div className="absolute h-1.5 w-1.5 -translate-x-[9rem] -translate-y-[2rem] rounded-full bg-blue-300 sm:-translate-x-[11rem]" />
            <div className="absolute h-1.5 w-1.5 translate-x-[8.5rem] translate-y-[3rem] rounded-full bg-blue-300 sm:translate-x-[10.5rem]" />

            <div className="w-full max-w-sm space-y-6">
              {[
                'Employee Management',
                'Attendance & Leave',
                'Payroll Automation',
                'Biometric Integration',
                'Performance Insights',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-gray-600 sm:text-base">{item}</span>
                  <span className="h-px w-20 bg-gradient-to-r from-blue-200 to-transparent sm:w-24" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRODUCT OVERVIEW ─── */}
      <section className="relative py-24 gradient-bg gradient-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-3xl blur-2xl" />
                <div className="relative glass-card rounded-3xl p-3 shadow-2xl">
                  <img
                    src="/images/team-dashboard.png"
                    alt="NexuxHR Team Dashboard"
                    className="rounded-2xl w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
                  All-in-One Platform
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Everything You Need to Manage Your{' '}
                  <span className="text-gradient">Workforce</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  From onboarding to offboarding, NexuxHR provides a unified platform that automates repetitive tasks and empowers your HR team to focus on what matters most — your people.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="mt-8 space-y-4">
                  {['Centralized employee database', 'Automated workflows & approvals', 'Real-time analytics & insights', 'Enterprise-grade security'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Link
                  to="/features"
                  className="mt-8 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Explore All Features
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
                Features
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Powerful Tools for{' '}
                <span className="text-gradient">Every HR Need</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything your HR team needs to work smarter, not harder.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group glass-card rounded-2xl p-8 transition-all hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="relative py-20 gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-white sm:text-5xl">{stat.number}</p>
                  <p className="mt-2 text-sm font-medium text-white/70">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS (beta feedback) ─── */}
      <section className="relative py-24 gradient-bg gradient-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
                Early Feedback
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What Our Beta Users{' '}
                <span className="text-gradient">Are Saying</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-sm">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING PREVIEW ─── */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
                Pricing
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Simple, Transparent{' '}
                <span className="text-gradient">Pricing</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Per-employee pricing. Start free, scale as you grow.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`relative rounded-3xl p-8 h-full flex flex-col ${plan.popular
                    ? 'gradient-primary text-white shadow-2xl shadow-blue-500/25 ring-4 ring-blue-500/20'
                    : 'glass-card'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-blue-700 shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                      {plan.per}
                    </span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${plan.popular ? 'text-white/80' : 'text-blue-500'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/pricing"
                    className={`mt-8 block rounded-2xl py-3.5 text-center text-sm font-semibold transition-all ${plan.popular
                      ? 'bg-white text-blue-700 hover:bg-gray-50 shadow-lg'
                      : 'gradient-primary text-white shadow-lg shadow-blue-500/25 hover:shadow-xl'
                      }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card-dark rounded-full px-4 py-2 text-sm font-medium text-white/90 mb-6">
              <Shield className="h-4 w-4" />
              <span>14-Day Free Trial — No Credit Card Required</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
              Ready to Simplify<br />HR Management?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Be among the first to experience NexuxHR when we launch. Join the waitlist and get early access with exclusive pricing.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-xl transition-all hover:bg-gray-50 hover:-translate-y-1 hover:shadow-2xl"
              >
                Join Waitlist
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1"
              >
                Talk to Sales
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
