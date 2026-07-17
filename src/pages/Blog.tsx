import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Search, Calendar, User, Clock, ChevronLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "../constants";
import { Input } from "../components/ui/input";

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>
          {selectedPost
            ? `${selectedPost.title} - Dental Blog Absolute Dental Clinic`
            : "Dental Education Library & Blog - Absolute Dental Clinic"}
        </title>
        <meta
          name="description"
          content={
            selectedPost
              ? selectedPost.excerpt
              : "Read dentist-approved tips, oral hygiene guides, and clinical articles from Dr. Rahul and our consulting specialists in Gurugram."
          }
        />
        <link
          rel="canonical"
          href={
            selectedPost
              ? `https://absolutedental.co.in/blog/${selectedPost.slug}`
              : "https://absolutedental.co.in/blog"
          }
        />
      </Helmet>

      {selectedPost ? (
        /* Full Post Reader Mode */
        <article className="container-px mx-auto max-w-3xl py-28 text-left">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors mb-6 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Articles
          </button>

          {/* Post Header */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal">
              {selectedPost.category}
            </span>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl leading-tight">
              {selectedPost.title}
            </h1>

            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-y border-border/40 py-3 mt-3">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {selectedPost.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5" />
                {selectedPost.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {selectedPost.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border select-none aspect-[16/9]">
            <img
              src={selectedPost.imageUrl}
              alt={selectedPost.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Post Body Content */}
          <div className="mt-8 text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line flex flex-col gap-4">
            {selectedPost.content}
          </div>
        </article>
      ) : (
        /* Articles Directory Mode */
        <>
          {/* Header Banner */}
          <section className="relative overflow-hidden pt-28 pb-12 bg-surface border-b border-border/40 select-none">
            <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-50"></div>
            <div className="container-px mx-auto max-w-7xl text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                Dental Education Library
              </span>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Oral Care <span className="text-gradient">Articles</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
                Stay informed with clinical guides, braces tips, and implant checklists prepared directly by our senior dentists.
              </p>
            </div>
          </section>

          {/* Listing Section */}
          <section className="container-px mx-auto max-w-7xl py-16 md:py-24 text-left">
            {/* Search query */}
            <div className="relative w-full max-w-md mb-10">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search dental guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10 bg-card border-border"
              />
            </div>

            {/* Grid listings */}
            {filteredPosts.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-card-custom transition-all hover:-translate-y-1 hover:shadow-lift"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted select-none">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                    </div>
                    {/* Card Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal">
                        {post.category}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta footer */}
                      <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4 text-[10px] text-muted-foreground font-semibold">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="inline-flex items-center gap-0.5 text-primary hover:text-primary/80 transition-colors uppercase tracking-wider cursor-pointer"
                        >
                          Read Article <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-muted-foreground text-sm border border-dashed border-border rounded-3xl bg-card/40 max-w-xl mx-auto">
                No guides found matching your keywords. Please try another search term!
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
};
