import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, UserRound } from 'lucide-react';
import { blogPosts } from '../data/blogs';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const related = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);

  useEffect(() => {
    document.title = post ? `${post.title} | NexuxHR` : 'Article Not Found | NexuxHR';
  }, [post]);

  if (!post) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-5 pt-24 text-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">404</p>
          <h1 className="mt-3 text-4xl font-extrabold text-gray-950">Article not found</h1>
          <p className="mt-4 text-gray-600">The article may have been moved or is no longer available.</p>
          <Link to="/blog" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-bold text-white">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <header className={`relative overflow-hidden bg-gradient-to-br ${post.gradient} py-20 text-white sm:py-28`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,.25),transparent_32%)]" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="mt-10 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">
            {post.category}
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/75">
            <span className="inline-flex items-center gap-2"><UserRound className="h-4 w-4" />{post.author}</span>
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" />{post.publishedAt}</span>
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" />{post.readTime}</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <div key={paragraph}>
              {index === 1 && <h2 className="mt-10 text-3xl font-extrabold text-gray-950">Why this matters for growing teams</h2>}
              {index === 2 && <h2 className="mt-10 text-3xl font-extrabold text-gray-950">A more connected HR workflow</h2>}
              <p className="mt-6 text-lg leading-8 text-gray-700">{paragraph}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-primary-100 bg-primary-50 p-7 sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-600">NexuxHR</p>
          <h2 className="mt-2 text-2xl font-extrabold text-gray-950">Manage your people operations with greater clarity.</h2>
          <p className="mt-3 leading-7 text-gray-600">Bring employee records, attendance, leave, payroll, biometric data, performance, and reporting into one workspace.</p>
          <a href="https://app.nexuxhr.com" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-700">
            Get Started Free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </main>

      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-600">Continue reading</p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-950">Related articles</h2>
            </div>
            <Link to="/blog" className="hidden items-center gap-2 text-sm font-bold text-primary-600 sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary-600">{item.category}</span>
                <h3 className="mt-3 text-lg font-extrabold leading-snug text-gray-950 group-hover:text-primary-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
