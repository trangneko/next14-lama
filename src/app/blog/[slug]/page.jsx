import PostUser from "@/components/postUser";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
// FETCH DATA WITH AN API
const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
  
    return res.json();
  };

export const generateMetadata = async ({ params }) => {
  const {slug} = params;
  // const post = await getPost(slug);
  const post = await getData(slug);

  return {
    title: post.title,
    description: post.desc,
  }
}

const SinglePostPage = async ({ params }) => {
    const { slug } = params;
  
    // FETCH DATA WITH AN API
    // const post = await getData(slug);
  
    // FETCH DATA WITHOUT AN API
    const post = await getPost(slug);
  
    return (
      <div className="flex gap-25">
        {post.img && (
          <div className="flex-1 relative h-96">
            <Image src={post.img} alt="" fill className="object-cover" />
          </div>
        )}
        <div className="flex flex-2 flex-col gap-12">
          <h1 className="text-2xl">{post.title}</h1>
          <div className="flex gap-5">
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
            <div className="flex flex-col gap-3">
              <span className="font-bold tertiary-text">Published</span>
              <span className="font-light">
                {post.createdAt.toString().slice(4, 16)}
              </span>
            </div>
          </div>
          <div className="">{post.body}</div>
        </div>
      </div>
    );
  };
  
  export default SinglePostPage;