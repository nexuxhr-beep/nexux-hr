import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, Clock, CalendarDays, DollarSign, UserPlus, BarChart3,
  TrendingUp, ArrowRight, CheckCircle2, Shield, Layers,
  Settings, FileText, Bell, PieChart, Target, Award
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const mainFeatures = [
  {
    icon: Users,
    title: 'Employee Management',
    desc: 'A single source of truth for all employee data. Manage profiles, documents, org charts, and more — all in one place.',
    details: ['Centralized employee profiles', 'Document management', 'Organizational charts', 'Custom fields & workflows', 'Employee self-service portal'],
    gradient: 'from-red-500 to-red-700',
  },
  {
    icon: Clock,
    title: 'Attendance Tracking',
    desc: 'Real-time attendance monitoring with multiple check-in methods. GPS, biometric, and QR code support.',
    details: ['GPS-based check-in', 'Biometric integration', 'Overtime tracking', 'Shift management', 'Real-time dashboards'],
    gradient: 'from-red-600 to-red-800',
  },
  {
    icon: CalendarDays,
    title: 'Leave Management',
    desc: 'Streamlined leave requests with smart approval workflows. Calendar views and automatic balance calculations.',
    details: ['Multi-level approvals', 'Leave type customization', 'Calendar integration', 'Auto balance calculation', 'Holiday management'],
    gradient: 'from-red-400 to-red-600',
  },
  {
    icon: DollarSign,
    title: 'Payroll Processing',
    desc: 'Automated payroll with tax compliance, deductions, and direct deposit. Accurate, on time, every time.',
    details: ['Auto tax calculations', 'Direct deposit', 'Pay stub generation', 'Compliance management', 'Multi-currency support'],
    gradient: 'from-red-500 to-red-700',
  },
  {
    icon: TrendingUp,
    title: 'Performance Reviews',
    desc: 'Continuous feedback and goal tracking. Run 360° reviews and help your team grow with structured performance management.',
    details: ['360° feedback', 'Goal setting & tracking', 'Competency frameworks', 'Review templates', 'Development plans'],
    gradient: 'from-red-400 to-red-600',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    desc: 'Powerful dashboards with actionable insights. Track KPIs, visualize trends, and make data-driven HR decisions.',
    details: ['Custom dashboards', 'Automated reports', 'Trend analysis', 'Export capabilities', 'Predictive analytics'],
    gradient: 'from-red-500 to-red-700',
  },
];

const additionalFeatures = [
  { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant with end-to-end encryption.' },
  { icon: Layers, title: 'EMS', desc: 'Connect with 100+ tools you already use.' },
  { icon: Settings, title: 'Customization', desc: 'Fully customizable workflows and fields.' },
  { icon: FileText, title: 'Document Management', desc: 'Store, sign, and manage all HR documents.' },
  { icon: Bell, title: 'Smart Notifications', desc: 'Stay informed with intelligent alerts.' },
  { icon: PieChart, title: 'Workforce Planning', desc: 'Plan headcount and forecast needs.' },
  { icon: Target, title: 'OKR Tracking', desc: 'Align teams with company objectives.' },
  { icon: Award, title: 'Recognition', desc: 'Celebrate wins and boost engagement.' },
];

export default function Features() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-bg gradient-mesh">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-300/15 rounded-full blur-3xl animate-float-delay" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-700 mb-4">
                Features
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                Everything You Need,{' '}
                <span className="text-gradient">Nothing You Don't</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Powerful HR tools designed to be simple. Explore the features that make HRFlow the most loved HR platform.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {mainFeatures.map((feature, i) => (
              <div key={feature.title} className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center`}>
                <AnimatedSection direction={i % 2 === 0 ? 'right' : 'left'} className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r ${feature.gradient} shadow-lg`}>
                    <feature.icon className="h-4 w-4" />
                    {feature.title}
                  </span>
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-4">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>

                <AnimatedSection direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} opacity-10 rounded-3xl blur-2xl`} />
                    <div className="relative glass-card rounded-3xl p-8 sm:p-12">
                      <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${feature.gradient} shadow-xl shadow-red-500/20`}>
                        <feature.icon className="h-12 w-12 text-white" />
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        {feature.details.slice(0, 4).map((d, j) => (
                          <motion.div
                            key={d}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.1 + 0.3 }}
                            className="glass-card rounded-xl p-4 text-center"
                          >
                            <div className={`mx-auto h-8 w-8 rounded-lg bg-gradient-to-br ${feature.gradient} opacity-20 mb-2`} />
                            <p className="text-xs font-medium text-gray-600">{d}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 gradient-bg gradient-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-700 mb-4">
                And More
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Plus{' '}
                <span className="text-gradient">Dozens More</span>{' '}
                Features
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card rounded-2xl p-6 text-center h-full"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100">
                    <feature.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="mt-4 font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                A Dashboard You'll{' '}
                <span className="text-gradient">Love Using</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Clean, intuitive, and packed with insights. See everything at a glance.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-6 bg-gradient-to-r from-red-500/10 via-red-400/10 to-red-500/10 rounded-3xl blur-3xl" />
              <div className="relative glass-card rounded-3xl p-3 shadow-2xl">
                <img
                  src="/images/dashboard.jpg"
                  alt="HRFlow Dashboard"
                  className="rounded-2xl w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
              Ready to See It in Action?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Book a personalized demo and discover how HRFlow can transform your HR operations.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-red-700 shadow-xl transition-all hover:bg-gray-50 hover:-translate-y-1"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-1"
              >
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
