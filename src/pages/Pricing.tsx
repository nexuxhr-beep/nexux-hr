import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, ArrowRight, Zap, HelpCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const plans = [
  {
    name: 'Free',
    desc: 'Perfect for small teams getting started with HR management.',
    monthly: 0,
    yearly: 0,
    features: [
      'Up to 10 employees',
      'Employee directory',
      'Basic attendance tracking',
      'Leave management',
      'Document storage (5GB)',
      'Email support',
    ],
    missing: ['Payroll processing', 'Recruitment module', 'Advanced analytics', 'API access', 'Custom integrations'],
  },
  {
    name: 'Business',
    desc: 'For growing companies that need powerful HR automation.',
    monthly: 4,
    yearly: 3,
    popular: true,
    features: [
      'Up to 150 employees',
      'Everything in Starter',
      'Advanced attendance & shifts',
      'Payroll processing',
      'Recruitment pipeline',
      'Performance reviews',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Document storage (50GB)',
    ],
    missing: ['Custom integrations', 'Dedicated account manager'],
  },
  {
    name: 'Enterprise',
    desc: 'For large organizations with complex HR needs.',
    monthly: 7,
    yearly: 5,
    features: [
      'Up to 400 employees',
      'Everything in Business',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 phone support',
      'SLA guarantee (99.99%)',
      'On-premise deployment option',
      'Advanced security & SSO',
      'Custom workflows',
      'Unlimited storage',
      'Training & onboarding',
      'Audit logs',
    ],
    missing: [],
  },
];

const comparisonFeatures = [
  { name: 'Employees', starter: 'Up to 25', business: 'Up to 200', enterprise: 'Unlimited' },
  { name: 'Employee Directory', starter: true, business: true, enterprise: true },
  { name: 'Attendance Tracking', starter: 'Basic', business: 'Advanced', enterprise: 'Advanced' },
  { name: 'Leave Management', starter: true, business: true, enterprise: true },
  { name: 'Payroll Processing', starter: false, business: true, enterprise: true },
  { name: 'Recruitment', starter: false, business: true, enterprise: true },
  { name: 'Performance Reviews', starter: false, business: true, enterprise: true },
  { name: 'Analytics', starter: 'Basic', business: 'Advanced', enterprise: 'Custom' },
  { name: 'API Access', starter: false, business: true, enterprise: true },
  { name: 'Custom Integrations', starter: false, business: false, enterprise: true },
  { name: 'SSO / SAML', starter: false, business: false, enterprise: true },
  { name: 'Support', starter: 'Email', business: 'Priority', enterprise: '24/7 Phone' },
  { name: 'SLA Guarantee', starter: false, business: false, enterprise: true },
  { name: 'On-Premise Option', starter: false, business: false, enterprise: true },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

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
                Pricing
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                Simple, Transparent{' '}
                <span className="text-gradient">Pricing</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Start free, upgrade when you're ready. No hidden fees, no surprises.
              </p>
            </AnimatedSection>

            {/* Toggle */}
            <AnimatedSection delay={0.2}>
              <div className="mt-10 inline-flex items-center gap-4 glass-card rounded-2xl p-2">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all ${!isYearly ? 'gradient-primary text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all ${isYearly ? 'gradient-primary text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Yearly
                  <span className="ml-1.5 rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700">
                    -17%
                  </span>
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative -mt-4 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`relative rounded-3xl p-8 h-full flex flex-col ${plan.popular
                    ? 'gradient-primary text-white shadow-2xl shadow-red-500/25 ring-4 ring-red-500/20 scale-[1.02] lg:scale-105'
                    : 'glass-card'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-red-700 shadow-lg">
                      <Zap className="h-3.5 w-3.5" />
                      Most Popular
                    </div>
                  )}

                  <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-2 text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                    {plan.desc}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}
                      >
                        ${isYearly ? plan.yearly : plan.monthly}
                      </motion.span>
                    </AnimatePresence>
                    <span className={`text-sm ${plan.popular ? 'text-white/60' : 'text-gray-400'}`}>
                      /user/mo
                    </span>
                  </div>
                  {isYearly && (
                    <p className={`mt-1 text-xs ${plan.popular ? 'text-white/60' : 'text-gray-400'}`}>
                      billed annually
                    </p>
                  )}

                  <Link
                    to="/contact"
                    className={`mt-8 block rounded-2xl py-3.5 text-center text-sm font-semibold transition-all ${plan.popular
                      ? 'bg-white text-red-700 hover:bg-gray-50 shadow-lg'
                      : 'gradient-primary text-white shadow-lg shadow-red-500/25 hover:shadow-xl'
                      }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Link>

                  <div className={`mt-8 pt-8 border-t flex-1 ${plan.popular ? 'border-white/20' : 'border-gray-100'}`}>
                    <p className={`text-sm font-semibold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white/80' : 'text-red-500'}`} />
                          <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>{f}</span>
                        </li>
                      ))}
                      {plan.missing.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 opacity-40">
                          <X className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white/50' : 'text-gray-400'}`} />
                          <span className={`text-sm line-through ${plan.popular ? 'text-white/50' : 'text-gray-400'}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Plan{' '}
                <span className="text-gradient">Comparison</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                See exactly what you get with each plan.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 text-left text-sm font-semibold text-gray-900 w-1/4">Feature</th>
                    <th className="py-4 text-center text-sm font-semibold text-gray-900 w-1/4">Starter</th>
                    <th className="py-4 text-center text-sm font-semibold w-1/4">
                      <span className="text-gradient">Business</span>
                    </th>
                    <th className="py-4 text-center text-sm font-semibold text-gray-900 w-1/4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.name} className="border-b border-gray-100">
                      <td className="py-4 text-sm text-gray-700 font-medium">{feature.name}</td>
                      {(['starter', 'business', 'enterprise'] as const).map((plan) => (
                        <td key={plan} className="py-4 text-center text-sm">
                          {typeof feature[plan] === 'boolean' ? (
                            feature[plan] ? (
                              <CheckCircle2 className="h-5 w-5 text-red-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600 font-medium">{feature[plan]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 gradient-bg gradient-mesh">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Pricing <span className="text-gradient">FAQs</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { q: 'Can I try HRFlow for free?', a: 'Yes! Every plan comes with a 14-day free trial. No credit card required.' },
              { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, wire transfers, and invoicing for Enterprise plans.' },
              { q: 'Is there a setup fee?', a: 'No setup fees, no hidden charges. The price you see is the price you pay.' },
            ].map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900">{faq.q}</h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
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
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
              Still Have Questions?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Our team is here to help you find the perfect plan for your organization.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-red-700 shadow-xl transition-all hover:bg-gray-50 hover:-translate-y-1"
            >
              Talk to Sales
              <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
