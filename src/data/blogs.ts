export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  gradient: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'complete-guide-to-hr-management-software',
    title: 'A Complete Guide to HR Management Software for Growing Teams',
    excerpt: 'Learn how modern HR software helps growing companies manage employees, attendance, leave, payroll, and performance from one place.',
    category: 'HR Technology',
    author: 'NexuxHR Team',
    publishedAt: 'August 1, 2026',
    readTime: '8 min read',
    featured: true,
    gradient: 'from-primary-700 via-primary-600 to-primary-400',
    content: [
      'Managing a growing team becomes difficult when employee records, attendance, leave requests, payroll, and performance data are spread across spreadsheets and disconnected tools. HR management software brings these workflows into one secure system.',
      'A modern HR platform should reduce repetitive administration, provide reliable employee data, and make everyday HR processes easier for managers and team members. The goal is not simply to digitize paperwork—it is to create a clearer and faster way to run people operations.',
      'NexuxHR is being built as a unified workspace for employee management, attendance, leave, payroll, biometric integration, performance, and reporting. This gives businesses one source of truth while allowing each employee to access the information and actions relevant to their role.',
      'When choosing HR software, evaluate usability, permissions, reporting, security, integration options, and the ability to grow with your company. A system that is easy to adopt and flexible enough for future requirements usually creates the best long-term value.',
    ],
  },
  {
    slug: 'how-to-improve-employee-attendance-management',
    title: 'How to Improve Employee Attendance Management',
    excerpt: 'Practical steps to reduce manual attendance work, improve accuracy, and give managers real-time visibility.',
    category: 'Attendance',
    author: 'NexuxHR Team',
    publishedAt: 'July 28, 2026',
    readTime: '6 min read',
    featured: false,
    gradient: 'from-sky-600 to-primary-500',
    content: [
      'Attendance management is more than recording check-in and check-out times. It affects payroll accuracy, workforce planning, compliance, and employee trust.',
      'Start by defining clear attendance rules, standardizing shift schedules, and using a single system for all records. When biometric devices or digital check-in tools are connected directly to HR software, manual entry and reconciliation are reduced.',
      'Managers should be able to view late arrivals, absences, overtime, and exceptions without waiting for monthly reports. Employees should also be able to review their own attendance records and report discrepancies early.',
    ],
  },
  {
    slug: 'leave-management-best-practices',
    title: 'Leave Management Best Practices for HR Teams',
    excerpt: 'Create a transparent leave process with clear policies, automated approvals, and accurate balances.',
    category: 'Leave Management',
    author: 'NexuxHR Team',
    publishedAt: 'July 24, 2026',
    readTime: '5 min read',
    featured: false,
    gradient: 'from-indigo-600 to-violet-500',
    content: [
      'A clear leave process helps employees plan confidently and helps managers maintain adequate staffing. Problems usually begin when policies are unclear or balances are maintained manually.',
      'Use defined leave types, automatic balance calculations, approval workflows, shared calendars, and complete request history. Employees should know the status of every request without needing repeated follow-up.',
      'A centralized leave system also supports more accurate payroll and better workforce planning because approved leave information is available in real time.',
    ],
  },
  {
    slug: 'payroll-automation-benefits',
    title: 'Why Growing Businesses Need Payroll Automation',
    excerpt: 'Understand how payroll automation can reduce errors, save time, and create a more reliable payday experience.',
    category: 'Payroll',
    author: 'NexuxHR Team',
    publishedAt: 'July 20, 2026',
    readTime: '7 min read',
    featured: false,
    gradient: 'from-emerald-600 to-teal-500',
    content: [
      'Payroll becomes increasingly complex as a company adds employees, attendance rules, allowances, deductions, overtime, and multiple pay structures.',
      'Automation reduces repeated calculations and creates a consistent process from attendance data to final payroll. It also helps HR teams maintain a clear audit trail for adjustments and approvals.',
      'The best payroll workflow still includes review and authorization. Automation should improve accuracy and speed while keeping responsible people in control of final decisions.',
    ],
  },
  {
    slug: 'employee-performance-management-guide',
    title: 'A Simple Guide to Employee Performance Management',
    excerpt: 'Build a fair performance process using clear goals, regular feedback, and measurable progress.',
    category: 'Performance',
    author: 'NexuxHR Team',
    publishedAt: 'July 15, 2026',
    readTime: '6 min read',
    featured: false,
    gradient: 'from-amber-500 to-orange-500',
    content: [
      'Performance management works best as a continuous process rather than a once-a-year review. Employees need clear expectations, useful feedback, and visibility into their progress.',
      'Define measurable goals, schedule regular check-ins, document feedback, and connect development plans with business priorities. The process should be transparent and consistent across teams.',
      'HR software can organize goals, reviews, feedback, and historical records so managers can make better-informed decisions and employees can participate actively in their development.',
    ],
  },
  {
    slug: 'hr-data-security-checklist',
    title: 'HR Data Security Checklist for Modern Companies',
    excerpt: 'Protect sensitive employee information with permissions, secure access, backups, and responsible data practices.',
    category: 'Security',
    author: 'NexuxHR Team',
    publishedAt: 'July 10, 2026',
    readTime: '7 min read',
    featured: false,
    gradient: 'from-slate-700 to-primary-600',
    content: [
      'HR systems contain sensitive personal and employment information, so security must be considered from the beginning—not added later.',
      'Use role-based permissions, strong authentication, encrypted connections, protected backups, activity logs, and clear data-retention rules. Access should be limited to the minimum information required for each role.',
      'Security also depends on operational habits. Review permissions regularly, remove inactive accounts, train administrators, and keep software dependencies updated.',
    ],
  },
];
