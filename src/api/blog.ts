const DEFAULT_API_BASE_URL = 'https://content.nexuxhr.com/api/v1';

export const API_BASE_URL = (
  import.meta.env.VITE_NEXUXHR_API_BASE_URL || DEFAULT_API_BASE_URL
).replace(/\/$/, '');

export type BlogCategory = {
  id: number;
  name: string;
  slug: string;
  article_count?: number;
};

export type BlogAuthor = {
  id: number;
  author_name: string;
  author_bio?: string;
  author_profile_image_url?: string | null;
  slug: string;
};

export type BlogArticleListItem = {
  id: string;
  title: string;
  slug: string;
  short_description_display: string;
  featured_image_url: string | null;
  featured_image_alt: string;
  categories: BlogCategory[];
  author: BlogAuthor | null;
  publish_date: string | null;
  view_count: number;
  reading_time: number;
  is_featured_this_week: boolean;
  created_at: string;
  updated_at: string;
  like_count: number;
  share_count: number;
  comment_count: number;
};

export type BlogFaq = {
  id: number;
  question: string;
  answer: string;
};

export type BlogArticleDetail = Omit<
  BlogArticleListItem,
  'short_description_display'
> & {
  short_description: string;
  content: string;
  meta_title: string;
  meta_description: string;
  meta_schema_script?: Record<string, unknown> | null;
  meta_schema_script_faq?: Record<string, unknown> | null;
  allow_comments: boolean;
  related_articles: BlogArticleListItem[];
  faqs: BlogFaq[];
};

type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type PaginatedArticles = {
  count: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  next: string | null;
  previous: string | null;
  results: BlogArticleListItem[];
};

export type BlogHomepageData = {
  trending: BlogArticleListItem[];
  latest: BlogArticleListItem[];
  featured_this_week: BlogArticleListItem[];
  total_count: number;
};

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      Accept: 'application/json',
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Blog request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getBlogHomepage(): Promise<BlogHomepageData> {
  const response = await requestJson<ApiEnvelope<BlogHomepageData>>('/blog/articles/');
  return response.data;
}

export async function getAllArticles(): Promise<BlogArticleListItem[]> {
  const response = await requestJson<PaginatedArticles>(
    '/blog/articles/latest/?page=1&page_size=100',
  );
  return response.results;
}

export async function getArticle(slug: string): Promise<BlogArticleDetail> {
  const response = await requestJson<ApiEnvelope<BlogArticleDetail>>(
    `/blog/articles/${encodeURIComponent(slug)}/`,
  );
  return response.data;
}

export function formatPublishDate(date: string | null): string {
  if (!date) return 'Publication date pending';

  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function articleCategory(article: BlogArticleListItem): string {
  return article.categories[0]?.name || 'HR Resources';
}
