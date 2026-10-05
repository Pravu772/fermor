import { BLOG_POSTS } from "@/data/content";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";

export function EditorialInsights() {
  return (
    <section
      id="insights"
      className="py-16 md:py-24 border-b border-[#E4E0D6] bg-[#FAF9F5] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFE6] border border-[#E4E0D6] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#0E2F22]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111A15]">
                Indian Tax & Regulatory Intel
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2F22] tracking-tight mb-4">
              Clear explainers for everyday money.
            </h2>
            <p className="text-base sm:text-lg text-[#4A5750] leading-relaxed">
              We decode Indian tax changes, RBI circulars, and compliance requirements into concise, actionable guides without sensationalism.
            </p>
          </div>

          <a
            href="https://fermor.in/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0E2F22] hover:underline"
          >
            <span>Browse all articles on fermor.in</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Real Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 flex flex-col justify-between hover:border-[#0E2F22] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F3EFE6] text-[#0E2F22] border border-[#E4E0D6]">
                    {post.category}
                  </span>
                  <div className="text-xs text-[#4A5750] flex items-center gap-2 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0E2F22] group-hover:text-[#164332] transition-colors leading-tight mb-3">
                  {post.title}
                </h3>

                {/* Custom One-Line Summary */}
                <p className="text-sm text-[#4A5750] leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#E4E0D6] flex items-center justify-between text-xs font-semibold text-[#0E2F22] group-hover:text-[#164332]">
                <span>Read full explainer</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
