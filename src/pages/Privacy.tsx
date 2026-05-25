import AnimatedSection from '../components/AnimatedSection';

export default function Privacy() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 gradient-bg gradient-mesh">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="mt-4 text-gray-500">Last updated: January 1, 2026</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-gray max-w-none">
              <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    HRFlow, a product of NexuxLabs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our HR management platform and related services (collectively, the "Services").
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not access the Services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you register for the Services, express interest in obtaining information about us or our products, or otherwise contact us. This includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                    <li>Name, email address, and phone number</li>
                    <li>Company name and job title</li>
                    <li>Billing and payment information</li>
                    <li>Employee data uploaded to the platform</li>
                    <li>Usage data and analytics</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you access our Services, we may automatically collect certain information, including your IP address, browser type, operating system, access times, and the pages you have viewed.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                    <li>Provide, operate, and maintain our Services</li>
                    <li>Improve, personalize, and expand our Services</li>
                    <li>Understand and analyze how you use our Services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, investigate, and prevent fraudulent transactions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing & Disclosure</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                    <li>Service providers who assist in operating our platform</li>
                    <li>Business partners with your consent</li>
                    <li>Legal authorities when required by law</li>
                    <li>Successor entities in the event of a merger or acquisition</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information, including encryption at rest (AES-256) and in transit (TLS 1.3), regular security audits, access controls, and SOC 2 Type II certification.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We retain your personal information for as long as your account is active or as needed to provide you Services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights (GDPR)</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you are a resident of the European Economic Area, you have certain data protection rights including the right to access, correct, update, or request deletion of your personal information. You also have the right to data portability and to withdraw consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our Services and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, some portions of our Services may not function properly without cookies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-gray-600 mt-3">
                    <strong>Company:</strong>NexuxHR<br />
                    <strong>Email:</strong> support@nexuxhr.com<br />
                    <strong>Address:</strong> Birtamode-Jhapa, Nepal<br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
