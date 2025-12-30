import blogs from "../content/blog";

export default function Blogs() {
  return (
    <section className="blogs-page">
      <h1>Blog</h1>

      {blogs.map((post, index) => (
        <div key={index} className="blog-card">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </section>
  );
}
