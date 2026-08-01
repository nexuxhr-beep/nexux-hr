import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, UserRound } from 'lucide-react';
import {
  articleCategory,
  BlogArticleDetail,
  formatPublishDate,
  getArticle,
} from '../api/blog';

function updateMeta(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogArticleDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    const loadArticle = async () => {
      setLoading(true);
      setError('');
      setNotFound(false);

      try {
        const article = await getArticle(slug);
        setPost(article);
        document.title = `${article.meta_title || article.title} | NexuxHR`;
        updateMeta('description', article.meta_description || article.short_description);
      } catch (requestError) {
        const message = requestError instanceof Error ? requestError.message : '';
        if (message.includes('404')) setNotFound(true);
        else setError('We could not load this article. Please try again shortly.');
      } finally {
        setLoading(false);
      }
    };

    void loadArticle();
  }, [slug]);

  if (loading) {
    return <div className="flex min-h-[70vh] items-center justify-center pt-24"><div className="text-center"><div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary-100 border-t-primary-600" /><p className="mt-4 text-sm font-medium text-gray-500">Loading article…</p></div></div>;
  }

  if (notFound || !post) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-5 pt-24 text-center">
        <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">404</p><h1 className="mt-3 text-4xl font-extrabold text-gray-950">Article not found</h1><p className="mt-4 text-gray-600">{error || 'The article may have been moved or is no longer available.'}</p><Link to="/blog" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-bold text-white"><ArrowLeft className="h-4 w-4" />Back to blog</Link></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <header className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-800"><ArrowLeft className="h-4 w-4" />Back to all articles</Link>
          <div className="mt-9"><span className="rounded-full bg-primary-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-700">{articleCategory(post)}</span><h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-6xl">{post.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">{post.short_description}</p><div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500"><span className="inline-flex items-center gap-2"><UserRound className="h-4 w-4" />{post.author?.author_name || 'NexuxHR Team'}</span><span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" />{formatPublishDate(post.publish_date)}</span><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" />{post.reading_time} min read</span></div></div>
        </div>
      </header>

      {post.featured_image_url && (
        <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-6 lg:px-8"><img src={post.featured_image_url} alt={post.featured_image_alt || post.title} className="max-h-[620px] w-full rounded-[2rem] object-cover shadow-xl shadow-primary-950/10" /></div>
      )}

      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <article className="blog-content text-lg leading-8 text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />

        {post.faqs.length > 0 && (
          <section className="mt-14 border-t border-gray-100 pt-12"><p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-600">Common questions</p><h2 className="mt-2 text-3xl font-extrabold text-gray-950">Frequently asked questions</h2><div className="mt-7 space-y-4">{post.faqs.map((faq) => <details key={faq.id} className="group rounded-2xl border border-gray-200 bg-white p-6"><summary className="cursor-pointer list-none font-bold text-gray-950">{faq.question}</summary><p className="mt-3 leading-7 text-gray-600">{faq.answer}</p></details>)}</div></section>
        )}

        <div className="mt-14 rounded-2xl border border-primary-100 bg-primary-50 p-7 sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-600">NexuxHR</p><h2 className="mt-2 text-2xl font-extrabold text-gray-950">Manage your people operations with greater clarity.</h2><p className="mt-3 leading-7 text-gray-600">Bring employee records, attendance, leave, payroll, biometric data, performance, and reporting into one workspace.</p><a href="https://app.nexuxhr.com" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-700">Get Started Free <ArrowRight className="h-4 w-4" /></a></div>
      </main>

      {post.related_articles.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-16"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="flex items-end justify-between gap-5"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-600">Continue reading</p><h2 className="mt-2 text-3xl font-extrabold text-gray-950">Related articles</h2></div><Link to="/blog" className="hidden items-center gap-2 text-sm font-bold text-primary-600 sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-8 grid gap-6 md:grid-cols-3">{post.related_articles.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><span className="text-xs font-bold uppercase tracking-[0.14em] text-primary-600">{articleCategory(item)}</span><h3 className="mt-3 text-lg font-extrabold leading-snug text-gray-950 group-hover:text-primary-700">{item.title}</h3><p className="mt-3 text-sm leading-6 text-gray-600">{item.short_description_display}</p></Link>)}</div></div></section>
      )}
    </div>
  );
}
