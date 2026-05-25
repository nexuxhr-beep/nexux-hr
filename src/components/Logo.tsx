interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
  showPoweredBy?: boolean;
}

export function LogoIcon({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background rounded square */}
      <rect width="48" height="48" rx="12" fill="url(#logoGrad)" />
      
      {/* H letter stylized */}
      <path
        d="M14 12V36"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M14 24H26"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M26 12V36"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Flow arrow / dynamic element */}
      <path
        d="M30 28L34 20L38 28"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M34 20V36"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      
      {/* Small dot accent */}
      <circle cx="34" cy="14" r="2.5" fill="white" opacity="0.8" />

      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3C51A3" />
          <stop offset="0.5" stopColor="#34468E" />
          <stop offset="1" stopColor="#304081" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo({ size = 'md', variant = 'dark', showPoweredBy = false }: LogoProps) {
  const sizes = {
    sm: { icon: 'h-7 w-7', text: 'text-lg', powered: 'text-[9px]' },
    md: { icon: 'h-9 w-9', text: 'text-xl', powered: 'text-[10px]' },
    lg: { icon: 'h-12 w-12', text: 'text-3xl', powered: 'text-xs' },
  };

  const s = sizes[size];

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2.5">
        <LogoIcon className={s.icon} />
        <span className={`${s.text} font-bold tracking-tight ${variant === 'dark' ? 'text-gray-900' : 'text-white'}`}>
          Nexux<span className={variant === 'dark' ? 'text-gradient' : 'text-blue-300'}>HR</span>
        </span>
      </div>
      {showPoweredBy && (
        <span className={`${s.powered} mt-1 ml-[calc(2.5rem+10px)] font-medium tracking-wide ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          Powered by <span className={variant === 'dark' ? 'text-primary-600 font-semibold' : 'text-blue-300 font-semibold'}>NexuxLabs</span>
        </span>
      )}
    </div>
  );
}
