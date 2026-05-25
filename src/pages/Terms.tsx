import AnimatedSection from '../components/AnimatedSection';

export default function Terms() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-16 gradient-bg gradient-mesh">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Terms &{' '}
                <span className="text-gradient">Conditions</span>
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
            <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using HRFlow's services ("Services"), operated by NexuxLabs, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  HRFlow, a product of NexuxLabs, provides a cloud-based human resources management platform that includes employee management, attendance tracking, leave management, payroll processing, recruitment tools, performance review systems, and analytics & reporting capabilities. The specific features available depend on your selected subscription plan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-600 leading-relaxed">
                  You must create an account to use certain features of our Services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account.
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                  <li>You must provide accurate and complete registration information</li>
                  <li>You must be at least 18 years old to create an account</li>
                  <li>You are responsible for all activity under your account</li>
                  <li>One person or legal entity per account</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription & Payment</h2>
                <p className="text-gray-600 leading-relaxed">
                  HRFlow offers subscription-based pricing. By subscribing, you agree to pay the applicable fees. Subscription fees are billed in advance on a monthly or annual basis depending on the billing cycle you select.
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                  <li>Prices are subject to change with 30 days notice</li>
                  <li>Refunds are processed according to our refund policy</li>
                  <li>Failed payments may result in service suspension</li>
                  <li>Taxes are additional where applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Ownership</h2>
                <p className="text-gray-600 leading-relaxed">
                  You retain all rights to the data you upload to HRFlow. We do not claim ownership of your content. You grant us a limited license to use, store, and process your data solely for the purpose of providing the Services. You can export your data at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use</h2>
                <p className="text-gray-600 leading-relaxed">You agree not to:</p>
                <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                  <li>Use the Services for any unlawful purpose</li>
                  <li>Upload malicious code or attempt to breach security</li>
                  <li>Interfere with other users' access to the Services</li>
                  <li>Reverse engineer or decompile any part of the Services</li>
                  <li>Resell or redistribute the Services without authorization</li>
                  <li>Use the Services to store or transmit infringing content</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Level Agreement</h2>
                <p className="text-gray-600 leading-relaxed">
                  HRFlow commits to a 99.9% uptime guarantee for Business and Enterprise plans. Scheduled maintenance windows will be communicated at least 48 hours in advance. Service credits will be issued for downtime exceeding the guaranteed uptime.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Services and all related materials, including software, logos, and documentation, are the intellectual property of NexuxLabs. Nothing in these Terms grants you any right to use our intellectual property for any purpose other than using the Services as intended.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the maximum extent permitted by law, NexuxLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, resulting from your access to or use of the Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate this agreement at any time. Upon termination, your right to use the Services will immediately cease. We will provide you with a reasonable period to export your data before deletion. Termination does not relieve you of any payment obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will provide at least 30 days' notice of any material changes via email or through the Services. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms, please contact us:
                </p>
                <p className="text-gray-600 mt-3">
                  <strong>Company: </strong>NexuxHR<br />
                  <strong>Email: </strong> support@nexuxhr.com<br />
                  <strong>Address: </strong> Birtamode-Jhapa, Nepal<br />
                  <strong>Phone: </strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
