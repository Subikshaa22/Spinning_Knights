import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/content/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        data.sort(
          (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
        );
        setBlogs(data);
      })
      .catch((err) =>
        console.error("Failed to load blogs:", err)
      );
  }, []);

  return (
    <section className="blogs-page">
      <div className="blogs-container">

        <header className="blogs-header">
          <h1>Chess Insights & Updates</h1>
          <p>
            Training ideas, academy updates, and thoughts on learning chess
            the right way.
          </p>
        </header>

        {blogs.length === 0 && (
          <p className="blogs-empty">No blog posts yet.</p>
        )}

        <div className="blogs-grid">
          {blogs.map((post, index) => (
            <article key={index} className="blog-card">
              <h3>{post.title}</h3>

              {post.date && (
                <span className="blog-date">
                  {new Date(post.date).toDateString()}
                </span>
              )}

              <p>{post.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
