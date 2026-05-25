import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { LogoIcon } from './Logo';

const footerLinks = {
  Product: [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
  ],
  Company: [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Demo', path: '/contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    { name: 'GDPR', path: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-primary-950 text-gray-400">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      {/* ── CTA strip ── */}
      <div className="border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-12 sm:px-6 md:flex-row lg:px-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Ready to simplify your HR?
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Join the waitlist — launching soon from NexuxLabs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/pricing"
              className="gradient-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-950/40 transition-all hover:-translate-y-0.5"
            >
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className='flex gap-2 items-center'>
              <img src='/images/logo.png' height={50} width={50} />
              <span className='text-3xl text-white font-bold tracking-tight'>Nexux<span className='text-primary-400'>HR</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              One platform for employee management, attendance, leave, payroll, recruitment, performance, and analytics.
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-2.5 text-sm">
              <a href="mailto:support@nexuxhr.com" className="flex items-center gap-2.5 transition-colors hover:text-primary-300">
                <Mail className="h-4 w-4 text-primary-400/80" />
                support@nexuxhr.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2.5 transition-colors hover:text-primary-300">
                <Phone className="h-4 w-4 text-primary-400/80" />
                +1 (555) 123-4567
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary-400/80" />
                Birtamode-Jhapa, Nepal
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2 lg:col-start-11 lg:col-end-13">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Stay Updated
            </h4>
            <p className="mt-3 text-sm text-gray-500">
              Follow our journey and launch updates on social media.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[
                // { label: 'TikTok', href: 'https://tiktok.com' },
                { label: 'Facebook', href: 'https://www.facebook.com/people/Nexux-HR/61590411146271/?mibextid=wwXIfr&rdid=rvVEWIuOjV1wH3t4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DsRqRDtbE%2F%3Fmibextid%3DwwXIfr' },
                { label: 'Instagram', href: 'https://www.instagram.com/nexuxhr?igsh=MWZodzVmdWhqdzBlOQ%3D%3D&utm_source=qr' }, { label: "LinkedIn", href: "www.linkedin.com/company/nexux-hr" }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 px-3 items-center justify-center rounded-lg border border-white/[0.07] text-xs font-medium text-gray-500 transition-all hover:border-primary-500/30 hover:text-primary-400"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-gray-600 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} HRFlow · A product of <a href="https://www.nexuxlabs.com/en/" className="text-primary-400/80 hover:text-primary-300 transition-colors">NexuxLabs</a></p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
