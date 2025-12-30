import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/content/blogs")
      .then(res => res.json())
      .then(data => {
        const sorted = Object.values(data).sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setBlogs(sorted);
      });
  }, []);

  return (
    <section className="blogs-page">
      <h1>Blog</h1>

      {blogs.map((blog, i) => (
        <article key={i} className="blog-card">
          <h2>{blog.title}</h2>
          <small>{new Date(blog.date).toDateString()}</small>
          <p>{blog.body}</p>
        </article>
      ))}
    </section>
  );
}
