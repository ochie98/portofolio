export default function PostsPage() {
  const posts = [
    { id: 1, title: "Post Pertama", content: "Ini konten post pertama." },
    { id: 2, title: "Post Kedua", content: "Ini konten post kedua." },
  ];

  return (
    <div>
      <h1>Daftar Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}