import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, MessageSquare, Search } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const faqCategories = [
  {
    category: 'General',
    faqs: [
      { q: 'What is HRFlow?', a: 'HRFlow is an all-in-one HR management platform designed for modern companies, built by NexuxLabs. It helps you manage employees, track attendance, process payroll, run recruitment, conduct performance reviews, and generate insightful reports — all from a single, beautiful dashboard.' },
      { q: 'Who is HRFlow for?', a: 'HRFlow is built for companies of all sizes — from startups with 10 employees to enterprises with thousands. Whether you have a dedicated HR team or a founder wearing multiple hats, HRFlow simplifies HR management for everyone.' },
      { q: 'Is HRFlow available globally?', a: 'Yes! HRFlow supports companies worldwide with multi-currency payroll, multi-language support, and compliance features for various regions. We\'re constantly expanding our global capabilities.' },
      { q: 'When is HRFlow launching?', a: 'We\'re currently in our pre-launch phase. You can sign up for early access and be among the first to experience HRFlow when we launch. Early access members also get exclusive pricing benefits.' },
    ],
  },
  {
    category: 'Pricing & Plans',
    faqs: [
      { q: 'How much does HRFlow cost?', a: 'HRFlow offers three plans: Starter ($29/user/mo), Business ($79/user/mo), and Enterprise ($199/user/mo). All plans come with a 14-day free trial. Annual billing saves you 17%.' },
      { q: 'Is there a free trial?', a: 'Absolutely! Every plan includes a 14-day free trial with full access to all features. No credit card required to start your trial.' },
      { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. No penalties or fees for changing plans.' },
      { q: 'Do you offer discounts for non-profits?', a: 'Yes! We offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for more details.' },
      { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers. Enterprise plans can also be invoiced.' },
    ],
  },
  {
    category: 'Features & Product',
    faqs: [
      { q: 'What features are included?', a: 'HRFlow includes employee management, attendance tracking, leave management, payroll processing, recruitment, performance reviews, and comprehensive analytics. The specific features available depend on your plan.' },
      { q: 'Can I integrate HRFlow with other tools?', a: 'Yes! HRFlow integrates with popular tools like Slack, Microsoft Teams, Google Workspace, QuickBooks, and more. Enterprise plans also support custom integrations via our API.' },
      { q: 'Is there a mobile app?', a: 'We\'re developing native mobile apps for iOS and Android that will be available at launch. In the meantime, our web app is fully responsive and works great on mobile devices.' },
      { q: 'Can HRFlow handle payroll for my country?', a: 'We currently support payroll processing for the US, UK, Canada, and Australia with more countries coming soon. Contact us to check if your country is supported.' },
    ],
  },
  {
    category: 'Security & Privacy',
    faqs: [
      { q: 'Is my data secure?', a: 'Absolutely. We use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We\'re SOC 2 Type II certified and regularly undergo third-party security audits.' },
      { q: 'Where is my data stored?', a: 'Your data is stored in secure, SOC 2 certified data centers. We offer data residency options for EU, US, and Asia-Pacific regions to help you meet local compliance requirements.' },
      { q: 'Do you comply with GDPR?', a: 'Yes, HRFlow is fully GDPR compliant. We provide tools for data export, deletion requests, and consent management. We also have a dedicated Data Protection Officer.' },
      { q: 'Can I export my data?', a: 'Yes, you can export all your data at any time in standard formats (CSV, PDF, JSON). We believe your data belongs to you, and you should always have full access to it.' },
    ],
  },
  {
    category: 'Support',
    faqs: [
      { q: 'What kind of support do you offer?', a: 'All plans include email support. Business plans get priority support with faster response times. Enterprise plans include 24/7 phone support and a dedicated account manager.' },
      { q: 'Do you offer training?', a: 'Yes! We provide documentation, video tutorials, and webinars for all users. Enterprise plans include personalized training sessions and onboarding assistance.' },
      { q: 'What is your response time?', a: 'We aim to respond to all inquiries within 2 hours during business hours. Priority support (Business plan) guarantees a 1-hour response time. Enterprise support is available 24/7.' },
    ],
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-6 text-left transition-all hover:bg-gray-50/50"
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = searchQuery
    ? faqCategories.map((cat) => ({
      ...cat,
      faqs: cat.faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter((cat) => cat.faqs.length > 0)
    : faqCategories.filter((cat) => cat.category === activeCategory);

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
                FAQ
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                Frequently Asked{' '}
                <span className="text-gradient">Questions</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Find answers to common questions about HRFlow, our pricing, and features.
              </p>
            </AnimatedSection>

            {/* Search */}
            <AnimatedSection delay={0.2}>
              <div className="relative mt-10 max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full rounded-2xl border border-gray-200 bg-white/80 py-4 pl-12 pr-4 text-sm text-gray-900 placeholder-gray-400 backdrop-blur-sm transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          {!searchQuery && (
            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${activeCategory === cat.category
                        ? 'gradient-primary text-white shadow-lg shadow-red-500/25'
                        : 'glass-card text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* FAQ Items */}
          <div className="space-y-10">
            {filteredCategories.map((cat) => (
              <div key={cat.category}>
                {searchQuery && (
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{cat.category}</h3>
                )}
                <div className="space-y-3">
                  {cat.faqs.map((faq, i) => {
                    const key = `${cat.category}-${i}`;
                    return (
                      <AnimatedSection key={key} delay={i * 0.05}>
                        <FAQItem
                          q={faq.q}
                          a={faq.a}
                          isOpen={!!openItems[key]}
                          onClick={() => toggleItem(key)}
                        />
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-bg gradient-mesh">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-12 sm:p-16">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 mb-6">
                <MessageSquare className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Still Have Questions?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
                Can't find what you're looking for? Our team is always here to help.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="gradient-primary inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-xl shadow-red-500/25 transition-all hover:-translate-y-1"
                >
                  Contact Support
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-red-200 hover:-translate-y-1"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
