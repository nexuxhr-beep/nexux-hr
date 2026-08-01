import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock3, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  articleCategory,
  BlogArticleListItem,
  formatPublishDate,
  getAllArticles,
  getBlogHomepage,
} from '../api/blog';

const gradients = [
  'from-primary-700 via-primary-600 to-primary-400',
  'from-sky-600 to-primary-500',
  'from-indigo-600 to-violet-500',
  'from-emerald-600 to-teal-500',
  'from-amber-500 to-orange-500',
  'from-slate-700 to-primary-600',
];

function ArticleVisual({ article, index = 0, className = '' }: { article: BlogArticleListItem; index?: number; className?: string }) {
  if (article.featured_image_url) {
    return (
      <img
        src={article.featured_image_url}
        alt={article.featured_image_alt || article.title}
        className={`h-full w-full object-cover ${className}`}
        loading={index > 0 ? 'lazy' : 'eager'}
      />
    );
  }

  return (
    <div className={`h-full w-full bg-gradient-to-br ${gradients[index % gradients.length]} ${className}`}>
      <div className="h-full w-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.22),transparent_35%)]" />
    </div>
  );
}

export default function Blog() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<BlogArticleListItem[]>([]);
  const [featured, setFeatured] = useState<BlogArticleListItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'HR Insights & Resources | NexuxHR Blog';

    const loadArticles = async () => {
      try {
        const [homepage, allArticles] = await Promise.all([
          getBlogHomepage(),
          getAllArticles(),
        ]);
        setArticles(allArticles);
        setFeatured(homepage.featured_this_week[0] || homepage.latest[0] || allArticles[0] || null);
      } catch (requestError) {
        console.error(requestError);
        setError('We could not load the blog right now. Please try again shortly.');
      } finally {
        setLoading(false);
      }
    };

    void loadArticles();
  }, []);

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const available = featured
      ? articles.filter((article) => article.slug !== featured.slug)
      : articles;

    if (!normalized) return available;

    return available.filter((article) =>
      [
        article.title,
        article.short_description_display,
        ...article.categories.map((category) => category.name),
      ].some((value) => value.toLowerCase().includes(normalized)),
    );
  }, [articles, featured, query]);

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-primary-50/80 to-white py-20 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-primary-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-700 shadow-sm">NexuxHR Resources</span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-950 sm:text-6xl">Practical ideas for better <span className="text-gradient">people operations</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">Explore practical guides on employee management, attendance, leave, payroll, performance, HR technology, and workplace growth.</p>
          </motion.div>
        </div>
      </section>

      {loading ? (
        <section className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary-100 border-t-primary-600" />
          <p className="mt-4 text-sm font-medium text-gray-500">Loading NexuxHR insights…</p>
        </section>
      ) : error ? (
        <section className="mx-auto max-w-3xl px-5 py-24 text-center">
          <div className="rounded-2xl border border-red-100 bg-red-50 p-8">
            <h2 className="text-xl font-extrabold text-gray-950">Blog temporarily unavailable</h2>
            <p className="mt-3 text-gray-600">{error}</p>
            <button onClick={() => window.location.reload()} className="mt-6 rounded-xl bg-primary-600 px-5 py-3 text-sm font-bold text-white hover:bg-primary-700">Try again</button>
          </div>
        </section>
      ) : articles.length === 0 ? (
        <section className="mx-auto max-w-3xl px-5 py-24 text-center">
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-10">
            <h2 className="text-2xl font-extrabold text-gray-950">New resources are on the way</h2>
            <p className="mt-3 text-gray-600">The NexuxHR team is preparing practical HR articles. Please check back soon.</p>
          </div>
        </section>
      ) : (
        <>
          {featured && (
            <section className="py-16 sm:py-20">
              <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="grid overflow-hidden rounded-[2rem] border border-primary-100 bg-white shadow-xl shadow-primary-950/5 lg:grid-cols-2">
                  <div className="relative min-h-[320px] overflow-hidden">
                    <ArticleVisual article={featured} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12">
                      <div className="flex items-center gap-3 text-sm text-white/90">
                        <span className="rounded-full border border-white/25 bg-black/15 px-3 py-1 font-semibold backdrop-blur-sm">Featured article</span>
                        <span>{articleCategory(featured)}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/85">
                        <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{formatPublishDate(featured.publish_date)}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" />{featured.reading_time} min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                    <span className="text-sm font-bold text-primary-600">{articleCategory(featured)}</span>
                    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl">{featured.title}</h2>
                    <p className="mt-5 text-base leading-7 text-gray-600">{featured.short_description_display}</p>
                    <Link to={`/blog/${featured.slug}`} className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition hover:-translate-y-0.5 hover:bg-primary-700">Read article <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="pb-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
              <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">Latest resources</p><h2 className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">HR knowledge for modern teams</h2></div>
                <label className="relative block w-full md:w-80"><Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary-300 focus:ring-4 focus:ring-primary-100" /></label>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {filteredPosts.map((post, index) => (
                    <motion.article key={post.slug} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: index * 0.05 }} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-950/5">
                      <div className="relative h-48 overflow-hidden"><ArticleVisual article={post} index={index + 1} className="transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" /><span className="absolute left-6 top-6 inline-flex rounded-full border border-white/20 bg-black/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">{articleCategory(post)}</span></div>
                      <div className="p-6"><div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500"><span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{formatPublishDate(post.publish_date)}</span><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{post.reading_time} min read</span></div><h3 className="mt-4 text-xl font-extrabold leading-snug text-gray-950 transition group-hover:text-primary-700">{post.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{post.short_description_display}</p><Link to={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-800">Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link></div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-16 text-center"><h3 className="text-lg font-bold text-gray-900">No articles found</h3><p className="mt-2 text-sm text-gray-500">Try another keyword or clear the search.</p></div>
              )}
            </div>
          </section>
        </>
      )}

      <section className="border-t border-gray-100 bg-primary-950 py-16 text-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">Build a better HR workflow</p><h2 className="mt-2 text-3xl font-extrabold">Bring your HR operations into one workspace.</h2></div><a href="https://app.nexuxhr.com" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary-800 transition hover:-translate-y-0.5 hover:bg-primary-50">Get Started Free</a></div></section>
    </div>
  );
}
