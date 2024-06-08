import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        {post.img && (
          <div className="w-4/5 h-96 relative">
            <Image src={post.img} alt="" fill className="object-cover" />
          </div>
        )}
        {/* <span className="m-auto">{post.createdAt?.toString().slice(4, 16)}</span> */}
      </div>
      <div className="">
        {post.title && <h1 className="w-4/5 text-xl">{post.title}</h1>}
        <p className="w-4/5 mb-5 font-light secondary-text">{post.desc}</p>
        <Link className="" href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
