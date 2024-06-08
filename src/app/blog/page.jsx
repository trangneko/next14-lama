import PostCard from "@/components/postCard";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const metadata = {
  title: 'Blog',
  description: 'Nơi chủ shop Petito order hàng Nhật nghĩ tác phẩm tốt nghiệp.',
}

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className="flex flex-wrap gap-5">
      {posts.map((post) => (
        <div className="md:w-1/3" key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;