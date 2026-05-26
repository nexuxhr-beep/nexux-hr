import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from './Toast';

interface WaitlistContextType {
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const openWaitlist = () => setIsOpen(true);
  const closeWaitlist = () => {
    setIsOpen(false);
    setFormData({ name: '', email: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in all compulsory fields.");
      return;
    }

    setIsSubmitting(true);

    // Map fields to work seamlessly with existing template_kwyl4jl structure
    const templateParams = {
      name: formData.name,
      email: formData.email
    };

    emailjs.send(
      'service_nmyshub',
      'template_c2hg32j',
      templateParams,
      'h9GzY49GGfBZuxcz3'
    )
      .then(() => {
        toast.success("Congratulations! You've joined the NexuxHR waitlist.");
        closeWaitlist();
      })
      .catch((err) => {
        console.error('Waitlist submission failed:', err);
        toast.error("Failed to join waitlist. Please check your connection and try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <WaitlistContext.Provider value={{ openWaitlist, closeWaitlist }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeWaitlist}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl z-10 pointer-events-auto"
            >
              {/* Decorative gradients */}
              <div className="absolute -top-16 -left-16 w-36 h-36 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none" />

              <div className="relative">
                <button
                  onClick={closeWaitlist}
                  className="absolute right-0 top-0 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex flex-col items-center text-center mt-2 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 mb-4">
                    <Sparkles className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">Join the Waitlist</h3>
                  <p className="mt-2 text-sm text-gray-500 max-w-xs leading-relaxed">
                    Be among the first to experience the future of modern HR. Get early access and exclusive pre-launch benefits.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gradient-primary inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Securing Your Spot...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Join Waitlist
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
}
